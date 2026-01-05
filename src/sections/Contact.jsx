// src/sections/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate network request
        setTimeout(() => {
            setIsSubmitted(true);
        }, 500);
    };
    return (
        <section id="contact" style={styles.section}>
            <div className="container" style={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={styles.header}>Get In <span style={{ color: 'var(--primary)' }}>Touch</span></h2>
                    <p style={styles.subtext}>
                        Ready to start your project? We are currently accepting new clients.
                    </p>
                </motion.div>

                <motion.div
                    style={styles.formWrapper}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {isSubmitted ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={styles.successMessage}
                        >
                            <h3 style={{ color: 'var(--primary)', marginBottom: '10px' }}>Message Received!</h3>
                            <p>We'll get back to you within 24 hours.</p>
                            <button
                                style={{ ...styles.button, marginTop: '20px' }}
                                onClick={() => setIsSubmitted(false)}
                            >
                                Send Another
                            </button>
                        </motion.div>
                    ) : (
                        <form style={styles.form} onSubmit={handleSubmit}>
                            <div style={styles.inputGroup}>
                                <input required type="text" placeholder="Name" style={styles.input} />
                                <input required type="email" placeholder="Email" style={styles.input} />
                            </div>
                            <input required type="text" placeholder="Subject" style={styles.input} />
                            <textarea required placeholder="Tell us about your project..." rows="5" style={styles.textarea}></textarea>

                            <motion.button
                                type="submit"
                                style={styles.button}
                                whileHover={{ scale: 1.05, backgroundColor: '#00ff41', color: '#000' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    )}

                </motion.div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '100px 0',
        backgroundColor: '#0a0a0a',
        color: '#fff',
    },
    container: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 20px',
        textAlign: 'center',
    },
    header: {
        fontSize: '2.5rem',
        marginBottom: '20px',
    },
    subtext: {
        color: '#a0a0a0',
        marginBottom: '50px',
        fontSize: '1.1rem',
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        backgroundColor: '#111',
        padding: '40px',
        borderRadius: '16px',
        border: '1px solid #222',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    inputGroup: {
        display: 'flex',
        gap: '20px',
    },
    input: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#222',
        border: '1px solid #333',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
    },
    textarea: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#222',
        border: '1px solid #333',
        borderRadius: '8px',
        color: '#fff',
        fontSize: '1rem',
        outline: 'none',
        resize: 'vertical',
    },
    button: {
        alignSelf: 'flex-end',
        padding: '15px 40px',
        backgroundColor: 'transparent',
        border: '1px solid var(--primary)',
        color: 'var(--primary)',
        fontSize: '1rem',
        fontWeight: 'bold',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    info: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
        flexWrap: 'wrap',
        gap: '20px',
        borderTop: '1px solid #222',
        paddingTop: '30px',
    },
    infoItem: {
        textAlign: 'center',
    },
    infoTitle: {
        color: 'var(--primary)',
        marginBottom: '10px',
        fontFamily: 'monospace',
    },
    infoText: {
        color: '#ccc',
    },
    successMessage: {
        textAlign: 'center',
        padding: '20px',
        color: '#fff',
    }
};

export default Contact;
