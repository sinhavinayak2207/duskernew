'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './GenAIHero.module.css';

export default function GenAIHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <motion.div 
            className={styles.leftContent}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.breadcrumb}>
              <a href="/data-engine" className={styles.breadcrumbLink}>
                DUSKER Data Engine
              </a>
            </div>
            
            <h1 className={styles.title}>
              Generative AI Data Engine
            </h1>
            
            <h2 className={styles.subtitle}>
              Powering the Next Frontier of AI.
            </h2>
            
            <div className={styles.ctaWrapper}>
              <button className={styles.ctaButton}>
                Book a Demo
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div 
            className={styles.rightContent}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.videoContainer}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.video}
              >
                <source
                  src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/GenAI%2F720p%2FGenAI-720p-mp4.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/GenAI%2F720p%2FGenAI-720p-webm.webm"
                  type="video/webm"
                />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
