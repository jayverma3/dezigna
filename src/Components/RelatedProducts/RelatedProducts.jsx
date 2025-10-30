import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import listings from '../../data/listings.json';
import './RelatedProducts.css';

const RelatedProducts = ({ currentProductId, category }) => {
  const relatedListings = listings.filter(
    (listing) => listing.category === category && listing.slug !== currentProductId
  ).slice(0, 4); // Show up to 4 related products

  if (relatedListings.length === 0) {
    return null;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="RelatedProducts">
      <h2 className="RelatedProducts__title">You Might Also Like</h2>
      <div className="RelatedProducts__grid">
        {relatedListings.map((listing, i) => (
          <motion.div
            key={listing.slug}
            className="RelatedProducts__card"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: '0px 15px 25px rgba(0,0,0,0.1)' }}
          >
            <Link to={`/listing/${listing.slug}`} className="RelatedProducts__link">
              <img src={listing.image} alt={listing.title} className="RelatedProducts__image" />
              <div className="RelatedProducts__info">
                <h3 className="RelatedProducts__productTitle">{listing.title}</h3>
                <p className="RelatedProducts__productDescription">{listing.short_description}</p>
                <span className="RelatedProducts__viewButton">View Product</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
