import React from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import "./FeaturedProperties.css";

// Curated images from the DEZIGNA_SERVICES subfolders
import cabinetsImage from "/images/DEZIGNA_SERVICES/CABINETS/pexels-curtis-adams-1694007-7027774.jpg";
import flooringImage from "/images/DEZIGNA_SERVICES/FLOORING/pexels-fwstudio-33348-172292.jpg";
import countertopsImage from "/images/DEZIGNA_SERVICES/COUNTERTOPS/pexels-falling4utah-2724749.jpg";
import closetsImage from "/images/DEZIGNA_SERVICES/CLOSETS/pexels-heyho-8134812.jpg";
import tilesImage from "/images/DEZIGNA_SERVICES/TILES/pexels-brett-sayles-2093084.jpg";
import outdoorKitchenImage from "/images/DEZIGNA_SERVICES/OUTDOOR_KITCHEN/pexels-tatianasyrikova-3932766.jpg";

const services = [
  {
    id: 1,
    image: cabinetsImage,
    title: "Custom Cabinets",
    description: "Bespoke cabinet solutions for a perfect fit and finish.",
  },
  {
    id: 2,
    image: flooringImage,
    title: "Elegant Flooring",
    description: "Luxurious and durable flooring in various premium materials.",
  },
  {
    id: 3,
    image: countertopsImage,
    title: "Durable Countertops",
    description: "High-quality surfaces in granite, quartz, and marble.",
  },
  {
    id: 4,
    image: closetsImage,
    title: "Smart Closet Systems",
    description: "Intelligent and stylish storage to maximize your space.",
  },
  {
    id: 5,
    image: tilesImage,
    title: "Stylish Tiles",
    description: "A vast collection of beautiful tiles for any application.",
  },
  {
    id: 6,
    image: outdoorKitchenImage,
    title: "Outdoor Kitchens",
    description: "Create your dream outdoor entertaining space with us.",
  },
];

const FeaturedProperties = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 15 },
    },
  };

  return (
    <section className="featured-services-section">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h2 className="services-title">Our Premier Services</h2>
        <p className="services-subtitle">
          From concept to completion, we deliver excellence and craftsmanship.
        </p>
      </motion.div>
      <motion.div
        className="services-grid-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service) => (
          <motion.div
            className="service-card-item"
            key={service.id}
            variants={itemVariants}
            whileHover={{
              y: -8,
              boxShadow:
                "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-image-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="card-image"
              />
              <div className="card-image-overlay"></div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
              <a href="products" className="card-button">
                Explore Service
                <FaChevronRight className="card-button-icon" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProperties;
