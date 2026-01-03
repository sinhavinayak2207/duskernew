'use client';

import React from 'react';
import styles from './NewHero.module.css';

export default function NewHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Engineering Intelligence <br />Where Data Meets Purpose.
        </h1>
        <p className={styles.heroSubtitle}>
        Build, evaluate, and deploy world-class AI solutions with the next-generation data engine and platform.
        </p>
        <div className={styles.heroButtons}>
          <a href="/demo" className={styles.btnPrimary}>Book a Demo →</a>
          {/* Build AI button removed */}
        </div>
        
        {/* Trust Badges Section */}
        <div className={styles.trustBadges}>
          <p className={styles.trustedBy}>Trusted by industry leaders</p>
          <div className={styles.badgeContainer}>
            <a href="https://snorkel.ai" target="_blank" rel="noopener noreferrer" className={styles.companyBadge}>
              <img 
                alt="Snorkel AI" 
                loading="lazy" 
                width="100" 
                height="32" 
                className={styles.partnerLogo}
                src="https://s46486.pcdn.co/wp-content/uploads/2023/05/snorkel_logo_header-1.svg"
              />
            </a>
            <a href="https://labelbox.com" target="_blank" rel="noopener noreferrer" className={styles.companyBadge}>
              <img 
                alt="Labelbox AI" 
                loading="lazy" 
                width="100" 
                height="32" 
                className={`${styles.partnerLogo} ${styles.darkLogo}`}
                src="https://labelbox.com/static/images/logo-v4.svg"
              />
            </a>
            <a href="https://shaip.com" target="_blank" rel="noopener noreferrer" className={styles.companyBadge}>
              <img 
                alt="Shaip AI" 
                loading="lazy" 
                width="100" 
                height="32" 
                className={styles.partnerLogo}
                src="https://f5b623aa.delivery.rocketcdn.me/wp-content/uploads/2020/11/Shaip-Logo-New.svg"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.geometricShape}></div>
      </div>
    </section>
  );
}
