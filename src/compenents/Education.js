import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'KSRM  COLLEGE OF Engineering',
      institution: 'JNTU-A University',
      year: '2021 - 2025',
      description: 'Focused on software development, algorithms, and data structures.',
    },
    {
      degree: 'Intermediate',
      field: 'Maths, Physics, and Chemistry',
      institution: 'LRG NAIDU Junior College',
      year: '2019 - 2021',
      description: 'Emphasis on foundational knowledge in sciences and mathematics.',
    },
    {
      degree: 'High School',
      field: 'General Studies',
      institution: 'SKR EM High School',
      year: '2018 - 2019',
      description: 'Completed with a strong focus on overall academic excellence.',
    },
  ];

  return (
    <div className="education-container">
      <h2 className="education-heading">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-field">{edu.field}</p>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-year">{edu.year}</p>
            <p className="education-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
