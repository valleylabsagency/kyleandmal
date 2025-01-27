// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to help! Reach out to us with any questions or to schedule an appointment.</p>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Name<span className="required">*</span></label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email<span className="required">*</span></label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message<span className="required">*</span></label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="submit-button" disabled>
            Send Message
          </button>
        </form>
      </div>

      {/* Placeholder for Contact Information or Map (Optional) */}
      <div className="contact-info">
        {/* Replace this div with an actual image or map when available */}
        <div className="info-placeholder">Map Placeholder</div>
      </div>
    </div>
  );
};

export default Contact;
