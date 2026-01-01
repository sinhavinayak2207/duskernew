"use client";

import React from 'react';
import styles from './HomeHero.module.css';
import Image from 'next/image';
import { motion } from './motion';

export default function HomeHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundShapes}>
        <motion.div 
          className={styles.circle1}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.22, scale: 1 }}
          transition={{ duration: 1.2 }}
        ></motion.div>
        <motion.div 
          className={styles.circle2}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        ></motion.div>
        <motion.div 
          className={styles.circle3}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.13, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        ></motion.div>
      </div>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dusker: <span className={styles.gradientText}>AI Training Evolved</span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build, evaluate, and deploy world-class AI solutions with the next-generation data engine and platform.
          </motion.p>
          
         
          <motion.div 
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className={styles.ctaBtnPrimary} onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
              <a href="/contact">Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="190" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
              </a>
            </button>
            <a href="/contact" className={styles.ctaBtnSecondary}>
              Request Demo
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className={styles.heroImageContainer}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={styles.heroImageWrapper}>
            <Image 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
              alt="AI Training Platform"
              width={600}
              height={400}
              className={styles.heroImage}
              priority
            />
            <div className={styles.imageOverlay}></div>
          </div>
          <div className={styles.statsBadge}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>98%</span>
              <span className={styles.statLabel}>Accuracy</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>3.5x</span>
              <span className={styles.statLabel}>Faster</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
