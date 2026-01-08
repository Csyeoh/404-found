import React from 'react';
import { motion } from 'framer-motion';
import teamVideo from '../assets/video/CAT ASS2 Video.mp4';

const VideoShowcase = () => {
    return (
        <section id="video-showcase" style={styles.section}>
            <div className="container" style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={styles.header}>Our <span style={{ color: 'var(--primary)' }}>Journey</span></h2>
                    <p style={styles.subtext}>
                        See how we bring ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    style={styles.videoWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <video
                        controls
                        style={styles.video}
                        poster="" // Optional: Add a poster image if available
                    >
                        <source src={teamVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '80px 0',
        backgroundColor: '#050505', // Consistent with other dark sections
        overflow: 'hidden',
    },
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
    },
    header: {
        fontSize: '2.5rem',
        marginBottom: '15px',
        color: '#fff',
    },
    subtext: {
        color: '#a0a0a0',
        marginBottom: '40px',
        fontSize: '1.1rem',
    },
    videoWrapper: {
        position: 'relative',
        width: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid #333',
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)', // Subtle neon glow
    },
    video: {
        width: '100%',
        display: 'block',
        borderRadius: '16px',
    }
};

export default VideoShowcase;
