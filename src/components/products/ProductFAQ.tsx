"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductFAQ.module.css';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface ProductFAQProps {
  faqs: FAQ[];
  title: string;
  subtitle: string;
  gradient?: string;
}

export default function ProductFAQ({ 
  faqs, 
  title, 
  subtitle,
  gradient = 'linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)'
}: ProductFAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className={styles.faqSection}>
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
        
        <motion.div 
          className={styles.faqContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.id}
              className={`${styles.faqItem} ${openFAQ === faq.id ? styles.open : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + (index * 0.05), duration: 0.5 }}
            >
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openFAQ === faq.id}
              >
                <span>{faq.question}</span>
                <div className={styles.faqIcon}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={openFAQ === faq.id ? styles.iconOpen : ''}
                  >
                    <path d="M10 4V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div 
                    className={styles.faqAnswer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.77, 0, 0.18, 1] }}
                  >
                    <div className={styles.faqAnswerContent}>
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.moreQuestions}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3>Still have questions?</h3>
          <p>Our team is ready to help you with any questions you may have about our products.</p>
          <button className={styles.contactButton}>
            <a href='/contact'>
               Contact Support</a>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.gradientBlob} style={{ background: gradient }}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  );
}
