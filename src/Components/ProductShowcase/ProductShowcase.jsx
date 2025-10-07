import React from "react";
import "./ProductShowcase.css";

const products = [
  {
    name: "Cabinets",
    image: "/images/DEZIGNA_SERVICES/CABINETS/pexels-curtis-adams-1694007-7027774.jpg",
  },
  {
    name: "Flooring",
    image: "/images/DEZIGNA_SERVICES/FLOORING/pexels-fwstudio-33348-172292.jpg",
  },
  {
    name: "Countertops",
    image: "/images/DEZIGNA_SERVICES/COUNTERTOPS/pexels-falling4utah-2724749.jpg",
  },
  {
    name: "Closets",
    image: "/images/DEZIGNA_SERVICES/CLOSETS/pexels-heyho-8134812.jpg",
  },
  {
    name: "Tiles",
    image: "/images/DEZIGNA_SERVICES/TILES/pexels-brett-sayles-2093084.jpg",
  },
  {
    name: "Outdoor Kitchen",
    image: "/images/DEZIGNA_SERVICES/OUTDOOR_KITCHEN/pexels-tatianasyrikova-3932766.jpg",
  },
];

const ProductShowcase = () => {
  return (
    <div className="product-showcase-container">
      <h2 className="showcase-title">Explore Our Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-overlay">
              <h3 className="product-name">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;