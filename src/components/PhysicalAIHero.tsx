'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './PhysicalAIHero.module.css';

export default function PhysicalAIHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Content */}
          <motion.div
            className={styles.leftContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>Physical AI Data Engine</h1>
            <h2 className={styles.subtitle}>Powering the Next Generation of Robotics</h2>
            <div className={styles.ctaWrapper}>
              <button className={styles.ctaButton}>
                Book a Demo
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </motion.div>

          {/* Right Content - 3D Canvas Placeholder */}
          <motion.div
            className={styles.rightContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className={styles.canvasWrapper}>
              {/* Animated 3D-like elements */}
              <div className={styles.animatedScene}>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.floatingOrb}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.sin(i) * 20, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${(i % 4) * 25 + 10}%`,
                      top: `${Math.floor(i / 4) * 30 + 10}%`
                    }}
                  />
                ))}
                
                {/* Central Robot Arm Visualization */}
                <motion.div
                  className={styles.robotArm}
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className={styles.armSegment1} />
                  <div className={styles.armSegment2} />
                  <div className={styles.armJoint} />
                </motion.div>

                {/* Grid Background */}
                <div className={styles.gridBackground} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
