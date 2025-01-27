// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Kyle and Mal Dog Grooming</h1>
      <p>
        At Kyle and Mal Dog Grooming, we understand that your furry friend is a cherished member of your family. Located in the heart of Tallahassee, Florida, we offer a range of grooming services tailored to meet the unique needs of each dog.
      </p>
      <h2>Our Services</h2>
      <ul>
        <li>Bathing and Drying</li>
        <li>Haircuts and Trims</li>
        <li>Nail Clipping</li>
        <li>Ear Cleaning</li>
        <li>Specialized Treatments</li>
      </ul>
      <h2>Meet the Owners</h2>
      <p>
        Founded by Kyle Reed and Mallory Starkey, our passion for dogs drives us to provide exceptional grooming experiences. With years of experience and a love for animals, we're dedicated to making your pet look and feel their best.
      </p>
      <h2>Why Choose Us?</h2>
      <ul>
        <li>Experienced and Caring Staff</li>
        <li>Personalized Grooming Plans</li>
        <li>State-of-the-Art Facilities</li>
        <li>Convenient Location in Tallahassee</li>
      </ul>
    </div>
  );
};

export default Home;
