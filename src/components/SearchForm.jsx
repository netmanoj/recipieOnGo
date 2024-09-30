import React from 'react';
import { useMealContext } from '../context/MealContext';
import './css/searchform.css';

const SearchForm = () => {
  const { query, setQuery, handleSearch } = useMealContext();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Update the query
    handleSearch(value); // Trigger search as the user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query); // Ensure search can still be triggered on form submission
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange} // Use the new handler
        placeholder="Enter Food Name/Location To Get Recipe"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
