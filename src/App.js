import React from 'react';
import Header from './compenents/Header';
import AboutMe from './compenents/AboutMe';
import Skills from './compenents/Skills';
import Projects from './compenents/Projects';
import Contact from './compenents/Contact';
import Footer from './compenents/Footer';
import Education from './compenents/Education';
import Welcome from './compenents/Welcome';
import Certificates from './compenents/Certificates';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Welcome/>
      <AboutMe/>
      <Education/>
      <Skills/>
      <Certificates/>
      <Projects/>
      <Contact/>

      <Footer/>
    </div>
  );
}

export default App;
