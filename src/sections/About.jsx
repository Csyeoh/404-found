// src/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={styles.section}>
            <div className="container" style={styles.container}>
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
        backgroundColor: '#111',
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
        color: '#a0a0a0',
        lineHeight: '1.7',
        fontSize: '1rem',
    },
};

export default About;
