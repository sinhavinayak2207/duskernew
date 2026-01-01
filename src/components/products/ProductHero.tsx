"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductHero.module.css';

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gradient?: string;
}

export default function ProductHero({ 
  title, 
  subtitle, 
  description, 
  image,
  gradient = 'linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)'
}: ProductHeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.18, 1] }}
        >
          <motion.span 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.span>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className={styles.primaryButton}>
              Request Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.secondaryButton}>
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3L13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.77, 0, 0.18, 1] }}
        >
          <div className={styles.imageWrapper}>
            <img src={image} alt={title} className={styles.heroImage} />
            <div className={styles.glowEffect} style={{ background: gradient }}></div>
          </div>
        </motion.div>
      </div>
      
      <div className={styles.backgroundAnimation}>
        <div className={styles.gradientOrb} style={{ background: gradient }}></div>
        <div className={styles.gridPattern}></div>
      </div>
      
      {/* Scroll Indicator - Removed */}
    </section>
  );
}
