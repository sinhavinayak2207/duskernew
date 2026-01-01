'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GovPartners.module.css';

const partners = [
  {
    name: 'US Army',
    logo: 'https://site-assets.plasmic.app/c8f3e2e2906ddd893e15a15c8791d9ec.svg',
    width: 40,
    height: 40
  },
  {
    name: 'CDAO',
    logo: 'https://site-assets.plasmic.app/546ec9a391e2a60a13df794c33442e9c.svg',
    width: 113,
    height: 30
  },
  {
    name: 'US Air Force',
    logo: 'https://site-assets.plasmic.app/a9a9bc08a58216704cf90a3b5c8798d0.svg',
    width: 65,
    height: 51
  },
  {
    name: 'Defense Innovation',
    logo: 'https://site-assets.plasmic.app/14f74ee14e4a2e21f428ec9c0c08c50d.svg',
    width: 140,
    height: 31
  },
  {
    name: '4DV Analytics',
    logo: 'https://site-assets.plasmic.app/3f01a28d21330263c48b3a51824ca497.png',
    width: 182,
    height: 20
  }
];

export default function GovPartners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.descriptionText}>
            Trusted by the world's most ambitious AI teams.
          </span>
          <a href="/customers" className={styles.link}>
            <span className={styles.linkText}>Meet our customers</span>
            <span className={styles.linkArrow}>→</span>
          </a>
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
              <div key={`${partner.name}-${index}`} className={styles.marqueeItem}>
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
