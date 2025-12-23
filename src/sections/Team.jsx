// src/sections/Team.jsx
import React from 'react';

// TEAM DATA: Edit this list to add your real group members!
const teamMembers = [
  {
    name: "Your Name",
    role: "Lead Full Stack Developer",
    image: "https://ui-avatars.com/api/?name=Your+Name&background=00ff41&color=000", // Fallback placeholder
    bio: "Specializes in React.js architecture and server-side logic with Node.js."
  },
  {
    name: "Alex Chen",
    role: "UI/UX Designer",
    image: "https://ui-avatars.com/api/?name=Alex+Chen&background=333&color=fff",
    bio: "Focuses on user-centered design, accessibility, and interactive prototypes."
  },
  {
    name: "Sarah Jones",
    role: "IoT Specialist",
    image: "https://ui-avatars.com/api/?name=Sarah+Jones&background=333&color=fff",
    bio: "Connects physical hardware to cloud infrastructure for smart solutions."
  }
];

const Team = () => {
  return (
    <section id="team" style={styles.section}>
      <div className="container">
        <h2 style={styles.header}>Meet The <span style={{ color: 'var(--primary)' }}>Team</span></h2>
        
        <div style={styles.grid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.card}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#050505', // Darker background for contrast
    padding: '80px 0',
    borderTop: '1px solid #222',
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