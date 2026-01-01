'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './DonovanHero.module.css';

const floatingNodes = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 6 + 4,
  delay: Math.random() * 5
}));

const connectionLines = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x1: Math.random() * 100,
  y1: Math.random() * 100,
  x2: Math.random() * 100,
  y2: Math.random() * 100
}));

export default function DonovanHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [typedText, setTypedText] = useState('');
  const fullText = 'Empowering the Public Sector with AI Agents';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  return (
    <section className={styles.section} onMouseMove={handleMouseMove}>
      {/* Neural Network Background */}
      <div className={styles.neuralNetwork}>
        <svg className={styles.networkSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          {connectionLines.map((line) => (
            <motion.line
              key={line.id}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="rgba(126, 159, 255, 0.15)"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: line.id * 0.1 }}
            />
          ))}
        </svg>
        {floatingNodes.map((node) => (
          <motion.div
            key={node.id}
            className={styles.node}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: node.size,
              height: node.size
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              delay: node.delay,
              repeat: Infinity
            }}
          />
        ))}
      </div>

      {/* Animated Orbs */}
      <motion.div
        className={styles.orbPrimary}
        animate={{
          x: mousePosition.x * 100 - 50,
          y: mousePosition.y * 100 - 50
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />
      <motion.div
        className={styles.orbSecondary}
        animate={{
          x: mousePosition.x * -80 + 40,
          y: mousePosition.y * -80 + 40
        }}
        transition={{ type: "spring", stiffness: 20, damping: 15 }}
      />
      <motion.div
        className={styles.orbTertiary}
        animate={{
          x: mousePosition.x * 60 - 30,
          y: mousePosition.y * -60 + 30
        }}
        transition={{ type: "spring", stiffness: 25, damping: 18 }}
      />

      <div className={styles.container}>
        {/* Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badgeDot} />
          <span>AI-Powered Intelligence Platform</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.titleMain}>DUSKER</span>
          <span className={styles.titleHighlight}>Donovan</span>
        </motion.h1>

        {/* Typed Subtitle */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {typedText}
          <span className={styles.cursor}>|</span>
        </motion.p>

        {/* Description */}
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Donovan is DUSKER&apos;s suite of AI-powered decision-making tools designed 
          specifically for defense and national security applications.
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
            { value: '500+', label: 'Government Agencies' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: 'IL4+', label: 'Security Certified' }
          ].map((stat, i) => (
            <div key={stat.label} className={styles.statItem}>
              <motion.div
                className={styles.statValue}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
