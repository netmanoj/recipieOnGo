import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css'; // Create this CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <h1>Recipe On Go ‎𐂐◯𓇋</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/meals">Search Recipes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
