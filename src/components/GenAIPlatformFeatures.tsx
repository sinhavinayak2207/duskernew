'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GenAIPlatformFeatures.module.css';

const features = [
  {
    id: 'data-curation',
    title: 'Data Curation',
    description: 'Curate and prepare high-quality datasets for training and fine-tuning your AI models with enterprise-grade tools.',
    icon: '📊',
    color: '#7E9FFF'
  },
  {
    id: 'fine-tuning',
    title: 'Model Fine-Tuning',
    description: 'Customize foundation models with your proprietary data using efficient fine-tuning infrastructure.',
    icon: '🎯',
    color: '#FF69B4'
  },
  {
    id: 'evaluation',
    title: 'RLHF & Evaluation',
    description: 'Improve model performance with reinforcement learning from human feedback and comprehensive evaluation.',
    icon: '✨',
    color: '#FFD700'
  },
  {
    id: 'deployment',
    title: 'Enterprise Deployment',
    description: 'Deploy models to production with enterprise-grade infrastructure, monitoring, and scaling.',
    icon: '🚀',
    color: '#00CED1'
  }
];

export default function GenAIPlatformFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className={styles.section}>
      {/* Animated Background */}
      <div className={styles.backgroundEffect}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.bgParticle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
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
            End-to-End <span className={styles.highlight}>GenAI Pipeline</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to build, deploy, and scale enterprise AI applications.
          </p>
        </motion.div>

        {/* Interactive Feature Display */}
        <div className={styles.featureDisplay}>
          {/* Left - Feature Selector */}
          <div className={styles.featureSelector}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`${styles.featureTab} ${activeFeature === index ? styles.activeTab : ''}`}
                onClick={() => setActiveFeature(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                style={{ '--feature-color': feature.color } as React.CSSProperties}
              >
                <motion.div 
                  className={styles.tabIcon}
                  animate={{
                    scale: activeFeature === index ? 1.1 : 1,
                    boxShadow: activeFeature === index 
                      ? `0 0 30px ${feature.color}40` 
                      : 'none'
                  }}
                  style={{ 
                    background: activeFeature === index ? `${feature.color}20` : 'rgba(255,255,255,0.03)',
                    borderColor: activeFeature === index ? feature.color : 'rgba(255,255,255,0.1)'
                  }}
                >
                  {feature.icon}
                </motion.div>
                <div className={styles.tabContent}>
                  <span className={styles.tabTitle}>{feature.title}</span>
                  <motion.div 
                    className={styles.tabLine}
                    style={{ background: feature.color }}
                    animate={{ scaleX: activeFeature === index ? 1 : 0 }}
                  />
                </div>
                {activeFeature === index && (
                  <motion.div 
                    className={styles.activeIndicator}
                    layoutId="featureIndicator"
                    style={{ background: feature.color }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right - Feature Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              className={styles.featureDetail}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className={styles.detailIcon}
                style={{ 
                  background: `linear-gradient(135deg, ${features[activeFeature].color}30, transparent)`,
                  borderColor: features[activeFeature].color
                }}
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span>{features[activeFeature].icon}</span>
              </motion.div>

              <h3 className={styles.detailTitle} style={{ color: features[activeFeature].color }}>
                {features[activeFeature].title}
              </h3>
              <p className={styles.detailDescription}>
                {features[activeFeature].description}
              </p>

              {/* Animated Progress Bars */}
              <div className={styles.progressBars}>
                {[1, 0.8, 0.6].map((width, i) => (
                  <motion.div
                    key={i}
                    className={styles.progressBar}
                    style={{ 
                      background: `linear-gradient(90deg, ${features[activeFeature].color}, transparent)` 
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: width }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                  />
                ))}
              </div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={styles.floatingParticle}
                  style={{ background: features[activeFeature].color }}
                  animate={{
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pipeline Visualization */}
        <motion.div
          className={styles.pipelineViz}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.pipelineSteps}>
            {features.map((feature, index) => (
              <React.Fragment key={feature.id}>
                <motion.div
                  className={`${styles.pipelineStep} ${activeFeature === index ? styles.activeStep : ''}`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.1 }}
                  style={{ '--step-color': feature.color } as React.CSSProperties}
                >
                  <motion.div 
                    className={styles.stepGlow}
                    style={{ background: feature.color }}
                    animate={{
                      opacity: activeFeature === index ? [0.3, 0.6, 0.3] : 0.1,
                      scale: activeFeature === index ? [1, 1.3, 1] : 1
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className={styles.stepIcon}>{feature.icon}</span>
                  <span className={styles.stepLabel}>{feature.title}</span>
                </motion.div>
                {index < features.length - 1 && (
                  <motion.div 
                    className={styles.pipelineConnector}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
