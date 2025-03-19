import React, { useState, useEffect } from 'react';
import { useMealContext } from '../context/MealContext';
import Filters from './filters/Filters';
import Suggestions from './suggestions/Suggestions';
import './css/searchform.css';

const initialFilters = {
  diet: [],
  cuisine: [],
  calories: '',
  time: ''
};

const SearchForm = () => {
  const { query, setQuery, handleSearch, setSearchInitiated } = useMealContext();
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    setShowSuggestions(true);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(value.trim() === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
    setSearchInitiated(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    setSearchInitiated(true);
  };

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: category === 'diet' || category === 'cuisine' 
        ? prev[category].includes(value)
          ? prev[category].filter(item => item !== value)
          : [...prev[category], value]
        : value
    }));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Enter Food Name/Location To Get Recipe"
          />
          <button type="button" className="filter-toggle" onClick={toggleFilters}>
            <span className="filter-icon">🔍</span>
            Filters
          </button>
        </div>
        
        {showFilters && (
          <Filters 
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        )}
        
        <button type="submit">Search</button>
      </form>

      {showSuggestions && (
        <Suggestions onSuggestionClick={handleSuggestionClick} />
      )}
    </div>
  );
};

export default SearchForm;
