import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    q: "What is the average cost of a kitchen remodel?",
    a: "The cost varies widely based on materials, size, and complexity. We offer a free consultation to provide a detailed estimate for your specific project, ensuring a transparent and tailored process.",
  },
  {
    q: "How long does the design process take?",
    a: "The design process typically takes 1-2 weeks. During this collaborative phase, we work closely with you to finalize every detail before any manufacturing or installation begins.",
  },
  {
    q: "Do you offer warranties on your products?",
    a: "Absolutely. All of our products come with a comprehensive manufacturer's warranty. Specific warranty details vary by product, and we provide all documentation upon installation.",
  },
  {
    q: "Can I see samples of materials before deciding?",
    a: "Yes, we encourage it! We have a wide range of material samples, from countertops to cabinet finishes, available for you to see and touch in our showroom or during a consultation.",
  },
  {
    q: "What areas do you service?",
    a: "We proudly serve the entire metropolitan area and surrounding suburbs. Contact us to confirm if your location is within our service range.",
  },
  {
    q: "How do I get started with a project?",
    a: "Getting started is easy! Simply click the 'Get a Free Quote' button on our website or give us a call to schedule your complimentary design consultation with one of our experts.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <motion.div className="faq-question" onClick={onClick}>
        <h3 className="question-text">{item.q}</h3>
        <motion.div
          className="question-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaPlus />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h2 className="faq-main-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Have questions? We've got answers. If you can't find what you're
          looking for, feel free to contact us.
        </p>
      </div>
      <div className="faq-content-container">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;