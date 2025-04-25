import React from 'react';
import Products from '../components/Products'; // Import your Products component

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
