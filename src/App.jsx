// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Services from './sections/Services';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      {/* Main Content Sections */}
      <Hero />
      <About />
      <Products />
      <Services />
      <Team />
      <Contact />

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;