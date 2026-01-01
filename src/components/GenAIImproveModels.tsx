'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GenAIImproveModels.module.css';

const dataPoints = [
  { label: 'Data Quality', value: '99.9%', color: '#7E9FFF' },
  { label: 'Expert Network', value: '50K+', color: '#FF69B4' },
  { label: 'Languages', value: '200+', color: '#FFD700' },
  { label: 'Accuracy Rate', value: '98.5%', color: '#48BB78' }
];

export default function GenAIImproveModels() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Side - Text Content */}
          <motion.div
            className={styles.leftContent}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.label}>BUILD AI</div>
            <h2 className={styles.title}>
              Improve Your Models By Improving Your Data
            </h2>
            <p className={styles.description}>
              High-quality training data, curated by subject matter experts, is crucial for developing powerful, accurate, Generative AI models.
            </p>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              {dataPoints.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <div 
                    className={styles.statValue}
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <div 
                    className={styles.statGlow}
                    style={{ background: `${stat.color}20` }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            className={styles.rightContent}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.visualContainer}>
              {/* Animated Background Elements */}
              <div className={styles.backgroundElements}>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.floatingElement}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 15, 0],
                      rotate: [0, 180, 360],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${15 + (i % 2) * 35}%`
                    }}
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src="https://site-assets.plasmic.app/5c5c7566eef04c316bd861b66318b4bf.png"
                  alt="Improve Your Models"
                  width={1216}
                  height={638}
                  className={styles.image}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
