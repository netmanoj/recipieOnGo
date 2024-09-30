import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon
import './css/footer.css'; // Make sure to create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Recipe On GO. All rights reserved.</p>
        <a href="https://github.com/netmanoj/recipieOnGo" target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub className="github-icon" /> Visit Repository
        </a>
      </div>
    </footer>
  );
};

export default Footer;
