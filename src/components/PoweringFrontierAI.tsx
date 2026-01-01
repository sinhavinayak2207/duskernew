'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './PoweringFrontierAI.module.css';

export default function PoweringFrontierAI() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <motion.div 
            className={styles.leftContent}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.label}>BUILD AI</div>
            <h2 className={styles.title}>Powering Frontier AI</h2>
            <p className={styles.description}>
              Next Generation AI powered by world-class data.
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className={styles.rightContent}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.subtitle}>Generative AI</h3>
            <h4 className={styles.heading}>Powering the next generation of Generative AI</h4>
            <p className={styles.text}>
              Scale Generative AI Data Engine powers many of the most advanced LLMs and generative models in the world 
              through world-class RLHF, data generation, model evaluation, safety, and alignment.
            </p>
            <div className={styles.buttonGroup}>
              <a href="/demo" className={styles.btnPrimary}>
                Book a Demo
                <span className={styles.arrow}>→</span>
              </a>
              <a href="/build-ai" className={styles.btnSecondary}>
                Build AI
                <span className={styles.arrow}>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
