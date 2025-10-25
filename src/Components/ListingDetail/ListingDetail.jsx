import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import listings from '../../data/listings.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ListingDetail-modern.css';

const ListingDetail = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const foundListing = listings.find((l) => l.slug === id);
    if (foundListing) {
      setListing(foundListing);
      // Ensure gallery_images is an array and has content
      const gallery = Array.isArray(foundListing.gallery_images) && foundListing.gallery_images.length > 0
        ? foundListing.gallery_images
        : [foundListing.image]; // Fallback to main image if gallery is missing
      
      setMainImage(foundListing.image || gallery[0]);
      
      const initialIndex = gallery.findIndex(img => img === (foundListing.image || gallery[0]));
      setCurrentIndex(initialIndex !== -1 ? initialIndex : 0);
    }
  }, [id]);

  if (!listing) {
    return (
      <>
        <Header />
        <div className="listing-not-found">
          <h2>Product not found</h2>
          <p>We couldn't find the product you were looking for.</p>
          <Link to="/" className="btn">Back to Homepage</Link>
        </div>
        <Footer />
      </>
    );
  }

  const galleryImages = Array.isArray(listing.gallery_images) && listing.gallery_images.length > 0
    ? listing.gallery_images
    : [listing.image];

  const handleThumbnailClick = (image, index) => {
    setMainImage(image);
    setCurrentIndex(index);
  };

  const handleNavClick = (direction) => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % galleryImages.length
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setMainImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const galleryVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const infoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  return (
    <>
      <Header />
      <div className="ListingDetail">
        <motion.div 
          className="ListingDetail__grid"
          initial="hidden"
          animate="visible"
          variants={{}}
        >
          {/* Image Gallery */}
          <motion.div className="ListingDetail__gallery" variants={galleryVariants}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={mainImage}
                className="ListingDetail__mainImageWrapper"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <img src={mainImage} alt={listing.title} className="ListingDetail__mainImage" />
                <button onClick={() => handleNavClick('prev')} className="ListingDetail__navArrow ListingDetail__navArrow--prev"><ChevronLeft size={24} /></button>
                <button onClick={() => handleNavClick('next')} className="ListingDetail__navArrow ListingDetail__navArrow--next"><ChevronRight size={24} /></button>
              </motion.div>
            </AnimatePresence>
            <div className="ListingDetail__thumbnailReel">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`ListingDetail__thumbnailContainer ${currentIndex === index ? 'ListingDetail__thumbnailContainer--active' : ''}`}
                  onClick={() => handleThumbnailClick(image, index)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={image}
                    alt={`${listing.title} thumbnail ${index + 1}`}
                    className="ListingDetail__thumbnailImage"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div className="ListingDetail__infoContainer" variants={infoVariants}>
            <motion.h1 variants={infoVariants} className="ListingDetail__title">{listing.title}</motion.h1>
            <motion.p variants={infoVariants} className="ListingDetail__description">{listing.description}</motion.p>
            
            <motion.div variants={infoVariants} className="ListingDetail__section">
              <h3 className="ListingDetail__sectionTitle">Key Features</h3>
              <ul className="ListingDetail__featuresList">
                {listing.features.map((feature, index) => (
                  <li key={index} className="ListingDetail__featureItem">
                    <CheckCircle className="ListingDetail__featureIcon" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {listing.specifications && (
              <motion.div variants={infoVariants} className="ListingDetail__section">
                <h3 className="ListingDetail__sectionTitle">Specifications</h3>
                <div className="ListingDetail__specsGrid">
                  {Object.entries(listing.specifications).map(([key, value]) => (
                    <div key={key} className="ListingDetail__specItem">
                      <span className="ListingDetail__specKey">{key}</span>
                      <span className="ListingDetail__specValue">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {listing.materials && listing.materials.length > 0 && (
              <motion.div variants={infoVariants} className="ListingDetail__section">
                <h3 className="ListingDetail__sectionTitle">Available Materials</h3>
                <div className="ListingDetail__materialsTags">
                  {listing.materials.map((material, index) => (
                    <span key={index} className="ListingDetail__materialTag">{material}</span>
                  ))}
                </div>
              </motion.div>
            )}
            
            <motion.div variants={infoVariants} className="ListingDetail__ctaSection">
              <motion.button 
                className="ListingDetail__quoteButton"
                whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Quote
              </motion.button>
              <p className="ListingDetail__quoteSubtext">Get a free, no-obligation quote for your project.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ListingDetail;