'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './DonovanProducts.module.css';

const products = [
  {
    id: 'applications',
    title: 'Donovan Applications',
    description: 'Pre-built AI applications for common defense and intelligence use cases.',
    icon: '📱',
    color: '#7E9FFF'
  },
  {
    id: 'assistants',
    title: 'Donovan Assistants',
    description: 'AI-powered assistants that help analysts and operators work more efficiently.',
    icon: '🤖',
    color: '#FF69B4'
  },
  {
    id: 'agents',
    title: 'Donovan Agents',
    description: 'Autonomous AI agents that can execute complex multi-step tasks.',
    icon: '⚡',
    color: '#FFD700'
  }
];

export default function DonovanProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      {/* Background Grid */}
      <div className={styles.backgroundGrid}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.gridLine}
            style={{ left: `${(i / 20) * 100}%` }}
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
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
          <div className={styles.label}>PRODUCTS</div>
          <h2 className={styles.title}>
            AI-Powered <span className={styles.highlight}>Solutions</span>
          </h2>
          <p className={styles.subtitle}>
            A comprehensive suite of AI products designed for defense and national security.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={styles.productCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ '--product-color': product.color } as React.CSSProperties}
            >
              {/* Glow Effect */}
              <motion.div 
                className={styles.cardGlow}
                style={{ background: product.color }}
                animate={{
                  opacity: hoveredProduct === product.id ? 0.2 : 0.05,
                  scale: hoveredProduct === product.id ? 1.2 : 1
                }}
              />

              {/* Animated Border */}
              <motion.div
                className={styles.cardBorder}
                style={{ borderColor: product.color }}
                animate={{
                  opacity: hoveredProduct === product.id ? 1 : 0
                }}
              />

              {/* Icon */}
              <motion.div 
                className={styles.cardIcon}
                animate={{
                  y: hoveredProduct === product.id ? [0, -5, 0] : 0,
                  rotate: hoveredProduct === product.id ? [0, 10, -10, 0] : 0
                }}
                transition={{ duration: 0.5 }}
                style={{ 
                  background: `${product.color}15`,
                  borderColor: hoveredProduct === product.id ? product.color : 'rgba(255,255,255,0.1)'
                }}
              >
                <span>{product.icon}</span>
              </motion.div>

              {/* Content */}
              <h3 className={styles.cardTitle}>{product.title}</h3>
              <p className={styles.cardDescription}>{product.description}</p>

              {/* Learn More */}
              <motion.div 
                className={styles.learnMore}
                style={{ color: product.color }}
                animate={{
                  x: hoveredProduct === product.id ? 5 : 0
                }}
              >
                Learn more →
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Connection SVG */}
        <svg className={styles.connectionSvg} viewBox="0 0 800 100">
          <motion.path
            d="M100,50 Q400,0 700,50"
            stroke="url(#connectionGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7E9FFF" />
              <stop offset="50%" stopColor="#FF69B4" />
              <stop offset="100%" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
