import React from 'react';
import { motion } from 'framer-motion';

const VideoShowcase = () => {
    const youtubeId = "6R3ziBFYJA0";
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
                    {/* YouTube Responsive Embed */}
                    <div style={styles.iframeContainer}>
                        <iframe
                            style={styles.iframe}
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            title="Team Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '80px 0',
        backgroundColor: '#050505',
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
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)',
        backgroundColor: '#000', // Good background while loading
    },
    // New styles to make YouTube responsive (16:9 aspect ratio)
    iframeContainer: {
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        height: 0,
        overflow: 'hidden',
    },
    iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
};

export default VideoShowcase;