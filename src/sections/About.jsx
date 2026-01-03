import React from 'react';
import { motion } from 'framer-motion';
import futuristicVideo from '../assets/video/Futuristic_Video.mp4';

const About = () => {
    return (
        <section id="about" style={styles.section}>
            {/* Video Background */}
            <div style={styles.videoContainer}>
                <video autoPlay loop muted playsInline style={styles.video}>
                    <source src={futuristicVideo} type="video/mp4" />
                </video>
                <div style={styles.overlay}></div>
            </div>

            <div className="container" style={{ ...styles.container, ...styles.content }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    style={styles.contentHelper}
                >
                    <h2 style={styles.header}>
                        About <span style={{ color: 'var(--primary)' }}>404 Found</span>
                    </h2>

                    <div style={styles.grid}>
                        {/* Company Background */}
                        <div style={styles.card}>
                            <h3 style={styles.subHeader}>Who We Are</h3>
                            <p style={styles.text}>
                                Founded by a group of passionate Computer Science graduates,
                                <strong> 404 Found</strong> is a forward-thinking tech collective.
                                We specialize in untangling complex digital problems and delivering
                                robust software solutions. In a world full of errors, we are the fix.
                            </p>
                        </div>

                        {/* Mission */}
                        <div style={styles.card}>
                            <h3 style={styles.subHeader}>Our Mission</h3>
                            <p style={styles.text}>
                                To empower businesses with cutting-edge technology. We strive to
                                eliminate inefficiencies and build digital ecosystems that are
                                scalable, secure, and user-centric.
                            </p>
                        </div>

                        {/* Vision */}
                        <div style={styles.card}>
                            <h3 style={styles.subHeader}>Our Vision</h3>
                            <p style={styles.text}>
                                To be the global benchmark for innovative IT consultancy and
                                IoT integration, creating a future where technology and humanity
                                coexist seamlessly.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '100px 0',
        backgroundColor: '#050505',
        color: '#fff',
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
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker overlay for text readability
        zIndex: 1,
    },
    content: {
        position: 'relative',
        zIndex: 2,
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    contentHelper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
    },
    header: {
        fontSize: '2.5rem',
        textAlign: 'center',
        marginBottom: '20px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
    },
    card: {
        backgroundColor: 'rgba(17, 17, 17, 0.6)', // Semi-transparent
        backdropFilter: 'blur(10px)', // Glassmorphism
        padding: '30px',
        borderRadius: '12px',
        borderLeft: '4px solid var(--primary)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    },
    subHeader: {
        fontSize: '1.5rem',
        marginBottom: '15px',
        color: '#fff',
    },
    text: {
        color: '#ccc', // Lighter text for better contrast against video
        lineHeight: '1.7',
        fontSize: '1rem',
    },
};

export default About;
