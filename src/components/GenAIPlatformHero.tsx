'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './GenAIPlatformHero.module.css';

const floatingElements = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 8 + 4,
  delay: Math.random() * 5
}));

export default function GenAIPlatformHero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Transform Your Enterprise with AI';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      {/* Animated Background */}
      <div className={styles.backgroundEffect}>
        {/* Neural Network Lines */}
        <svg className={styles.networkSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          {[...Array(15)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="rgba(126, 159, 255, 0.1)"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          ))}
        </svg>

        {/* Floating Elements */}
        {floatingElements.map((el) => (
          <motion.div
            key={el.id}
            className={styles.floatingElement}
            style={{
              left: `${el.x}%`,
              top: `${el.y}%`,
              width: el.size,
              height: el.size
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: el.delay,
              repeat: Infinity
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <motion.div
          className={styles.orbPrimary}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={styles.orbSecondary}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className={styles.orbTertiary}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className={styles.container}>
        {/* Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className={styles.badgeDot}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span>Enterprise GenAI Platform</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.titleMain}>DUSKER</span>
          <span className={styles.titleHighlight}>GenAI Platform</span>
        </motion.h1>

        {/* Typed Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {typedText}
          <motion.span 
            className={styles.cursor}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >|</motion.span>
        </motion.p>

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Accelerate and scale Generative AI across your enterprise with the platform 
          to transform your data into customized enterprise-ready GenAI applications.
        </motion.p>

        {/* CTA Buttons - Removed */}

        {/* Stats */}
        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { value: '70%', label: 'Faster Deployment' },
            { value: '10x', label: 'Productivity Boost' },
            { value: '99.9%', label: 'Uptime SLA' }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating AI Visualization */}
        <motion.div
          className={styles.aiVisualization}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div 
            className={styles.aiCore}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className={styles.aiRing1}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className={styles.aiRing2}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className={styles.aiCenter}>
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(126, 159, 255, 0.5)',
                  '0 0 40px rgba(255, 105, 180, 0.5)',
                  '0 0 20px rgba(255, 215, 0, 0.5)',
                  '0 0 20px rgba(126, 159, 255, 0.5)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🤖
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
