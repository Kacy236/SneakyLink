import React from "react";
import "./InnovationComponent.css"; // Custom styles

const InnovationComponent = () => {
  return (
    <div className="innovation-wrapper">
      <div className="innovation-content">
        {/* Left: Car Image */}
        <div className="car-image">
          <img 
            src="./bmw.jpg" 
            alt="Blue BMW" 
          />
        </div>

        {/* Right: Text Section */}
        <div className="text-content">
          <div className="icon-header">
            <img 
              src="https://your-icon-url.com" 
              alt="Icon"
              className="icon"
            />
            <h2>INNOVATION FOR CONVENIENCE:</h2>
          </div>
          <p className="description">
            We are committed to leveraging technology to enhance the overall online shopping 
            experience, ensuring that customers can explore our offerings, make decisions, 
            and initiate the purchasing process with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InnovationComponent;
