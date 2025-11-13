import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import './Auth.css';
import initialUsers from '../../data/users.json';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [userList, setUserList] = useState(initialUsers);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [otpMessage, setOtpMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = () => {
    if (!isLogin && (!email || !phone || !password)) {
      setError('Please fill in all fields for sign up.');
      return;
    }
    if (isLogin && !phone) {
      setError('Please enter your phone number to log in.');
      return;
    }
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(newOtp);
      setIsOtpSent(true);
      setOtpMessage(`OTP sent to ${phone}${!isLogin ? ` & ${email}` : ''}. For demo, your OTP is: ${newOtp}`);
      setIsLoading(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setOtpMessage('');
    setIsLoading(true);

    setTimeout(() => {
      if (otp !== generatedOtp) {
        setError('Invalid OTP. Please try again.');
        setIsLoading(false);
        return;
      }

      if (isLogin) {
        const user = userList.find((u) => u.phone === phone);
        if (user) {
          setUser(user);
          navigate('/');
        } else {
          setError('User not found. Please sign up.');
        }
      } else {
        const existingUser = userList.find((u) => u.email === email || u.phone === phone);
        if (existingUser) {
          setError('User with this email or phone number already exists.');
        } else {
          const newUser = { email, phone, password };
          setUserList([...userList, newUser]);
          setUser(newUser);
          navigate('/');
        }
      }
      setIsLoading(false);
    }, 1500);
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
        {otpMessage && <motion.p key="otp" {...formVariants} className="otp-message">{otpMessage}</motion.p>}
      </AnimatePresence>
      <form onSubmit={handleSubmit} className="auth-form">
        <AnimatePresence mode="wait">
          {!isLogin && (
            <motion.div key="email" {...formVariants} className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </motion.div>
          )}
          <motion.div key="phone" {...formVariants} className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </motion.div>
          {!isLogin && (
            <motion.div key="password" {...formVariants} className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </motion.div>
          )}
          {isOtpSent ? (
            <motion.div key="otp-input" {...formVariants} className="form-group">
              <label htmlFor="otp">Enter OTP</label>
              <input id="otp" type="text" placeholder="Enter the 4-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <motion.button
          type={isOtpSent ? 'submit' : 'button'}
          onClick={!isOtpSent ? handleSendOtp : undefined}
          className="submit-btn"
          disabled={isLoading}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? <div className="loader" /> : (isOtpSent ? (isLogin ? 'Login' : 'Sign Up') : 'Send OTP')}
        </motion.button>
      </form>
      <div className="auth-footer">
        <p onClick={() => { setIsLogin(!isLogin); setError(''); setOtpMessage(''); }}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
};

export default Auth;
