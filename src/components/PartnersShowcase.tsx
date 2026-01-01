'use client';

import React, { useState } from 'react';
import styles from './PartnersShowcase.module.css';

const categories = [
  {
    name: 'Generative AI Companies',
    logos: [
      { name: 'Meta', icon: '🔵' },
      { name: 'Cohere', icon: '🟣' },
      { name: 'Adept', icon: '🔷' },
      { name: 'Character AI', icon: '🤖' }
    ]
  },
  {
    name: 'U.S. Government Agencies',
    logos: [
      { name: 'US Army', icon: '⭐' },
      { name: 'Air Force', icon: '✈️' },
      { name: 'Defense Innovation Unit', icon: '🛡️' },
      { name: 'CDAO', icon: '🎯' }
    ]
  },
  {
    name: 'Enterprises',
    logos: [
      { name: 'Cengage', icon: '📚' },
      { name: 'Cisco', icon: '🌐' },
      { name: 'DLA Piper', icon: '⚖️' },
      { name: 'GAFG', icon: '🏢' },
      { name: 'Howard Hughes', icon: '🏗️' },
      { name: 'Mayo Clinic', icon: '🏥' },
      { name: 'TIME', icon: '⏰' }
    ]
  }
];

export default function PartnersShowcase() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Category Selector */}
        <div className={styles.categorySelector}>
          <p className={styles.introText}>
            Dusker works with{' '}
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <button
                  className={`${styles.categoryButton} ${activeCategory === index ? styles.active : ''}`}
                  onClick={() => setActiveCategory(index)}
                >
                  {category.name}
                  <span className={styles.underline}></span>
                </button>
                {index < categories.length - 1 && (index === categories.length - 2 ? ' & ' : ', ')}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* Logos Display */}
        <div className={styles.logosContainer}>
          {categories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`${styles.logosGrid} ${activeCategory === catIndex ? styles.activeGrid : ''}`}
            >
              {category.logos.map((logo, logoIndex) => (
                <div key={logoIndex} className={styles.logoCard}>
                  <span className={styles.logoIcon}>{logo.icon}</span>
                  <span className={styles.logoName}>{logo.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
