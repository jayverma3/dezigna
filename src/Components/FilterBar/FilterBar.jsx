import React from 'react';
import './FilterBar.css';
import searchIcon from '../../assets/icons/search.svg';

const FilterBar = ({ onFilterChange }) => {
  return (
    <div className="filter-bar">
      <div className="search-container">
        <img src={searchIcon} alt="Search" className="search-icon" />
        <input
          type="text"
          placeholder="Search by city, address, or zip..."
          className="search-input"
          onChange={(e) => onFilterChange({ searchTerm: e.target.value })}
        />
      </div>
      <div className="filter-options">
        <select className="filter-select" onChange={(e) => onFilterChange({ type: e.target.value })}>
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
        </select>
        <select className="filter-select" onChange={(e) => onFilterChange({ minPrice: e.target.value })}>
          <option value="">Min Price</option>
          <option value="100000">$100,000</option>
          <option value="200000">$200,000</option>
          <option value="300000">$300,000</option>
        </select>
        <select className="filter-select" onChange={(e) => onFilterChange({ maxPrice: e.target.value })}>
          <option value="">Max Price</option>
          <option value="500000">$500,000</option>
          <option value="750000">$750,000</option>
          <option value="1000000">$1,000,000</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;