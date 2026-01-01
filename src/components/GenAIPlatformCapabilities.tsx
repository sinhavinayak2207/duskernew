'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './GenAIPlatformCapabilities.module.css';

const capabilities = [
  {
    id: 'foundation-models',
    title: 'Foundation Model Access',
    description: 'Access leading foundation models through a unified API with optimized inference.',
    icon: '🧠',
    color: '#7E9FFF'
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'Design, test, and manage prompts at scale with collaborative tools.',
    icon: '✍️',
    color: '#FF69B4'
  },
  {
    id: 'rag-pipeline',
    title: 'RAG Pipeline',
    description: 'Build retrieval-augmented generation systems with your enterprise data.',
    icon: '🔍',
    color: '#FFD700'
  },
  {
    id: 'guardrails',
    title: 'Safety & Guardrails',
    description: 'Implement safety mechanisms and content moderation for responsible AI.',
    icon: '🛡️',
    color: '#00CED1'
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Analytics',
    description: 'Track performance, usage patterns, and business metrics in real-time.',
    icon: '📊',
    color: '#9370DB'
  },
  {
    id: 'integration',
    title: 'Enterprise Integration',
    description: 'Connect with existing tools and workflows through comprehensive APIs.',
    icon: '🔗',
    color: '#FF6347'
  }
];

export default function GenAIPlatformCapabilities() {
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      {/* Hexagon Background */}
      <div className={styles.hexBackground}>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.hexagon}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 60, 0],
              opacity: [0.02, 0.06, 0.02],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
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
          <div className={styles.label}>CAPABILITIES</div>
          <h2 className={styles.title}>
            Everything You Need to <span className={styles.highlight}>Build AI</span>
          </h2>
          <p className={styles.subtitle}>
            A comprehensive suite of tools for enterprise AI development and deployment.
          </p>
        </motion.div>

        {/* Capabilities Grid - Honeycomb Style */}
        <div className={styles.capabilitiesGrid}>
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              className={styles.capabilityCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCapability(capability.id)}
              onMouseLeave={() => setHoveredCapability(null)}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ '--cap-color': capability.color } as React.CSSProperties}
            >
              {/* Glow Effect */}
              <motion.div 
                className={styles.cardGlow}
                style={{ background: capability.color }}
                animate={{
                  opacity: hoveredCapability === capability.id ? 0.2 : 0.05,
                  scale: hoveredCapability === capability.id ? 1.2 : 1
                }}
              />

              {/* Icon */}
              <motion.div 
                className={styles.cardIcon}
                animate={{
                  y: hoveredCapability === capability.id ? [0, -5, 0] : 0,
                  rotate: hoveredCapability === capability.id ? [0, 10, -10, 0] : 0
                }}
                transition={{ duration: 0.5 }}
                style={{ 
                  background: `${capability.color}15`,
                  borderColor: hoveredCapability === capability.id ? capability.color : 'rgba(255,255,255,0.1)'
                }}
              >
                <span>{capability.icon}</span>
              </motion.div>

              {/* Content */}
              <h3 className={styles.cardTitle}>{capability.title}</h3>
              <p className={styles.cardDescription}>{capability.description}</p>

              {/* Bottom Line */}
              <motion.div 
                className={styles.cardLine}
                style={{ background: capability.color }}
                animate={{
                  scaleX: hoveredCapability === capability.id ? 1 : 0.3,
                  opacity: hoveredCapability === capability.id ? 1 : 0.5
                }}
              />

              {/* Corner Accent */}
              <motion.div 
                className={styles.cornerAccent}
                style={{ borderColor: capability.color }}
                animate={{
                  opacity: hoveredCapability === capability.id ? 1 : 0
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { value: '50+', label: 'Foundation Models' },
            { value: '1M+', label: 'API Calls/Day' },
            { value: '500+', label: 'Enterprise Clients' },
            { value: '99.9%', label: 'Uptime SLA' }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              className={styles.statItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
