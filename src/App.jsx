import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MealProvider } from './context/MealContext';
import HomePage from './components/HomePage'; // Import HomePage component
import SearchForm from './components/SearchForm';
import MealList from './components/MealList';

const App = () => {
  return (
    <MealProvider>
      <Router>
        <div className="App">
          <h1>Recipe On GO 🍵</h1>
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Home page route */}
            <Route path="/meals" element={<><SearchForm /><MealList /></>} /> {/* Meals page route */}
          </Routes>
        </div>
      </Router>
    </MealProvider>
  );
};

export default App;
