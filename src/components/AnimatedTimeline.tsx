import React from 'react';
import styles from './AnimatedTimeline.module.css';

const timeline = [
  {
    year: '2024',
    title: 'Founded',
    desc: 'Dusker launches with a mission to make AI training accessible and scalable for all industries.'
  },

  {
    year: '2025',
    title: 'AI for Everyone',
    desc: 'Dusker now supports AI development for enterprises, startups, and public organizations worldwide.'
  }
];

export default function AnimatedTimeline() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.sectionTitle}>Our Journey</h2>
      <div className={styles.timelineWrap}>
        {timeline.map((item, idx) => (
          <div key={item.year} className={styles.timelineItem}>
            <div className={styles.timelineYear}>{item.year}</div>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineTitle}>{item.title}</div>
              <div className={styles.timelineDesc}>{item.desc}</div>
            </div>
          </div>
        ))}
        <div className={styles.timelineLine}></div>
      </div>
    </section>
  );
}
