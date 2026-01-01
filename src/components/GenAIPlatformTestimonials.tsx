'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GenAIPlatformTestimonials.module.css';

const testimonials = [
  {
    id: 1,
    quote: "With DUSKER GenAI Platform, we were able to quickly launch our first use case: a GenAI solution that makes it easy for users to get information out of our Enterprise Data Hub. This is enabling data-driven decision making.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    company: "Global Financial Group",
    color: '#7E9FFF'
  },
  {
    id: 2,
    quote: "We have an exciting roadmap ahead and we're going to continue partnering with DUSKER. The platform has transformed how we approach AI development across our organization.",
    author: "Michael Roberts",
    role: "Chief Executive Officer",
    company: "MediaTech Inc",
    color: '#FF69B4'
  },
  {
    id: 3,
    quote: "DUSKER's platform allowed us to go from concept to production in weeks instead of months. The fine-tuning capabilities are unmatched in the industry.",
    author: "David Park",
    role: "VP of Engineering",
    company: "InnovateAI",
    color: '#FFD700'
  }
];

export default function GenAIPlatformTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.section}>
      {/* Background Effect */}
      <div className={styles.backgroundEffect}>
        <motion.div
          className={styles.bgGlow}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.label}>TESTIMONIALS</div>
          <h2 className={styles.title}>
            Trusted by <span className={styles.highlight}>Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className={styles.carouselContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className={styles.testimonialCard}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{ '--testimonial-color': testimonials[activeIndex].color } as React.CSSProperties}
            >
              {/* Quote Icon */}
              <motion.div 
                className={styles.quoteIcon}
                animate={{
                  y: [0, -5, 0],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </motion.div>

              {/* Quote Text */}
              <p className={styles.quoteText}>{testimonials[activeIndex].quote}</p>

              {/* Author Info */}
              <div className={styles.authorInfo}>
                <motion.div 
                  className={styles.authorAvatar}
                  style={{ background: `linear-gradient(135deg, ${testimonials[activeIndex].color}, ${testimonials[activeIndex].color}80)` }}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${testimonials[activeIndex].color}30`,
                      `0 0 40px ${testimonials[activeIndex].color}50`,
                      `0 0 20px ${testimonials[activeIndex].color}30`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {testimonials[activeIndex].author.charAt(0)}
                </motion.div>
                <div className={styles.authorDetails}>
                  <h4 className={styles.authorName}>{testimonials[activeIndex].author}</h4>
                  <p className={styles.authorRole}>{testimonials[activeIndex].role}</p>
                  <p className={styles.authorCompany}>{testimonials[activeIndex].company}</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                className={styles.cardGlow}
                style={{ background: testimonials[activeIndex].color }}
                animate={{
                  opacity: [0.05, 0.1, 0.05],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className={styles.navigation}>
            <motion.button
              className={styles.navButton}
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  className={`${styles.dot} ${activeIndex === i ? styles.activeDot : ''}`}
                  onClick={() => setActiveIndex(i)}
                  whileHover={{ scale: 1.2 }}
                  style={{ 
                    background: activeIndex === i ? testimonials[i].color : 'rgba(255,255,255,0.2)'
                  }}
                />
              ))}
            </div>

            <motion.button
              className={styles.navButton}
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Partner Logos */}
        <motion.div
          className={styles.partnersSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className={styles.partnersLabel}>Trusted by leading enterprises</p>
          <div className={styles.partnersLogos}>
            {['Fortune 500', 'Tech Giants', 'Financial Services', 'Healthcare', 'Government'].map((partner, i) => (
              <motion.div
                key={partner}
                className={styles.partnerLogo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
