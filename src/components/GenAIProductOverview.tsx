'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GenAIProductOverview.module.css';

export default function GenAIProductOverview() {
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
          <div className={styles.label}>PRODUCT OVERVIEW</div>
          <h2 className={styles.title}>Generative AI Data Engine</h2>
          <p className={styles.subtitle}>
            Enables rapid creation of tailored, high-quality datasets curated by vetted subject matter experts to train the world's most advanced models.
          </p>
        </motion.div>

        {/* Diagram Section */}
        <motion.div
          className={styles.diagramWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.diagramContainer}>
            <Image
              src="https://site-assets.plasmic.app/f269d324b88cf29edbfee138c9ccf6b6.png"
              alt="Generative AI Data Engine Diagram"
              width={1214}
              height={636}
              className={styles.diagramImage}
            />
            
            {/* Animated Background Graphic */}
            <div className={styles.backgroundGraphic}>
              <Image
                src="https://img.plasmic.app/img-optimizer/v1/img/8324cd522b7d88750ed25e6e8fdebfc0.png"
                alt=""
                width={3648}
                height={1911}
                className={styles.bgImage}
              />
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          className={styles.quoteSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.quoteCard}>
            <blockquote className={styles.quote}>
              "Experts are the new GPUs. The largest AI labs are spending huge amounts of money, like huge amounts of money to acquire more valuable tokens, either paying experts to generate it, working through labeling companies like Scale AI or others."
            </blockquote>
            <div className={styles.quoteAuthor}>
              <h4 className={styles.authorName}>Nat Friedman</h4>
              <p className={styles.authorTitle}>Investor, Entrepreneur, and Former CEO of GitHub</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section with 3D Graphic */}
        <motion.div
          className={styles.bottomSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <h3 className={styles.sectionTitle}>
                DUSKER's Generative AI Data Engine combines automation and human intelligence to rapidly generate training data tailored to your specific AI goals and data needs.
              </h3>
            </div>
            <div className={styles.graphicContent}>
              <div className={styles.threeDGraphic}>
                {/* Animated 3D-style shapes */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={styles.floatingShape}
                    animate={{
                      y: [0, -20, 0],
                      rotateY: [0, 180, 360],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${20 + (i % 2) * 40}%`,
                    }}
                  />
                ))}
              </div>
              <Image
                src="https://site-assets.plasmic.app/5c5c7566eef04c316bd861b66318b4bf.png"
                alt="AI Data Visualization"
                width={1216}
                height={638}
                className={styles.visualImage}
              />
            </div>
          </div>
        </motion.div>

        {/* Background Gradient */}
        <div className={styles.backgroundGradient} />
      </div>
    </section>
  );
}
