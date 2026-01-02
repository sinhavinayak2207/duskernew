'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './GenAIPlatformCTA.module.css';

export default function GenAIPlatformCTA() {
  return (
    <section className={styles.section}>
      {/* Animated Background */}
      <div className={styles.backgroundEffect}>
        <motion.div
          className={styles.orbPrimary}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={styles.orbSecondary}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className={styles.orbTertiary}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Divider Line */}
        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to Transform Your Enterprise with{' '}
            <span className={styles.highlight}>GenAI</span>?
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Get started with DUSKER GenAI Platform today and accelerate your journey 
            from prototype to production-ready AI applications.
          </motion.p>

          {/* CTA Buttons - Removed */}

          {/* Trust Indicators */}
          <motion.div
            className={styles.trustIndicators}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: '🔒', text: 'Enterprise Security' },
              { icon: '⚡', text: '99.9% Uptime SLA' },
              { icon: '🛡️', text: 'SOC 2 Compliant' }
            ].map((item, i) => (
              <motion.div
                key={item.text}
                className={styles.trustItem}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                <span className={styles.trustIcon}>{item.icon}</span>
                <span className={styles.trustText}>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
