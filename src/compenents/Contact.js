import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    setIsModalOpen(false);
  };

  return (
    <div id="contact" className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <button className="contact-button" onClick={handleModalOpen}>
        Open Contact Form
      </button>

      {isModalOpen && (
        <div className="contact-modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleModalClose}>
              &times;
            </span>
            <h3 className="modal-heading">Get in Touch</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="form-label" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Your Name"
                required
              />

              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Your Email"
                required
              />

              <label className="form-label" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit" className="submit-button">
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
