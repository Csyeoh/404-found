import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu } from 'lucide-react';
import videoBg from '../assets/video/hero-bg.mp4';

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
    {
      icon: <Globe size={40} color="#00ff41" />,
      title: 'Cloud Architecture',
      desc: 'Scalable cloud infrastructure design using AWS and Azure. Secure, reliable, and cost-effective.',
    },
    {
      icon: <Code2 size={40} color="#00ff41" />,
      title: 'Mobile App Dev',
      desc: 'Native and Cross-platform mobile applications that provide intuitive user experiences on iOS and Android.',
    },
    {
      icon: <Cpu size={40} color="#00ff41" />,
      title: 'UI/UX Design',
      desc: 'Beautiful, user-centric designs that drive engagement. We prototype and test to ensure perfection.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" style={styles.section}>
      {/* Video Background */}
      <div style={styles.videoContainer}>
        <video autoPlay loop muted playsInline style={styles.video}>
          <source src={videoBg} type="video/mp4" />
        </video>
        <div style={styles.overlay}></div>
      </div>

      <div className="container" style={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.header}>Our <span style={{ color: 'var(--primary)' }}>Services</span></h2>
        </motion.div>

        <motion.div
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              style={styles.card}
              variants={itemVariants}
              whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
            >
              <div style={styles.iconBox}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#0a0a0a',
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay to make text readable
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2, // Ensure content is above the video and overlay
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
    backgroundColor: 'rgba(17, 17, 17, 0.8)', // Semi-transparent card background
    backdropFilter: 'blur(10px)', // Glassmorphism effect
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