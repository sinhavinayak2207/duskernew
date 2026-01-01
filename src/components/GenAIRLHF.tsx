'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './GenAIRLHF.module.css';

export default function GenAIRLHF() {
  const [typedText, setTypedText] = useState('');
  const [showResponse, setShowResponse] = useState(false);
  const fullQuestion = 'Why is human feedback necessary for accurate LLM responses?';
  const answer = 'LLMs are not always truthful or aligned with human preferences.';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullQuestion.length) {
        setTypedText(fullQuestion.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowResponse(true), 500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Content */}
          <motion.div
            className={styles.leftContent}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className={styles.title}>RLHF</h4>
            <p className={styles.subtitle}>Powering the next generation of Generative AI</p>
            <p className={styles.description}>
              DUSKER Generative AI Data Engine powers the most advanced LLMs and generative models in the world through world-class RLHF, data generation, model evaluation, safety, and alignment.
            </p>
            <button className={styles.ctaButton}>
              Read more
              <span className={styles.arrow}>→</span>
            </button>
          </motion.div>

          {/* Right Content - AI Text Generator */}
          <motion.div
            className={styles.rightContent}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.demoWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowDots}>
                  <span className={styles.dot} style={{ backgroundColor: '#ff5f56' }}></span>
                  <span className={styles.dot} style={{ backgroundColor: '#ffbd2e' }}></span>
                  <span className={styles.dot} style={{ backgroundColor: '#27c93f' }}></span>
                </div>
                <div className={styles.windowTitle}>AI Text Generator</div>
                <div></div>
              </div>

              <div className={styles.chatContent}>
                <div className={styles.userMessage}>
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                    className={styles.avatar}
                  />
                  <span className={styles.messageText}>{typedText}</span>
                </div>

                {showResponse && (
                  <motion.div
                    className={styles.aiMessage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className={styles.messageText}>{answer}</span>
                    <img
                      src="/static/images/icons/llm-1.png"
                      alt="AI"
                      className={styles.avatar}
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
