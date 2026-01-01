'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './DataEnginePartners.module.css';

const partners = [
  { name: 'Square', logo: 'https://site-assets.plasmic.app/8ad778b48ab03b3ad4ff4677846017b9.svg', width: 90, height: 23 },
  { name: 'Pinterest', logo: 'https://site-assets.plasmic.app/e7862dec637f3790e17de07c0f45568f.svg', width: 100, height: 24 },
  { name: 'Meta', logo: 'https://site-assets.plasmic.app/f4166c8b2af53280fc7a060d5a4737e1.svg', width: 100, height: 20 },
  { name: 'GM', logo: 'https://site-assets.plasmic.app/0ef5b327474ee8bb60cb793e799c95c9.svg', width: 37, height: 37 },
  { name: 'Adept', logo: 'https://site-assets.plasmic.app/2c96c7e24b32297cb25b7e17debc5939.svg', width: 70, height: 24 },
  { name: 'Cohere', logo: 'https://site-assets.plasmic.app/0b32a02101f26cb329fd10622a108aae.svg', width: 108, height: 18 },
  { name: 'Instacart', logo: 'https://site-assets.plasmic.app/eb06f5e951ccb7a11c2c47fadd430d74.svg', width: 111, height: 23 },
  { name: 'Time', logo: 'https://site-assets.plasmic.app/824072ae85e1e76224a1a3f91a9a3c53.svg', width: 82, height: 25 },
];

export default function DataEnginePartners() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        {/* Desktop Grid */}
        <div className={styles.desktopGrid}>
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className={styles.partnerItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className={styles.partnerLogo}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className={styles.mobileMarquee}>
          <div className={styles.marqueeTrack}>
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className={styles.partnerItem}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={styles.partnerLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
