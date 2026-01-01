'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AutoResources.module.css';

const resources = [
  {
    title: 'Upgrading Your Fleet Into an AV Data Engine',
    category: 'Data Engine',
    image: 'https://site-assets.plasmic.app/f908268749537805ad89513f8c48f9bd.png',
    link: 'https://exchange.scale.com/home/videos/upgrading-your-fleet-into-an-av-data-engine-2023-04-19'
  },
  {
    title: 'The Authoritative Guide',
    category: 'Guides',
    image: 'https://site-assets.plasmic.app/b6fd18dd37649b12ebf495738f199417.png',
    link: '/guides/data-labeling-annotation-guide'
  },
  {
    title: 'Nuro',
    category: 'Customer Case Study',
    image: 'https://site-assets.plasmic.app/b7c92722de47d932c77847dc12523c13.png',
    link: '/customers/nuro'
  }
];

export default function AutoResources() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      {/* Background Gradient */}
      <div className={styles.backgroundGradient} />

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
          <h2 className={styles.title}>Learn More About the Data Engine</h2>
        </motion.div>

        {/* Carousel */}
        <div className={styles.carouselContainer}>
          {/* Navigation Arrows */}
          <button className={`${styles.navButton} ${styles.navLeft}`} onClick={scrollLeft}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className={`${styles.navButton} ${styles.navRight}`} onClick={scrollRight}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div ref={scrollRef} className={styles.carousel}>
            {resources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                className={styles.resourceCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                {/* Image */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    width={640}
                    height={402}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />
                  
                  {/* Hover Effect */}
                  <motion.div 
                    className={styles.hoverEffect}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <p className={styles.category}>{resource.category}</p>
                  <h5 className={styles.resourceTitle}>{resource.title}</h5>
                </div>

                {/* Animated Border */}
                <motion.div 
                  className={styles.cardBorder}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
