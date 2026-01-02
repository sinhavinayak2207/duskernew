'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import styles from './GovHero.module.css';

export default function GovHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { once: false, amount: 0.3 });

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
        <div className={styles.contentGrid}>
          {/* Left Content */}
          <motion.div
            className={styles.leftContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Public Sector Data Engine
            </motion.h1>
            
            <motion.h2
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Powering AI for Defense, Intelligence, and Civilian Agencies.
            </motion.h2>

            <motion.div
              className={styles.ctaWrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="/demo" className={styles.ctaButton}>
                Book a Demo
                <span className={styles.arrow}>→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Video with Browser Frame */}
          <motion.div
            className={styles.rightContent}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className={styles.browserFrame}>
              {/* Browser Header */}
              <div className={styles.browserHeader}>
                <div className={styles.browserDots}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
                <div className={styles.browserUrl}>
                  <span className={styles.urlText}>nucleus.dusker.com</span>
                </div>
              </div>

              {/* Video Container */}
              <div className={styles.videoContainer}>
                <video
                  ref={videoRef}
                  preload="auto"
                  playsInline
                  loop
                  muted
                  className={styles.video}
                >
                  <source src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Public%20Selector%2FPublic-Selector.webm" type="video/webm" />
                  <source src="https://pub-9ba39fa3c4764cd0bb3a9579562941d6.r2.dev/Public%20Selector%2FPublic-Selector.mp4" type="video/mp4" />
                </video>
                <Image
                  src="https://site-assets.plasmic.app/004c08bbb7c0fe8b412b612c20cd211a.png"
                  alt="Public Sector Data Engine"
                  fill
                  className={styles.fallbackImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Grid */}
      <div className={styles.backgroundGrid}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.gridLine}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: i * 0.05, duration: 1 }}
            style={{
              left: `${(i % 5) * 25}%`,
              top: i < 5 ? '0' : i < 10 ? '25%' : i < 15 ? '50%' : '75%'
            }}
          />
        ))}
      </div>
    </section>
  );
}
