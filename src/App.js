// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import "./assets/css/colors.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar Component */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer Component */}
          <Footer /> 
      </div>
    </Router>
  );
}

// Optional: Create a NotFound component
const NotFound = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>404 - Page Not Found</h2>
    <p>Sorry, the page you're looking for doesn't exist.</p>
  </div>
);

export default App;
