'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './EnterpriseEval.module.css';

const metrics = [
  { value: '99.9%', label: 'Accuracy', delay: 0 },
  { value: '50ms', label: 'Latency', delay: 0.1 },
  { value: '24/7', label: 'Monitoring', delay: 0.2 },
  { value: '100+', label: 'Metrics', delay: 0.3 }
];

const workflow = [
  { step: '01', title: 'Connect', desc: 'Integrate your AI applications in minutes' },
  { step: '02', title: 'Evaluate', desc: 'Run comprehensive performance tests' },
  { step: '03', title: 'Monitor', desc: 'Track real-time metrics and alerts' },
  { step: '04', title: 'Optimize', desc: 'Improve based on actionable insights' }
];

export default function EnterpriseEvaluationPage() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <main className={styles.main} ref={containerRef}>
      {/* Hero with Animated Mesh */}
      <section className={styles.hero}>
        <div className={styles.meshBackground}>
          <svg className={styles.meshSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(10)].map((_, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0" y1={i * 10} x2="100" y2={i * 10}
                stroke="rgba(168, 199, 250, 0.1)"
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <motion.line
                key={`v-${i}`}
                x1={i * 10} y1="0" x2={i * 10} y2="100"
                stroke="rgba(197, 168, 250, 0.1)"
                strokeWidth="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}
          </svg>
        </div>
        
        <div className={styles.heroContent}>
          <motion.span 
            className={styles.tag}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Enterprise Evaluation
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            AI You Can
            <span className={styles.highlight}> Trust</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bridge the trust gap between development and production.
            Comprehensive evaluation and monitoring for enterprise AI.
          </motion.p>
          
          <motion.a
            href="/demo"
            className={styles.heroBtn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            Start Evaluating →
          </motion.a>
        </div>
        
        {/* Floating Metrics */}
        <div className={styles.floatingMetrics}>
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              className={styles.metricBubble}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + metric.delay }}
              style={{
                left: `${15 + i * 22}%`,
                top: `${60 + (i % 2) * 15}%`
              }}
            >
              <span className={styles.metricValue}>{metric.value}</span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow Timeline */}
      <section className={styles.workflowSection}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        
        <div className={styles.timeline}>
          <motion.div 
            className={styles.timelineLine}
            style={{ height: lineProgress }}
          />
          
          {workflow.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.timelineItem} ${activeStep === index ? styles.active : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className={styles.timelineNode}>
                <span>{item.step}</span>
              </div>
              <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Dashboard Preview */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardMock}>
          <div className={styles.dashboardHeader}>
            <div className={styles.windowDots}>
              <span></span><span></span><span></span>
            </div>
            <span className={styles.dashboardTitle}>Dusker Evaluation Dashboard</span>
          </div>
          <div className={styles.dashboardBody}>
            <div className={styles.dashboardSidebar}>
              <div className={styles.sidebarItem}></div>
              <div className={styles.sidebarItem}></div>
              <div className={styles.sidebarItem}></div>
            </div>
            <div className={styles.dashboardMain}>
              <div className={styles.chartArea}>
                <motion.div 
                  className={styles.chartBar}
                  initial={{ height: 0 }}
                  whileInView={{ height: '60%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                />
                <motion.div 
                  className={styles.chartBar}
                  initial={{ height: 0 }}
                  whileInView={{ height: '80%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.div 
                  className={styles.chartBar}
                  initial={{ height: 0 }}
                  whileInView={{ height: '45%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.div 
                  className={styles.chartBar}
                  initial={{ height: 0 }}
                  whileInView={{ height: '90%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                <motion.div 
                  className={styles.chartBar}
                  initial={{ height: 0 }}
                  whileInView={{ height: '70%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Deploy with Confidence?</h2>
          <a href="/demo" className={styles.ctaBtn}>Book a Demo →</a>
        </motion.div>
      </section>
    </main>
  );
}
