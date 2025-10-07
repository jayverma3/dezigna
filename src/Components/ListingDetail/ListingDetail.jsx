import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import listings from '../../data/listings.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ListingDetail.css';

const ListingDetail = () => {
  const { id } = useParams();
  const listing = listings.find((l) => l.slug === id);
  const [mainImage, setMainImage] = useState(listing ? listing.image : '');

  if (!listing) {
    return (
      <>
        <Header />
        <div className="listing-not-found">Product not found</div>
        <Footer />
      </>
    );
  }

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <>
      <Header />
      <motion.div 
        className="listing-detail-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="detail-main-content">
          <div className="detail-gallery">
            <motion.div className="detail-main-image-container" layoutId={`main-image-${listing.id}`}>
              <img src={mainImage} alt={listing.title} className="detail-main-image" />
            </motion.div>
            <div className="detail-thumbnail-container">
              {listing.gallery_images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`${listing.title} thumbnail ${index + 1}`}
                  className={`detail-thumbnail ${mainImage === image ? 'active' : ''}`}
                  onClick={() => handleThumbnailClick(image)}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </div>
          <div className="detail-info">
            <motion.h1 className="detail-title" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              {listing.title}
            </motion.h1>
            <motion.p className="detail-description" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              {listing.description}
            </motion.p>
            
            {listing.features && listing.features.length > 0 && (
              <div className="detail-features">
                <h3 className="detail-section-title">Key Features</h3>
                <ul>
                  {listing.features.map((feature, index) => (
                    <motion.li key={index} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 + index * 0.1 }}>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {listing.materials && listing.materials.length > 0 && (
              <div className="detail-materials">
                <h3 className="detail-section-title">Available Materials</h3>
                <div className="materials-tags">
                  {listing.materials.map((material, index) => (
                    <motion.span key={index} className="material-tag" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 + index * 0.1 }}>
                      {material}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
            
            <motion.button className="btn request-quote-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Request a Quote
            </motion.button>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default ListingDetail;