import React from "react";
import { motion } from "framer-motion";
import { FaGem, FaPalette, FaShippingFast } from "react-icons/fa";
import "./Features.css";

const featuresData = [
  {
    icon: <FaGem />,
    title: "Premium Quality",
    description: "We source only the finest materials for durability and beauty.",
  },
  {
    icon: <FaPalette />,
    title: "Custom Designs",
    description: "Our team works with you to create a space that is uniquely yours.",
  },
  {
    icon: <FaShippingFast />,
    title: "Reliable Delivery",
    description: "Fast and secure delivery to your doorstep, on your schedule.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div className="features-section">
      <motion.div
        className="features-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {featuresData.map((feature, index) => (
          <motion.div
            className="feature-card"
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="feature-icon-wrapper">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;