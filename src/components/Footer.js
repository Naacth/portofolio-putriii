import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <span>&copy; {new Date().getFullYear()} Putri Anggriyani. All rights reserved.</span>
    </footer>
  );
}

export default Footer; 