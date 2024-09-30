import React, { useEffect } from 'react';
import './css/model.css'; 

const RecipeModal = ({ recipe, closeModal }) => {

  // Freeze background when modal is open
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>X</button>
        <div className="modal-details">
          <img src={recipe.image} alt={recipe.label} className="modal-image" />
          <div className="modal-text">
            <h2>{recipe.label}</h2>
            <p><strong>Calories:</strong> {Math.round(recipe.calories)} kcal</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Ingredients:</strong></p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
            <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Full Recipe</a>
            <h3>Nutritional Information:</h3>
            <ul>
              <li><strong>Protein:</strong> {recipe.totalNutrients.PROCNT.quantity} g</li>
              <li><strong>Fat:</strong> {recipe.totalNutrients.FAT.quantity} g</li>
              <li><strong>Carbohydrates:</strong> {recipe.totalNutrients.CHOCDF.quantity} g</li>
              <li><strong>Cholesterol:</strong> {recipe.totalNutrients.CHOLE.quantity} mg</li>
              <li><strong>Sodium:</strong> {recipe.totalNutrients.NA.quantity} mg</li>
              <li><strong>Calcium:</strong> {recipe.totalNutrients.CA.quantity} mg</li>
              <li><strong>Magnesium:</strong> {recipe.totalNutrients.MG.quantity} mg</li>
              <li><strong>Potassium:</strong> {recipe.totalNutrients.K.quantity} mg</li>
              <li><strong>Iron:</strong> {recipe.totalNutrients.FE.quantity} mg</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
