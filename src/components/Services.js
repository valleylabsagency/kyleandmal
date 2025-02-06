// src/components/Services.js
import React from 'react';
import './Services.css';
import treatment from '../assets/images/treatments.jpg';
import bathing from '../assets/images/bathing.jpg';
import ear from '../assets/images/ear.jpg';
import nail from '../assets/images/nail.jpg';
import teeth from '../assets/images/teeth.jpg';
import trim from '../assets/images/trim.jpg';

const Services = () => {
  // Define an array of service objects
  const services = [
    {
      title: 'Bathing & Drying',
      description: 'Gentle and thorough bathing using hypoallergenic shampoos to keep your dog’s coat shiny and clean.',
      image: bathing,
    },
    {
      title: 'Haircuts & Trims',
      description: 'Professional haircuts tailored to your dog’s breed and style preferences, ensuring a neat and stylish look.',
      image: trim,
    },
    {
      title: 'Nail Clipping',
      description: 'Safe and precise nail trimming to maintain your dog’s paw health and prevent discomfort.',
      image: nail,
    },
    {
      title: 'Ear Cleaning',
      description: 'Careful ear cleaning to remove dirt and prevent infections, keeping your dog’s ears healthy.',
      image: ear,
    },
    {
      title: 'Teeth Brushing',
      description: 'Regular teeth brushing to promote oral health and reduce the risk of dental issues.',
      image: teeth,
    },
    {
      title: 'Specialized Treatments',
      description: 'Customized treatments for specific needs, including flea and tick treatments, de-shedding, and more.',
      image: treatment,
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img style={{width: "90%", height: 200, borderRadius: 12}} src={service.image} alt={service.title} />
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
