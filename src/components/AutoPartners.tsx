'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AutoPartners.module.css';

const partners = [
  {
    name: 'GM',
    logo: 'https://site-assets.plasmic.app/0ef5b327474ee8bb60cb793e799c95c9.svg',
    width: 37,
    height: 37
  },
  {
    name: 'Nuro',
    logo: 'https://site-assets.plasmic.app/20902fe791e1f9a04336672645d5cb1d.svg',
    width: 57,
    height: 16
  },
  {
    name: 'Valeo',
    logo: 'https://site-assets.plasmic.app/553616863916f3551f20b887eee324eb.svg',
    width: 92,
    height: 40
  },
  {
    name: 'Oshkosh',
    logo: 'https://site-assets.plasmic.app/d9f3de8fc370dcee007f106c12ad3e35.svg',
    width: 96,
    height: 32
  }
];

export default function AutoPartners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
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
              whileHover={{ scale: 1.1 }}
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
