import React from 'react';
import '../styles/Skills.css';
    const Skills = () => {
      const frontendSkills = [
        { name: 'HTML', level: 90, description: 'The foundation of web pages, creating structure and layout.' },
        { name: 'CSS', level: 85, description: 'Styling web pages with modern and responsive designs.' },
        { name: 'JavaScript', level: 88, description: 'Adding interactivity and functionality to websites.' },
      ];
    
      const backendSkills = [
        { name: 'Java', level: 85, description: 'Building robust backend systems and APIs.' },
        { name: 'MySQL', level: 80, description: 'Managing databases with queries and optimization.' },
        { name: 'Node.js', level: 80, description: 'Building server-side applications and RESTful APIs.' },
      ];
    
      return (
        <div id="skills"className="skills-container">
          <h2 className="skills-heading">My Skills</h2>
    
          <div className="skills-section">
            <h3 className="skills-subheading">Frontend</h3>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-bar">
                    <div
                      className="skill-level"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
    
          <div className="skills-section">
            <h3 className="skills-subheading">Backend</h3>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-bar">
                    <div
                      className="skill-level"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Skills;
    