// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Team from './sections/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      
      {/* Main Content Sections */}
      <Hero />
      <Services />
      <Team />
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;