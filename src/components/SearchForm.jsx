import React from 'react';
import { useMealContext } from '../context/MealContext';
import './css/searchform.css'
const SearchForm = () => {
  const { query, setQuery, handleSearch } = useMealContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Food Name/Location To Get Recipie"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

