import React from "react";
import { motion } from "framer-motion";
import {
  FaBox,
  FaTh,
  FaLayerGroup,
  FaWarehouse,
  FaRegSun,
  FaBlender,
  FaChair,
  FaUtensils,
} from "react-icons/fa";
import "./ProductCategories.css";

const categories = [
  { name: "Cabinets", icon: <FaBox /> },
  { name: "Flooring", icon: <FaTh /> },
  { name: "Countertops", icon: <FaLayerGroup /> },
  {
    /* name: "Closets", icon: <FaWarehouse />*/
  },
  {
    /*name: "Tiles", icon: <FaRegSun /> */
  },
  {
    /* name: "Accessories", icon: <FaChair /> */
  },
  { name: "Appliances", icon: <FaBlender /> },
  {
    /*name: "Outdoor Kitchens", icon: <FaUtensils /> */
  },
];

const ProductCategories = () => {
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

  return (
    <div className="categories-section">
      <motion.h2
        className="categories-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Explore Our Products
      </motion.h2>
      <motion.div
        className="categories-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {categories.filter(category => category.name).map((category) => (
          <motion.div
            className="category-card"
            key={category.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              zIndex: 1,
              boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
              borderColor: "#007bff",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="category-icon">{category.icon}</div>
            <h3 className="category-name">{category.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductCategories;
