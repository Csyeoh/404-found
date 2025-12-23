// src/sections/Hero.jsx
import React from 'react';
import { Link } from 'react-scroll'; // <--- Import the scroller

const Hero = () => {
  return (
    <section id="home" style={styles.section}>
      {/* Animated Cyber Grid Background */}
      <div style={styles.gridBg}></div>
      <div style={styles.overlay}></div>

      <div className="container" style={styles.content}>
        <h2 style={styles.subHeadline}>&lt; 404 Found /&gt;</h2>
        <h1 style={styles.headline}>
          WE FIND THE SOLUTIONS <br />
          <span style={{ color: 'var(--primary)' }}>OTHERS CAN'T.</span>
        </h1>
        <p style={styles.description}>
          Specializing in Software Engineering, IoT, and Modern Web Design.
          We turn your 404 errors into 200 OK.
        </p>
        
        {/* UPDATED BUTTONS using react-scroll */}
        <div style={styles.buttonGroup}>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            offset={-50}
            style={styles.primaryButton}
          >
            Start Project
          </Link>
          
          <Link 
            to="services" 
            smooth={true} 
            duration={500} 
            style={styles.outlineButton}
          >
            Our Services
          </Link>
        </div>

      </div>
    </section>
  );
};

const styles = {
  section: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#050505',
  },
  gridBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `
      linear-gradient(rgba(0, 255, 65, 0.4) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 65, 0.4) 1px, transparent 1px)
    `,
    backgroundSize: '30px 30px', 
    zIndex: 0,
    opacity: 0.6, 
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at center, transparent 0%, #050505 90%)', 
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    padding: '0 20px',
  },
  subHeadline: {
    color: 'var(--primary)',
    fontFamily: 'monospace',
    fontSize: '1.2rem',
    marginBottom: '10px',
    letterSpacing: '2px',
  },
  headline: {
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '20px',
    color: '#fff',
  },
  description: {
    fontSize: '1.2rem',
    color: '#a0a0a0',
    maxWidth: '600px',
    margin: '0 auto 40px auto',
    lineHeight: '1.6',
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  primaryButton: {
    padding: '15px 35px',
    fontSize: '1rem',
    backgroundColor: 'var(--primary)',
    color: '#000',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '4px',
    transition: 'transform 0.2s',
    cursor: 'pointer', // Ensure cursor is a pointer
    display: 'inline-block' // Fixes layout for Link components
  },
  outlineButton: {
    padding: '15px 35px',
    fontSize: '1rem',
    backgroundColor: 'transparent',
    border: '1px solid var(--primary)',
    color: 'var(--primary)',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-block'
  }
};

export default Hero;