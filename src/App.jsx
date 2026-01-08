// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Achievements from './sections/Achievements';
import Services from './sections/Services';
import VideoShowcase from './sections/VideoShowcase';
import Team from './sections/Team';
import ClientFeedback from './sections/ClientFeedback';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      {/* Main Content Sections */}
      <Hero />
      <About />
      <Achievements />
      <Products />
      <Services />
      <VideoShowcase />
      <Team />
      <ClientFeedback />
      <Contact />

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;