'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './AutoHero.module.css';

const particles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  duration: Math.random() * 20 + 10
}));

export default function AutoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  return (
    <section 
      ref={containerRef} 
      className={styles.section} 
      onMouseMove={handleMouseMove}
    >
      {/* Animated Grid Background */}
      <div className={styles.gridBackground}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className={styles.gridLineH}
            style={{ top: `${i * 5}%` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.1 }}
            transition={{ delay: i * 0.05, duration: 1 }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className={styles.gridLineV}
            style={{ left: `${i * 5}%` }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 0.1 }}
            transition={{ delay: i * 0.05, duration: 1 }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className={styles.particlesContainer}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div 
        className={styles.orbPrimary}
        animate={{
          x: mousePosition.x * 100 - 50,
          y: mousePosition.y * 100 - 50
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div 
        className={styles.orbSecondary}
        animate={{
          x: mousePosition.x * -80 + 40,
          y: mousePosition.y * -80 + 40
        }}
        transition={{ type: "spring", stiffness: 30, damping: 20 }}
      />

      <motion.div 
        className={styles.container}
        style={{ y, opacity, scale }}
      >
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <motion.div
            className={styles.leftContent}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className={styles.titleLine}>Automotive</span>
              <span className={styles.titleHighlight}>Data Engine</span>
            </motion.h1>

            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Unlocking Autonomy with best-in-class data.
            </motion.p>

            <motion.div
              className={styles.ctaWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className={styles.ctaButton}>
                <span className={styles.ctaText}>Book a Demo</span>
                <span className={styles.ctaArrow}>→</span>
                <div className={styles.ctaGlow} />
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className={styles.statsRow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                { value: '10B+', label: 'Miles Driven' },
                { value: '500+', label: 'AV Partners' },
                { value: '99.9%', label: 'Accuracy' }
              ].map((stat, i) => (
                <div key={stat.label} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Car Visualization */}
          <motion.div
            className={styles.rightContent}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className={styles.visualizationContainer}>
              {/* Rotating Rings */}
              <motion.div 
                className={styles.ring1}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className={styles.ring2}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className={styles.ring3}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Central Car Silhouette */}
              <div className={styles.carContainer}>
                <motion.div 
                  className={styles.carSilhouette}
                  animate={{
                    y: [0, -10, 0],
                    rotateY: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg viewBox="0 0 200 80" className={styles.carSvg}>
                    <defs>
                      <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7E9FFF" />
                        <stop offset="50%" stopColor="#FF69B4" />
                        <stop offset="100%" stopColor="#FFD700" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M20,50 L30,50 L35,35 L55,25 L145,25 L165,35 L170,50 L180,50 L180,60 L170,60 L165,55 L35,55 L30,60 L20,60 Z"
                      fill="none"
                      stroke="url(#carGradient)"
                      strokeWidth="2"
                    />
                    <circle cx="50" cy="58" r="10" fill="none" stroke="url(#carGradient)" strokeWidth="2" />
                    <circle cx="150" cy="58" r="10" fill="none" stroke="url(#carGradient)" strokeWidth="2" />
                    <path d="M60,30 L80,30 L80,40 L60,40 Z" fill="rgba(126,159,255,0.3)" />
                    <path d="M85,30 L140,30 L140,40 L85,40 Z" fill="rgba(255,105,180,0.3)" />
                  </svg>
                </motion.div>

                {/* Sensor Beams */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <motion.div
                    key={angle}
                    className={styles.sensorBeam}
                    style={{
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: 'center center'
                    }}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      scaleX: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Data Points */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className={styles.dataPoint}
                  style={{
                    left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 45}%`,
                    top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 45}%`
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.25
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Removed */}
    </section>
  );
}
