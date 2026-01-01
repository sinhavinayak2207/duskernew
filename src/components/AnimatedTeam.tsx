"use client";
import React from 'react';
import styles from './AnimatedTeam.module.css';

const team = [
 
  {
    name: 'Raj Shrivastava',
    role: 'Chief Executive Officer',
    img: '/images/raj.jpg',
    bio: 'Strategic business development professional with a talent for building partnerships and expanding market reach.'
  },
  {
    name: 'Ashish Kar',
    role: 'Chief Technology Officer',
    img: '/images/ashish_kar.jpg',
    bio: 'Visionary AI entrepreneur with expertise in machine learning systems and business strategy.'
  },
  {
    name: 'Tejaswi Sinha',
    role: 'Chief Marketing Officer',
    img: '/images/tejaswi_sinha.jpg',
    bio: 'Strategic marketing leader with expertise in AI-driven growth, brand positioning, and customer-centric innovation..'
  },
];

export default function AnimatedTeam() {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>Meet the Dusker Team</h2>
      <div className={styles.teamGrid}>
        {team.map((member, idx) => (
          <div className={styles.teamCard} key={member.name}>
            <img src={member.img} alt={member.name} className={styles.avatar} />
            <div className={styles.teamInfo}>
              <div className={styles.teamName}>{member.name}</div>
              <div className={styles.teamRole}>{member.role}</div>
              <div className={styles.teamBio}>{member.bio}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
