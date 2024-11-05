import React, { useState, useEffect } from 'react';
import './Hero2.css';

const images = [
  './sensor.jpg', // Local image path in public folder
  './sex.jpg',
  './lips.jpg',
];  // Add more URLs for flirty images if needed

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
      {/* Background image changing based on currentImage index */}
      <div
        className="hero-slider-background"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      
      {/* Content overlay */}
      <div className="hero-slider-content">
        <h1 className="hero-slider-title">Grab A Condom</h1>
        <p className="hero-slider-description">
          Meet fun people nearby, ready for something exciting.
        </p>
        <a href="/properties" className="hero-slider-btn">
          Start Exploring
        </a>
      </div>
    </div>
  );
};

export default Hero2;
