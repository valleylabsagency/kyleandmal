// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  // Define an array of service objects
  const services = [
    {
      title: 'Bathing & Drying',
      description: 'Gentle and thorough bathing using hypoallergenic shampoos to keep your dog’s coat shiny and clean.',
      // Placeholder for future image
      image: 'placeholder',
    },
    {
      title: 'Haircuts & Trims',
      description: 'Professional haircuts tailored to your dog’s breed and style preferences, ensuring a neat and stylish look.',
      image: 'placeholder',
    },
    {
      title: 'Nail Clipping',
      description: 'Safe and precise nail trimming to maintain your dog’s paw health and prevent discomfort.',
      image: 'placeholder',
    },
    {
      title: 'Ear Cleaning',
      description: 'Careful ear cleaning to remove dirt and prevent infections, keeping your dog’s ears healthy.',
      image: 'placeholder',
    },
    {
      title: 'Teeth Brushing',
      description: 'Regular teeth brushing to promote oral health and reduce the risk of dental issues.',
      image: 'placeholder',
    },
    {
      title: 'Specialized Treatments',
      description: 'Customized treatments for specific needs, including flea and tick treatments, de-shedding, and more.',
      image: 'placeholder',
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {/* Image Placeholder */}
            <div className="service-image">
              <div className="image-placeholder">Image Placeholder</div>
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
