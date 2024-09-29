import React from 'react';
import { useHistory } from 'react-router-dom';
import './css/homepage.css'

const Home = () => {
  const history = useHistory();

  const handleSearchClick = () => {
    history.push('/recipes'); // Navigate to the recipe search page
  };

  return (
    <div className="home">
      <h1>Welcome to Recipe On GO 🍽️</h1>
      <p>
        Are you ready to discover the best recipes? Search for delicious meals
        that will tantalize your taste buds! 🍕✨ Whether you're looking for 
        healthy options, quick snacks, or gourmet delights, we've got you covered! 
        Lets embark on a culinary adventure together! 🌍👩‍🍳👨‍🍳
      </p>
      <button className="search-button" onClick={handleSearchClick}>
        Search Recipes
      </button>
    </div>
  );
};

export default Home;
