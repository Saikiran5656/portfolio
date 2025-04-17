import React from 'react';
import '../styles/Welcome.css';
import profilePhoto from '../assets/myPhoto1.jpg'; // Replace with your photo's path

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-background"></div>
      <div className="welcome-content">
       
        <div className="welcome-text">
          <h1 className="welcome-heading">Welcome to My Portfolio</h1>
          <p className="welcome-subheading">
            Hi there! I'm Sai Kiran, a passionate developer eager to create and innovate.
          </p>
          <button
            className="welcome-button"
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
