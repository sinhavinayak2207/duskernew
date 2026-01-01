"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from '../../components/motion';
import styles from './ImageCarousel.module.css';

interface CarouselImage {
  src: string;
  alt: string;
  link?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  interval?: number; // Time in ms between auto-slides
  height?: number;
}

export default function ImageCarousel({ images, interval = 5000, height = 400 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance slides when not hovering
  useEffect(() => {
    if (images.length <= 1 || isHovering) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval, isHovering]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div 
      className={styles.carouselContainer}
      style={{ height: `${height}px` }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={styles.carouselTrack}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`${styles.carouselSlide} ${index === currentIndex ? styles.active : ''}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentIndex ? 1 : 0,
              x: `${(index - currentIndex) * 100}%`
            }}
            transition={{ duration: 0.5 }}
          >
            {image.link ? (
              <a href={image.link} style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}>
                <Image
                  src={image.src}
                  alt={image.alt || `Slide ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  className={styles.carouselImage}
                  priority={index === 0}
                  unoptimized
                />
              </a>
            ) : (
              <Image
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className={styles.carouselImage}
                priority={index === 0}
                unoptimized
              />
            )}
          </motion.div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button 
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button 
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={styles.carouselIndicators}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicatorDot} ${index === currentIndex ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
