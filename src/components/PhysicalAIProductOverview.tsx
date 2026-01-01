'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PhysicalAIProductOverview.module.css';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 18 18">
        <g strokeLinecap="round" strokeWidth="1.5" fill="none" stroke="#b9b9b9" strokeLinejoin="round">
          <path d="M5.05103 11.25C6.15559 11.25 7.05103 10.3546 7.05103 9.25C7.05103 8.14543 6.15559 7.25 5.05103 7.25C3.94646 7.25 3.05103 8.14543 3.05103 9.25C3.05103 10.3546 3.94646 11.25 5.05103 11.25Z"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M11.5 11.75C14.3995 11.75 16.75 9.3995 16.75 6.5C16.75 3.60051 14.3995 1.25 11.5 1.25C9.0417 1.25 6.97804 2.9396 6.40692 5.22087C8.08928 5.78681 9.30102 7.37689 9.30102 9.25C9.30102 9.8975 9.15622 10.5112 8.89723 11.0604C9.66439 11.4992 10.5529 11.75 11.5 11.75Z" fill="#F7F7F7" fillOpacity="0.3"></path>
          <path d="M1.25 16.5C1.775 14.903 3.278 13.75 5.051 13.75C6.824 13.75 8.327 14.903 8.852 16.5"></path>
        </g>
      </svg>
    ),
    title: 'Global Collection Network',
    description: 'Real-world high-quality data from a global network of robotics data factories, distributed data collectors, and operating businesses',
    color: '#7E9FFF'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="M16 27c-5.523 0-10-2.015-10-4.5v-.763a.727.727 0 0 1 1.183-.571C8.9 22.557 12.223 23.5 16 23.5c3.778 0 7.099-.943 8.817-2.334a.727.727 0 0 1 1.183.57v.764c0 2.485-4.477 4.5-10 4.5Zm0-5.5c-5.523 0-10-2.015-10-4.5v-.763a.727.727 0 0 1 1.183-.571C8.9 17.057 12.223 18 16 18c3.778 0 7.099-.943 8.817-2.334a.727.727 0 0 1 1.183.57V17c0 2.485-4.477 4.5-10 4.5Zm0-5.5c-5.523 0-10-2.015-10-4.5v-2C6 7.015 10.477 5 16 5s10 2.015 10 4.5v2c0 2.485-4.477 4.5-10 4.5Z" clipRule="evenodd"></path>
      </svg>
    ),
    title: 'Unmatched Scalability',
    description: 'Scale to thousands of collectors. Ingest petabyte-scale data through networking infrastructure engineered for maximum throughput.',
    color: '#FF69B4'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 18 18" fill="currentColor">
        <path d="M9.25,2h-.5c-.965,0-1.75,.785-1.75,1.75V14.25c0,.965,.785,1.75,1.75,1.75h.5c.965,0,1.75-.785,1.75-1.75V3.75c0-.965-.785-1.75-1.75-1.75Zm-.5,1.5h.5c.138,0,.25,.112,.25,.25v5.25h-1V3.75c0-.138,.112-.25,.25-.25Z"></path>
        <path d="M3.75,6h-.5c-.965,0-1.75,.785-1.75,1.75v6.5c0,.965,.785,1.75,1.75,1.75h.5c.965,0,1.75-.785,1.75-1.75V7.75c0-.965-.785-1.75-1.75-1.75Zm-.5,1.5h.5c.138,0,.25,.112,.25,.25v3.25h-1v-3.25c0-.138,.112-.25,.25-.25Z"></path>
      </svg>
    ),
    title: 'Data Diversity Guaranteed',
    description: 'Improve model robustness by training on data collected from different embodiments, environments, and tasks.',
    color: '#FFD700'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 18 18">
        <g strokeLinecap="round" strokeWidth="1.5" fill="none" stroke="#b9b9b9" strokeLinejoin="round">
          <circle cx="9" cy="9" r="7.25" fill="#F7F7F7" fillOpacity="0.3"></circle>
          <path d="M16.25 9C16.25 13.004 13.004 16.25 9.00001 16.25C5.96901 16.25 3.37301 14.39 2.29001 11.75"></path>
          <path d="M1.88 14.695L2.288 11.75L5.232 12.157"></path>
        </g>
      </svg>
    ),
    title: 'Validated Performance Gains',
    description: 'Datasets enriched with context and grounding annotations that are proven to improve model performance.',
    color: '#48BB78'
  }
];

export default function PhysicalAIProductOverview() {
  const [activeFeature, setActiveFeature] = useState(0);

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
          <div className={styles.label}>Product Overview</div>
          <h2 className={styles.title}>The Data Engine for Physical AI</h2>
        </motion.div>

        {/* Interactive Feature Cards */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`${styles.featureCard} ${activeFeature === index ? styles.active : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setActiveFeature(index)}
              onClick={() => setActiveFeature(index)}
            >
              {/* Animated Background */}
              <motion.div
                className={styles.cardBackground}
                animate={{
                  opacity: activeFeature === index ? 0.15 : 0.05,
                  scale: activeFeature === index ? 1.05 : 1
                }}
                transition={{ duration: 0.4 }}
                style={{ background: feature.color }}
              />

              {/* Icon */}
              <motion.figure
                className={styles.iconWrapper}
                animate={{
                  scale: activeFeature === index ? 1.1 : 1,
                  rotate: activeFeature === index ? 360 : 0
                }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.icon}>{feature.icon}</div>
              </motion.figure>

              {/* Content */}
              <div className={styles.cardContent}>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <AnimatePresence mode="wait">
                  {activeFeature === index && (
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

              {/* Progress Indicator */}
              <motion.div
                className={styles.progressBar}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: activeFeature === index ? 1 : 0
                }}
                transition={{ duration: 0.4 }}
                style={{ background: feature.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Data Visualization */}
        <motion.div
          className={styles.dataViz}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.dataPoint}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2
              }}
              style={{
                left: `${15 + i * 14}%`,
                background: features[i % features.length].color
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
