import React from 'react';
import './css/footer.css'; // Make sure to create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Recipe On GO. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
