// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        {/* Image Placeholder */}
        <div className="about-image">
          {/* Replace this div with an <img> tag when you have an image */}
          <div className="image-placeholder">Image Placeholder</div>
        </div>
        
        {/* Text Content */}
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Welcome to KyleandMal Dog Grooming! Founded in 2015 by Kyle Reed and Mallory Starkey, our mission has always been to provide top-notch grooming services tailored to each dog's unique needs. With over a decade of combined experience in pet care, we understand that every dog deserves love, attention, and professional grooming to stay happy and healthy.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            At KyleandMal, we are dedicated to enhancing the well-being of your furry friends. Our mission is to create a comfortable and stress-free environment where your dog can enjoy personalized grooming treatments. We believe in using the highest quality products and the latest grooming techniques to ensure your pet looks and feels their best.
          </p>
          
          <h2>Meet the Team</h2>
          <p>
            Our team of certified groomers is passionate about animals and committed to excellence. We continuously update our skills and knowledge to stay ahead in the pet grooming industry. When you choose KyleandMal, you're choosing a team that treats your dog like family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
