'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './AutoDataEngine.module.css';

const features = [
  {
    id: 'labeling',
    title: 'Data Labeling',
    description: 'Industry-leading annotation of 2D and 3D data sourced from multiple sensors. Achieve high quality data at low cost from ML-assisted labeling workflows, best in class operations, and advanced labeling interfaces.',
    color: '#7E9FFF',
    icon: '🏷️'
  },
  {
    id: 'curation',
    title: 'Data Curation',
    description: 'Explore both labeled and unlabelled data. Understand dataset distribution, curate data matching target scenarios and send data for annotation.',
    color: '#FF69B4',
    icon: '📊'
  },
  {
    id: 'evaluation',
    title: 'Model Evaluation',
    description: 'Analyze the performance of your machine learning models. Explore model metrics, identify model weaknesses and evaluate your model on scenario tests.',
    color: '#FFD700',
    icon: '📈'
  }
];

export default function AutoDataEngine() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      {/* Animated Background */}
      <div className={styles.backgroundEffect}>
        <motion.div 
          className={styles.bgOrb1}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className={styles.bgOrb2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            The Automotive <span className={styles.highlight}>Data Engine</span>
          </h2>
          <p className={styles.subtitle}>
            DUSKER&apos;s Automotive Data Engine has everything you need to drive model improvements with data.
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Left - Features */}
          <div className={styles.featuresColumn}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`${styles.featureCard} ${activeFeature === index ? styles.active : ''}`}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                style={{ '--feature-color': feature.color } as React.CSSProperties}
              >
                {/* Animated Border */}
                <motion.div 
                  className={styles.featureBorder}
                  animate={{
                    opacity: activeFeature === index || hoveredFeature === index ? 1 : 0
                  }}
                />

                {/* Icon */}
                <motion.div 
                  className={styles.featureIcon}
                  animate={{
                    scale: activeFeature === index ? 1.2 : 1,
                    rotate: activeFeature === index ? [0, 10, -10, 0] : 0
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <AnimatePresence>
                    {(activeFeature === index || hoveredFeature === index) && (
                      <motion.p
                        className={styles.featureDescription}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Active Indicator */}
                {activeFeature === index && (
                  <motion.div
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    style={{ background: feature.color }}
                  />
                )}

                {/* Glow Effect */}
                <motion.div 
                  className={styles.featureGlow}
                  style={{ background: feature.color }}
                  animate={{
                    opacity: activeFeature === index ? 0.15 : 0
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right - Image with Effects */}
          <motion.div
            className={styles.imageColumn}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              {/* Rotating Frame */}
              <motion.div 
                className={styles.rotatingFrame}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />

              {/* Main Image */}
              <div className={styles.imageContainer}>
                <Image
                  src="https://site-assets.plasmic.app/c4f6dced61278436014593388ab335c9.png"
                  alt="Automotive Data Engine"
                  width={662}
                  height={594}
                  className={styles.image}
                />

                {/* Overlay Gradient */}
                <div className={styles.imageOverlay} />
              </div>

              {/* Floating Labels */}
              {features.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  className={styles.floatingLabel}
                  style={{
                    top: `${20 + i * 30}%`,
                    left: i % 2 === 0 ? '-10%' : 'auto',
                    right: i % 2 === 1 ? '-10%' : 'auto',
                    borderColor: feature.color
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -8, 0],
                    boxShadow: activeFeature === i 
                      ? `0 0 30px ${feature.color}40` 
                      : '0 0 0 transparent'
                  }}
                  transition={{
                    opacity: { delay: i * 0.2 + 0.5, duration: 0.5 },
                    scale: { delay: i * 0.2 + 0.5, duration: 0.5 },
                    y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <span className={styles.labelIcon}>{feature.icon}</span>
                  <span className={styles.labelText}>{feature.title}</span>
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className={styles.connectionLines} viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M0,20 Q50,30 100,20"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                />
                <motion.path
                  d="M0,50 Q50,60 100,50"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.3 }}
                />
                <motion.path
                  d="M0,80 Q50,90 100,80"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.6 }}
                />
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7E9FFF" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#FF69B4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FFD700" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Progress Dots */}
        <div className={styles.progressDots}>
          {features.map((feature, i) => (
            <motion.button
              key={feature.id}
              className={`${styles.dot} ${activeFeature === i ? styles.activeDot : ''}`}
              onClick={() => setActiveFeature(i)}
              style={{ '--dot-color': feature.color } as React.CSSProperties}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
