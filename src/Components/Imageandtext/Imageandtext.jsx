import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Imageandtext.css";
import image from "../../assets/images/DEZIGNA_SERVICES/pexels-falling4utah-2724748.jpg";

// Import SVG icons
import CabinetIcon from "../../assets/icons/cabinet.svg";
import FlooringIcon from "../../assets/icons/flooring.svg";
import CountertopIcon from "../../assets/icons/countertop.svg";
import ClosetIcon from "../../assets/icons/closet.svg";
import TilesIcon from "../../assets/icons/tiles.svg";
import AccessoriesIcon from "../../assets/icons/accessories.svg";
import OutdoorKitchenIcon from "../../assets/icons/outdoorkitchen.svg";
import AppliancesIcon from "../../assets/icons/appliances.svg";

const Imageandtext = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const features = [
    { name: "Cabinets", icon: CabinetIcon },
    { name: "Flooring", icon: FlooringIcon },
    { name: "Countertops", icon: CountertopIcon },
    { name: "Closets", icon: ClosetIcon },
    { name: "Tiles", icon: TilesIcon },
    { name: "Accessories", icon: AccessoriesIcon },
    { name: "Outdoor Kitchen", icon: OutdoorKitchenIcon },
    { name: "Appliances", icon: AppliancesIcon },
  ];

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
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  const textContentVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="imageandtext-section"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="background-shapes">
        <motion.div
          className="shape shape1"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="shape shape2"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="shape shape3"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="imageandtext-container">
        <motion.div className="text-content" variants={textContentVariants}>
          <motion.h2 className="heading" variants={itemVariants}>
            Crafting Your Dream Space
          </motion.h2>
          <motion.p className="description" variants={itemVariants}>
            From custom cabinets to elegant flooring, we provide a wide range of
            products to bring your vision to life. Explore our collection of
            high-quality materials and accessories.
          </motion.p>
          <motion.div className="features-grid" variants={containerVariants}>
            {features.map((feature, index) => (
              <motion.div
                className="feature-item"
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
                  zIndex: 2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={feature.icon}
                  alt={`${feature.name} icon`}
                  className="feature-icon"
                />
                <span className="feature-name">{feature.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div className="image-content" variants={imageVariants}>
          <motion.img
            src={image}
            alt="Modern Interior Design"
            className="image"
            whileHover={{ scale: 1.05, rotate: 1.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Imageandtext;
