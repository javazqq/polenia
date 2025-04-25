import React from 'react';
import './HomeScreen.css';
import Products from '../components/Products';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <header className="home-header">
        <h1>Welcome to Our Store!</h1>
        <p>Find the best products below:</p>
      </header>
      <Products />
    </div>
  );
};


export default HomeScreen;
