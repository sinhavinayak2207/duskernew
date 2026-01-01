'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AutoFoundationModel.module.css';

const relatedContent = [
  {
    title: 'Open Dataset: Ukraine Damage Identification',
    category: 'Dataset',
    image: 'https://site-assets.plasmic.app/3cfc7d636e59945f8d4eb01b0049bbad.png',
    link: '/blog/ukraine-detection'
  }
];

export default function AutoFoundationModel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={styles.section}>
      {/* Animated Background */}
      <div className={styles.backgroundEffect}>
        <motion.div 
          className={styles.bgOrb1}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className={styles.bgOrb2}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
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
          <h2 className={styles.title}>The Automotive Foundation Model</h2>
        </motion.div>

        {/* Main Feature Card */}
        <motion.div
          className={styles.featureCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.featureContent}>
            <div className={styles.featureLeft}>
              <motion.div 
                className={styles.liveLabel}
                animate={{
                  boxShadow: isHovered 
                    ? '0 0 20px rgba(126, 159, 255, 0.5)' 
                    : '0 0 0 transparent'
                }}
              >
                <span className={styles.liveDot} />
                Live Demo
              </motion.div>
              
              <h3 className={styles.featureTitle}>
                Introducing DUSKER&apos;s Automotive Foundation Model
              </h3>
              
              <p className={styles.featureDescription}>
                State of the art, language-grounded, perception model to accelerate the development of autonomous vehicles.
              </p>
              
              <motion.a 
                href="/foundation-model/automotive" 
                className={styles.ctaLink}
                whileHover={{ x: 8 }}
              >
                Test Drive AFM-1 
                <span className={styles.ctaArrow}>→</span>
              </motion.a>
            </div>

            <motion.div 
              className={styles.featureRight}
              animate={{
                y: isHovered ? -10 : 0,
                rotateY: isHovered ? 5 : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src="https://site-assets.plasmic.app/5b52e2acd1c4be4221de102c10a78e42.png"
                  alt="Automotive Foundation Model"
                  width={544}
                  height={306}
                  className={styles.featureImage}
                />
                
                {/* Floating Elements */}
                <motion.div 
                  className={styles.floatingElement1}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className={styles.floatingElement2}
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>

          {/* Animated Border */}
          <motion.div 
            className={styles.cardBorder}
            animate={{
              opacity: isHovered ? 1 : 0.3
            }}
          />

          {/* Glow Effect */}
          <motion.div 
            className={styles.cardGlow}
            animate={{
              opacity: isHovered ? 0.2 : 0
            }}
          />
        </motion.div>

        {/* Related Content */}
        <div className={styles.relatedSection}>
          <div className={styles.relatedGradient} />
          
          <div className={styles.relatedContent}>
            {relatedContent.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.link}
                className={styles.relatedCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={styles.relatedImageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={640}
                    height={402}
                    className={styles.relatedImage}
                  />
                </div>
                <div className={styles.relatedInfo}>
                  <p className={styles.relatedCategory}>{item.category}</p>
                  <h5 className={styles.relatedTitle}>{item.title}</h5>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
