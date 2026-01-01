'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './PhysicalAIPartners.module.css';

const partners = [
  { name: 'Physical Intelligence', logo: 'https://site-assets.plasmic.app/92996d9745c3d034dbecfdc7fe6150fa.svg', width: 190, height: 24 },
  { name: 'Generalist', logo: 'https://site-assets.plasmic.app/d3a04e4513024a9b56fd4ba91bf9f32e.svg', width: 171, height: 24 },
  { name: 'Cobot', logo: 'https://site-assets.plasmic.app/d87b23e751bdbe2ed706833dd749db2d.png', width: 112, height: 32 },
  { name: 'Dyna', logo: 'https://site-assets.plasmic.app/06201cfa52b402721774fe6fddaf35d1.png', width: 130, height: 24 },
];

export default function PhysicalAIPartners() {
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
              <span>Meet our customers.</span>
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
