import React, { useState, useEffect } from 'react';
import { useMealContext } from '../context/MealContext';
import { FaSpinner } from 'react-icons/fa'; // Import the spinner icon
import Modal from './Modal';
import './css/meallist.css';

const MealList = () => {
  const { recipes, loading } = useMealContext();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    document.body.classList.add('modal-open'); // Add class to prevent background scroll
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    document.body.classList.remove('modal-open'); // Remove class to allow background scroll
  };

  // Cleanup effect to remove class when component unmounts
  useEffect(() => {
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <FaSpinner className="loading-spinner" />
        <p>Loading meals...</p>
      </div>
    );
  }

  return (
    <div className="meal-list">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div key={index} className="meal" onClick={() => openModal(recipe)}>
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
          </div>
        ))
      ) : (
        <h3>Enter Search Keywords</h3>
      )}

      {selectedRecipe && (
        <Modal recipe={selectedRecipe.recipe} closeModal={closeModal} />
      )}
    </div>
  );
};

export default MealList;
