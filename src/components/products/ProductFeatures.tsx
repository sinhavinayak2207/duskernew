"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './ProductFeatures.module.css';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

interface ProductFeaturesProps {
  features: Feature[];
  title: string;
  subtitle: string;
  gradient?: string;
}

export default function ProductFeatures({ 
  features, 
  title, 
  subtitle,
  gradient = 'linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)'
}: ProductFeaturesProps) {
  const [activeFeature, setActiveFeature] = useState<number>(features[0]?.id || 0);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>{subtitle}</span>
          <h2 
            className={styles.title}
            style={{ 
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </h2>
        </motion.div>
        
        <div className={styles.featuresContainer}>
          <motion.div 
            className={styles.featuresList}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.id}
                className={`${styles.featureCard} ${activeFeature === feature.id ? styles.active : ''}`}
                variants={itemVariants}
                onClick={() => setActiveFeature(feature.id)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
                <div className={styles.featureArrow}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className={styles.featurePreview}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.id}
                className={styles.previewContainer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeFeature === feature.id ? 1 : 0,
                  x: activeFeature === feature.id ? 0 : 20,
                  pointerEvents: activeFeature === feature.id ? 'all' : 'none'
                }}
                transition={{ duration: 0.5 }}
              >
                {feature.image && (
                  <div className={styles.imageWrapper}>
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className={styles.featureImage} 
                    />
                    <div className={styles.imageGlow} style={{ background: gradient }}></div>
                  </div>
                )}
                <div className={styles.previewContent}>
                  <h3 className={styles.previewTitle}>{feature.title}</h3>
                  <p className={styles.previewDescription}>{feature.description}</p>
                  <button className={styles.learnMoreButton}>
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 3L13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.gradientBlob} style={{ background: gradient }}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  );
}
