import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/homepage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearchClick = () => {
    navigate('/meals');
  };

  const categories = [
    { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
    { id: 'lunch', name: 'Lunch', icon: '🥗' },
    { id: 'dinner', name: 'Dinner', icon: '🍽️' },
    { id: 'dessert', name: 'Dessert', icon: '🍰' },
    { id: 'snacks', name: 'Snacks', icon: '🍿' }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Add a small delay before navigation for animation
    setTimeout(() => {
      navigate(`/meals?category=${categoryId}`);
    }, 300);
  };

  return (
    <div className="home-page">
      <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <h1>Welcome to Recipe On Go ‎𐂐◯𓇋</h1>
          <p className="hero-text">
            Discover the best recipes that the culinary world has to offer! 
            From healthy options to gourmet delights, we've got you covered.
          </p>
          <button className="search-button" onClick={handleSearchClick}>
            Get Started ↩
          </button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="categories-section">
        <h2>Explore Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🌟</span>
            <h3>Curated Recipes</h3>
            <p>Carefully selected recipes from around the world</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Quick & Easy</h3>
            <p>Simple steps for delicious results</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🥗</span>
            <h3>Healthy Options</h3>
            <p>Nutritious meals for every diet</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Cooking?</h2>
        <p>Join thousands of food enthusiasts and start your culinary journey today!</p>
        <button className="cta-button" onClick={handleSearchClick}>
          Explore Recipes →
        </button>
      </section>
    </div>
  );
};

export default HomePage;
