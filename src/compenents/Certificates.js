import React from 'react';
import '../styles/Certificates.css';

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-container">
        <h2 className="certificates-title">Certificates</h2>
        <p className="certificates-description">Here are some of the certifications I've earned:</p>
        <div className="certificates-list">
          {/* SmartBridge Internship */}
          <div className="certificate-item">
            <div className="certificate-header">
              <h3>Salesforce Developer Virtual Internship</h3>
              <div className="certificate-details">
                <p className="issuer">Issued By: <strong>SmartBridge in partnership with AICTE & SmartInternz</strong></p>
                <p className="duration">Duration: <strong>8 Weeks (November 2024 - January 2025)</strong></p>
                <p className="completion-date">Completion Date: <strong>January 26, 2025</strong></p>
              </div>
            </div>
            <p className="certificate-id">Certificate ID: <strong>SISFVIPAD2025-10635</strong></p>
           
          </div>

          {/* NPTEL Certification */}
          <div className="certificate-item">
            <div className="certificate-header">
              <h3>Design and Analysis of VLSI Subsystems</h3>
              <div className="certificate-details">
                <p className="issuer">Issued By: <strong>NPTEL (Funded by MoE, Govt. of India)</strong></p>
                <p className="duration">Course Duration: <strong>Jan-Apr 2024 (12 weeks)</strong></p>
                <p className="completion-date">Completion Date: <strong>April 2024</strong></p>
              </div>
            </div>
            <p className="certificate-id">Certificate ID: <strong>NPTEL24EE44S658401464</strong></p>
            
            
          </div>

          {/* FutureSkills Certification */}
          <div className="certificate-item">
            <div className="certificate-header">
              <h3>Data Science for Beginners</h3>
              <div className="certificate-details">
                <p className="issuer">Issued By: <strong>Futureskills® Prime, NASSCOM</strong></p>
                <p className="duration">Date of Issue: <strong>July 21, 2023</strong></p>
                <p className="completion-date">Certification: <strong>Gold</strong></p>
              </div>
            </div>
            <p className="certificate-id">Certificate ID: <strong>FSP/2023/7/4094350</strong></p>
            
          </div>

          {/* Other certificates can be added here */}
        </div>
      </div>
    </section>
  );
};

export default Certificates;