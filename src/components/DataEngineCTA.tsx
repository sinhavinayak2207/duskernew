'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './DataEngineCTA.module.css';

export default function DataEngineCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.title}>
            <span className={styles.titleMuted}>The future of your industry </span>
            <span className={styles.titleHighlight}>starts here</span>
          </h3>
          
          <div className={styles.buttonGroup}>
            <a href="/demo" className={styles.btnPrimary}>
              Book a Demo
              <span className={styles.arrow}>→</span>
            </a>
            <a href="/data-engine" className={styles.btnSecondary}>
              Build AI
              <span className={styles.arrow}>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
