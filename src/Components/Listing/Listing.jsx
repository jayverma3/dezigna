import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiStar, FiDollarSign } from "react-icons/fi";
import "./Listing.css";
import listings from "../../data/listings.json";

const Listing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FiStar
          key={i}
          className={`star-icon ${i <= rating ? "filled" : ""}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="listing-page">
      <div className="page-header">
        <h1 className="page-title">Our Services</h1>
        <p className="page-subtitle">
          Explore our curated selection of high-quality products and services.
        </p>
      </div>
      <motion.div
        className="listing-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {listings.map((product) => (
          <motion.div
            key={product.id}
            className="listing-card-wrapper"
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -5 }}
          >
            <Link to={`/listing/${product.slug}`} className="listing-card-link">
              <div className="listing-card">
                <div className="listing-image-container">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="listing-image"
                  />
                  <div className="listing-category-badge">
                    {product.category}
                  </div>
                </div>
                <div className="listing-details">
                  <h3 className="listing-title">{product.title}</h3>
                  <p className="listing-description">{product.description}</p>
                  <div className="listing-meta">
                    <div className="listing-rating">
                      {renderStars(product.rating)}
                      <span className="listing-reviews">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="listing-price">
                      <FiDollarSign className="price-icon" />
                      <span className="price-range">{product.priceRange}</span>
                    </div>
                  </div>
                  <div className="listing-style-tag">{product.style}</div>
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