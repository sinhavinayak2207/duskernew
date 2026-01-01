'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './EvolutionCapabilities.module.css';

const capabilities = [
  { id: 'evaluation', title: 'Model Evaluation', description: 'Comprehensive testing across multiple performance dimensions.', icon: '📊', color: '#7E9FFF' },
  { id: 'redteam', title: 'Red Teaming', description: 'Expert adversarial testing to identify vulnerabilities.', icon: '🔴', color: '#FF69B4' },
  { id: 'safety', title: 'Safety Testing', description: 'Rigorous safety assessments for responsible AI deployment.', icon: '🛡️', color: '#FFD700' },
  { id: 'benchmark', title: 'Benchmarking', description: 'Standardized comparisons against industry baselines.', icon: '📈', color: '#00CED1' }
];

export default function EvolutionCapabilities() {
  const [activeCapability, setActiveCapability] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.label}>WHY DUSKER</div>
          <h2 className={styles.title}>
            Reliable <span className={styles.highlight}>Performance Management</span>
          </h2>
          <p className={styles.subtitle}>
            Enable frontier model developers to understand, analyze, and iterate on their models.
          </p>
        </motion.div>

        <div className={styles.capabilitiesLayout}>
          <div className={styles.selector}>
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.id}
                className={`${styles.selectorItem} ${activeCapability === index ? styles.active : ''}`}
                onClick={() => setActiveCapability(index)}
                whileHover={{ x: 10 }}
                style={{ '--cap-color': cap.color } as React.CSSProperties}
              >
                <span className={styles.selectorIcon}>{cap.icon}</span>
                <span className={styles.selectorTitle}>{cap.title}</span>
                {activeCapability === index && (
                  <motion.div className={styles.activeIndicator} layoutId="capIndicator" style={{ background: cap.color }} />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            key={activeCapability}
            className={styles.detailPanel}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ '--detail-color': capabilities[activeCapability].color } as React.CSSProperties}
          >
            <div className={styles.detailIcon} style={{ background: `${capabilities[activeCapability].color}20`, borderColor: capabilities[activeCapability].color }}>
              {capabilities[activeCapability].icon}
            </div>
            <h3 className={styles.detailTitle}>{capabilities[activeCapability].title}</h3>
            <p className={styles.detailDesc}>{capabilities[activeCapability].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
