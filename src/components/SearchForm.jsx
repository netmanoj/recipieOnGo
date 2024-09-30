import React, { useState, useEffect } from 'react';
import { useMealContext } from '../context/MealContext';
import './css/searchform.css';

const SearchForm = () => {
  const { query, setQuery, handleSearch, setSearchInitiated } = useMealContext(); // Get setSearchInitiated from context
  const [showSuggestions, setShowSuggestions] = useState(true); // Start with suggestions visible

  const hardcodedSuggestions = [
    'Pizza',
    'Sushi',
    'Tacos',
    'Indian Food',
    'Chinese Food'
  ];

  // Show suggestions when the component mounts
  useEffect(() => {
    setShowSuggestions(true);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Update the query

    // Show suggestions when input is empty; hide when there's input
    if (value.trim() === '') {
      setShowSuggestions(true); // Show suggestions when input is empty
    } else {
      setShowSuggestions(false); // Hide suggestions when there is text
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query); // Trigger search on form submission
    setSearchInitiated(true); // Mark search as initiated
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion); // Set the clicked suggestion as the query
    setShowSuggestions(false); // Hide suggestions after a click
    setSearchInitiated(true); // Mark search as initiated when a suggestion is clicked
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter Food Name/Location To Get Recipe"
        />
        <button type="submit">Search</button>
      </form>

      {/* Suggestions Section */}
      {showSuggestions && (
        <div className="suggestions">
          {hardcodedSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              className="suggestion-button"
              onClick={() => handleSuggestionClick(suggestion)} // Set query on suggestion click
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
