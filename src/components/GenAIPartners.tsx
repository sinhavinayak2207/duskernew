'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GenAIPartners.module.css';

const partners = [
  { name: 'Meta', logo: 'https://site-assets.plasmic.app/f4166c8b2af53280fc7a060d5a4737e1.svg', width: 100, height: 20 },
  { name: 'Cohere', logo: 'https://site-assets.plasmic.app/0b32a02101f26cb329fd10622a108aae.svg', width: 108, height: 18 },
  { name: 'Adept', logo: 'https://site-assets.plasmic.app/2c96c7e24b32297cb25b7e17debc5939.svg', width: 70, height: 24 },
  { name: 'NTT', logo: 'https://site-assets.plasmic.app/4af4a00ab6be4b4e8693feec8420b592.svg', width: 77, height: 28 },
];

export default function GenAIPartners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.description}>
            <span>Trusted by the world's most ambitious AI teams.</span>
            <a href="/customers" className={styles.link}>
              <span>Meet our customers</span>
              <span className={styles.arrow}>→</span>
            </a>
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className={styles.desktopGrid}>
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className={styles.logoWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className={styles.logo}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className={styles.mobileMarquee}>
          <div className={styles.marqueeTrack}>
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className={styles.logoWrapper}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}