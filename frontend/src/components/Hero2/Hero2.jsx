import React, { useState, useEffect } from 'react';
import './Hero2.css';

const images = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d',
  'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
]; // Replace with actual image URLs

const Hero2 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider-container">
      <div
        className="hero-slider-background"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      <div className="hero-slider-content">
        <h1 className="hero-slider-title">Discover Luxury Properties</h1>
        <p className="hero-slider-description">
          Experience the finest homes in the most desirable locations.
        </p>
        <a href="#properties" className="hero-slider-btn">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default Hero2;
