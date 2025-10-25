import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCatalogCTA.css';

const ProductCatalogCTA = () => {
  return (
    <div className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">Explore Our Full Range of Products</h2>
        <p className="cta-description">
          From stunning countertops to custom cabinets, find everything you need to bring your vision to life.
        </p>
        <Link to="/products" className="cta-button">
          View Product Catalog
        </Link>
      </div>
    </div>
  );
};

export default ProductCatalogCTA;
