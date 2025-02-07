// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section about">
          <h3>KyleandMal Dog Grooming</h3>
          
        </div>

        {/* Hours */}
        <div className="footer-section links">
          <h4>Hours</h4>
          <ul>
            <li>Monday: 9am - 6pm</li>
            <li>Tuesday: 9am - 6pm</li>
            <li>Wednesday: 9am - 6pm</li>
            <li>Thursday: 9am - 6pm</li>
            <li>Friday: 9am - 6pm</li>
            <li>Saturday: 9am - 12pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>1234 Grooming Lane, Tallahassee, FL 32301</p>
          <p>Phone: (850) 123-4567</p>
          <p>Email: contact@kyleandmalgrooming.com</p>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} KyleandMal Dog Grooming. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
