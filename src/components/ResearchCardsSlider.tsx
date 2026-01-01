'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './ResearchCardsSlider.module.css';

const researchCards = [
  {
    category: 'Leaderboards',
    title: 'SEAL Leaderboards: Expert-Driven Private Evaluations',
    link: '/leaderboards',
    color: '#D1AAD7'
  },
  {
    category: 'Research',
    title: 'FORTRESS: Risk Assessment for National Security',
    link: '/research/fortress',
    color: '#D1AAD7'
  },
  {
    category: 'Research',
    title: 'Adaptive Guidance for Reasoning Models',
    link: '/research/guide',
    color: '#D1AAD7'
  },
  {
    category: 'Research',
    title: 'Agent RLVR',
    link: '/research/agent_rlvr',
    color: '#D1AAD7'
  },
  {
    category: 'Research',
    title: 'Red Teaming Roadmap',
    link: '/research/red_teaming',
    color: '#D1AAD7'
  }
];

export default function ResearchCardsSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!scrollContainerRef.current || isPaused || isDragging) return;

    const scroll = () => {
      if (scrollContainerRef.current) {
        const maxScroll = scrollContainerRef.current.scrollWidth / 2;
        setScrollPosition((prev) => {
          const next = prev + 0.5;
          return next >= maxScroll ? 0 : next;
        });
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  useEffect(() => {
    if (scrollContainerRef.current && !isDragging) {
      scrollContainerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition, isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div 
          className={styles.sliderWrapper} 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            setIsDragging(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div className={styles.slider}>
            {[...researchCards, ...researchCards].map((card, index) => (
              <a
                key={`${card.title}-${index}`}
                href={card.link}
                className={styles.card}
                style={{ '--card-color': card.color } as React.CSSProperties}
              >
                <div className={styles.cardContent}>
                  <div className={styles.cardIcon}>
                    <div className={styles.iconPlaceholder}>
                      {card.category === 'Leaderboards' ? '🏆' : '🔬'}
                    </div>
                  </div>
                  <div className={styles.cardText}>
                    <p className={styles.cardCategory}>{card.category}</p>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>
                </div>
                <div className={styles.cardArrow}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M7.75 7.5V4.25H4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 4.5L0.75 11.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.785 10.25H8.75C9.855 10.25 10.75 9.355 10.75 8.25V2.75C10.75 1.645 9.855 0.75 8.75 0.75H3.75C2.645 0.75 1.75 1.645 1.75 2.75V6.215" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Pause Indicator */}
        {isPaused && !isDragging && (
          <div className={styles.pauseIndicator}>
            Paused - Move mouse away to resume scrolling
          </div>
        )}
      </div>
    </section>
  );
}
