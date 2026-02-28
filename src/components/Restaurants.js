import React from 'react';
import './Restaurants.css';

const restaurants = [
  { id: 1, name: "Spice Garden", cuisine: "North Indian, Chinese", rating: 4.3, time: "30-35 mins", price: "₹300 for two", offer: "50% OFF up to ₹100" },
  { id: 2, name: "Pizza Palace", cuisine: "Pizza, Fast Food", rating: 4.5, time: "25-30 mins", price: "₹400 for two", offer: "Free Delivery" },
  { id: 3, name: "Biryani House", cuisine: "Biryani, Mughlai", rating: 4.2, time: "40-45 mins", price: "₹350 for two", offer: "60% OFF up to ₹120" },
  { id: 4, name: "Burger Barn", cuisine: "Burgers, American", rating: 4.4, time: "20-25 mins", price: "₹250 for two", offer: "Buy 1 Get 1 Free" },
  { id: 5, name: "Dosa Corner", cuisine: "South Indian", rating: 4.1, time: "25-30 mins", price: "₹200 for two", offer: "40% OFF up to ₹80" },
  { id: 6, name: "Chinese Wok", cuisine: "Chinese, Asian", rating: 4.0, time: "35-40 mins", price: "₹300 for two", offer: "Free Delivery" },
];

function Restaurants() {
  return (
    <div className="restaurants">
      <h2>Top Restaurants Near You</h2>
      <div className="restaurants-grid">
        {restaurants.map(rest => (
          <div className="restaurant-card" key={rest.id}>
            <div className="restaurant-image">
              🍽️
            </div>
            <div className="restaurant-info">
              <h3>{rest.name}</h3>
              <p className="cuisine">{rest.cuisine}</p>
              <div className="restaurant-meta">
                <span className="rating">⭐ {rest.rating}</span>
                <span className="time">🕐 {rest.time}</span>
              </div>
              <p className="price">{rest.price}</p>
              <div className="offer-badge">{rest.offer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurants;