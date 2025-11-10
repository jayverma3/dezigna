import React from 'react';
import { motion } from 'framer-motion';
import './ImageZoom.css';

const ImageZoom = ({ src, alt }) => {
  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty('--x', `${(x / rect.width) * 100}%`);
    target.style.setProperty('--y', `${(y / rect.height) * 100}%`);
  };

  return (
    <motion.div
      className="ImageZoom__container"
      onMouseMove={handleMouseMove}
    >
      <img src={src} alt={alt} className="ImageZoom__image" />
    </motion.div>
  );
};

export default ImageZoom;
