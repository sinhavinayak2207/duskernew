'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AutoPhases.module.css';

const phases = [
  {
    number: 1,
    title: 'Base Phase',
    description: "DUSKER's Data Engine helps you collect and label a base dataset to unlock initial model performance. Our platform lets you randomly sample data or add constraints (ex. Time of day = night) matching your intended distribution.",
    image: 'https://site-assets.plasmic.app/0a0739755f0bf24817985a0028fc7553.png',
    color: '#7E9FFF'
  },
  {
    number: 2,
    title: 'Improvement Phase',
    description: 'In this phase, the Data Engine ensures new datapoints continually challenge your model and maximally improve performance. To achieve this, DUSKER offers both automated (ML-based) and manual curation methods.',
    image: 'https://site-assets.plasmic.app/8dc26695205eb406947f85e985d9b729.png',
    color: '#FF69B4'
  },
  {
    number: 3,
    title: 'Target Phase',
    description: "DUSKER helps you collect and curate data targeted to specific scenarios with Natural Language Search and Autotag, we then label that data and improve your model performance on those specific scenarios. DUSKER helps you close the loop by evaluating your model on scenarios tests.",
    image: 'https://site-assets.plasmic.app/0a18406d319e09b5c39824fb31863806.png',
    color: '#FFD700'
  }
];

export default function AutoPhases() {
  const [activePhase, setActivePhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);

  return (
    <section className={styles.section}>
      {/* Background Blur */}
      <div className={styles.backgroundBlur} />

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Phases of Model Development</h2>
          <p className={styles.subtitle}>
            DUSKER partners with you at every stage of developing your model within the Data Engine.
          </p>
        </motion.div>

        {/* Phase Cards Grid */}
        <div className={styles.phasesGrid}>
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              className={`${styles.phaseCard} ${activePhase === index ? styles.active : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onClick={() => setActivePhase(index)}
              onMouseEnter={() => setActivePhase(index)}
              style={{ '--phase-color': phase.color } as React.CSSProperties}
            >
              {/* Video/Image Container */}
              <div className={styles.mediaContainer}>
                <div className={styles.mediaWrapper}>
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className={styles.phaseImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  
                  {/* Play Button Overlay */}
                  <motion.div 
                    className={styles.playOverlay}
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(isPlaying === index ? null : index);
                    }}
                  >
                    <div className={styles.playButton}>
                      <svg width="36" height="36" viewBox="0 0 60 60">
                        <path fill="#FFF" d="M48.79 26.129l-33-19.508C13.104 5.035 9 6.574 9 10.492V49.5c0 3.516 3.816 5.637 6.79 3.871l33-19.5c2.94-1.734 2.952-6.008 0-7.742z" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className={styles.gradientOverlay} />
                </div>

                {/* Animated Border */}
                <motion.div 
                  className={styles.animatedBorder}
                  animate={{
                    opacity: activePhase === index ? 1 : 0
                  }}
                  style={{ borderColor: phase.color }}
                />
              </div>

              {/* Content */}
              <div className={styles.phaseContent}>
                <div className={styles.phaseNumber}>
                  <span>{phase.number}</span>
                </div>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <motion.p 
                  className={styles.phaseDescription}
                  animate={{
                    opacity: activePhase === index ? 1 : 0.7,
                    height: activePhase === index ? 'auto' : '60px'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {phase.description}
                </motion.p>
              </div>

              {/* Glow Effect */}
              <motion.div 
                className={styles.glowEffect}
                animate={{
                  opacity: activePhase === index ? 0.2 : 0
                }}
                style={{ background: phase.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineTrack}>
            <motion.div 
              className={styles.timelineProgress}
              animate={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className={styles.timelineDots}>
            {phases.map((phase, i) => (
              <motion.button
                key={i}
                className={`${styles.timelineDot} ${activePhase >= i ? styles.activeDot : ''}`}
                onClick={() => setActivePhase(i)}
                whileHover={{ scale: 1.2 }}
                style={{ '--dot-color': phase.color } as React.CSSProperties}
              >
                <span className={styles.dotNumber}>{phase.number}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
