'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './EvolutionCTA.module.css';

export default function EvolutionCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundEffect}>
        <motion.div
          className={styles.orbPrimary}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={styles.orbSecondary}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Ready to <span className={styles.highlight}>Evaluate</span> Your Models?
          </h2>
          <p className={styles.description}>
            Start comprehensive model evaluation and red teaming with DUSKER Evolution today.
          </p>

          <div className={styles.ctaWrapper}>
            <motion.button
              className={styles.ctaPrimary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <motion.span
                className={styles.ctaArrow}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
            <motion.button
              className={styles.ctaSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
