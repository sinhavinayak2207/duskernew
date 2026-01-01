'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './About.module.css';

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const services = [
    { icon: '🔄', title: 'Data Pipelines', desc: 'End-to-end data preparation for high-performance models' },
    { icon: '📊', title: 'Model Evaluation', desc: 'Comprehensive testing for accuracy and fairness' },
    { icon: '💬', title: 'GenAI Platform', desc: 'Tools for training and fine-tuning generative AI' },
    { icon: '🚗', title: 'Automotive AI', desc: 'Solutions for autonomous driving systems' },
    { icon: '🏛️', title: 'Public Sector', desc: 'Secure AI for government agencies' },
    { icon: '🔒', title: 'Enterprise Security', desc: 'Enterprise-grade security features' }
  ];

  const values = [
    { icon: '💡', title: 'Innovation', desc: 'Pushing boundaries while maintaining ethical standards' },
    { icon: '🔍', title: 'Transparency', desc: 'Building trust through open communication' },
    { icon: '🤝', title: 'Collaboration', desc: 'Embracing diverse perspectives for better solutions' },
    { icon: '👥', title: 'Customer-First', desc: 'Your success is our success' },
    { icon: '📚', title: 'Learning', desc: 'Constant improvement as individuals and organization' }
  ];

  const team = [
    {
      name: 'Raj Shrivastava',
      role: 'Chief Executive Officer',
      image: 'https://res.cloudinary.com/doa53gfwf/image/upload/v1762670235/u9fmyagiitewevebrppa.jpg',
      bio: 'Strategic business development professional'
    },
    {
      name: 'Ashish Kar',
      role: 'Chief Technology Officer',
      image: '/images/ashish_kar.jpg',
      bio: 'Visionary AI entrepreneur and ML expert'
    },
    {
      name: 'Tejaswi Sinha',
      role: 'Chief Marketing Officer',
      image: '/images/tejaswi_sinha.jpg',
      bio: 'Strategic marketing leader'
    }
  ];

  return (
    <main className={styles.main}>
      {/* Animated Background */}
      <div className={styles.animatedBg}>
        <motion.div 
          className={styles.bgGradient1}
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className={styles.bgGradient2}
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      {/* Hero with Floating Elements */}
      <section className={styles.hero}>
        <div className={styles.floatingShapes}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.shape}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`
              }}
            />
          ))}
        </div>
        
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.titleSmall}>We Are</span>
          <span className={styles.titleLarge}>Dusker</span>
        </motion.h1>
        
        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Building the future of AI, one model at a time
        </motion.p>
      </section>

      {/* Story Timeline */}
      <section className={styles.storySection}>
        <motion.div 
          className={styles.timelinePath}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <svg viewBox="0 0 100 400" className={styles.pathSvg}>
            <motion.path
              d="M 50 0 Q 20 100 50 200 T 50 400"
              fill="none"
              stroke="rgba(168, 199, 250, 0.3)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
        
        <div className={styles.storyContent}>
          <motion.div
            className={styles.storyNode}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.year}>2024</span>
            <h3>The Beginning</h3>
            <p>Founded by AI researchers from leading tech companies</p>
          </motion.div>
          
          <motion.div
            className={styles.storyNode}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ alignSelf: 'flex-end' }}
          >
            <span className={styles.year}>Today</span>
            <h3>Global Impact</h3>
            <p>Serving enterprises, governments, and developers worldwide</p>
          </motion.div>
          
          <motion.div
            className={styles.storyNode}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.year}>Future</span>
            <h3>AI for All</h3>
            <p>Making AI safe, robust, and accessible for everyone</p>
          </motion.div>
        </div>
      </section>

      {/* What We Do - Mirror of Values */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>What We Do</h2>
        
        <div className={styles.servicesHelix}>
          <motion.div 
            className={styles.serviceDetail}
            key={activeService}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3>{services[activeService].title}</h3>
            <p>{services[activeService].desc}</p>
          </motion.div>
          
          <div className={styles.serviceStrand}>
            {services.map((service, i) => (
              <motion.div
                key={i}
                className={`${styles.serviceNode} ${activeService === i ? styles.activeServiceNode : ''}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveService(i)}
                style={{
                  right: `${50 + 30 * Math.sin(i * 0.8)}%`,
                  top: `${i * 16.6}%`
                }}
              >
                <span className={styles.serviceIcon}>{service.icon}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values DNA Helix */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        
        <div className={styles.valuesHelix}>
          <div className={styles.helixStrand}>
            {values.map((value, i) => (
              <motion.div
                key={i}
                className={`${styles.valueNode} ${activeValue === i ? styles.activeNode : ''}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveValue(i)}
                style={{
                  left: `${50 + 30 * Math.sin(i * 0.8)}%`,
                  top: `${i * 20}%`
                }}
              >
                <span className={styles.valueIcon}>{value.icon}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className={styles.valueDetail}
            key={activeValue}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3>{values[activeValue].title}</h3>
            <p>{values[activeValue].desc}</p>
          </motion.div>
        </div>
      </section>

      {/* Team Constellation */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Leadership</h2>
        
        <div className={styles.teamConstellation}>
          {team.map((member, i) => (
            <motion.div
              key={i}
              className={styles.teamStar}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              style={{
                left: `${30 + i * 20}%`,
                top: `${30 + (i % 2) * 30}%`
              }}
            >
              <motion.div 
                className={styles.starGlow}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img src={member.image} alt={member.name} />
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Connecting Lines */}
          <svg className={styles.constellationLines}>
            <motion.line
              x1="30%" y1="30%" x2="50%" y2="60%"
              stroke="rgba(168, 199, 250, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.line
              x1="50%" y1="60%" x2="70%" y2="30%"
              stroke="rgba(168, 199, 250, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </svg>
        </div>
      </section>

      {/* Contact Portal */}
      <section className={styles.contactSection}>
        <motion.div 
          className={styles.contactPortal}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.portalRing1}></div>
          <div className={styles.portalRing2}></div>
          <div className={styles.portalCore}>
            <h2>Connect</h2>
            <p>info@duskerservices.in</p>
            <p>+91 62016 47596</p>
            <p>Jaipur, India</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
