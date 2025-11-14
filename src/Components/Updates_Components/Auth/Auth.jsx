import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import './Auth.css';
import { motion, AnimatePresence } from 'framer-motion';

// Define the base URL for the API
const API_BASE_URL = '/api';

const Auth = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [authStage, setAuthStage] = useState('credentials'); // 'credentials', 'otp', 'loggedIn'

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  // UI state
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetFormState = () => {
    setError('');
    setMessage('');
    setIsLoading(false);
  };

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/register.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong.');
      }

      setMessage(result.message);
      setAuthStage('otp');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/verify.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Verification failed.');
      }

      setMessage(result.message);
      // After successful verification, switch to login view
      setTimeout(() => {
        setIsLogin(true);
        setAuthStage('credentials');
        resetFormState();
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/login.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Login failed.');
      }

      setUser(result.user);
      setMessage(result.message);
      setAuthStage('loggedIn');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authStage === 'otp') {
      handleVerifyOtp();
    } else if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setAuthStage('credentials');
    resetFormState();
    setName('');
    setEmail('');
    setPassword('');
    setOtp('');
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>{isLogin ? 'Welcome Back!' : 'Create Your Account'}</h2>
        <p>{isLogin ? 'Login to continue' : 'Sign up to get started'}</p>
      </div>

      <AnimatePresence mode="wait">
        {error && <motion.p key="error" {...formVariants} className="error-message">{error}</motion.p>}
        {message && <motion.p key="message" {...formVariants} className="success-message">{message}</motion.p>}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="auth-form">
        <AnimatePresence mode="wait">
          {authStage === 'credentials' && !isLogin && (
            <motion.div key="name" {...formVariants} className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required />
            </motion.div>
          )}

          {authStage !== 'otp' && (
            <>
              <motion.div key="email" {...formVariants} className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </motion.div>
              <motion.div key="password" {...formVariants} className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder={isLogin ? "Enter your password" : "Create a strong password"} value={password} onChange={(e) => setPassword(e.target.value)} required />
              </motion.div>
            </>
          )}

          {authStage === 'otp' && (
            <motion.div key="otp-input" {...formVariants} className="form-group">
              <label htmlFor="otp">Enter OTP</label>
              <input id="otp" type="text" placeholder="Enter the OTP from your email" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button type="submit" className="submit-btn" disabled={isLoading} whileTap={{ scale: 0.95 }}>
          {isLoading ? <div className="loader" /> : (authStage === 'otp' ? 'Verify OTP' : (isLogin ? 'Login' : 'Sign Up'))}
        </motion.button>
      </form>

      <div className="auth-footer">
        <p onClick={toggleAuthMode}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
};

export default Auth;