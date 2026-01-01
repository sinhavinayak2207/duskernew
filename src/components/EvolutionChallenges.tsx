'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EvolutionChallenges.module.css';

const challenges = [
  { id: 'misinformation', title: 'Misinformation', description: 'LLMs producing false, misleading, or inaccurate information.', icon: 'ℹ️', color: '#EF3D57' },
  { id: 'advice', title: 'Unqualified Advice', description: 'Advice on sensitive topics that may result in material harm.', icon: '📋', color: '#FF6B6B' },
  { id: 'bias', title: 'Bias', description: 'Responses that reinforce stereotypes that harm specific groups.', icon: '⚖️', color: '#FF8E53' },
  { id: 'privacy', title: 'Privacy', description: 'Disclosing personally identifiable information or leaking private data.', icon: '🔒', color: '#FFA726' },
  { id: 'cyberattacks', title: 'Cyberattacks', description: 'Using language models to conduct or accelerate cyberattacks.', icon: '⚠️', color: '#FF7043' },
  { id: 'dangerous', title: 'Dangerous Substances', description: 'Assisting in acquiring or creating dangerous substances.', icon: '☢️', color: '#E91E63' },
  { id: 'consistency', title: 'Inconsistency', description: 'Lack of consistency in model comparisons and reliability.', icon: '📊', color: '#F44336' }
];

export default function EvolutionChallenges() {
  const [activeChallenge, setActiveChallenge] = useState<number>(0);

  return (
    <section className={styles.section}>
      {/* Animated Gradient Background */}
      <div className={styles.gradientBg}>
        <motion.div 
          className={styles.gradientOrb1}
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.gradientOrb2}
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Flowing Particles */}
      <div className={styles.particleField}>
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
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
          <div className={styles.label}>CHALLENGES</div>
          <h2 className={styles.title}>
            Navigating AI <span className={styles.highlight}>Risk Landscape</span>
          </h2>
        </motion.div>

        {/* Interactive Timeline/Flow */}
        <div className={styles.riskFlow}>
          {/* Flowing Line */}
          <svg className={styles.flowLine} viewBox="0 0 1200 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF3D57" />
                <stop offset="50%" stopColor="#FF6B6B" />
                <stop offset="100%" stopColor="#F44336" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,200 Q150,100 300,200 T600,200 T900,200 T1200,200"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M0,200 Q150,300 300,200 T600,200 T900,200 T1200,200"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>

          {/* Risk Nodes along the flow */}
          <div className={styles.nodesContainer}>
            {challenges.map((challenge, index) => {
              const isActive = activeChallenge === index;
              const yOffset = index % 2 === 0 ? -60 : 60;
              
              return (
                <motion.div
                  key={challenge.id}
                  className={`${styles.riskNode} ${isActive ? styles.activeRisk : ''}`}
                  style={{ 
                    '--node-color': challenge.color,
                    transform: `translateY(${yOffset}px)`
                  } as React.CSSProperties}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  onClick={() => setActiveChallenge(index)}
                  whileHover={{ scale: 1.15 }}
                >
                  {/* Glow */}
                  <motion.div 
                    className={styles.nodeGlow}
                    style={{ background: challenge.color }}
                    animate={{
                      scale: isActive ? [1, 1.8, 1] : [1, 1.3, 1],
                      opacity: isActive ? [0.4, 0.7, 0.4] : [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Icon */}
                  <div className={styles.nodeIcon} style={{ borderColor: challenge.color }}>
                    <span>{challenge.icon}</span>
                  </div>

                  {/* Connector Line */}
                  <motion.div 
                    className={styles.connector}
                    style={{ 
                      background: challenge.color,
                      height: Math.abs(yOffset) - 20,
                      top: yOffset > 0 ? 'auto' : '100%',
                      bottom: yOffset > 0 ? '100%' : 'auto'
                    }}
                  />

                  {/* Label */}
                  <motion.span 
                    className={styles.nodeLabel}
                    style={{ 
                      top: yOffset > 0 ? 'auto' : 'calc(100% + 10px)',
                      bottom: yOffset > 0 ? 'calc(100% + 10px)' : 'auto'
                    }}
                  >
                    {challenge.title}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Risk Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChallenge}
            className={styles.riskDetail}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className={styles.detailGlow}
              style={{ background: challenges[activeChallenge].color }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className={styles.detailContent}>
              <span className={styles.detailIcon}>{challenges[activeChallenge].icon}</span>
              <h3 style={{ color: challenges[activeChallenge].color }}>{challenges[activeChallenge].title}</h3>
              <p>{challenges[activeChallenge].description}</p>
            </div>
            
            {/* Navigation Dots */}
            <div className={styles.navDots}>
              {challenges.map((_, i) => (
                <motion.button
                  key={i}
                  className={`${styles.navDot} ${activeChallenge === i ? styles.activeDot : ''}`}
                  style={{ background: activeChallenge === i ? challenges[i].color : 'rgba(255,255,255,0.2)' }}
                  onClick={() => setActiveChallenge(i)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
