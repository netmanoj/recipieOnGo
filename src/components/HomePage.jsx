import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import './css/homepage.css';

const HomePage = () => {
  const navigate = useNavigate(); // Create a navigate function
  const handleSearchClick = () => {
    console.log("Button clicked, navigating to /meals");
    navigate('/meals'); // Navigate to meals page
  };
  

  return (
    <div className="home-page"> {/* Updated class name for styling */}
      <h1>Welcome to Recipe On GO 🍽️</h1>
      <p>
        Are you ready to discover the best recipes that the culinary world has to offer? 
        Our platform is designed to help you search for delicious meals that will tantalize 
        your taste buds and bring joy to your dining table! 🍕✨ Whether you're on the hunt 
        for healthy options that nourish your body, quick snacks to satisfy your cravings, 
        or gourmet delights to impress your guests, we’ve got you covered! 🌟 
        From mouthwatering appetizers to delightful desserts, our extensive collection of 
        recipes caters to every palate and occasion. 
        Let's embark on this culinary adventure together and explore flavors from around 
        the globe! 🌍👩‍🍳👨‍🍳 Dive into the world of cooking, get inspired, and unleash your inner chef!
      </p>
      <button className="search-button" onClick={handleSearchClick}>
        Search Recipes
      </button>
    </div>
  );
};

export default HomePage;
