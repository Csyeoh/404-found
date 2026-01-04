import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const ClientFeedback = () => {
    const scrollContainerRef = useRef(null);

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CTO, TechGrowth',
            feedback: 'The team transformed our digital presence. Their attention to detail and technical expertise is unmatched.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200'
        },
        {
            name: 'Michael Chen',
            role: 'Founder, StartUp Inc',
            feedback: 'Incredible results. We saw a 200% increase in user engagement after launching our new platform.',
            image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200'
        },
        {
            name: 'Jessica Williams',
            role: 'Director, CreativeFlow',
            feedback: 'Professional, timely, and innovative. They understood our vision perfectly and delivered beyond expectations.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
        },
        {
            name: 'David Miller',
            role: 'CEO, FutureTech',
            feedback: 'A true partnership. They not only built what we asked for but improved upon our original ideas significantly.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
        },
        {
            name: 'Emily Davis',
            role: 'Product Manager, Appify',
            feedback: 'Our user base doubled within a month of the redesign. The UI/UX is simply world-class.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200'
        },
        {
            name: 'James Wilson',
            role: 'VP Marketing, BrandCo',
            feedback: 'Fast, reliable, and stunning design work. I would highly recommend them to anyone looking to elevate their brand.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
        }
    ];

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = 400; // Width of card + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="feedback" style={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    style={styles.headerContainer}
                >
                    <h2 style={styles.header}>Client <span style={{ color: 'var(--primary)' }}>Feedback</span></h2>
                    <div style={styles.controls}>
                        <button onClick={() => scroll('left')} style={styles.controlBtn}>
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={() => scroll('right')} style={styles.controlBtn}>
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </motion.div>

                <div style={styles.scrollWrapper}>
                    <motion.div
                        ref={scrollContainerRef}
                        style={styles.scrollContainer}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        {testimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                style={styles.card}
                                whileHover={{ y: -5, borderColor: 'var(--primary)' }}
                            >
                                <div style={styles.quoteIcon}>
                                    <Quote size={32} color="var(--primary)" />
                                </div>
                                <p style={styles.feedback}>"{item.feedback}"</p>

                                <div style={styles.profile}>
                                    <img src={item.image} alt={item.name} style={styles.avatar} />
                                    <div style={styles.info}>
                                        <h4 style={styles.name}>{item.name}</h4>
                                        <span style={styles.role}>{item.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    {/* Gradient Edges for scroll indication */}
                    <div style={styles.gradientLeft} />
                    <div style={styles.gradientRight} />
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '100px 0',
        backgroundColor: '#0f0f0f',
    },
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px',
        flexWrap: 'wrap',
        gap: '20px',
    },
    header: {
        fontSize: '2.5rem',
        margin: 0,
    },
    controls: {
        display: 'flex',
        gap: '10px',
    },
    controlBtn: {
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid #333',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        transition: 'all 0.2s ease',
    },
    scrollWrapper: {
        position: 'relative',
        margin: '0 -20px', // Offset container padding for full bleed effect on mobile if needed, or just visual
        padding: '0 20px',
    },
    scrollContainer: {
        display: 'flex',
        gap: '30px',
        overflowX: 'auto',
        paddingBottom: '20px',
        paddingTop: '20px', // Add top padding for hover animation
        scrollBehavior: 'smooth',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none',  // IE 10+
        cursor: 'grab',
    },
    // Hide scrollbar for Chrome/Safari/Opera
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '16px',
        padding: '40px 30px',
        border: '1px solid #333',
        width: '350px',
        height: '350px',
        minWidth: '350px', // Fixed width for scrollable items
        flexShrink: 0,
        position: 'relative',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    quoteIcon: {
        marginBottom: '20px',
        opacity: 0.5,
    },
    feedback: {
        color: '#e0e0e0',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        marginTop: 0,
        marginBottom: '20px',
        fontStyle: 'italic',
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    },
    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid var(--primary)',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
    },
    name: {
        margin: 0,
        fontSize: '1rem',
        color: '#fff',
        fontWeight: '600',
    },
    role: {
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginTop: '4px',
    },
    gradientLeft: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: '50px',
        background: 'linear-gradient(to right, #0f0f0f, transparent)',
        pointerEvents: 'none',
        zIndex: 2,
    },
    gradientRight: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '50px',
        background: 'linear-gradient(to left, #0f0f0f, transparent)',
        pointerEvents: 'none',
        zIndex: 2,
    },
};

export default ClientFeedback;
