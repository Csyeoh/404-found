import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Briefcase, Clock } from 'lucide-react';
import achievementImg from '../assets/picture/Achievement.png';

const Achievements = () => {
    const stats = [
        {
            icon: <Briefcase size={32} color="var(--primary)" />,
            value: '500+',
            label: 'Projects Delivered',
        },
        {
            icon: <Users size={32} color="var(--primary)" />,
            value: '98%',
            label: 'Client Retention',
        },
        {
            icon: <Clock size={32} color="var(--primary)" />,
            value: '24/7',
            label: 'Support Available',
        },
        {
            icon: <Trophy size={32} color="var(--primary)" />,
            value: '50+',
            label: 'Industry Awards',
        },
    ];

    return (
        <section id="achievements" style={styles.section}>
            <div className="container" style={styles.container}>
                {/* Left Column: Stats */}
                <div style={styles.contentColumn}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={styles.header}>Our <span style={{ color: 'var(--primary)' }}>Milestones</span></h2>
                        <p style={styles.description}>
                            Over the years, we've built a reputation for excellence. Our numbers speak for themselves.
                        </p>
                    </motion.div>

                    <div style={styles.grid}>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                style={styles.card}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div style={styles.iconBox}>{stat.icon}</div>
                                <div>
                                    <h3 style={styles.value}>{stat.value}</h3>
                                    <p style={styles.label}>{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image Placeholder */}
                <div style={styles.imageColumn}>
                    <motion.div
                        style={styles.imageContainer}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={achievementImg}
                            alt="Achievements"
                            style={styles.image}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '120px 0', // Increased vertical padding
        backgroundColor: '#050505',
        borderTop: '1px solid #222',
        borderBottom: '1px solid #222',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '60px',
    },
    contentColumn: {
        flex: '1 1 500px', // Flex grow, shrink, basis
    },
    imageColumn: {
        flex: '1 1 400px',
        display: 'flex',
        justifyContent: 'center',
    },
    header: {
        fontSize: '2.5rem',
        marginBottom: '20px',
    },
    description: {
        color: 'var(--text-muted)',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        marginBottom: '40px',
        maxWidth: '500px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid #222',
        borderRadius: '12px',
        cursor: 'default',
    },
    iconBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        backgroundColor: 'rgba(0, 255, 65, 0.1)',
        borderRadius: '50%',
        flexShrink: 0,
    },
    value: {
        fontSize: '2rem',
        fontWeight: '700',
        margin: '0 0 5px 0',
        color: '#fff',
    },
    label: {
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        margin: 0,
    },
    imageContainer: {
        width: '100%',
        height: '500px',
        borderRadius: '20px',
        overflow: 'hidden', // Ensures image stays within radius
        border: '1px solid #333',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
};

export default Achievements;
