import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Listing.css";
import listings from "../../data/listings.json"; // Import listings data

const Listing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="listing-page">
      <motion.div
        className="listing-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {listings.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <Link to={`/listing/${product.slug}`} className="listing-card-link">
              <div className="listing-card">
                <div className="listing-image-container">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="listing-image"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <div className="listing-details">
                  <h3 className="listing-title">{product.title}</h3>
                  <p className="listing-description">{product.description}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Listing;
