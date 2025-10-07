import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ContactUsCard from '../../Components/ContactUsCard/ContactUsCard';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Locations.css';

const Locations = () => {
  return (
    <div className="locations-page">
      <Header />
      <div className="locations-content">
        <div className="locations-header">
          <h1>Our Locations</h1>
          <p>Find a Dezigna showroom near you. Use the search bar to find a location by city, state, or zip code.</p>
          <SearchBar />
        </div>
        <div className="locations-list">
          {/* Placeholder for map or list of locations */}
          <ContactUsCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Locations;
