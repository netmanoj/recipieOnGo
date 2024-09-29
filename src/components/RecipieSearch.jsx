import React from 'react';
import { useMealContext } from './MealContext'; 
import './css/recipiesearch.css';

const RecipeSearch = () => {
  const { query, setQuery, recipes, loading, handleSearch } = useMealContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="recipe-search">
      <h1>Recipe Search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a recipe..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p className="loading-text">Loading recipes...</p>}

      <div className="recipe-list">
        {recipes.length > 0 && recipes.map((recipe, index) => (
          <div key={index} className="recipe-item">
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="recipe-image"/>
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer" className="recipe-link">
              View Recipe
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
