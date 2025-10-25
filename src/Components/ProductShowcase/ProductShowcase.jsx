import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import "./ProductShowcase.css";

const products = [
  {
    name: "Cabinets",
    slug: "cabinets",
    description: "Custom solutions for kitchen, bath, and beyond.",
    image:
      "/images/DEZIGNA_SERVICES/CABINETS/pexels-curtis-adams-1694007-7027774.jpg",
  },
  {
    name: "Flooring",
    slug: "flooring",
    description: "Hardwood, vinyl, and tile to fit any style.",
    image: "/images/DEZIGNA_SERVICES/FLOORING/pexels-fwstudio-33348-172292.jpg",
  },
  {
    name: "Countertops",
    slug: "countertops",
    description: "Durable and elegant surfaces in premium materials.",
    image:
      "/images/DEZIGNA_SERVICES/COUNTERTOPS/pexels-falling4utah-2724749.jpg",
  },
  {
    name: "Closets",
    slug: "closets",
    description: "Maximize your space with custom organization.",
    image: "/images/DEZIGNA_SERVICES/CLOSETS/pexels-heyho-8134812.jpg",
  },
  {
    name: "Tiles",
    slug: "tiles",
    description: "A vast collection for backsplashes, floors, and walls.",
    image: "/images/DEZIGNA_SERVICES/TILES/pexels-brett-sayles-2093084.jpg",
  },
  {
    name: "Outdoor Kitchens",
    slug: "outdoor-kitchen",
    description: "Weather-resistant solutions for year-round entertaining.",
    image:
      "/images/DEZIGNA_SERVICES/OUTDOOR_KITCHEN/pexels-tatianasyrikova-3932766.jpg",
  },
];

const ProductShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="Showcase-container">
      <div className="Showcase-background"></div>
      <div className="Showcase">
        <motion.div
          className="Showcase__header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="Showcase__title">Designed for Living</h2>
          <p className="Showcase__subtitle">
            Explore our curated collection of premium home solutions, crafted to
            elevate your space.
          </p>
        </motion.div>
        <motion.div
          className="Showcase__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className={`Showcase__card Showcase__card--${index + 1}`}
              variants={itemVariants}
            >
              <div className="Showcase__card-background">
                <img
                  src={product.image}
                  alt={product.name}
                  className="Showcase__image"
                />
              </div>
              <Link
                to={`/listing/${product.slug}`}
                className="Showcase__cardLink"
              >
                <div className="Showcase__content">
                  <h3 className="Showcase__productName">{product.name}</h3>
                  <p className="Showcase__productDesc">{product.description}</p>
                  <div className="Showcase__cta">
                    <span>Explore</span>
                    <MoveRight className="Showcase__cta-icon" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="Showcase__view-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Link to="/products" className="Showcase__view-all-button">
            <span>View All Products</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;
