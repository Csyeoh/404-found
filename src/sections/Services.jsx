// src/sections/Services.jsx
import React from 'react';
import { Code2, Globe, Cpu } from 'lucide-react'; // We installed these icons earlier

const Services = () => {
  const serviceList = [
    {
      icon: <Code2 size={40} color="#00ff41" />,
      title: 'Web Development',
      desc: 'High-performance websites built with React.js and Node.js. We ensure your site is responsive and modern.',
    },
    {
      icon: <Globe size={40} color="#00ff41" />,
      title: 'IT Consultancy',
      desc: 'Expert advice on digital transformation. We analyze your business needs and provide tailored software solutions.',
    },
    {
      icon: <Cpu size={40} color="#00ff41" />,
      title: 'IoT Solutions',
      desc: 'Connecting hardware to the cloud. We build smart systems that automate your daily operations.',
    },
  ];

  return (
    <section id="services" style={styles.section}>
      <div className="container">
        <h2 style={styles.header}>Our <span style={{ color: 'var(--primary)' }}>Services</span></h2>
        
        <div style={styles.grid}>
          {serviceList.map((service, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconBox}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#0a0a0a',
    padding: '80px 0',
  },
  header: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '60px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsive Grid
    gap: '30px',
  },
  card: {
    backgroundColor: '#111', // Slightly lighter than background
    padding: '30px',
    borderRadius: '12px',
    border: '1px solid #333',
    transition: 'transform 0.3s ease, border-color 0.3s ease',
    cursor: 'default',
  },
  iconBox: {
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#fff',
  },
  cardDesc: {
    color: '#a0a0a0',
    lineHeight: '1.6',
  }
};

export default Services;