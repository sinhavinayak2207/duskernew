'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SupportedAnnotations.module.css';

const annotationTypes = [
  {
    title: 'Dusker Text',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="M9.553 9.01c-.352 0-.678.185-.86.486L7.554 11.39a.251.251 0 0 1-.215.122h-.586a.25.25 0 0 1-.25-.273l.456-5a.25.25 0 0 1 .25-.227h.67a.25.25 0 0 1 .177.073c.274.273.646.427 1.033.427h13.83c.388 0 .76-.154 1.034-.427a.252.252 0 0 1 .178-.073h.67a.25.25 0 0 1 .25.227l.455 5a.25.25 0 0 1-.25.273h-.586a.251.251 0 0 1-.215-.122l-1.14-1.893a1.004 1.004 0 0 0-.86-.485h-4.444V22.61c0 .837.537 1.58 1.332 1.844a.25.25 0 0 1 .172.237v.57a.25.25 0 0 1-.25.25h-6.52a.25.25 0 0 1-.25-.25v-.57a.25.25 0 0 1 .17-.237A1.944 1.944 0 0 0 14 22.61V9.01H9.553Z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { name: 'Document Processing', icon: '📄' },
      { name: 'Natural Language Processing', icon: '✓' },
      { name: 'Transcription', icon: '✏️' },
      { name: 'Content & Language', icon: '🌐' }
    ],
    color: 'rgba(126, 159, 255, 0.3)'
  },
  {
    title: 'Dusker Image',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="M26 25.5H6a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2Zm-.003-2.755L26 9a.5.5 0 0 0-.5-.5h-19A.5.5 0 0 0 6 9v13.77a.23.23 0 0 0 .417.132l2.208-3.137a.625.625 0 0 1 .511-.265h1.176l2.626-3.735a.625.625 0 0 1 .511-.265h.726c.203 0 .394.099.511.265l5.33 7.574a.38.38 0 0 0 .31.161h.29a.382.382 0 0 0 .313-.601l-1.304-1.853a.644.644 0 0 1 .015-.761l1.172-1.539a.625.625 0 0 1 .497-.246h.569c.195 0 .378.091.497.246l3.164 4.153a.255.255 0 0 0 .458-.154ZM20.5 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { name: 'Electro Optical', icon: '📷' },
      { name: 'Infrared', icon: '📡' },
      { name: 'Satellite Imagery', icon: '🛰️' }
    ],
    color: 'rgba(255, 105, 180, 0.3)'
  },
  {
    title: 'Dusker Video',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="M28.388 22.934a1 1 0 0 1-1.09-.217l-5-5a1 1 0 0 1-.293-.707v-2a1 1 0 0 1 .293-.707l5-5a1 1 0 0 1 1.707.707v12a1 1 0 0 1-.617.924ZM6.005 8.01h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-12a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3Z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { name: 'Full Motion Video', icon: '🎬' },
      { name: 'Object Tracking', icon: '🎯' }
    ],
    color: 'rgba(138, 180, 248, 0.3)'
  },
  {
    title: 'Dusker 3D Sensor Fusion',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="m26.499 22.114-10 5.748a1 1 0 0 1-.998 0L5.5 22.114a.998.998 0 0 1-.5-.866V10.751c0-.357.19-.688.5-.866l2.657-1.528a.498.498 0 0 1 .499.001l11.094 6.428c.155.09.25.256.25.435v2.528a.25.25 0 0 0 .378.216l2.377-1.417a.502.502 0 0 0 .245-.432v-2.778a.25.25 0 0 0-.125-.218L11.795 6.7a.251.251 0 0 1 0-.435l3.706-2.13a1 1 0 0 1 .998 0L26.5 9.885c.31.178.5.509.5.866v10.495a1 1 0 0 1-.501.868ZM11 19.152a.5.5 0 0 0-.25-.434l-3.375-1.94a.25.25 0 0 0-.375.217v3.383a.5.5 0 0 0 .25.434l3.376 1.94a.25.25 0 0 0 .374-.217v-3.383Z" clipRule="evenodd"/>
      </svg>
    ),
    features: [
      { name: 'LiDAR', icon: '📊' }
    ],
    color: 'rgba(255, 182, 193, 0.3)'
  }
];

export default function SupportedAnnotations() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className={styles.annotationsSection}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>DATA INPUTS</div>
          <h2 className={styles.title}>Supported Annotation Types</h2>
        </motion.div>

        {/* Annotation Cards - Bento Grid Style */}
        <div className={styles.bentoGrid}>
          {annotationTypes.map((type, index) => (
            <motion.div
              key={type.title}
              className={`${styles.card} ${activeCard === index ? styles.cardActive : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              style={{
                gridColumn: index === 0 ? 'span 2' : 'span 1',
                gridRow: index === 0 ? 'span 2' : 'span 1'
              }}
            >
              {/* Animated Background Gradient */}
              <motion.div 
                className={styles.cardBackground}
                animate={{
                  background: activeCard === index 
                    ? `radial-gradient(circle at 50% 50%, ${type.color}, transparent)`
                    : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02), transparent)'
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Floating Icon */}
              <motion.div 
                className={styles.cardIconWrapper}
                animate={{
                  y: activeCard === index ? -10 : 0,
                  rotateY: activeCard === index ? 360 : 0,
                  scale: activeCard === index ? 1.1 : 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className={styles.cardIcon}>
                  {type.icon}
                </div>
              </motion.div>
              
              {/* Title */}
              <h3 className={styles.cardTitle}>{type.title}</h3>
              
              {/* Features List with Stagger Animation */}
              <div className={styles.featuresList}>
                <AnimatePresence>
                  {type.features.map((feature, idx) => (
                    <motion.div
                      key={feature.name}
                      className={styles.featureItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: idx * 0.1 }
                      }}
                      whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    >
                      <span className={styles.featureIcon}>{feature.icon}</span>
                      <span className={styles.featureName}>{feature.name}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Hover Border Effect */}
              <motion.div 
                className={styles.cardBorder}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                  scale: activeCard === index ? 1 : 0.95
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
