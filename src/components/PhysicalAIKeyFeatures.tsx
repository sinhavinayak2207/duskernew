'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './PhysicalAIKeyFeatures.module.css';

const embodimentFeatures = [
  {
    image: 'https://site-assets.plasmic.app/b252c962a1cc0d205222eb6d88f8186b.png',
    title: 'Bimanual Manipulators',
    description: 'Tele-operated demonstrations from industry-leading robots'
  },
  {
    image: 'https://site-assets.plasmic.app/4f205f46e9e92482c263d4b7348cdd9c.png',
    title: 'DUSKER Harness',
    description: 'Robotless egocentric platform designed for distributed dextrous collection'
  },
  {
    image: 'https://site-assets.plasmic.app/1f7b8be3c757336a4d1fa2364770eda8.png',
    title: 'Bespoke Collection Platforms',
    description: 'Your hardware, managed and operated by DUSKER'
  }
];

const environmentFeatures = [
  {
    image: 'https://site-assets.plasmic.app/2c8d55416c4132139dfc7ba118ef06fc.png',
    title: 'Data Factories',
    description: 'High-volume centralized collection operations'
  },
  {
    image: 'https://site-assets.plasmic.app/5311563c760379d941565fa7be6f2195.png',
    title: 'Residential',
    description: 'At-home collection with globally-distributed collectors'
  },
  {
    image: 'https://site-assets.plasmic.app/d1ebafff6f312dac2c3fab9a6a5c4172.png',
    title: 'Commercial and Industrial',
    description: 'In-field deployments of collection platforms'
  }
];

export default function PhysicalAIKeyFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Growing Embodiment Portfolio */}
        <div className={styles.featureBlock}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.label}>Key Features</div>
            <h3 className={styles.title}>Growing Embodiment Portfolio</h3>
            <p className={styles.subtitle}>
              Access data from advanced hardware platforms calibrated for performant collection operations.
            </p>
          </motion.div>

          <div className={styles.featuresGrid}>
            {embodimentFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={480}
                    height={360}
                    className={styles.featureImage}
                    sizes="(max-width: 767px) 80vw, 480px"
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <p className={styles.featureTitle}>{feature.title}</p>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expansive Global Environments */}
        <div className={styles.featureBlock}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.title}>Expansive Global Environments</h3>
            <p className={styles.subtitle}>
              Train on data collected from diverse locations around the world.
            </p>
          </motion.div>

          <div className={styles.featuresGrid}>
            {environmentFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={480}
                    height={360}
                    className={styles.featureImage}
                    sizes="(max-width: 767px) 80vw, 480px"
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <p className={styles.featureTitle}>{feature.title}</p>
                <p className={styles.featureDescription}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Blur */}
      <div className={styles.backgroundBlur} />
    </section>
  );
}
