'use client';

import React from 'react';
import styles from './EnterpriseSection.module.css';

export default function EnterpriseSection() {
  return (
    <section className={styles.enterpriseSection}>
      <p className={styles.sectionLabel}>AI FOR THE ENTERPRISE</p>
      <h2 className={styles.sectionTitle}>Full-Stack AI Solutions</h2>
      <p className={styles.sectionSubtitle}>
        Outcomes delivered with world-class data, models, agents, and deployment.
      </p>
      <a href="/demo" className={styles.btnCta}>Book a Demo →</a>
    </section>
  );
}
