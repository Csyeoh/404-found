// src/sections/Hero.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "< 404 Found />";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 150); // Typing speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" style={styles.section}>
      {/* Inject Keyframes for Blinking Cursor */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}
      </style>

      {/* Animated Cyber Grid Background */}
      <div style={styles.gridBg}></div>
      <div style={styles.overlay}></div>

      <div className="container" style={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.subHeadline}>
            {text}
            <span style={styles.cursor}>_</span>
          </h2>
        </motion.div>

        <motion.h1
          style={styles.headline}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          WE FIND THE SOLUTIONS <br />
          <span style={{ color: 'var(--primary)' }}>OTHERS CAN'T.</span>
        </motion.h1>

        <motion.p
          style={styles.description}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Specializing in Software Engineering, IoT, and Modern Web Design.
          We turn your 404 errors into 200 OK.
        </motion.p>

        <motion.div
          style={styles.buttonGroup}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
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
        </motion.div>

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
    minHeight: '1.5em',
  },
  cursor: {
    display: 'inline-block',
    // Uses the 'blink' keyframes defined in the component
    animation: 'blink 1s infinite', 
    color: 'var(--primary)',
    marginLeft: '5px',
    fontWeight: 'bold',
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
    cursor: 'pointer',
    display: 'inline-block'
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