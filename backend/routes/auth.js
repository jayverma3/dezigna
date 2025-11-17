import express from "express";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";
import { db } from "../db/connect.js";
import { generateOTP } from "../utils/otp.js";

const router = express.Router();

// Input validation middleware
const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send OTP email function
const sendOtpEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Verification Code",
    html: `Your verification code is: <strong>${otp}</strong>. It will expire in 5 minutes.`,
  });
};

// Register new user
router.post(
  "/register",
  validate([
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ]),
  async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const [existing] = await db.query(
        "SELECT id FROM users WHERE email = ?",
        [email]
      );
      if (existing.length > 0) {
        return res
          .status(409)
          .json({ error: "User with this email already exists." });
      }

      const hashed = await bcrypt.hash(password, 10);
      const otp = generateOTP();
      const expiry = new Date(Date.now() + 5 * 60000); // 5 min

      await db.query(
        "INSERT INTO users (name, email, password_hash, otp_code, otp_expiry) VALUES (?, ?, ?, ?, ?)",
        [name, email, hashed, otp, expiry]
      );

      await sendOtpEmail(email, otp);

      res.status(201).json({
        message:
          "User registered successfully. Please check your email for the OTP.",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to register user." });
    }
  }
);

// Login user
router.post(
  "/login",
  validate([
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ]),
  async (req, res) => {
    const { email, password } = req.body;

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
  }
);

// Verify OTP
router.post(
  "/verify-otp",
  validate([
    body("email").isEmail().withMessage("Invalid email address"),
    body("otp").isLength({ min: 6, max: 6 }).withMessage("Invalid OTP"),
  ]),
  async (req, res) => {
    const { email, otp } = req.body;

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
  }
);

// Resend OTP
router.post(
  "/resend-otp",
  validate([body("email").isEmail().withMessage("Invalid email address")]),
  async (req, res) => {
    const { email } = req.body;

    try {
      const [rows] = await db.query(
        "SELECT is_verified FROM users WHERE email = ?",
        [email]
      );
      if (rows.length === 0) {
        return res.status(404).json({ error: "User not found." });
      }
      if (rows[0].is_verified) {
        return res
          .status(400)
          .json({ error: "This account has already been verified." });
      }

      const otp = generateOTP();
      const expiry = new Date(Date.now() + 5 * 60000); // 5 min

      await db.query(
        "UPDATE users SET otp_code = ?, otp_expiry = ? WHERE email = ?",
        [otp, expiry, email]
      );

      await sendOtpEmail(email, otp);

      res.json({ message: "A new OTP has been sent to your email." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to resend OTP." });
    }
  }
);

export default router;