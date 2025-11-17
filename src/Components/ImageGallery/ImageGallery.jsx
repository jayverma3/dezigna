import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./ImageGallery.css";

const galleryImages = [
  {
    src: "/images/Materials_folder/Flooring/alexis river.png",
    alt: "Modern Kitchen Cabinets",
    caption: "Sleek White Oak",
  },
  {
    src: "/images/Materials_folder/Flooring/castle creek.png",
    alt: "Marble Countertop",
    caption: "Elegant Marble Finish",
  },
  {
    src: "/images/Materials_folder/Flooring/Pacific Umber.png",
    alt: "Custom Walk-in Closet",
    caption: "Spacious & Organized",
  },
  {
    src: "/images/Materials_folder/Flooring/pasadina meadows.png",
    alt: "Luxury Kitchen Design",
    caption: "Luxury Living",
  },
  {
    src: "/images/Materials_folder/Flooring/Winterbury Green.png",
    alt: "Modern Appliances",
    caption: "State-of-the-Art",
  },
  {
    src: "/images/Materials_folder/Flooring/Winterbury Green.png",
    alt: "Green Kitchen Cabinets",
    caption: "Bold & Beautiful",
  },
];

const ImageGallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  };

  return (
    <section className="Gallery-section">
      <div className="Gallery-container">
        <motion.div
          className="Gallery-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="Gallery-title">Our Craftsmanship in Action</h2>
          <p className="Gallery-subtitle">
            Explore a collection of our finest work and find inspiration for
            your next project.
          </p>
        </motion.div>
        <motion.div
          className="Gallery-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              className="Gallery-item"
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="Gallery-image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="Gallery-image"
                />
              </div>
              <div className="Gallery-item-overlay">
                <h3 className="Gallery-item-caption">{image.caption}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="Gallery-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <a href="/portfolio" className="Gallery-cta-button">
            <span>Explore Full Portfolio</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;
