import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div id="about" className="about-me-container">
      <h2 className="about-me-heading">About Me</h2>
      <div className="about-me-content">
        {/* Image Section */}
        <div className="about-me-image">
          <img
            src={require('../assets/saikiran.jpg')}
            alt="Profile"
            className="profile-picture"
          />
        </div>

        {/* Description Section */}
        <div className="about-me-description">
          <p>
            Hello! I'm a passionate and enthusiastic developer with a strong
            interest in building engaging, responsive, and modern web
            applications. I specialize in both frontend and backend development,
            blending creativity with robust engineering to create meaningful
            digital experiences.
          </p>
          <p>
            My journey in technology started with a curiosity about how things
            work. Today, I thrive on solving complex problems and turning ideas
            into reality. I stay committed to lifelong learning and believe in
            the power of collaboration to drive impactful results.
          </p>
          <div className="about-me-highlights">
            <h3>Key Highlights:</h3>
            <ul>
              <li> Strong foundation in HTML, CSS, JavaScript, and ReactJS.</li>
              <li> Proficient in backend technologies like Java and MySQL.</li>
              <li> Passionate about learning and exploring new technologies.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
