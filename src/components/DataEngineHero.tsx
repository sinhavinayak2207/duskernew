'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './DataEngineHero.module.css';

export default function DataEngineHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            
            <div className={styles.textContent}>
              
              <h1 className={styles.mainTitle}>Data Engine</h1>
              
              <h2 className={styles.subtitle}>
                Collect, curate, and annotate data. Train models and evaluate. Repeat.
              </h2>
              
              <div className={styles.buttonGroup}>
                <a href="/demo" className={styles.btnPrimary}>
                  Book a Demo
                  <span className={styles.arrow}>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className={styles.rightContent}>
            <div className={styles.videoContainer}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className={styles.video}
              >
                <source src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Data%20Engine/Data%20Engine-4k-mp4.mp4" type="video/mp4" />
                <source src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Data%20Engine/Data%20Engine-4k-webm.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
