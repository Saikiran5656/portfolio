import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectDetails = [
    {
      title: 'E-Commerce Website',
      description:
        'A comprehensive full-stack web application integrating dynamic user interfaces and robust backend functionality to deliver a seamless user experience.',
      features: [
        'Dynamic and responsive design built using React.js for the frontend.',
        'Styled components with HTML and CSS for intuitive user interactions.',
        'Core features implemented: user login, registration, product display, shopping cart functionality, and order submission.',
        'Backend developed with Spring Boot for handling application logic and data processing.',
        'MySQL database used for secure and efficient data storage, managing user profiles, product details, and transactions.',
        'RESTful APIs designed for seamless communication between the frontend and backend.',
        'Optimized data exchange and synchronization ensuring consistent user experience.',
      ],
      technologies: ['React.js', 'HTML5', 'CSS3', 'Spring Boot', 'MySQL'],
    },
    {
      title: 'CRM Application for Laptop Rentals',
      description:
        'A Salesforce-based CRM solution for managing laptop rental services, offering an efficient way to handle customer interactions and service workflows.',
      features: [
        'Implemented custom objects and fields to represent rental data including laptops, customers, and transactions.',
        'Developed a comprehensive dashboard for tracking rental status and customer interactions.',
        'Integrated workflows for sending automated email notifications for overdue returns.',
        'Built custom Lightning components for an enhanced user interface.',
        'Used Apex triggers to enforce business logic and data validation.',
        'Generated detailed reports and dashboards for performance monitoring.',
      ],
      technologies: ['Salesforce', 'Apex', 'Lightning Web Components', 'SOQL', 'Workflow Rules'],
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-list">
        {projectDetails.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <h4 className="project-subheading">Key Features:</h4>
            <ul className="project-features">
              {project.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  {feature}
                </li>
              ))}
            </ul>
            <h4 className="project-subheading">Technologies Used:</h4>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
