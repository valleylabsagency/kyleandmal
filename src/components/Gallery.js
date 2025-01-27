// src/components/Gallery.js
import React, { useState } from 'react';
import './Gallery.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import { FaArrowDown } from 'react-icons/fa'; // Icon for "Show More" button

const Gallery = () => {
  // State to manage the number of images displayed
  const [showMore, setShowMore] = useState(false);

  // Array of carousel images (placeholders)
  const carouselImages = [
    { id: 1, title: 'Happy Grooming Session', color: '#FFB6C1' },
    { id: 2, title: 'Stylish Cuts', color: '#ADD8E6' },
    { id: 3, title: 'Playful Pups', color: '#90EE90' },
  ];

  // Array of gallery images (placeholders)
  const galleryImages = [
    { id: 4, title: 'Cozy Baths', color: '#FFA07A' },
    { id: 5, title: 'Nail Trimming', color: '#20B2AA' },
    { id: 6, title: 'Ear Cleaning', color: '#9370DB' },
    { id: 7, title: 'Teeth Brushing', color: '#FFD700' },
    { id: 8, title: 'De-shedding Treatment', color: '#FF69B4' },
    { id: 9, title: 'Specialized Care', color: '#87CEFA' },
    { id: 10, title: 'Spa Day', color: '#32CD32' },
    { id: 11, title: 'Breed-Specific Cuts', color: '#FF8C00' },
  ];

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="gallery-container">
      {/* Jumbotron Section */}
      <div className="jumbotron">
        <h1>Our Gallery</h1>
        <p>See the transformation and happiness we bring to every furry friend!</p>
      </div>

      {/* Carousel Section */}
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000}
          showStatus={false}
          transitionTime={700}
          swipeable
          emulateTouch
        >
          {carouselImages.map((image) => (
            <div key={image.id} className="carousel-slide">
              <div
                className="carousel-image"
                style={{ backgroundColor: image.color }}
              >
                <h2>{image.title}</h2>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Gallery Images Section */}
      <div className="gallery-images">
        {galleryImages.slice(0, showMore ? galleryImages.length : 4).map((image) => (
          <div
            key={image.id}
            className="gallery-image"
            style={{ backgroundColor: image.color }}
            title={image.title}
          >
            {/* Placeholder for future images */}
            <span>{image.title}</span>
          </div>
        ))}
      </div>

      {/* "Show More" Button */}
      <button className="show-more-button" onClick={handleShowMore}>
        {showMore ? 'Show Less' : 'Show More'} <FaArrowDown />
      </button>
    </div>
  );
};

export default Gallery;
