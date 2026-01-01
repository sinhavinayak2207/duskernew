'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './PhysicalAITestimonials.module.css';

const testimonials = [
  {
    quote: "DUSKER has been a trusted partner in making abundant, high-quality, custom data. We're excited to be working with them on the future of physical AI",
    author: "Pete Florence",
    role: "Co-Founder & CEO, Generalist",
    logo: "https://site-assets.plasmic.app/6dbc29d34b7bc497dc1fb590fd8ea39b.svg",
    logoWidth: 172,
    logoHeight: 25
  },
  {
    quote: "At Cobot, our mission is to deploy physical AI at scale through our robot, Proxie. I feel fortunate to have worked with the DUSKER team in the past and know first-hand that DUSKER is unique in its ability to quickly adapt to the needs of their partners. We're excited by the work DUSKER has already done in building this data set and look forward to partnering to push the data frontier in physical AI.",
    author: "Brad Porter",
    role: "CEO & Founder, Cobot",
    logo: "https://site-assets.plasmic.app/3e76e1dfce192768b9c184e9cf41a8f0.svg",
    logoWidth: 84,
    logoHeight: 24
  }
];

export default function PhysicalAITestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.testimonialBox}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className={styles.testimonialContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <q className={styles.quote}>{testimonials[activeIndex].quote}</q>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{testimonials[activeIndex].author}</h4>
                <p className={styles.authorRole}>{testimonials[activeIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Logo Navigation - Desktop */}
        <div className={styles.logoNavigation}>
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`${styles.logoButton} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial from ${testimonial.author}`}
            >
              <Image
                src={testimonial.logo}
                alt={testimonial.author}
                width={testimonial.logoWidth}
                height={testimonial.logoHeight}
                className={styles.logo}
              />
            </button>
          ))}
        </div>

        {/* Dot Navigation - Mobile */}
        <div className={styles.dotNavigation}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${activeIndex === index ? styles.activeDot : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background Gradient */}
      <div className={styles.backgroundGradient} />
    </section>
  );
}
