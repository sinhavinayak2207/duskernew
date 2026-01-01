'use client';

import React from 'react';
import styles from './ResearchSection.module.css';

export default function ResearchSection() {
  const researchItems = [
    {
      label: 'Leaderboards',
      title: 'SEAL Leaderboards:\nExpert-Driven Private Evaluations',
      icon: '△'
    },
    {
      label: 'Research',
      title: 'FORTRESS: Risk Assessment for National Security',
      icon: '◻'
    },
    {
      label: 'Research',
      title: 'Adaptive Guidance: Reasoning Model',
      icon: '◇'
    }
  ];

  return (
    <section className={styles.researchSection}>
      <h2 className={styles.researchTitle}>Frontier AI Research</h2>
      <p className={styles.researchSubtitle}>
        SEAL (Safety, Evaluations, and Alignment Lab) is our research initiative to improve 
        model capabilities through challenging private evaluations and novel research.
      </p>

      <div className={styles.researchCards}>
        {researchItems.map((item, index) => (
          <div 
            key={index} 
            className={styles.researchCard}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={styles.researchIcon}>{item.icon}</div>
            <div className={styles.researchContent}>
              <p className={styles.researchLabel}>{item.label}</p>
              <h3 className={styles.researchCardTitle}>
                {item.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < item.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
            </div>
            <div className={styles.researchArrow}>↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}
