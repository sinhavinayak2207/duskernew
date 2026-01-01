'use client';

import React from 'react';
import styles from './ProvidersSection.module.css';

export default function ProvidersSection() {
  const providers = ['Adept', 'Meta', 'cohere', 'ANTHROPIC'];

  return (
    <section className={styles.providersSection}>
      <p className={styles.providersText}>GENERATIVE AI PROVIDERS WE PARTNER WITH:</p>
      <div className={styles.providersGrid}>
        {providers.map((provider, index) => (
          <div 
            key={index} 
            className={styles.providerCard}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {provider}
          </div>
        ))}
      </div>
    </section>
  );
}
