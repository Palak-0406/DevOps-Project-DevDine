import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Restaurants from './components/Restaurants';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Categories />
      <Restaurants />
      <Footer />
    </div>
  );
}

export default App;