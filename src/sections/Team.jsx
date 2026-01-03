// src/sections/Team.jsx
import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Yeoh Chong Xiang",
    role: "Lead Full Stack Developer",
    image: "https://ui-avatars.com/api/?name=Chong+Xiang&background=00ff41&color=000", // Fallback placeholder
    bio: "Specializes in React.js architecture and server-side logic with Node.js."
  },
  {
    name: "Tan Jing En",
    role: "UI/UX Designer",
    image: "https://ui-avatars.com/api/?name=Jing+En&background=333&color=fff",
    bio: "Focuses on user-centered design, accessibility, and interactive prototypes."
  },
  {
    name: "Tan Chuan Huan",
    role: "IoT Specialist",
    image: "https://ui-avatars.com/api/?name=Chuan+Huan&background=333&color=fff",
    bio: "Connects physical hardware to cloud infrastructure for smart solutions."
  },
  {
    name: "Teoh Yixun",
    role: "Cloud Architect",
    image: "https://ui-avatars.com/api/?name=Yixun+Teoh&background=333&color=fff",
    bio: "Certified AWS Solutions Architect ensuring scalability and 99.9% uptime."
  },
  {
    name: "Alvin Teh Jun You",
    role: "Product Manager",
    image: "https://ui-avatars.com/api/?name=Jun+You&background=333&color=fff",
    bio: "Bridges the gap between business needs and technical implementation."
  }
];

const Team = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="team" style={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.header}>Meet The <span style={{ color: 'var(--primary)' }}>Team</span></h2>
        </motion.div>

        <motion.div
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              style={styles.card}
              variants={itemVariants}
              whileHover={{ y: -10, borderColor: 'var(--primary)' }}
            >
              {/* Profile Image Wrapper */}
              <div style={styles.imgWrapper}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={styles.img}
                />
              </div>

              <h3 style={styles.name}>{member.name}</h3>
              <p style={styles.role}>{member.role}</p>
              <p style={styles.bio}>{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#050505', // Darker background for contrast
    padding: '80px 0',
  },
  header: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '60px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '40px',
  },
  card: {
    backgroundColor: '#111',
    padding: '40px 20px',
    borderRadius: '16px',
    textAlign: 'center',
    width: '300px',
    border: '1px solid #222',
    transition: 'transform 0.3s ease',
  },
  imgWrapper: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 20px auto',
    border: '3px solid var(--primary)',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  name: {
    fontSize: '1.5rem',
    marginBottom: '5px',
    color: '#fff',
  },
  role: {
    color: 'var(--primary)', // Green text for role
    fontWeight: 'bold',
    fontFamily: 'monospace',
    marginBottom: '15px',
  },
  bio: {
    color: '#aaa',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  }
};

export default Team;