'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GenAICaseStudies.module.css';

const caseStudies = [
  {
    title: 'Customer Case Study: Cohere',
    category: 'Case Studies',
    image: 'https://site-assets.plasmic.app/cea0d2ba991f834e80b945540cab0455.png',
    link: '/customers/cohere'
  },
  {
    title: 'AI Readiness Report',
    category: 'Zeitgeist',
    image: 'https://site-assets.plasmic.app/ff6c52ffcaec789648e12015c94bf151.png',
    link: '/ai-readiness-report'
  }
];

export default function GenAICaseStudies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>RESOURCES</div>
          <h2 className={styles.title}>Case Studies & Resources</h2>
          <p className={styles.subtitle}>
            We've worked with the world's leading AI labs for years, and developed more high-quality data than anybody else.
          </p>
        </motion.div>

        <div className={styles.cardsGrid}>
          {caseStudies.map((study, index) => (
            <motion.a
              key={study.title}
              href={study.link}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={study.image}
                  alt={study.title}
                  width={640}
                  height={402}
                  className={styles.image}
                />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.category}>{study.category}</p>
                <h5 className={styles.cardTitle}>{study.title}</h5>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
