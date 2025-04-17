import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import React Icons
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3>About Me</h3>
          <p>
            Passionate developer specializing in modern web applications. Always eager to explore and learn new technologies.
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li>Email: sai619910@gmail.com</li>
            <li>Phone: 8074461483</li>
            <li>Location: Kadapa, Ap</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Connect</h3>
          <div className="footer-socials">
            <a
              href="https://github.com/Saikiran5656/JavaFullStack"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/banda-sai-kiran-9a878627b"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sai619910@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
