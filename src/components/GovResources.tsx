'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GovResources.module.css';

const resources = [
  {
    title: 'DUSKER AI chosen by the U.S. Army for Robotic Combat Vehicle Program',
    category: 'Blog',
    image: 'https://site-assets.plasmic.app/4f67e5d06ed66237cb84cd965f159ae1.png',
    link: '/blog/dusker-diu-rcv-program'
  },
  {
    title: 'DoD Contract Across the Joint Force',
    category: 'Blog',
    image: 'https://site-assets.plasmic.app/8f640edb06d8b30fb1a6ff4318ddbbdd.png',
    link: '/blog/dusker-dod-contract-data-curation-joint-force'
  },
  {
    title: 'Autonomy Table Stakes: DoD\'s Data Layer',
    category: 'Blog',
    image: 'https://site-assets.plasmic.app/8ea19e005aa01a6e88cf49be05dc71af.png',
    link: '/blog/autonomy-table-stakes'
  },
  {
    title: 'White House Voluntary Commitments',
    category: 'Blog',
    image: 'https://site-assets.plasmic.app/b512a74ed5927495f46a59d3d702d9d1.png',
    link: '/blog/dusker-white-house-voluntary-commitments'
  }
];

export default function GovResources() {
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
          <div className={styles.label}>RESOURCES</div>
          <h2 className={styles.title}>Learn More About Our Work</h2>
        </motion.div>

        {/* Static Grid - No Marquee */}
        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            <div className={styles.carouselTrack}>
              {resources.map((resource, index) => (
                <motion.a
                  key={resource.title}
                  href={resource.link}
                  className={styles.resourceCard}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      width={640}
                      height={402}
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay} />
                  </div>
                  <div className={styles.content}>
                    <p className={styles.category}>{resource.category}</p>
                    <h5 className={styles.resourceTitle}>{resource.title}</h5>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className={styles.backgroundGradient} />
    </section>
  );
}
