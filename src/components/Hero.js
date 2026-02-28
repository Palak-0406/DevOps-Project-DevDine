import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Order Food Online</h1>
        <p>Discover the best food & drinks in your city</p>
        <div className="hero-search">
          <input type="text" placeholder="Search for restaurants or dishes..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;