'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GenAIKeyFeatures.module.css';

const features = [
  {
    title: 'Ops Center for Quality Control',
    description: 'Real-time visibility into data collection and curation',
    number: '01',
    color: '#7E9FFF'
  },
  {
    title: 'Experts, Linguists, and Coders',
    description: 'Access a global network of hand-picked experts across diverse fields to build the highest quality datasets',
    number: '02',
    color: '#FF69B4'
  },
  {
    title: 'Improved Models',
    description: 'Train your models with advanced datasets delivered through our purpose-built infrastructure',
    number: '03',
    color: '#FFD700'
  },
  {
    title: 'Increased Efficiency',
    description: 'Faster, more cost-effective dataset creation',
    number: '04',
    color: '#00D9FF'
  },
  {
    title: 'Model Evaluation',
    description: 'DUSKER proactively finds and surfaces model weaknesses, including targeted red-teaming.',
    number: '05',
    color: '#B794F6'
  },
  {
    title: 'Responsible Development',
    description: 'Upholding privacy, fairness, transparency and ethics',
    number: '06',
    color: '#48BB78'
  }
];

export default function GenAIKeyFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>KEY FEATURES</div>
          <h2 className={styles.title}>Enabling the Next Generation of LLMs</h2>
          <p className={styles.subtitle}>
            DUSKER has deep experience providing the data underpinning the most advanced LLMs.
          </p>
        </motion.div>

        <div className={styles.featuresContainer}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.featureRow}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className={styles.featureNumber}>
                <motion.span
                  animate={{
                    color: hoveredIndex === index ? feature.color : 'rgba(255, 255, 255, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.number}
                </motion.span>
              </div>

              <div className={styles.featureContent}>
                <div className={styles.featureHeader}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <motion.div
                    className={styles.featureArrow}
                    animate={{
                      x: hoveredIndex === index ? 8 : 0,
                      opacity: hoveredIndex === index ? 1 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.div>
                </div>
                <AnimatePresence>
                  {hoveredIndex === index && (
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

              <motion.div
                className={styles.featureLine}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                animate={{
                  backgroundColor: hoveredIndex === index ? feature.color : 'rgba(255, 255, 255, 0.1)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
