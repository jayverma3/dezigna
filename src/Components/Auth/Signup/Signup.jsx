import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const API_BASE_URL = '/api/auth';

const PasswordStrengthIndicator = ({ password }) => {
  const getStrength = () => {
    if (password.length < 6) return 'weak';
    if (password.length < 10) return 'medium';
    return 'strong';
  };

  const strength = getStrength();

  return (
    <div className="password-strength-indicator">
      <div className={`strength-bar ${strength}`} />
    </div>
  );
};

const Signup = ({ onSignupSuccess, toggleAuthMode }) => {
  const [authStage, setAuthStage] = useState('credentials'); // 'credentials', 'otp'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const otpInputs = useRef([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value && index < otp.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  const validateCredentials = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (!validateCredentials()) return;

    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Something went wrong.');
        throw new Error('Registration failed.');
      }

      setMessage(result.message);
      setAuthStage('otp');
    } catch (err) {
      // Error is already set
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp: otp.join('') }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Verification failed.');
      }

      setMessage(result.message);
      setTimeout(() => {
        onSignupSuccess();
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsResending(true);
    setError('');
    setMessage('');
    try {
      const response = await fetch(`${API_BASE_URL}/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to resend OTP.');
      }
      setMessage(result.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsResending(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authStage === 'otp') {
      handleVerifyOtp();
    } else {
      handleRegister();
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="auth-container-wrapper">
      <motion.div 
        className="auth-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="auth-header">
          <h2>Create Your Account</h2>
          <p>Sign up to get started</p>
        </div>

        <AnimatePresence>
          {error && <motion.p key="error" variants={formVariants} initial="hidden" animate="visible" exit="exit" className="message error-message">{error}</motion.p>}
          {message && <motion.p key="message" variants={formVariants} initial="hidden" animate="visible" exit="exit" className="message success-message">{message}</motion.p>}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="auth-form">
          <AnimatePresence mode="wait">
            {authStage === 'credentials' ? (
              <motion.div key="credentials" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <div className="input-wrapper">
                    <input id="name" name="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
                  </div>
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                  </div>
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <input id="password" name="password" type="password" placeholder="Create a strong password" value={formData.password} onChange={handleChange} />
                  </div>
                  <PasswordStrengthIndicator password={formData.password} />
                  {errors.password && <p className="error-text">{errors.password}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-wrapper">
                    <input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} />
                  </div>
                  {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                </div>
              </motion.div>
            ) : (
              <motion.div key="otp" variants={formVariants} initial="hidden" animate="visible" exit="exit">
                <div className="form-group">
                  <label htmlFor="otp">Enter OTP</label>
                  <div className="otp-inputs">
                    {otp.map((data, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={data}
                        onChange={(e) => handleOtpChange(e, index)}
                        ref={(el) => (otpInputs.current[index] = el)}
                      />
                    ))}
                  </div>
                </div>
                <div className="resend-otp">
                  <button type="button" onClick={handleResendOtp} disabled={isResending}>
                    {isResending ? 'Sending...' : 'Resend OTP'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button type="submit" className="submit-btn" disabled={isLoading} whileTap={{ scale: 0.95 }}>
            {isLoading ? <div className="loader" /> : (authStage === 'otp' ? 'Verify OTP' : 'Sign Up')}
          </motion.button>
        </form>
        <div className="auth-footer">
          <p>
            Already have an account?{' '}
            <span onClick={toggleAuthMode}>Login</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;