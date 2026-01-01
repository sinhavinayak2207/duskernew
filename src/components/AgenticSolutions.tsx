'use client';

import React from 'react';
import styles from './AgenticSolutions.module.css';

export default function AgenticSolutions() {
  return (
    <section className={styles.agenticSection}>
      <p className={styles.sectionLabel}>APPLY AI</p>
      <h2 className={styles.sectionTitle}>Agentic Solutions</h2>
      <p className={styles.sectionSubtitle}>
        Transform your data and expertise into agentic solutions<br />
        that continuously improve with human interaction.
      </p>

      <div className={styles.solutionsGrid}>
        <div className={styles.solutionCard}>
          <p className={styles.cardLabel}>PUBLIC SECTOR</p>
          <h3 className={styles.cardTitle}>
            Agentic Solutions for Defense<br />and Intelligence
          </h3>
          <p className={styles.cardDescription}>
            Orchestrate agent workflows for decision advantage.
          </p>
          <div className={styles.cardPreview}>
            <div className={`${styles.previewImage} ${styles.defensePreview}`}></div>
          </div>
        </div>

        <div className={styles.solutionCard}>
          <p className={styles.cardLabel}>ENTERPRISE</p>
          <h3 className={styles.cardTitle}>
            Agentic Solutions for Enterprise<br />AI Transformation
          </h3>
          <p className={styles.cardDescription}>
            Deploy reliable AI agents that learn to improve outcomes.
          </p>
          <div className={styles.cardPreview}>
            <div className={`${styles.previewImage} ${styles.enterprisePreview}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
