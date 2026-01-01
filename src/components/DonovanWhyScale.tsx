'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './DonovanWhyScale.module.css';

const features = [
  {
    id: 'ai-expertise',
    title: 'AI Expertise',
    description: 'DUSKER works with the leading commercial foundation model providers and brings lessons learned to our public sector engagements.',
    icon: '✨',
    color: '#7E9FFF'
  },
  {
    id: 'model-performance',
    title: 'Model Performance',
    description: "One of DUSKER's core competencies is model fine-tuning. DUSKER can customize models specific to your use-case or leverage pre-existing models like Defense Llama.",
    icon: '📈',
    color: '#FF69B4'
  },
  {
    id: 'time-to-value',
    title: 'Time to Value',
    description: 'Access no-code tools to customize AI agents on your own without reliance on external developers.',
    icon: '⚡',
    color: '#FFD700'
  },
  {
    id: 'flexibility',
    title: 'Flexibility',
    description: 'Select your preferred method for agent and model deployment and hosting. Seamlessly embed Donovan with your existing applications and tools.',
    icon: '🔀',
    color: '#00CED1'
  },
  {
    id: 'traceability',
    title: 'Traceability',
    description: 'Transparent detailed reasoning helps users understand the steps and resources AI agents used to arrive at an answer.',
    icon: '🔍',
    color: '#9370DB'
  },
  {
    id: 'model-agnostic',
    title: 'Model Agnostic',
    description: 'Leverage your preferred cloud and model provider with Donovan. Select models that account for mission parameters like cost, speed, and expert capabilities.',
    icon: '👥',
    color: '#FF6347'
  }
];

export default function DonovanWhyScale() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className={styles.section}>
      {/* Animated Hexagon Background */}
      <div className={styles.hexBackground}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.hexagon}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 60, 0],
              opacity: [0.03, 0.08, 0.03],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
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
          <div className={styles.label}>WHY DUSKER</div>
          <h2 className={styles.title}>
            Built for <span className={styles.highlight}>Mission Success</span>
          </h2>
          <p className={styles.subtitle}>
            DUSKER brings unparalleled AI expertise to defense and national security applications.
          </p>
        </motion.div>

        {/* Honeycomb Flow Layout */}
        <div className={styles.honeycombContainer}>
          {/* Left - Feature Selector */}
          <div className={styles.featureSelector}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`${styles.selectorItem} ${activeFeature === index ? styles.activeItem : ''}`}
                onClick={() => setActiveFeature(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                style={{ '--item-color': feature.color } as React.CSSProperties}
              >
                <motion.div 
                  className={styles.selectorIcon}
                  animate={{
                    scale: activeFeature === index ? 1.1 : 1,
                    boxShadow: activeFeature === index 
                      ? `0 0 30px ${feature.color}40` 
                      : '0 0 0px transparent'
                  }}
                  style={{ 
                    background: activeFeature === index ? `${feature.color}20` : 'rgba(255,255,255,0.03)',
                    borderColor: activeFeature === index ? feature.color : 'rgba(255,255,255,0.1)'
                  }}
                >
                  {feature.icon}
                </motion.div>
                <div className={styles.selectorContent}>
                  <span className={styles.selectorTitle}>{feature.title}</span>
                  <motion.div 
                    className={styles.selectorLine}
                    style={{ background: feature.color }}
                    animate={{ scaleX: activeFeature === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                {activeFeature === index && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    style={{ background: feature.color }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Center - Connection Visualization */}
          <div className={styles.connectionViz}>
            <svg className={styles.connectionSvg} viewBox="0 0 100 400">
              {features.map((feature, i) => (
                <motion.path
                  key={i}
                  d={`M0,${35 + i * 60} Q50,${35 + i * 60} 100,200`}
                  stroke={feature.color}
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: activeFeature === i ? 1 : 0.3,
                    opacity: activeFeature === i ? 0.8 : 0.2
                  }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </svg>
            
            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.flowParticle}
                style={{ background: features[activeFeature].color }}
                animate={{
                  x: [0, 100],
                  y: [35 + activeFeature * 60, 200],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.25
                }}
              />
            ))}
          </div>

          {/* Right - Feature Detail */}
          <motion.div 
            className={styles.featureDetail}
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div 
              className={styles.detailHex}
              style={{ 
                background: `linear-gradient(135deg, ${features[activeFeature].color}20, transparent)`,
                borderColor: features[activeFeature].color
              }}
              animate={{
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <motion.div 
                className={styles.detailIconWrapper}
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 10, 0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className={styles.detailIcon}>{features[activeFeature].icon}</span>
              </motion.div>
            </motion.div>

            <h3 className={styles.detailTitle} style={{ color: features[activeFeature].color }}>
              {features[activeFeature].title}
            </h3>
            <p className={styles.detailDescription}>
              {features[activeFeature].description}
            </p>

            {/* Animated Stats */}
            <div className={styles.detailStats}>
              <motion.div 
                className={styles.statBar}
                style={{ background: `linear-gradient(90deg, ${features[activeFeature].color}, transparent)` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.div 
                className={styles.statBar}
                style={{ background: `linear-gradient(90deg, ${features[activeFeature].color}80, transparent)` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0.7 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.div 
                className={styles.statBar}
                style={{ background: `linear-gradient(90deg, ${features[activeFeature].color}60, transparent)` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0.5 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>

            {/* Glow Effect */}
            <motion.div 
              className={styles.detailGlow}
              style={{ background: features[activeFeature].color }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className={styles.mobileFeatures}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={styles.mobileFeature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.mobileIcon} style={{ background: `${feature.color}20`, borderColor: feature.color }}>
                {feature.icon}
              </div>
              <div className={styles.mobileContent}>
                <h4 style={{ color: feature.color }}>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
