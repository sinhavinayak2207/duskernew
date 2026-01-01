'use client';

import React from 'react';
import styles from './PartnersSection.module.css';

export default function PartnersSection() {
  const partners = [
    { name: 'Meta', logo: '∞ Meta' },
    { name: 'Cohere', logo: 'cohere' },
    { name: 'Adept', logo: 'Adept' },
    { name: 'Character.ai', logo: 'character.ai' },
  ];

  return (
    <section className={styles.partnersSection}>
      <p className={styles.partnersText}>
        Dusker works with <span className={styles.highlightBox}>Generative AI Companies</span>, 
        U.S. Government Agencies & Enterprises
      </p>
      <div className={styles.partnersLogos}>
        {partners.map((partner, index) => (
          <div key={index} className={styles.logoItem}>
            {partner.logo}
          </div>
        ))}
      </div>
    </section>
  );
}
