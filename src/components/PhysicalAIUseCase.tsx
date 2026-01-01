'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import styles from './PhysicalAIUseCase.module.css';

export default function PhysicalAIUseCase() {
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
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>Use Case</div>
          <h3 className={styles.title}>Break Through the Robotics Data Bottleneck</h3>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Left Content */}
          <motion.div
            className={styles.leftContent}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={styles.sectionTitle}>Expansive Environments</h3>
            <p className={styles.description}>
              1000+ hours of diverse demonstration data are collected and uploaded to DUSKER's data platform every day.
            </p>
            <p className={styles.description}>
              Leverage our platform to accelerate your program and supercharge model performance.
            </p>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            className={styles.rightContent}
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
                <source src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Scale_robotics_animation_V2/Mp4/Scale_robotics_animation_4k.mp4" type="video/mp4" />
                <source src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Scale_robotics_animation_V2/Webm/Scale_robotics_animation_4k.webm" type="video/webm" />
              </video>
              <Image
                src="https://site-assets.plasmic.app/6d8a0e9d5a225ea22e5e6f69db48b1fc.png"
                alt="Robotics Environment"
                fill
                className={styles.fallbackImage}
                sizes="100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className={styles.backgroundGradient} />
    </section>
  );
}
