'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './GenAIDemos.module.css';

const demos = [
  {
    title: 'Assisted Instruction Following Demo',
    thumbnail: 'https://embed-ssl.wistia.com/deliveries/3ff83d43aaf4c73add08dec923be0c56d08d58bf.jpg?image_crop_resized=960x536'
  },
  {
    title: 'Span RLHF',
    thumbnail: 'https://embed-ssl.wistia.com/deliveries/aae970cabbe644380495444a02121cfee2f7cc58.jpg?image_crop_resized=960x536'
  },
  {
    title: 'Human Feedback and Preference Ranking',
    thumbnail: 'https://embed-ssl.wistia.com/deliveries/3278d8bc1dc5ca55f05b5f3b5ac3ea705129e5b7.jpg?image_crop_resized=960x536'
  }
];

export default function GenAIDemos() {
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
          <div className={styles.label}>DEMOS</div>
          <h2 className={styles.title}>DUSKER Data Engine Demos</h2>
        </motion.div>

        <div className={styles.demosGrid}>
          {demos.map((demo, index) => (
            <motion.div
              key={demo.title}
              className={styles.demoCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={styles.thumbnailWrapper}>
                <Image
                  src={demo.thumbnail}
                  alt={demo.title}
                  width={384}
                  height={235}
                  className={styles.thumbnail}
                />
                <div className={styles.playButton}>
                  <svg width="36" height="36" viewBox="0 0 60 60">
                    <path fill="#FFF" d="M48.79 26.129l-33-19.508C13.104 5.035 9 6.574 9 10.492V49.5c0 3.516 3.816 5.637 6.79 3.871l33-19.5c2.94-1.734 2.952-6.008 0-7.742zm0 0"/>
                  </svg>
                </div>
              </div>
              <h4 className={styles.demoTitle}>{demo.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
