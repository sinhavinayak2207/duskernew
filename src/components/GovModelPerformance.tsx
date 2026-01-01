'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GovModelPerformance.module.css';

const features = [
  {
    title: 'Advanced AI Software',
    description: 'A unified platform for end-to-end ML Ops. Process and calibrate data, conduct benchmark testing and error-analysis, uncover edge-cases, and audit data annotations.',
    color: '#7E9FFF',
    gradient: 'linear-gradient(135deg, #7E9FFF 0%, #4B6CB7 100%)',
    icon: '🧠'
  },
  {
    title: 'State-of-the-Art Machine Learning',
    description: 'Leverage machine learning strategies to accelerate and strategically approach data annotation. Curate diverse multimodal datasets, predict errors, and conduct uncertainty sampling.',
    color: '#FF69B4',
    gradient: 'linear-gradient(135deg, #FF69B4 0%, #FF1493 100%)',
    icon: '⚡'
  },
  {
    title: 'Human-in-the-Loop Expertise',
    description: 'Leverage subject matter experts with decades of experience and clearance for quality assurance, red-teaming, and continuous iteration of annotation strategies.',
    color: '#FFD700',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    icon: '👥'
  }
];

const stats = [
  { value: 99.9, suffix: '%', label: 'Accuracy Rate', color: '#7E9FFF' },
  { value: 10, suffix: 'x', label: 'Faster Processing', color: '#FF69B4' },
  { value: 500, suffix: 'K+', label: 'Data Points', color: '#FFD700' },
  { value: 24, suffix: '/7', label: 'Support', color: '#00CED1' }
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;
    
    const updateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (value - startValue) * easeOut;
      setDisplayValue(current);
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    
    requestAnimationFrame(updateValue);
  }, [value]);

  const formattedValue = suffix === '%' ? displayValue.toFixed(1) : Math.round(displayValue);

  return (
    <span>
      {formattedValue}
      {suffix}
    </span>
  );
}

export default function GovModelPerformance() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
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
      <div className={styles.container}>
        {/* Animated Background Orbs */}
        <div className={styles.orbContainer}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={styles.orb}
              style={{ background: feature.gradient }}
              animate={{
                x: mousePosition.x * 50 - 25 + i * 100,
                y: mousePosition.y * 50 - 25 + Math.sin(Date.now() / 1000 + i) * 20,
                scale: activeFeature === i ? 1.5 : 1,
                opacity: activeFeature === i ? 0.4 : 0.15
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          ))}
        </div>

        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className={styles.label}
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Why DUSKER
          </motion.div>
          <h2 className={styles.title}>
            Model Performance is{' '}
            <span className={styles.highlight}>Critical</span>{' '}
            for National Security
          </h2>
          <p className={styles.subtitle}>
            Model precision and accuracy are achieved with high-quality data powered by advanced AI software and subject matter experts.
          </p>
        </motion.div>

        {/* Stats Ring */}
        <div className={styles.statsRing}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: `0 20px 40px ${stat.color}40`,
                y: -10
              }}
              style={{ '--stat-color': stat.color } as React.CSSProperties}
            >
              <div className={styles.statGlow} style={{ background: stat.color }} />
              <div className={styles.statValue}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards - Hexagonal Layout */}
        <div className={styles.hexGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`${styles.hexCard} ${activeFeature === index ? styles.activeHex : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onClick={() => setActiveFeature(index)}
              whileHover={{ scale: 1.05 }}
              style={{ '--feature-color': feature.color } as React.CSSProperties}
            >
              <motion.div 
                className={styles.hexBorder}
                animate={{
                  opacity: activeFeature === index ? 1 : 0.3,
                  scale: activeFeature === index ? 1 : 0.95
                }}
                style={{ background: feature.gradient }}
              />
              
              <div className={styles.hexContent}>
                <motion.div 
                  className={styles.hexIcon}
                  animate={{ 
                    rotate: activeFeature === index ? [0, 10, -10, 0] : 0,
                    scale: activeFeature === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className={styles.hexTitle}>{feature.title}</h3>
                <motion.p 
                  className={styles.hexDescription}
                  animate={{ 
                    opacity: activeFeature === index ? 1 : 0.6,
                    height: activeFeature === index ? 'auto' : '0px'
                  }}
                >
                  {feature.description}
                </motion.p>
              </div>

              {/* Animated particles */}
              {activeFeature === index && (
                <div className={styles.particles}>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={styles.particle}
                      style={{ background: feature.color }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: Math.cos(i * 60 * Math.PI / 180) * 80,
                        y: Math.sin(i * 60 * Math.PI / 180) * 80
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Central Image with Holographic Effect */}
        <motion.div
          className={styles.holoContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className={styles.holoRing}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className={styles.holoRing2}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <div className={styles.holoImage}>
            <Image
              src="https://site-assets.plasmic.app/64cd12bfb9abc486ef6138fb5f3216a8.png"
              alt="Model Performance"
              width={400}
              height={400}
              className={styles.image}
            />
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className={styles.progressBar}>
          {features.map((_, i) => (
            <motion.div
              key={i}
              className={styles.progressDot}
              animate={{
                scale: activeFeature === i ? 1.5 : 1,
                background: activeFeature === i ? features[i].color : 'rgba(255,255,255,0.3)'
              }}
              onClick={() => setActiveFeature(i)}
            />
          ))}
          <motion.div
            className={styles.progressLine}
            animate={{ width: `${((activeFeature + 1) / features.length) * 100}%` }}
            style={{ background: features[activeFeature].gradient }}
          />
        </div>
      </div>
    </section>
  );
}
