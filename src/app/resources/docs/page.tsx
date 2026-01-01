"use client";

import React from 'react';
import { motion } from '../../../components/motion';
import Image from 'next/image';
import Link from 'next/link';

const docsCategories = [
  {
    title: 'Getting Started',
    icon: 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=80&w=1974&auto=format&fit=crop',
    links: [
      { name: 'Introduction', path: '/resources/docs/introduction' },
      { name: 'Quick Start Guide', path: '/resources/docs/quickstart' },
      { name: 'Installation', path: '/resources/docs/installation' },
      { name: 'Core Concepts', path: '/resources/docs/concepts' },
    ]
  },
  {
    title: 'AI Training',
    icon: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    links: [
      { name: 'Data Preparation', path: '/resources/docs/data-prep' },
      { name: 'Training Models', path: '/resources/docs/training' },
      { name: 'Evaluation', path: '/resources/docs/evaluation' },
      { name: 'Deployment', path: '/resources/docs/deployment' },
    ]
  },
  {
    title: 'Platform Features',
    icon: 'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=2070&auto=format&fit=crop',
    links: [
      { name: 'Data Engine', path: '/resources/docs/data-engine' },
      { name: 'Generative AI', path: '/resources/docs/gen-ai' },
      { name: 'Donovan', path: '/resources/docs/donovan' },
      { name: 'Evaluation Suite', path: '/resources/docs/eval-suite' },
    ]
  },
  {
    title: 'Resources',
    icon: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2068&auto=format&fit=crop',
    links: [
      { name: 'Tutorials', path: '/resources/docs/tutorials' },
      { name: 'Case Studies', path: '/resources/docs/case-studies' },
      { name: 'FAQs', path: '/resources/docs/faqs' },
      { name: 'Support', path: '/resources/docs/support' },
    ]
  },
];

export default function DocsPage() {
  return (
    <div className="docs-container">
      <motion.div 
        className="docs-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="docs-hero-content">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Dusker Documentation
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Everything you need to know about Dusker's AI training platform
          </motion.p>
          <motion.div 
            className="search-container"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="search-input"
            />
            <button className="search-button">Search</button>
          </motion.div>
        </div>
      </motion.div>

      <div className="docs-content">
        <div className="docs-categories">
          {docsCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="docs-category-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="docs-category-header">
                <div className="docs-category-icon">
                  <Image 
                    src={category.icon}
                    alt={category.title}
                    width={60}
                    height={60}
                    className="category-icon-image"
                    unoptimized
                  />
                </div>
                <h2>{category.title}</h2>
              </div>
              <ul className="docs-links-list">
                {category.links.map(link => (
                  <li key={link.path}>
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="docs-featured"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2>Featured Resources</h2>
          <div className="featured-cards">
            <div className="featured-card">
              <div className="featured-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Quick Start Guide</h3>
              <p>Get up and running with Dusker in minutes</p>
              <Link href="/resources/docs/quickstart" className="featured-link">Learn more →</Link>
            </div>
            <div className="featured-card">
              <div className="featured-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>API Reference</h3>
              <p>Complete API documentation for developers</p>
              <Link href="/resources/api" className="featured-link">Learn more →</Link>
            </div>
            <div className="featured-card">
              <div className="featured-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.59 13.51L15.42 17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.41 6.51L8.59 10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Community</h3>
              <p>Join our community of AI developers</p>
              <Link href="/resources/community" className="featured-link">Learn more →</Link>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .docs-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          font-family: 'Inter', sans-serif;
        }
        
        .docs-hero {
          background: linear-gradient(135deg, #6a5af9 0%, #f857a6 100%);
          border-radius: 16px;
          padding: 4rem 2rem;
          margin-bottom: 3rem;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .docs-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop') center/cover no-repeat;
          opacity: 0.1;
          z-index: 0;
        }
        
        .docs-hero-content {
          position: relative;
          z-index: 1;
        }
        
        .docs-hero h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }
        
        .docs-hero p {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          opacity: 0.9;
        }
        
        .search-container {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
        }
        
        .search-input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 8px 0 0 8px;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .search-button {
          background: #232344;
          color: white;
          border: none;
          border-radius: 0 8px 8px 0;
          padding: 0 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        
        .search-button:hover {
          background: #1a1a33;
        }
        
        .docs-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        
        .docs-categories {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .docs-category-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .docs-category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .docs-category-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }
        
        .docs-category-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
        }
        
        .category-icon-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .docs-category-card h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #232344;
          margin: 0;
        }
        
        .docs-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .docs-links-list li {
          margin-bottom: 0.75rem;
        }
        
        .docs-links-list a {
          color: #4f46e5;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          display: inline-block;
        }
        
        .docs-links-list a:hover {
          color: #7c3aed;
          text-decoration: underline;
        }
        
        .docs-featured {
          margin-top: 2rem;
        }
        
        .docs-featured h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #232344;
        }
        
        .featured-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .featured-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .featured-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .featured-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #6a5af9 0%, #f857a6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: white;
        }
        
        .featured-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.5rem;
          color: #232344;
        }
        
        .featured-card p {
          color: #64748b;
          margin: 0 0 1.5rem;
        }
        
        .featured-link {
          color: #4f46e5;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          transition: color 0.2s;
        }
        
        .featured-link:hover {
          color: #7c3aed;
        }
        
        @media (max-width: 768px) {
          .docs-hero {
            padding: 3rem 1.5rem;
          }
          
          .docs-hero h1 {
            font-size: 2.25rem;
          }
          
          .docs-categories {
            grid-template-columns: 1fr;
          }
          
          .featured-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}