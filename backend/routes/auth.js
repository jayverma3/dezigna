import express from "express";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { db } from "../db/connect.js";
import { generateOTP } from "../utils/otp.js";

const router = express.Router();

// Register new user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  // store user
  await db.query(
    "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
    [name, email, hashed]
  );

  // generate and store otp
  const otp = generateOTP();
  const expiry = new Date(Date.now() + 5 * 60000); // 5 min

  await db.query("UPDATE users SET otp_code=?, otp_expiry=? WHERE email=?", [
    otp,
    expiry,
    email,
  ]);

  // send otp (via hostinger mail)
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: { user: "no-reply@yourdomain.com", pass: "yourpassword" },
  });

  await transporter.sendMail({
    from: "no-reply@yourdomain.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It expires in 5 minutes.`,
  });

  res.json({ message: "User registered. OTP sent to email." });
});

// Verify OTP
router.post("/verify", async (req, res) => {
  const { email, otp } = req.body;

  const [rows] = await db.query(
    "SELECT otp_code, otp_expiry FROM users WHERE email=?",
    [email]
  );
  if (!rows.length) return res.status(404).json({ error: "User not found" });

  const user = rows[0];
  if (user.otp_code !== otp)
    return res.status(400).json({ error: "Invalid OTP" });
  if (new Date() > new Date(user.otp_expiry))
    return res.status(400).json({ error: "OTP expired" });

  await db.query("UPDATE users SET is_verified=1 WHERE email=?", [email]);
  res.json({ message: "User verified successfully." });
});

export default router;
