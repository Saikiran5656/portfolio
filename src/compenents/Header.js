// components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
  <h1 className="logo">My Portfolio</h1>
  <nav className="navigation">
    <ul>
      <li><a href="#about">About</a></li>
         <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
);

export default Header;
