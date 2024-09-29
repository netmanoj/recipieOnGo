import React, { createContext, useState, useContext } from 'react';

// Create the MealContext
const MealContext = createContext();

// Create a provider component
export const MealProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const appId = 'f041ccdf'; // Your app_id
  const appKey = '640e33cb781d0f9380c81e2abfaa4259'; // Your app_key
  const userId = 'your_user_id_here'; // Your Edamam account user ID
  const baseURL = 'https://api.edamam.com/search';

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${baseURL}?q=${query}&app_id=${appId}&app_key=${appKey}`,
        {
          method: 'GET',
          headers: {
            'Edamam-Account-User': userId, // Add the user ID here
          },
        }
      );
      const data = await response.json();
      setRecipes(data.hits); // Update recipes state with the fetched data
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchQuery) => {
    if (searchQuery) {
      setQuery(searchQuery);
      fetchRecipes();
    }
  };

  return (
    <MealContext.Provider value={{ query, setQuery, recipes, loading, handleSearch }}>
      {children}
    </MealContext.Provider>
  );
};

// Custom hook to use the MealContext
export const useMealContext = () => {
  return useContext(MealContext);
};
