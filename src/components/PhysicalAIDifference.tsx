'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PhysicalAIDifference.module.css';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="M13.505 5.307V4.01a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.297a10.972 10.972 0 0 1 4.48 2.223l.768-.768a.995.995 0 0 1 .028-1.372l.592-.592a1 1 0 0 1 1.414 0L27.2 6.212a1 1 0 0 1 0 1.415l-.592.592a.997.997 0 0 1-1.358.045l-.76.76c3.86 4.689 3.19 11.62-1.498 15.48-4.688 3.862-11.618 3.191-15.48-1.497-3.86-4.688-3.19-11.618 1.498-15.48a10.997 10.997 0 0 1 4.494-2.22Zm1.497 14.169a1.004 1.004 0 1 0 2.006 0l-.071-1.706a1.992 1.992 0 0 0-.151-3.601l-.28-6.673a.502.502 0 0 0-1.002 0l-.28 6.673a1.992 1.992 0 0 0-.15 3.601l-.072 1.706Z" clipRule="evenodd"></path>
      </svg>
    ),
    title: 'Responsive White Glove Service',
    description: 'Engagements are supported by a dedicated engineering and operations team that runs at your pace.',
    color: '#7E9FFF'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="M6.072 21.591a3.086 3.086 0 1 0 4.355 4.35l7.125-8.25a.505.505 0 0 1 .572-.132 6.455 6.455 0 0 0 3.502.357 6.537 6.537 0 0 0 5.212-4.978 6.393 6.393 0 0 0 .098-2.303.502.502 0 0 0-.855-.28l-3.379 3.453a.5.5 0 0 1-.484.133l-2.998-.788a.5.5 0 0 1-.356-.357l-.79-2.998a.5.5 0 0 1 .134-.484l3.454-3.378a.502.502 0 0 0-.28-.856 6.395 6.395 0 0 0-2.307.1 6.537 6.537 0 0 0-4.976 5.213 6.454 6.454 0 0 0 .358 3.5.502.502 0 0 1-.131.57L6.072 21.59Zm1.932 3.92a1.5 1.5 0 1 1 0-2.999 1.5 1.5 0 0 1 0 2.999Z" clipRule="evenodd"></path>
      </svg>
    ),
    title: 'In-house Robotics Researchers',
    description: 'An internal team of experienced roboticists will work with you to produce data specifications tailored to your program.',
    color: '#FF69B4'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="M14.124 14.803a1.002 1.002 0 0 0 .052-1.533c-.482-.423-.834-.81-1.265-1.265h6.179a33.748 33.748 0 0 1-3.708 3.213c-3.62 2.844-7.364 5.786-7.38 11.744-.008.5.346.933.837 1.026a1 1 0 0 0 1.162-.987c0-.346.018-.677.048-1h11.9c.028.31.049.626.05.956-.007.496.337.927.822 1.028a1 1 0 0 0 1.178-.984c0-4.64-2.147-7.406-4.852-9.765a1 1 0 0 0-1.323 1.502c.482.423.834.81 1.265 1.265H12.91a33.737 33.737 0 0 1 3.708-3.213c3.62-2.845 7.364-5.786 7.38-11.744a1.03 1.03 0 0 0-.837-1.027 1 1 0 0 0-1.162.987c0 .346-.018.677-.048 1h-11.9a11.29 11.29 0 0 1-.05-.956 1.035 1.035 0 0 0-.822-1.028 1 1 0 0 0-1.178.985c0 4.64 2.148 7.406 4.852 9.765a.995.995 0 0 0 1.271.03Zm-3.672 9.199a9.16 9.16 0 0 1 .912-2h9.274c.384.628.692 1.299.916 2H10.452ZM21.548 8.006a9.173 9.173 0 0 1-.912 2h-9.274a9.153 9.153 0 0 1-.916-2h11.102Z" clipRule="evenodd"></path>
      </svg>
    ),
    title: 'Deep Technical Partnerships',
    description: 'Our data platform supports cutting-edge robotics labs and industry leaders such as Generalist and Physical Intelligence.',
    color: '#FFD700'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="m27.488 17.195-2 2c-.32.32-.5.754-.5 1.206v2.878c0 .942-.763 1.705-1.705 1.705h-2.878c-.452 0-.886.18-1.206.5L17.2 27.483a1.705 1.705 0 0 1-2.412 0l-2-2a1.704 1.704 0 0 0-1.206-.499H8.706A1.706 1.706 0 0 1 7 23.279V20.4c0-.453-.18-.887-.5-1.206l-1.999-2a1.706 1.706 0 0 1 0-2.412l2-1.999c.32-.32.5-.754.5-1.206V8.7c0-.942.763-1.705 1.705-1.705h2.877c.453 0 .887-.18 1.207-.5l1.999-2a1.706 1.706 0 0 1 2.412 0l2 2c.32.32.753.5 1.205.5h2.878c.942 0 1.706.763 1.706 1.705v2.878c0 .452.18.886.5 1.206l1.998 2a1.706 1.706 0 0 1 0 2.411ZM22.7 10.29a1 1 0 0 0-1.524.14l-6.422 9.194-2.938-4.205a1 1 0 0 0-1.524-.14 1.043 1.043 0 0 0-.086 1.336l3.312 4.743a1.507 1.507 0 0 0 2.47 0l6.798-9.733a1.043 1.043 0 0 0-.086-1.335Z" clipRule="evenodd"></path>
      </svg>
    ),
    title: 'Quality Guarantees',
    description: 'Rigorous sensor calibration and data validation protocols ensure that only the highest quality data is available on our platform.',
    color: '#48BB78'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="M27 12v1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1v-1a1 1 0 0 1 1-1l.713-4.753a.29.29 0 0 1 .574 0L26 11a1 1 0 0 1 1 1Zm-3 12.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1Zm0-4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1Zm1.5-5.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM4 26V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm2-1.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1Zm0-4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1Zm0-4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1Zm0-4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1ZM20 27h-8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1ZM15 7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1Zm0 4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1Zm0 4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1Zm0 4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1Zm0 4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1Zm4-16a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1Zm0 4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1Zm0 4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1Zm0 4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1Zm0 4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1Z" clipRule="evenodd"></path>
      </svg>
    ),
    title: 'Born in SF; Scaled Globally',
    description: 'Data collection cells are developed, tested, and validated in our San Francisco R&D lab before deployment to our global network of collection partners.',
    color: '#B794F6'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <path fillRule="evenodd" d="M22.005 14.01h.5a2.088 2.088 0 0 1 2 2.167v8.666a2.088 2.088 0 0 1-2 2.167h-13a2.088 2.088 0 0 1-2-2.167v-8.666a2.089 2.089 0 0 1 2-2.167h.5v-3.502c0-2.015.423-3.19 1.364-4.131.942-.942 2.115-1.365 4.13-1.365h1.012c2.015 0 3.188.423 4.13 1.365.94.941 1.364 2.115 1.364 4.13v3.503Zm-2-3.501c0-1.283-.27-2.03-.868-2.63-.6-.598-1.346-.868-2.628-.868h-1.008c-1.282 0-2.028.27-2.627.869-.6.6-.869 1.346-.869 2.629v3.501h8v-3.5Z" clipRule="evenodd"></path>
      </svg>
    ),
    title: 'Security and Compliance',
    description: 'Our infrastructure supports GDPR, CCPA, and customer-specific audit requirements with optional onshore data processing. We are SOC 2 Type II and ISO 27001 certified.',
    color: '#00D9FF'
  }
];

export default function PhysicalAIDifference() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
          <h2 className={styles.title}>The DUSKER Difference</h2>
        </motion.div>

        {/* Features Grid with Hexagonal Layout */}
        <div className={styles.featuresWrapper}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.featureCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Animated Border */}
              <motion.div
                className={styles.cardBorder}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.3,
                  scale: hoveredIndex === index ? 1.02 : 1
                }}
                transition={{ duration: 0.3 }}
                style={{ borderColor: feature.color }}
              />

              {/* Icon with Glow */}
              <motion.figure
                className={styles.iconWrapper}
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={styles.iconGlow}
                  animate={{
                    opacity: hoveredIndex === index ? 0.4 : 0,
                    scale: hoveredIndex === index ? 1.5 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ background: feature.color }}
                />
                <div className={styles.icon}>{feature.icon}</div>
              </motion.figure>

              {/* Content */}
              <div className={styles.content}>
                <p className={styles.featureTitle}>{feature.title}</p>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.p
                      className={styles.featureDescription}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Connection Lines */}
              {hoveredIndex === index && (
                <motion.div
                  className={styles.connectionLine}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ background: feature.color }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Gradient */}
      <div className={styles.backgroundGradient} />
    </section>
  );
}
