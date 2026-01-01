'use client';

import React from 'react';
import styles from './CustomersSection.module.css';

export default function CustomersSection() {
  return (
    <section className={styles.customersSection}>
      <p className={styles.customersLabel}>CUSTOMERS</p>
      <h2 className={styles.customersTitle}>
        We have changed the game of AI<br />data—hear it from our customers.
      </h2>
      <p className={styles.customersSubtitle}>
        From RLHF to data labeling to model evaluation to enterprise apps,<br />
        learn from experts why Dusker is key to any AI strategy.
      </p>

      <div className={styles.testimonialCard}>
        <div className={styles.videoPlaceholder}>
          <div className={styles.playButton}>▶</div>
        </div>
        <div className={styles.testimonialContent}>
          <p className={styles.testimonialText}>
            "We partnered with Dusker AI to work with Enterprises to adopt advanced AI models 
            and train custom solutions with their own data. We are excited to collectively make 
            AI the industry standard and bring the benefits of AI to everyone."
          </p>
          <p className={styles.testimonialAuthor}>Mark Zuckerberg</p>
          <p className={styles.testimonialRole}>Founder and CEO, Meta</p>
        </div>
      </div>
    </section>
  );
}
