import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ImageZoom.css';

const ImageZoom = ({ src, alt }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <motion.div 
      className="ImageZoom__container"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
      }}
    >
      <img src={src} alt={alt} className="ImageZoom__image" />
    </motion.div>
  );
};

export default ImageZoom;
