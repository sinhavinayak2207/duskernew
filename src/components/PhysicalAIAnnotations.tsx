'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import styles from './PhysicalAIAnnotations.module.css';

export default function PhysicalAIAnnotations() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* First Row - Image Left, Text Right */}
        <div className={styles.row}>
          <motion.div
            className={styles.visualColumn}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageContainer}>
              {/* Floating Annotation Tags */}
              {[
                { label: 'Object Detection', top: '15%', left: '10%', color: '#7E9FFF' },
                { label: 'Pose Estimation', top: '45%', left: '70%', color: '#FF69B4' },
                { label: 'Depth Mapping', top: '75%', left: '20%', color: '#FFD700' },
              ].map((tag, i) => (
                <motion.div
                  key={tag.label}
                  className={styles.annotationTag}
                  style={{ top: tag.top, left: tag.left, borderColor: tag.color }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    opacity: { delay: i * 0.2 + 0.4, duration: 0.5 },
                    scale: { delay: i * 0.2 + 0.4, duration: 0.5 }
                  }}
                >
                  <div className={styles.tagDot} style={{ background: tag.color }} />
                  <span className={styles.tagLabel}>{tag.label}</span>
                </motion.div>
              ))}
              
              <Image
                src="https://site-assets.plasmic.app/c2c48a3fd53b15c977e3dc47586c6095.png"
                alt="Multi-Modal Grounding Annotations"
                width={627}
                height={458}
                className={styles.image}
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.textColumn}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.sectionTitle}>Multi-Modal Grounding Annotations</h3>
            <p className={styles.description}>
              Unlock the full potential of your robotics data with best-in-class annotations and human-expert feedback on all demonstrations.
            </p>
            
            {/* Feature Pills */}
            <div className={styles.featurePills}>
              {['3D Bounding Boxes', 'Semantic Segmentation', 'Action Labels', 'Trajectory Tracking'].map((feature, i) => (
                <motion.div
                  key={feature}
                  className={styles.pill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.6, duration: 0.4 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  {feature}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Second Row - Text Left, Video Right */}
        <div className={`${styles.row} ${styles.rowReverse}`}>
          <motion.div
            className={styles.textColumn}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.sectionTitle}>Proven Model Improvements</h3>
            <p className={styles.description}>
              Datasets go through DUSKER's internal policy fine-tuning and evaluation process before listing.
            </p>
            <p className={styles.description}>
              Train on datasets with the reassurance that they have produced measurable performance improvements.
            </p>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              {[
                { value: '+45%', label: 'Success Rate' },
                { value: '99.2%', label: 'Accuracy' },
                { value: '-60%', label: 'Training Time' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.5 }}
                >
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.visualColumn}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.videoContainer}>
              <video
                ref={videoRef}
                preload="auto"
                playsInline
                loop
                muted
                className={styles.video}
              >
                <source src="https://static.scale.com/uploads/6691558a94899f2f65a87a75/Proven%20Model%20Improvements.mp4" type="video/mp4" />
                <source src="https://static.remotasks.com/uploads/6691558a94899f2f65a87a75/Proven%20Model%20Improvements.webm" type="video/webm" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className={styles.backgroundGradient} />
    </section>
  );
}
