"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductTestimonials.module.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  companyLogo?: string;
}

interface ProductTestimonialsProps {
  testimonials: Testimonial[];
  title: string;
  subtitle: string;
  gradient?: string;
}

export default function ProductTestimonials({ 
  testimonials, 
  title, 
  subtitle,
  gradient = 'linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)'
}: ProductTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };
  
  const handleMouseEnter = () => {
    setAutoplay(false);
  };
  
  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.subtitle}>{subtitle}</span>
          <h2 
            className={styles.title}
            style={{ 
              background: gradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </h2>
        </motion.div>
        
        <div 
          className={styles.testimonialsContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.testimonialWrapper}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                className={styles.testimonialCard}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: [0.77, 0, 0.18, 1] }}
              >
                <div className={styles.quoteIcon}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 10H10C8.89543 10 8 10.8954 8 12V20C8 21.1046 8.89543 22 10 22H16C17.1046 22 18 21.1046 18 20V16H14V14H18V10Z" fill="url(#quote-gradient)" />
                    <path d="M30 10H22C20.8954 10 20 10.8954 20 12V20C20 21.1046 20.8954 22 22 22H28C29.1046 22 30 21.1046 30 20V16H26V14H30V10Z" fill="url(#quote-gradient)" />
                    <defs>
                      <linearGradient id="quote-gradient" x1="8" y1="10" x2="30" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6a5af9" />
                        <stop offset="1" stopColor="#f857a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <div className={styles.testimonialContent}>
                  <p className={styles.testimonialText}>{testimonials[activeIndex].content}</p>
                  
                  <div className={styles.ratingStars}>
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`${styles.star} ${i < testimonials[activeIndex].rating ? styles.filled : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.testimonialFooter}>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.avatarContainer}>
                      <img 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].name}
                        className={styles.avatar}
                      />
                    </div>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>{testimonials[activeIndex].name}</h4>
                      <p className={styles.authorRole}>
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                  
                  {testimonials[activeIndex].companyLogo && (
                    <div className={styles.companyLogo}>
                      <img 
                        src={testimonials[activeIndex].companyLogo} 
                        alt={testimonials[activeIndex].company}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className={styles.testimonialControls}>
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className={styles.arrows}>
              <button 
                className={styles.arrowButton}
                onClick={() => {
                  setActiveIndex((prevIndex) => 
                    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
                  );
                  setAutoplay(false);
                }}
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className={styles.arrowButton}
                onClick={() => {
                  setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
                  setAutoplay(false);
                }}
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.gradientBlob} style={{ background: gradient }}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  );
}
