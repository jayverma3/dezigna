import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import { motion, AnimatePresence } from 'framer-motion';

const API_BASE_URL = '/api/auth';

const Login = ({ toggleAuthMode }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Login failed.');
        throw new Error('Login failed.');
      }

      setUser(result.user);
      setMessage(result.message);
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      // Error is already set
    } finally {
      setIsLoading(false);
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
          <h2>Welcome Back!</h2>
          <p>Login to continue</p>
        </div>

        <AnimatePresence>
          {error && <motion.p key="error" variants={formVariants} initial="hidden" animate="visible" exit="exit" className="message error-message">{error}</motion.p>}
          {message && <motion.p key="message" variants={formVariants} initial="hidden" animate="visible" exit="exit" className="message success-message">{message}</motion.p>}
        </AnimatePresence>

        <form onSubmit={handleLogin} className="auth-form">
          <motion.div variants={formVariants} initial="hidden" animate="visible" className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {errors.email && <p className="error-text">{errors.email}</p>}
          </motion.div>
          <motion.div variants={formVariants} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {errors.password && <p className="error-text">{errors.password}</p>}
          </motion.div>

          <div className="auth-footer">
            <p><span>Forgot Password?</span></p>
          </div>

          <motion.button type="submit" className="submit-btn" disabled={isLoading} whileTap={{ scale: 0.95 }}>
            {isLoading ? <div className="loader" /> : 'Login'}
          </motion.button>
        </form>
        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <span onClick={toggleAuthMode}>Sign Up</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;