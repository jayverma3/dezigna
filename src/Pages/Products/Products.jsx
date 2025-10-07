import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Listing from "../../Components/Listing/Listing";
import listingsData from "../../data/listings.json";
import useDebounce from "../../hooks/useDebounce";
import "./Products.css";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listings, setListings] = useState(listingsData);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const filteredListings = listingsData.filter((listing) =>
      listing.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setListings(filteredListings);
  }, [debouncedSearchTerm]);

  return (
    <div className="plistings-page">
      <Header />
      <div className="search-section">
        <div className="search-header">
          <h1 className="search-title">
            Remodel Your Kitchen , Bath & Closets
          </h1>
          <p className="search-subtitle">
            Transform your space with our premium products and expert design
            services.
          </p>
        </div>
        <SearchBar onSearch={setSearchTerm} />
      </div>
      <div className="listings-content">
        <Listing listings={listings} />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
