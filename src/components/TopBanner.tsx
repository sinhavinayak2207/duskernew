'use client';

import React from 'react';
import styles from './TopBanner.module.css';

export default function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <span>We are open-sourcing Dusker GenAI Platform's agentic infrastructure layer.</span>
      <a href="#" className={styles.bannerLink}>Try now →</a>
    </div>
  );
}
