'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './DataEngineExplained.module.css';

const features = [
  {
    title: 'Generation',
    description: 'After initial pre-training, create complex prompt-response pairs from scratch.',
    icon: '✓'
  },
  {
    title: 'RLHF',
    description: 'Apply human preferences to model outputs.',
    icon: '✓'
  },
  {
    title: 'Red Teaming',
    description: 'Use prompt injection techniques to find vulnerabilities.',
    icon: '✓'
  },
  {
    title: 'Evaluation',
    description: 'Evaluate your model against a set of complex and diverse prompts to find weak points.',
    icon: '✓'
  }
];

export default function DataEngineExplained() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>WHAT IS THE DATA ENGINE</div>
          <h2 className={styles.title}>The One-Stop-Shop For Building AI</h2>
          <p className={styles.subtitle}>
            Data engine is the process of improving machine learning models with high quality, diverse and large datasets 
            powered by experts. Unlock model performance with the Scale Data Engine.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className={styles.contentWrapper}>
          {/* Left Side - Features List */}
          <motion.div 
            className={styles.leftContent}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.sectionTitle}>GENERATIVE AI DATA ENGINE</h3>
            
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className={styles.featureHeader}>
                    <span className={styles.checkIcon}>{feature.icon}</span>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                  </div>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Interactive Diagram */}
          <motion.div 
            className={styles.rightContent}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.diagramContainer}>
              {/* Central Hub */}
              <div className={styles.centralHub}>
                <div className={styles.hubCircle}>
                  <span className={styles.hubText}>Model<br/>Evaluation</span>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className={styles.connectionLines} viewBox="0 0 600 400">
                <motion.path
                  d="M 300 200 L 150 100"
                  stroke="rgba(126, 159, 255, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.path
                  d="M 300 200 L 450 100"
                  stroke="rgba(126, 159, 255, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.path
                  d="M 300 200 L 150 300"
                  stroke="rgba(126, 159, 255, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.path
                  d="M 300 200 L 450 300"
                  stroke="rgba(126, 159, 255, 0.3)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </svg>

              {/* Node Boxes */}
              <motion.div 
                className={`${styles.nodeBox} ${styles.nodeTopLeft}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className={styles.nodeLabel}>Pre-Training</div>
              </motion.div>

              <motion.div 
                className={`${styles.nodeBox} ${styles.nodeTopRight}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className={styles.nodeLabel}>Red Teaming</div>
              </motion.div>

              <motion.div 
                className={`${styles.nodeBox} ${styles.nodeBottomLeft}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className={styles.nodeLabel}>GPT<br/><span className={styles.nodeSubtext}>Collect human-written<br/>prompt-response pairs</span></div>
              </motion.div>

              <motion.div 
                className={`${styles.nodeBox} ${styles.nodeBottomRight}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className={styles.nodeLabel}>RLHF<br/><span className={styles.nodeSubtext}>Apply human preferences<br/>to model outputs</span></div>
              </motion.div>

              <motion.div 
                className={`${styles.nodeBox} ${styles.nodeRight}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className={styles.nodeLabel}>Deployment</div>
              </motion.div>

              {/* Bottom Text */}
              <div className={styles.diagramFooter}>
                <p className={styles.footerText}>
                  *Pre-Training, Post-Training, and Red-Teaming are managed by customers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
