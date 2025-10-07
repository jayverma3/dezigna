import React from 'react';
import { motion } from 'framer-motion';
import './Consultation.css';

const Consultation = () => {
  return (
    <div className="consultation-section">
      <div className="consultation-container">
        <motion.div
          className="consultation-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="consultation-title">Ready to Start Your Project?</h2>
          <p className="consultation-text">
            Let our experts guide you from concept to completion. Schedule a free consultation today.
          </p>
          <motion.button
            className="consultation-button"
            whileHover={{ scale: 1.05, backgroundColor: '#0056b3' }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Consultation;
