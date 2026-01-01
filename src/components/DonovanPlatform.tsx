'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './DonovanPlatform.module.css';

const platformFeatures = [
  {
    id: 'models',
    title: 'Models',
    description: 'Access state-of-the-art foundation models optimized for defense applications.',
    icon: '🧠',
    color: '#7E9FFF',
    angle: 0
  },
  {
    id: 'building-blocks',
    title: 'Building Blocks',
    description: 'Modular components for rapid AI application development.',
    icon: '🧱',
    color: '#FF69B4',
    angle: 60
  },
  {
    id: 'evaluations',
    title: 'Evaluations',
    description: 'Comprehensive testing and validation frameworks for AI systems.',
    icon: '📋',
    color: '#FFD700',
    angle: 120
  },
  {
    id: 'data-flywheel',
    title: 'Data Flywheel',
    description: 'Continuous improvement through intelligent data collection and curation.',
    icon: '🔄',
    color: '#00CED1',
    angle: 180
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Insights',
    description: 'Real-time performance tracking and actionable analytics.',
    icon: '📊',
    color: '#9370DB',
    angle: 240
  },
  {
    id: 'guardrails',
    title: 'Guardrails & Redteaming',
    description: 'Safety mechanisms and adversarial testing for secure AI deployment.',
    icon: '🛡️',
    color: '#FF6347',
    angle: 300
  }
];

export default function DonovanPlatform() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const activeData = platformFeatures.find(f => f.id === (activeFeature || hoveredFeature));

  return (
    <section className={styles.section}>
      {/* Constellation Background */}
      <div className={styles.constellationBg}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.star}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
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
          <div className={styles.label}>PLATFORM CAPABILITIES</div>
          <h2 className={styles.title}>
            The Complete <span className={styles.highlight}>AI Infrastructure</span>
          </h2>
          <p className={styles.subtitle}>
            A unified platform powering every aspect of AI development, deployment, and operations.
          </p>
        </motion.div>

        {/* Orbital Visualization */}
        <div className={styles.orbitalContainer}>
          {/* Orbital Rings */}
          <motion.div 
            className={styles.orbitalRing1}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className={styles.orbitalRing2}
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className={styles.orbitalRing3}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Connection Lines */}
          <svg className={styles.connectionsSvg} viewBox="0 0 600 600">
            {platformFeatures.map((feature, i) => {
              const nextFeature = platformFeatures[(i + 1) % platformFeatures.length];
              const x1 = 300 + Math.cos(feature.angle * Math.PI / 180) * 220;
              const y1 = 300 + Math.sin(feature.angle * Math.PI / 180) * 220;
              const x2 = 300 + Math.cos(nextFeature.angle * Math.PI / 180) * 220;
              const y2 = 300 + Math.sin(nextFeature.angle * Math.PI / 180) * 220;
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={`url(#gradient-${i})`}
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 1 }}
                />
              );
            })}
            {/* Center connections */}
            {platformFeatures.map((feature, i) => {
              const x = 300 + Math.cos(feature.angle * Math.PI / 180) * 220;
              const y = 300 + Math.sin(feature.angle * Math.PI / 180) * 220;
              return (
                <motion.line
                  key={`center-${i}`}
                  x1={300}
                  y1={300}
                  x2={x}
                  y2={y}
                  stroke={feature.color}
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    opacity: hoveredFeature === feature.id || activeFeature === feature.id ? 0.8 : 0.2
                  }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                />
              );
            })}
            <defs>
              {platformFeatures.map((feature, i) => {
                const nextFeature = platformFeatures[(i + 1) % platformFeatures.length];
                return (
                  <linearGradient key={`gradient-${i}`} id={`gradient-${i}`}>
                    <stop offset="0%" stopColor={feature.color} />
                    <stop offset="100%" stopColor={nextFeature.color} />
                  </linearGradient>
                );
              })}
            </defs>
          </svg>

          {/* Orbital Nodes */}
          {platformFeatures.map((feature, index) => {
            const x = 50 + Math.cos(feature.angle * Math.PI / 180) * 37;
            const y = 50 + Math.sin(feature.angle * Math.PI / 180) * 37;
            const isActive = hoveredFeature === feature.id || activeFeature === feature.id;
            
            // Determine tooltip position based on angle
            const tooltipPosition = feature.angle >= 90 && feature.angle <= 270 ? 'left' : 'right';
            
            return (
              <motion.div
                key={feature.id}
                className={`${styles.orbitalNode} ${isActive ? styles.activeNode : ''}`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  '--node-color': feature.color
                } as React.CSSProperties}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring" }}
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
                onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              >
                <motion.div 
                  className={styles.nodeGlow}
                  style={{ background: feature.color }}
                  animate={{
                    scale: isActive ? [1, 1.5, 1] : 1,
                    opacity: isActive ? [0.3, 0.6, 0.3] : 0.2
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className={styles.nodeIcon}>{feature.icon}</div>
                <motion.div 
                  className={styles.nodeRing}
                  style={{ borderColor: feature.color }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Side Info Panel - appears next to the node */}
                <motion.div
                  className={`${styles.sideInfoPanel} ${tooltipPosition === 'left' ? styles.leftPanel : styles.rightPanel}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0, 
                    scale: isActive ? 1 : 0.8,
                    x: isActive ? 0 : (tooltipPosition === 'left' ? 20 : -20)
                  }}
                  style={{ borderColor: feature.color }}
                >
                  <div className={styles.sideInfoBadge} style={{ background: feature.color }}>
                    {feature.icon}
                  </div>
                  <h4 className={styles.sideInfoTitle}>{feature.title}</h4>
                  <p className={styles.sideInfoDesc}>{feature.description}</p>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center Hub */}
          <motion.div 
            className={styles.centerHub}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <motion.div 
              className={styles.hubPulse}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className={styles.hubCore}>
              <span className={styles.hubIcon}>⚡</span>
            </div>
          </motion.div>

        </div>

        {/* Feature List (Mobile) */}
        <div className={styles.mobileFeatures}>
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={styles.mobileFeature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.mobileIcon} style={{ background: `${feature.color}20`, color: feature.color }}>
                {feature.icon}
              </div>
              <div className={styles.mobileContent}>
                <h4 className={styles.mobileTitle}>{feature.title}</h4>
                <p className={styles.mobileDesc}>{feature.description}</p>
              </div>
              <motion.div 
                className={styles.mobileLine}
                style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
