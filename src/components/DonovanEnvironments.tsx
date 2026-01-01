'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './DonovanEnvironments.module.css';

const environments = [
  {
    id: 'govcloud',
    title: 'Unclassified/CUI GovCloud',
    description: 'DISA IL4 and FedRAMP High Authorized',
    icon: '☁️',
    color: '#7E9FFF',
    angle: -30
  },
  {
    id: 'classified',
    title: 'Classified Networks',
    description: 'Field-ready on secure government networks',
    icon: '🔐',
    color: '#FF69B4',
    angle: 0
  },
  {
    id: 'cloud-agnostic',
    title: 'Cloud Agnostic',
    description: 'Kubernetes containerized platform',
    icon: '🌐',
    color: '#FFD700',
    angle: 30
  }
];

const certifications = [
  { icon: '🛡️', title: 'FedRAMP High', color: '#7E9FFF' },
  { icon: '🔒', title: 'DISA IL4', color: '#FF69B4' },
  { icon: '✅', title: 'SOC 2 Type II', color: '#FFD700' }
];

export default function DonovanEnvironments() {
  const [activeEnv, setActiveEnv] = useState(1);

  return (
    <section className={styles.section}>
      {/* Shield Background Effect */}
      <div className={styles.shieldBackground}>
        <motion.div 
          className={styles.shieldGlow}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        {/* Scanning Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.scanLine}
            style={{ top: `${20 + i * 15}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>SUPPORTED ENVIRONMENTS</div>
          <h2 className={styles.title}>
            Trusted & <span className={styles.highlight}>Secure</span>
          </h2>
          <p className={styles.subtitle}>
            Donovan is available on classified and air gapped networks.
          </p>
        </motion.div>

        {/* Shield Visualization */}
        <div className={styles.shieldContainer}>
          {/* Central Shield */}
          <motion.div 
            className={styles.centralShield}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Shield Rings */}
            <motion.div 
              className={styles.shieldRing1}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className={styles.shieldRing2}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className={styles.shieldRing3}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Shield Core */}
            <motion.div 
              className={styles.shieldCore}
              animate={{
                boxShadow: [
                  '0 0 30px rgba(126, 159, 255, 0.3)',
                  '0 0 60px rgba(255, 105, 180, 0.3)',
                  '0 0 30px rgba(255, 215, 0, 0.3)',
                  '0 0 30px rgba(126, 159, 255, 0.3)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <svg className={styles.shieldIcon} viewBox="0 0 24 24" fill="none">
                <motion.path 
                  d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" 
                  stroke="url(#shieldGradient)" 
                  strokeWidth="1.5" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                />
                <motion.path 
                  d="M9 12l2 2 4-4" 
                  stroke="url(#shieldGradient)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                <defs>
                  <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7E9FFF" />
                    <stop offset="50%" stopColor="#FF69B4" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Orbiting Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.orbitParticle}
                style={{
                  background: environments[i % 3].color
                }}
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div 
                  className={styles.particleDot}
                  style={{ background: environments[i % 3].color }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Environment Cards - Floating Around Shield */}
          {environments.map((env, index) => (
            <motion.div
              key={env.id}
              className={`${styles.envCard} ${activeEnv === index ? styles.activeEnv : ''}`}
              style={{
                '--env-color': env.color,
                '--card-angle': `${env.angle}deg`
              } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.15 }}
              onClick={() => setActiveEnv(index)}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className={styles.cardGlow}
                style={{ background: env.color }}
                animate={{
                  opacity: activeEnv === index ? [0.2, 0.4, 0.2] : 0.1,
                  scale: activeEnv === index ? [1, 1.2, 1] : 1
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className={styles.cardIcon}>
                <motion.span
                  animate={{
                    y: activeEnv === index ? [0, -3, 0] : 0,
                    scale: activeEnv === index ? [1, 1.1, 1] : 1
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {env.icon}
                </motion.span>
              </div>
              
              <h3 className={styles.cardTitle}>{env.title}</h3>
              <p className={styles.cardDesc}>{env.description}</p>
              
              <motion.div 
                className={styles.cardConnector}
                style={{ background: `linear-gradient(90deg, transparent, ${env.color}, transparent)` }}
                animate={{
                  opacity: activeEnv === index ? 1 : 0.3,
                  scaleX: activeEnv === index ? 1 : 0.5
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Certification Badges - Floating */}
        <div className={styles.certifications}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className={styles.certBadge}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              style={{ '--cert-color': cert.color } as React.CSSProperties}
            >
              <motion.div 
                className={styles.certGlow}
                style={{ background: cert.color }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
              <span className={styles.certIcon}>{cert.icon}</span>
              <span className={styles.certText}>{cert.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
