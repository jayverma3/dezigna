import React from 'react';
import { motion } from 'framer-motion';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <motion.div
          className="newsletter-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="newsletter-title">Stay Inspired</h2>
          <p className="newsletter-text">
            Join our newsletter for design trends, special offers, and project showcases.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <motion.button
              type="submit"
              className="newsletter-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
