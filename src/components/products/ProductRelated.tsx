"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import styles from './ProductRelated.module.css';

interface RelatedProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  path: string;
  gradient?: string;
}

interface ProductRelatedProps {
  products: RelatedProduct[];
  title: string;
  subtitle: string;
  gradient?: string;
}

export default function ProductRelated({ 
  products, 
  title, 
  subtitle,
  gradient = 'linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)'
}: ProductRelatedProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.relatedSection}>
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
          className={styles.productsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              className={styles.productCard}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(106, 90, 249, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className={styles.productImage}
                style={{ 
                  backgroundImage: `url(${product.image})`,
                }}
              >
                <div 
                  className={styles.imageOverlay} 
                  style={{ background: product.gradient || gradient }}
                ></div>
              </div>
              
              <div className={styles.productContent}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                
                <Link href={product.path} className={styles.learnMoreLink}>
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 3L13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
              
              <div 
                className={styles.cardGlow} 
                style={{ background: product.gradient || gradient }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className={styles.viewAllContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/products" className={styles.viewAllButton}>
            View All Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.gradientBlob} style={{ background: gradient }}></div>
        <div className={styles.gridPattern}></div>
      </div>
    </section>
  );
}
