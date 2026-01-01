"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ImageCarousel.module.css';

export interface CarouselImage {
  src: string;
  alt: string;
  link?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export function ImageCarousel({ 
  images, 
  autoSlide = false, 
  autoSlideInterval = 5000 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    
    const slideInterval = setInterval(goToNext, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
          >
            {image.link ? (
              <Link href={image.link} className={styles.imageLink}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className={styles.image}
                />
              </Link>
            ) : (
              <img 
                src={image.src} 
                alt={image.alt} 
                className={styles.image}
              />
            )}
          </div>
        ))}
      </div>
      
      <button 
        className={`${styles.carouselButton} ${styles.prev}`}
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      
      <button 
        className={`${styles.carouselButton} ${styles.next}`}
        onClick={goToNext}
        aria-label="Next slide"
      >
        &#10095;
      </button>
      
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
