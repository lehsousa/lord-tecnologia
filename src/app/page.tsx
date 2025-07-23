
"use client";

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';



const App = () => {




  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Home Section */}
      <Home />

      {/* About Section - New Style */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;