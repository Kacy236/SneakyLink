import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./log.png" alt="" width={150} />
          <span className="secondaryText">
            Our vision is to give all people <br />
            the best way to live
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          
          <div className="flexCenter f-menu">
            <span>Sex</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
