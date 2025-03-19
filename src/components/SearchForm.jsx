import React, { useState, useEffect } from 'react';
import { useMealContext } from '../context/MealContext';
import './css/searchform.css';

const SearchForm = () => {
  const { query, setQuery, handleSearch, setSearchInitiated } = useMealContext();
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    diet: [],
    cuisine: [],
    calories: '',
    time: ''
  });

  const hardcodedSuggestions = [
    'Pizza',
    'Sushi',
    'Tacos',
    'Indian Food',
    'Chinese Food'
  ];

  const filterOptions = {
    diet: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Gluten-Free', 'Keto'],
    cuisine: ['Indian', 'Italian', 'Chinese', 'Mexican', 'Japanese', 'Thai'],
    calories: ['Under 300', '300-500', '500-800', 'Over 800'],
    time: ['Under 15 mins', '15-30 mins', '30-60 mins', 'Over 60 mins']
  };

  useEffect(() => {
    setShowSuggestions(true);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === '') {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
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
          <div className="filters-dropdown">
            <div className="filter-section">
              <h4>Diet Type</h4>
              <div className="filter-options">
                {filterOptions.diet.map(option => (
                  <label key={option} className="filter-option">
                    <input
                      type="checkbox"
                      checked={filters.diet.includes(option)}
                      onChange={() => handleFilterChange('diet', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4>Cuisine</h4>
              <div className="filter-options">
                {filterOptions.cuisine.map(option => (
                  <label key={option} className="filter-option">
                    <input
                      type="checkbox"
                      checked={filters.cuisine.includes(option)}
                      onChange={() => handleFilterChange('cuisine', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4>Calories</h4>
              <div className="filter-options">
                {filterOptions.calories.map(option => (
                  <label key={option} className="filter-option">
                    <input
                      type="radio"
                      name="calories"
                      checked={filters.calories === option}
                      onChange={() => handleFilterChange('calories', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h4>Cooking Time</h4>
              <div className="filter-options">
                {filterOptions.time.map(option => (
                  <label key={option} className="filter-option">
                    <input
                      type="radio"
                      name="time"
                      checked={filters.time === option}
                      onChange={() => handleFilterChange('time', option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <button type="submit">Search</button>
      </form>

      {showSuggestions && (
        <div className="suggestions">
          {hardcodedSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              className="suggestion-button"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion} +
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchForm;
