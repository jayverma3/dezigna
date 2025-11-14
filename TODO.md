# TODO: Adjust Server for Auth with Login, Signup, and OTP

## Steps to Complete

1. **Add /api/register.php route to server.js** ✅

   - Implement user registration logic using bcrypt for password hashing, generate OTP, store in DB, send email via nodemailer.

2. **Add /api/login.php route to server.js** ✅

   - Implement login logic: verify email/password with bcrypt, check if verified, return user data.

3. **Add /api/verify.php route to server.js** ✅

   - Implement OTP verification: check OTP and expiry, update user as verified.

4. **Test the new routes**

   - Run the server and test registration, login, and verification flows.

5. **Verify database schema**

   - Ensure users table has columns: id, name, email, password_hash, otp_code, otp_expiry, is_verified.

6. **Configure nodemailer**
   - Update transporter config in routes/auth.js or server.js with actual email credentials.
