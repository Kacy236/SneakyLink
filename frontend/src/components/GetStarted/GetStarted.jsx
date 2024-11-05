import React from "react";
import "./GetStarted.css";
import { motion } from "framer-motion"; // Importing motion from Framer Motion for animations

const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <motion.span
            className="primaryText"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get started with Homyz
          </motion.span>
          <motion.span
            className="secondaryText"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </motion.span>
          <motion.button
            className="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="">Get Started</a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
