'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './GenAIFinalCTA.module.css';

export default function GenAIFinalCTA() {
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
            <span className={styles.titleGray}>The future of your industry </span>
            <span className={styles.titleHighlight}>starts here</span>
          </h3>
          <div className={styles.ctaWrapper}>
            <button className={styles.ctaButton}>
              Book a Demo
              <span className={styles.arrow}>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
