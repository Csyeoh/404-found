import React from 'react';
import { motion } from 'framer-motion';
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
      <div className="container">
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