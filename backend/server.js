import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import authRoutes from "./routes/auth.js";
import { db } from "./db/connect.js";
import { generateOTP } from "./utils/otp.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// Register endpoint (equivalent to register.php)
app.post("/api/register.php", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please fill in all fields." });
  }

  try {
    // Check if user exists
    const [existing] = await db.query("SELECT id FROM users WHERE email = ?", [
      email,
    ]);
    if (existing.length > 0) {
      return res
        .status(409)
        .json({ error: "User with this email already exists." });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Generate OTP
    const otp = generateOTP();
    const expiry = new Date(Date.now() + 5 * 60000); // 5 min

    // Insert user
    await db.query(
      "INSERT INTO users (name, email, password_hash, otp_code, otp_expiry) VALUES (?, ?, ?, ?, ?)",
      [name, email, hashed, otp, expiry]
    );

    // Send OTP email
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: { user: "no-reply@yourdomain.com", pass: "yourpassword" },
    });

    await transporter.sendMail({
      from: "no-reply@yourdomain.com",
      to: email,
      subject: "Your Verification Code",
      html: `Your verification code is: <strong>${otp}</strong>. It will expire in 5 minutes.`,
    });

    res.status(201).json({
      message:
        "User registered successfully. Please check your email for the OTP.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to register user." });
  }
});

// Login endpoint (equivalent to login.php)
app.post("/api/login.php", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const [rows] = await db.query(
      "SELECT id, name, email, password_hash, is_verified FROM users WHERE email = ?",
      [email]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    const user = rows[0];
    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    if (!user.is_verified) {
      return res
        .status(403)
        .json({ error: "Please verify your account first." });
    }

    res.json({
      message: "Login successful.",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed." });
  }
});

// Verify OTP endpoint (equivalent to verify.php)
app.post("/api/verify.php", async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ error: "Email and OTP are required." });
  }

  try {
    const [rows] = await db.query(
      "SELECT otp_code, otp_expiry, is_verified FROM users WHERE email = ?",
      [email]
    );
    if (rows.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    const user = rows[0];
    if (user.is_verified) {
      return res
        .status(400)
        .json({ error: "This account has already been verified." });
    }

    if (user.otp_code !== otp) {
      return res.status(400).json({ error: "Invalid OTP." });
    }

    if (new Date() > new Date(user.otp_expiry)) {
      return res
        .status(400)
        .json({ error: "OTP has expired. Please request a new one." });
    }

    await db.query(
      "UPDATE users SET is_verified = 1, otp_code = NULL, otp_expiry = NULL WHERE email = ?",
      [email]
    );
    res.json({ message: "User verified successfully. You can now log in." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to verify user." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
