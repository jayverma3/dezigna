import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import './QuoteForm.css';

const QuoteForm = ({ productTitle, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to an API)
    console.log('Form submitted:', { product: productTitle, ...formData });
    setIsSubmitted(true);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div className="QuoteForm__overlay">
      <motion.div 
        className="QuoteForm__modal"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={onClose} className="QuoteForm__closeButton"><X size={24} /></button>
        
        {isSubmitted ? (
          <div className="QuoteForm__successMessage">
            <h3>Thank you!</h3>
            <p>Your quote request for "{productTitle}" has been received. We'll be in touch shortly.</p>
          </div>
        ) : (
          <>
            <h2 className="QuoteForm__title">Request a Quote</h2>
            <p className="QuoteForm__productName">Product: <strong>{productTitle}</strong></p>
            <form onSubmit={handleSubmit} className="QuoteForm__form">
              <div className="QuoteForm__inputGroup">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="QuoteForm__inputGroup">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="QuoteForm__inputGroup">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="QuoteForm__inputGroup">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your project, dimensions, desired materials, etc."></textarea>
              </div>
              <button type="submit" className="QuoteForm__submitButton">Submit Request</button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default QuoteForm;
