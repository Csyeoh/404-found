// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>

        {/* Logo */}
        <div style={styles.logo}>
          <Link to="home" smooth={true} duration={500} style={{ cursor: 'pointer' }}>
            <span className="glitch" data-text="404" style={{ color: 'var(--primary)' }}>404</span> FOUND
          </Link>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="desktop-menu" style={styles.desktopMenu}>
          <li><Link to="home" smooth={true} duration={500} spy={true} activeClass="active" style={styles.link}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} spy={true} activeClass="active" style={styles.link}>About</Link></li>
          <li><Link to="products" smooth={true} duration={500} spy={true} activeClass="active" style={styles.link}>Products</Link></li>
          <li><Link to="services" smooth={true} duration={500} spy={true} activeClass="active" style={styles.link}>Services</Link></li>
          <li><Link to="team" smooth={true} duration={500} spy={true} activeClass="active" style={styles.link}>Team</Link></li>
          <li><Link to="contact" smooth={true} duration={500} offset={-50} style={styles.ctaButton}>Start Project</Link></li>
        </ul>

        {/* Mobile Hamburger Icon (Visible only on Mobile) */}
        <div className="mobile-icon" onClick={toggleMenu} style={styles.mobileIcon}>
          {isOpen ? <X color="#fff" /> : <Menu color="#fff" />}
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div style={styles.mobileMenu}>
            <Link to="home" smooth={true} duration={500} onClick={closeMenu} style={styles.mobileLink}>Home</Link>
            <Link to="about" smooth={true} duration={500} onClick={closeMenu} style={styles.mobileLink}>About</Link>
            <Link to="products" smooth={true} duration={500} onClick={closeMenu} style={styles.mobileLink}>Products</Link>
            <Link to="services" smooth={true} duration={500} onClick={closeMenu} style={styles.mobileLink}>Services</Link>
            <Link to="team" smooth={true} duration={500} onClick={closeMenu} style={styles.mobileLink}>Team</Link>
            <Link to="contact" smooth={true} duration={500} offset={-50} onClick={closeMenu} style={styles.mobileCta}>Start Project</Link>
          </div>
        )}

      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '70px',
    backgroundColor: 'rgba(10, 10, 10, 0.95)',
    borderBottom: '1px solid #333',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '0 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#fff',
  },
  // We will handle hiding/showing this via CSS file for simplicity, 
  // but keeping base styles here
  desktopMenu: {
    display: 'flex', // Default for desktop
    gap: '30px',
    listStyle: 'none',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  ctaButton: {
    backgroundColor: 'var(--primary)',
    color: '#000',
    padding: '8px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
  mobileIcon: {
    cursor: 'pointer',
    display: 'none', // Hidden by default on desktop
  },
  mobileMenu: {
    position: 'absolute',
    top: '70px',
    left: 0,
    width: '100%',
    backgroundColor: '#0a0a0a',
    borderBottom: '1px solid #333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0',
    gap: '20px',
  },
  mobileLink: {
    color: '#fff',
    fontSize: '1.2rem',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  mobileCta: {
    backgroundColor: 'var(--primary)',
    color: '#000',
    padding: '10px 30px',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  }
};

export default Navbar;