'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './PhysicalAIFinalCTA.module.css';

export default function PhysicalAIFinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.title}>
            <span className={styles.titleText}>The future of robotics </span>
            <span className={styles.highlight}>starts here</span>
          </h3>

          {/* Book a Demo button - Removed */}
        </motion.div>

        {/* Animated Background Elements */}
        <div className={styles.backgroundElements}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.floatingElement}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`
              }}
            />
          ))}
        </div>

        {/* Gradient Line */}
        <motion.div
          className={styles.gradientLine}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </div>
    </section>
  );
}
