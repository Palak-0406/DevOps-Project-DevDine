import React from 'react';
import './Categories.css';

const categories = [
  { id: 1, name: 'Biryani', emoji: '🍛' },
  { id: 2, name: 'Pizza', emoji: '🍕' },
  { id: 3, name: 'Burger', emoji: '🍔' },
  { id: 4, name: 'Chinese', emoji: '🍜' },
  { id: 5, name: 'South Indian', emoji: '🥘' },
  { id: 6, name: 'North Indian', emoji: '🍲' },
  { id: 7, name: 'Desserts', emoji: '🍰' },
  { id: 8, name: 'Drinks', emoji: '🥤' },
];

function Categories() {
  return (
    <div className="categories">
      <h2>What's on your mind?</h2>
      <div className="categories-grid">
        {categories.map(cat => (
          <div className="category-card" key={cat.id}>
            <span className="category-emoji">{cat.emoji}</span>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;