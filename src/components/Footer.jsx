// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" style={styles.footer}>
      {/* We use the 'footer-content' class to target it in CSS easily */}
      <div className="container footer-content" style={styles.flexContainer}>

        {/* Left Side: Brand & Copyright */}
        <div style={styles.leftSection}>
          <h3 style={styles.brand}>404 FOUND</h3>
          <p style={styles.copy}>
            &copy; 2026 404 FOUND. <br />
            Built with React.js & Node.js
          </p>
        </div>

        {/* Right Side: Contact Info */}
        <div style={styles.rightSection}>
          <h4 style={{ color: '#fff', marginBottom: '10px' }}>Contact Us</h4>
          <p><strong>Location:</strong> Penang, Malaysia</p>
          <p><strong>Email:</strong> hello@404found.tech</p>
          <p><strong>Phone:</strong> +60 12-345 6789</p>
        </div>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    padding: '60px 0',
    color: '#888',
    marginTop: 'auto',
  },
  // We keep this flexible, but allow CSS to override it on mobile
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    flexWrap: 'wrap',
  },
  leftSection: {
    textAlign: 'left', // Default for Desktop
  },
  rightSection: {
    textAlign: 'right', // Default for Desktop
  },
  brand: {
    color: '#fff',
    fontSize: '1.5rem',
    marginBottom: '15px',
    letterSpacing: '1px',
    fontFamily: 'monospace',
  },
  copy: {
    fontSize: '0.9rem',
    lineHeight: '1.6',
  }
};

export default Footer;