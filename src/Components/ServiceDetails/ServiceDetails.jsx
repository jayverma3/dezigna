import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ServiceDetails.css';

const servicesData = {
  Cabinets: {
    title: 'Custom Cabinets',
    subtext: 'Crafted to fit your style and space.',
    thumbnail: 'https://via.placeholder.com/400x250/cccccc/808080?text=Custom+Cabinets',
    pros: [
      'Tailored to your exact specifications',
      'High-quality materials and craftsmanship',
      'Maximizes storage and functionality',
      'Increases home value',
    ],
    faq: [
      { q: 'What materials do you use?', a: 'We offer a wide range of materials including solid wood, MDF, plywood, and laminates to match your budget and style.' },
      { q: 'How long does installation take?', a: 'Installation typically takes 2-5 days, depending on the size and complexity of the project.' },
      { q: 'Can you match my existing kitchen style?', a: 'Absolutely. We can design your cabinets to seamlessly blend with your current kitchen decor.' },
    ],
  },
  // Add other services here in the same format
};

const Accordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="faq-item">
      <motion.div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {item.q}
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>▼</motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {item.a}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServiceDetails = () => {
  const service = servicesData['Cabinets']; // Example: Displaying 'Cabinets'

  return (
    <div className="service-details-section">
      <div className="service-details-container">
        <motion.div
          className="service-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="service-title">{service.title}</h1>
          <p className="service-subtext">{service.subtext}</p>
        </motion.div>

        <motion.div
          className="service-thumbnail"
          whileHover={{ scale: 1.03 }}
        >
          <img src={service.thumbnail} alt={service.title} />
        </motion.div>

        <div className="service-content">
          <motion.div
            className="service-pros"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="section-title">Why Choose Us?</h2>
            <ul>
              {service.pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="service-faq"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            {service.faq.map((item, index) => (
              <Accordion key={index} item={item} />
            ))}
          </motion.div>
        </div>

        <motion.div
          className="service-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="cta-button">View Product Catalog</button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;