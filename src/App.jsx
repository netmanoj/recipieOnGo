import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MealProvider } from './context/MealContext';
import Header from './components/Header'; // Import the Header
import HomePage from './components/HomePage'; 
import SearchForm from './components/SearchForm';
import MealList from './components/MealList';
import Footer from './components/Footer'; // Import the Footer

const App = () => {
  return (
    <MealProvider>
      <Router>
        <div className="App">
          <Header /> {/* Include the Header */}
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Home page route */}
            <Route path="/meals" element={<><SearchForm /><MealList /></>} /> {/* Meals page route */}
          </Routes>
          <Footer /> {/* Include the Footer */}
        </div>
      </Router>
    </MealProvider>
  );
};

export default App;
