'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './PublicSectorEval.module.css';

const sectors = [
  { id: 'defense', name: 'Defense', icon: '🛡️', color: '#7dd3fc' },
  { id: 'healthcare', name: 'Healthcare', icon: '🏥', color: '#a78bfa' },
  { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️', color: '#f472b6' },
  { id: 'services', name: 'Public Services', icon: '🏛️', color: '#34d399' }
];

const certifications = [
  { name: 'FedRAMP', status: 'Authorized' },
  { name: 'SOC 2 Type II', status: 'Certified' },
  { name: 'ISO 27001', status: 'Compliant' },
  { name: 'HIPAA', status: 'Ready' }
];

const features = [
  { title: 'Red Team Testing', desc: 'Adversarial testing to identify vulnerabilities' },
  { title: 'Bias Detection', desc: 'Comprehensive fairness analysis' },
  { title: 'Audit Trails', desc: 'Complete transparency and logging' },
  { title: 'On-Premise Deploy', desc: 'Data sovereignty guaranteed' }
];

export default function PublicSectorEvaluationPage() {
  const [activeSector, setActiveSector] = useState(0);

  return (
    <main className={styles.main}>
      {/* Hero with Shield Visual */}
      <section className={styles.hero}>
        <div className={styles.shieldVisual}>
          <motion.div 
            className={styles.shieldOuter}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div 
            className={styles.shieldMiddle}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div 
            className={styles.shieldInner}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span>🛡️</span>
          </motion.div>
        </div>
        
        <div className={styles.heroContent}>
          <motion.span 
            className={styles.tag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Public Sector
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Mission-Critical
            <span className={styles.highlight}> AI Security</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Government-grade evaluation and monitoring for AI systems
            that protect and serve.
          </motion.p>
          
          <motion.a
            href="/demo"
            className={styles.heroBtn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Request Access →
          </motion.a>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className={styles.certSection}>
        <div className={styles.certTrack}>
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className={styles.certBadge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className={styles.certName}>{cert.name}</span>
              <span className={styles.certStatus}>{cert.status}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sector Selector */}
      <section className={styles.sectorsSection}>
        <h2 className={styles.sectionTitle}>Trusted Across Sectors</h2>
        
        <div className={styles.sectorSelector}>
          {sectors.map((sector, index) => (
            <motion.button
              key={sector.id}
              className={`${styles.sectorBtn} ${activeSector === index ? styles.activeSector : ''}`}
              onClick={() => setActiveSector(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ '--sector-color': sector.color } as React.CSSProperties}
            >
              <span className={styles.sectorIcon}>{sector.icon}</span>
              <span className={styles.sectorName}>{sector.name}</span>
              <div className={styles.sectorGlow}></div>
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className={styles.sectorDetail}
          key={activeSector}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div 
            className={styles.detailOrb}
            style={{ background: sectors[activeSector].color }}
          />
          <p>
            Specialized AI evaluation for {sectors[activeSector].name.toLowerCase()} applications
            with tailored security protocols and compliance frameworks.
          </p>
        </motion.div>
      </section>

      {/* Features Hexagon Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureHex}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.hexContent}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Secure Your Mission-Critical AI</h2>
          <a href="/demo" className={styles.ctaBtn}>Contact Us →</a>
        </motion.div>
      </section>
    </main>
  );
}
