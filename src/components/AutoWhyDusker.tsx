'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './AutoWhyDusker.module.css';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <g clipPath="url(#a)">
          <mask id="b" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse">
            <path fill="#fff" d="M32 0H0v32h32V0Z"></path>
          </mask>
          <g mask="url(#b)">
            <path fillRule="evenodd" d="M19.133 27.325a7.781 7.781 0 0 0 2.362-3.5.258.258 0 0 0-.244-.333c-1.15.021-2.292.185-3.401.486a.259.259 0 0 1-.332-.34A9.973 9.973 0 0 0 18.005 20c0-2.65-1.61-4.702-2.176-5.406a.247.247 0 0 0-.43.074c-.754 2.41-3.894 5.866-3.894 9.33 0 2.081 1.382 2.985 1.484 3.468.084.398-.118.618-.498.498-2.532-.797-6.486-4.439-6.486-8.963 0-8.22 8-9.86 8-13.992a3.757 3.757 0 0 0-.476-1.5.38.38 0 0 1 .465-.485c2.572.692 8.511 4.283 8.511 11.48a12.31 12.31 0 0 1-1 4.497s1.681-.292 3.96-.502a.526.526 0 0 1 .539.586c0 3.47-2.711 7.47-6.569 8.912-.35.13-.583-.418-.302-.672Z" clipRule="evenodd"></path>
          </g>
        </g>
      </svg>
    ),
    title: 'Sure-Fire Improvements',
    description: 'Data is the sure-fire way to improve your models. With every larger/higher quality/more diverse dataset, DUSKER helps your machine learning models improve.',
    color: '#7E9FFF'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <g clipPath="url(#a)">
          <mask id="b" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse">
            <path fill="#fff" d="M32 0H0v32h32V0Z"></path>
          </mask>
          <g mask="url(#b)">
            <path d="M16.005 28.01c-6.627 0-12-5.372-12-12 0-6.627 5.373-12 12-12 6.628 0 12 5.373 12 12 0 6.628-5.372 12-12 12Zm-6.5-6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v1Zm6.5-16c-5.523 0-10 4.478-10 10v.01a1.01 1.01 0 0 0 1.022.99h6.794l-1.296-7.582a.775.775 0 0 1 .494-.876.746.746 0 0 1 .907.39l3.802 8.069h7.256a1.011 1.011 0 0 0 1.021-.99v-.01c0-5.523-4.477-10-10-10Z"></path>
          </g>
        </g>
      </svg>
    ),
    title: 'Maximum Performance',
    description: 'All the components of the DUSKER Data Engine maximize the value of each annotated label to improve model performance.',
    color: '#FF69B4'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
        <g clipPath="url(#a)">
          <mask id="b" width="32" height="32" x="0" y="0" maskUnits="userSpaceOnUse">
            <path fill="#fff" d="M32 0H0v32h32V0Z"></path>
          </mask>
          <g mask="url(#b)">
            <path fillRule="evenodd" d="M23.908 14.099a1 1 0 0 1-.16 1.072l-10.992 12.5a1 1 0 0 1-1.688-1.006l3.002-8.154H9.008a1 1 0 0 1-.75-1.66L19.25 4.35a1 1 0 0 1 1.688 1.005l-3.002 8.154h5.062c.392 0 .749.23.91.589Z" clipRule="evenodd"></path>
          </g>
        </g>
      </svg>
    ),
    title: 'Faster Development',
    description: 'DUSKER accelerates the data engine loop - improving labeling speed, curating optimal datasets, and scaling up the workforce to drive faster development of AI applications.',
    color: '#FFD700'
  }
];

export default function AutoWhyDusker() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      {/* Animated Background */}
      <div className={styles.backgroundPattern}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.bgDot}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
          <div className={styles.label}>Why DUSKER</div>
          <h2 className={styles.title}>
            Trusted by Leading{' '}
            <span className={styles.highlight}>Automotive Companies</span>
          </h2>
          <p className={styles.subtitle}>
            Automotive leaders work with DUSKER for building autonomy for the following reasons:
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ '--feature-color': feature.color } as React.CSSProperties}
            >
              {/* Animated Border */}
              <motion.div 
                className={styles.cardBorder}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0
                }}
              />

              {/* Icon Container */}
              <motion.div 
                className={styles.iconContainer}
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? [0, 5, -5, 0] : 0
                }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.iconGlow} style={{ background: feature.color }} />
                <div className={styles.icon}>
                  {feature.icon}
                </div>
              </motion.div>

              {/* Content */}
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>

              {/* Hover Glow */}
              <motion.div 
                className={styles.hoverGlow}
                style={{ background: feature.color }}
                animate={{
                  opacity: hoveredIndex === index ? 0.1 : 0
                }}
              />

              {/* Floating Particles */}
              {hoveredIndex === index && (
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
                        x: Math.cos(i * 60 * Math.PI / 180) * 60,
                        y: Math.sin(i * 60 * Math.PI / 180) * 60
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
