import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🍽️ DevDine
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Offers</li>
        <li>Help</li>
        <li>Sign In</li>
      </ul>
    </nav>
  );
}

export default Navbar;