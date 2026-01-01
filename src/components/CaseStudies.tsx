'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './CaseStudies.module.css';

export default function CaseStudies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>CASE STUDIES</div>
          <h2 className={styles.title}>Learn More About Our Customers</h2>
          <a href="/case-studies" className={styles.link}>
            Build AI
            <span className={styles.arrow}>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
