import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import nexusImg from '../assets/picture/NexusFlow Gen1.png';
import cyberImg from '../assets/picture/CyberVault Pro.png';
import pulseImg from '../assets/picture/PulseAnalytics.png';
import aegisImg from '../assets/picture/Aegis Firewall.png';

const products = [
    {
        image: nexusImg,
        name: 'NexusFlow Gen1',
        category: 'Hardware',
        price: 'RM 299',
        desc: 'Next-gen IoT gateway ensuring seamless connectivity for all your smart devices.',
        details: 'Features dual-band Wi-Fi 6, Zigbee 3.0 support, and edge computing capabilities. Perfect for smart homes and industrial IoT applications.',
    },
    {
        image: cyberImg,
        name: 'CyberVault Pro',
        category: 'Software',
        price: 'RM 49/month',
        desc: 'Enterprise-grade encrypted cloud storage with AI-driven threat detection.',
        details: 'Store your data with AES-256 encryption. Our AI monitors for ransomware and anomalies 24/7, ensuring your business never stops.',
    },
    {
        image: pulseImg,
        name: 'PulseAnalytics',
        category: 'SaaS',
        price: 'RM 99/month',
        desc: 'Real-time business intelligence dashboard. Vizualize your data beat by beat.',
        details: 'Customizable widgets, real-time data streaming, and predictive analytics powered by machine learning. Make data-driven decisions instantly.',
    },
    {
        image: aegisImg,
        name: 'Aegis Firewall',
        category: 'Cybersecurity',
        price: 'RM 199/year',
        desc: 'The ultimate shield against digital intrusions. Keep your network impenetrable.',
        details: 'Next-generation firewall with deep packet inspection, intrusion prevention system (IPS), and automated threat containment.',
    }
];

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

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
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <section id="products" style={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={styles.header}>Our <span style={{ color: 'var(--primary)' }}>Products</span></h2>
                </motion.div>

                <motion.div
                    style={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            style={styles.card}
                            variants={itemVariants}
                            whileHover={{ y: -10, borderColor: 'var(--primary)', boxShadow: '0 0 15px rgba(0, 255, 65, 0.3)' }}
                        >
                            <div style={styles.imageWrapper}>
                                <img src={product.image} alt={product.name} style={styles.productImage} />
                            </div>
                            <span style={styles.category}>{product.category}</span>
                            <h3 style={styles.name}>{product.name}</h3>
                            <p style={styles.desc}>{product.desc}</p>
                            <div style={styles.footer}>
                                <span style={styles.price}>{product.price}</span>
                                <button
                                    style={styles.button}
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    style={styles.comingSoon}
                >
                    <p>More innovative products coming in the future...</p>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        style={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            style={styles.modalContent}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedProduct.image} alt={selectedProduct.name} style={styles.modalImage} />
                            <h3 style={styles.modalTitle}>{selectedProduct.name}</h3>
                            <p style={styles.modalCategory}>{selectedProduct.category}</p>
                            <p style={styles.modalDesc}>{selectedProduct.desc}</p>
                            <hr style={{ borderColor: '#333', margin: '15px 0' }} />
                            <p style={styles.modalDetails}>{selectedProduct.details}</p>
                            <button style={styles.closeButton} onClick={() => setSelectedProduct(null)}>Close</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: '#0a0a0a',
        padding: '100px 0',
    },
    header: {
        fontSize: '2.5rem',
        textAlign: 'center',
        marginBottom: '60px',
        color: '#fff',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px',
        padding: '0 20px',
    },
    card: {
        backgroundColor: '#111',
        padding: '20px', // Replaced padding
        borderRadius: '16px',
        border: '1px solid #222',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        cursor: 'pointer',
        overflow: 'hidden', // Added overflow hidden
    },
    imageWrapper: {
        width: '100%',
        height: '200px', // Fixed height for images
        marginBottom: '20px',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    },
    category: {
        fontSize: '0.8rem',
        color: '#a0a0a0',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: '10px',
    },
    name: {
        fontSize: '1.4rem',
        marginBottom: '10px',
        color: '#fff',
    },
    desc: {
        color: '#888',
        fontSize: '0.95rem',
        lineHeight: '1.5',
        marginBottom: '25px',
    },
    footer: {
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    price: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'var(--primary)',
        fontFamily: 'monospace',
    },
    button: {
        backgroundColor: 'transparent',
        border: '1px solid #333',
        color: '#fff',
        padding: '8px 20px',
        borderRadius: '6px',
        fontSize: '0.9rem',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },
    comingSoon: {
        textAlign: 'center',
        marginTop: '60px',
        color: '#666',
        fontSize: '1.1rem',
        fontStyle: 'italic',
        letterSpacing: '1px',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backdropFilter: 'blur(5px)',
    },
    modalContent: {
        backgroundColor: '#1a1a1a',
        padding: '30px',
        borderRadius: '16px',
        maxWidth: '500px',
        width: '100%',
        border: '1px solid var(--primary)',
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)',
        position: 'relative',
    },
    modalImage: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '20px',
    },
    modalTitle: {
        color: 'var(--primary)',
        fontSize: '1.8rem',
        marginBottom: '5px',
    },
    modalCategory: {
        color: '#888',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        marginBottom: '15px',
    },
    modalDesc: {
        color: '#fff',
        marginBottom: '10px',
    },
    modalDetails: {
        color: '#ccc',
        lineHeight: '1.6',
        fontSize: '0.95rem',
        marginBottom: '20px',
    },
    closeButton: {
        backgroundColor: 'transparent',
        border: '1px solid #555',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        float: 'right',
        transition: 'background 0.3s',
    }
};

export default Products;
