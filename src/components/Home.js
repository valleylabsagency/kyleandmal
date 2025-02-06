// src/components/Home.js
import React from 'react';
import './Home.css';
import { FaBath, FaCut, FaPaw, FaMedkit } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      {/* Jumbotron */}
      <div className="jumbotron">
        <h1>Pet Grooming in Tallahassee</h1>
      </div>

      {/* Informational Section */}
      <div className="info-section">
        <h2>
          At Kyle and Mal Dog Grooming, we understand that your furry friend is
          a cherished member of your family. Located in the heart of
          Tallahassee, Florida, we offer a range of grooming services tailored
          to meet the unique needs of each dog.
        </h2>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="service-box">
          <FaBath className="service-icon" />
          <h3>Bathing</h3>
          <button className="book-now">Book Now</button>
        </div>
        <div className="service-box">
          <FaCut className="service-icon" />
          <h3>Haircuts & Trims</h3>
          <button className="book-now">Book Now</button>
        </div>
        <div className="service-box">
          <FaPaw className="service-icon" />
          <h3>Nail Clipping</h3>
          <button className="book-now">Book Now</button>
        </div>
        <div className="service-box">
          <FaMedkit className="service-icon" />
          <h3>Specialized Treatments</h3>
          <button className="book-now">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
