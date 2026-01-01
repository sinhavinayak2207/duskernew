"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductUseCases.module.css';

interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
  bullets: string[];
}

interface ProductUseCasesProps {
  useCases: UseCase[];
  title: string;
  subtitle: string;
  gradient?: string;
}

export default function ProductUseCases({ 
  useCases, 
  title, 
  subtitle,
  gradient = 'linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)'
}: ProductUseCasesProps) {
  const [activeUseCase, setActiveUseCase] = useState<string>(useCases[0]?.id || '');
  
  const getCurrentUseCase = () => {
    return useCases.find(useCase => useCase.id === activeUseCase) || useCases[0];
  };

  return (
    <section className={styles.useCasesSection}>
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
        
        <div className={styles.useCasesContainer}>
          <div className={styles.useCasesNav}>
            {useCases.map((useCase, index) => (
              <motion.button 
                key={useCase.id}
                className={`${styles.useCaseButton} ${activeUseCase === useCase.id ? styles.activeButton : ''}`}
                onClick={() => setActiveUseCase(useCase.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (index * 0.1), duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                {useCase.title}
              </motion.button>
            ))}
          </div>
          
          <div className={styles.useCaseContent}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeUseCase}
                className={styles.useCaseDetails}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.useCaseText}>
                  <h3 className={styles.useCaseTitle}>{getCurrentUseCase()?.title}</h3>
                  <p className={styles.useCaseDescription}>{getCurrentUseCase()?.description}</p>
                  
                  <ul className={styles.useCaseBullets}>
                    {getCurrentUseCase()?.bullets?.map((bullet, index) => (
                      <motion.li 
                        key={index}
                        className={styles.bulletItem}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                      >
                        <div className={styles.bulletIcon}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    className={styles.learnMoreButton}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                  <a href='/contact'>Learn More</a> 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 3L13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </div>
                
                <motion.div 
                  className={styles.useCaseImageContainer}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div 
                    className={styles.useCaseImage} 
                    style={{ backgroundImage: `url(${getCurrentUseCase()?.image})` }}
                  />
                  <div className={styles.imageGlow} style={{ background: gradient }}></div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
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