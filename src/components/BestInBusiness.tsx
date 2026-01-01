'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './BestInBusiness.module.css';

const features = [
  {
    title: 'Quality',
    description: 'Scale can provide the core tenet of any dataset with high-quality labels from domain experts.',
    icon: '✓'
  },
  {
    title: 'Cost Effective',
    description: 'Easily find, categorize, and fix model failures with Scale\'s Data Engine. Then, optimize labeling spend with high-value curated data.',
    icon: '✓'
  },
  {
    title: 'Scalability',
    description: 'Scale\'s data engine can support any ML project from lower-volume experiments to high-volume production projects. Scale up, or down, as needed.',
    icon: '✓'
  },
  {
    title: 'Diversity',
    description: 'Scale delivers the greatest variety and diversity of data to help deliver the greatest value to your model performance.',
    icon: '✓'
  }
];

export default function BestInBusiness() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>The Best In The Business</h2>
          <p className={styles.subtitle}>
            The Scale Data Engine is trusted by the world's leading ML teams to accelerate the development of their models. 
            The scale of our operations, experts and quality is unmatched in the industry.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className={styles.contentWrapper}>
          {/* Left Side - Features List */}
          <motion.div 
            className={styles.leftContent}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className={styles.featureHeader}>
                    <span className={styles.checkIcon}>{feature.icon}</span>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                  </div>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - 3D Visualization */}
          <motion.div 
            className={styles.rightContent}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.visualizationContainer}>
              {/* 3D Wave Effect */}
              <div className={styles.waveContainer}>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.waveLine}
                    style={{
                      left: `${i * 8}%`,
                    }}
                    animate={{
                      y: [0, -30, 0, 30, 0],
                      rotateY: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Floating Particles */}
              <div className={styles.particlesContainer}>
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.particle}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      delay: Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
