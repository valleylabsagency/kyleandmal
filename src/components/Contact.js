// src/components/Contact.js
import React, { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const address = "4007 Harpers Ferry Dr, Tallahassee, FL 32308";
  const latitude = 30.497406005859375;
  const longitude = -84.21651458740234;
  const googleMapsApiKey = "AIzaSyB8E_cLYkyucEiiP1XnxX59TVy59mEQenQ"; 

  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    try {
      if (!document.querySelector("#google-maps-script")) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=console.debug&libraries=maps,marker&v=beta`;
        script.id = "google-maps-script";
        script.async = true;

        script.onload = () => {
          console.log("Google Maps script loaded successfully.");
        };

        script.onerror = () => {
          console.error("Google Maps script failed to load.");
          setMapError(true);
        };

        document.body.appendChild(script);
      }
    } catch (error) {
      console.error("Error loading Google Maps script:", error);
      setMapError(true);
    }
  }, []);

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
            <label htmlFor="name">
              Name<span className="required">*</span>
            </label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email<span className="required">*</span>
            </label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message<span className="required">*</span>
            </label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="submit-button" disabled>
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information and Google Maps Section */}
      <div className="contact-info">
        <h2>Our Location</h2>
        <p>{address}</p>
        <div className="map-container">
          {mapError ? (
            <p style={{ color: "red" }}>Error loading map. Please try again later.</p>
          ) : (
            <gmp-map center={`${latitude},${longitude}`} zoom="14" map-id="DEMO_MAP_ID" style={{ width: "100%", height: "600px" }}>
              <gmp-advanced-marker position={`${latitude},${longitude}`} title="My location"></gmp-advanced-marker>
            </gmp-map>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
