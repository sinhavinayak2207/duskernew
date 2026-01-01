'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EvolutionExperts.module.css';

const expertTypes = [
  { id: 'security', title: 'Security Experts', description: 'Cybersecurity specialists identifying vulnerabilities and attack vectors in AI systems.', icon: '🔐', color: '#7E9FFF' },
  { id: 'domain', title: 'Domain Experts', description: 'Subject matter experts across medical, legal, financial, and scientific fields.', icon: '🎓', color: '#FF69B4' },
  { id: 'ml', title: 'ML Engineers', description: 'Machine learning specialists for technical model evaluation and adversarial testing.', icon: '🤖', color: '#FFD700' },
  { id: 'ethics', title: 'Ethics Researchers', description: 'AI ethics experts ensuring responsible, fair, and unbiased AI development.', icon: '⚖️', color: '#00CED1' }
];

export default function EvolutionExperts() {
  const [activeExpert, setActiveExpert] = useState<number>(0);

  return (
    <section className={styles.section}>
      {/* Constellation Background */}
      <div className={styles.constellation}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.star}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 1 + Math.random() * 2,
              height: 1 + Math.random() * 2,
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
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.label}>EXPERTS</div>
          <h2 className={styles.title}>
            Expert <span className={styles.highlight}>Red Team Network</span>
          </h2>
          <p className={styles.subtitle}>
            A diverse network of specialists performing comprehensive AI evaluation
          </p>
        </motion.div>

        {/* Expert Showcase */}
        <div className={styles.expertShowcase}>
          {/* Central Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExpert}
              className={styles.centralDisplay}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className={styles.displayGlow}
                style={{ background: expertTypes[activeExpert].color }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.div 
                className={styles.displayRing}
                style={{ borderColor: expertTypes[activeExpert].color }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <div className={styles.displayContent}>
                <motion.span 
                  className={styles.displayIcon}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {expertTypes[activeExpert].icon}
                </motion.span>
                <h3 style={{ color: expertTypes[activeExpert].color }}>
                  {expertTypes[activeExpert].title}
                </h3>
                <p>{expertTypes[activeExpert].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Expert Selector */}
          <div className={styles.expertSelector}>
            {expertTypes.map((expert, index) => {
              const isActive = activeExpert === index;
              return (
                <motion.div
                  key={expert.id}
                  className={`${styles.selectorItem} ${isActive ? styles.activeSelector : ''}`}
                  style={{ '--expert-color': expert.color } as React.CSSProperties}
                  onClick={() => setActiveExpert(index)}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className={styles.selectorGlow}
                    style={{ background: expert.color }}
                    animate={{
                      opacity: isActive ? [0.3, 0.5, 0.3] : 0
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className={styles.selectorIcon} style={{ borderColor: expert.color }}>
                    {expert.icon}
                  </span>
                  <span className={styles.selectorTitle}>{expert.title}</span>
                  {isActive && (
                    <motion.div 
                      className={styles.activeBar}
                      layoutId="expertBar"
                      style={{ background: expert.color }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { value: '500+', label: 'Expert Evaluators', color: '#7E9FFF' },
            { value: '50+', label: 'Specialized Domains', color: '#FF69B4' },
            { value: '10K+', label: 'Evaluations Done', color: '#FFD700' }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label} 
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <motion.span 
                className={styles.statValue}
                style={{ color: stat.color }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
