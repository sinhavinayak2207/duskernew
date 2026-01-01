"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ProductCTA.module.css';

interface ProductCTAProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonLink: string;
  backgroundImage?: string;
  gradient?: string;
}

export default function ProductCTA({ 
  title, 
  description, 
  primaryButtonText, 
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  backgroundImage,
  gradient = 'linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)'
}: ProductCTAProps) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div 
          className={styles.ctaCard}
          style={{ 
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          }}
        >
          <div className={styles.overlay} style={{ background: gradient }}></div>
          
          <div className={styles.content}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className={styles.buttonContainer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link href={primaryButtonLink} style={{ textDecoration: 'none' }}>
                <motion.button 
                  className={styles.primaryButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {primaryButtonText}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </Link>
              
              <Link href={secondaryButtonLink} style={{ textDecoration: 'none' }}>
                <motion.button 
                  className={styles.secondaryButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {secondaryButtonText}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3L13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          <div className={styles.decorationElements}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>
            <div className={styles.gridPattern}></div>
          </div>
        </div>
      </div>
    </section>
  );
}