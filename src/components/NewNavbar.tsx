'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import styles from './NewNavbar.module.css';

const buildAIProducts = [
  {
    name: 'Dusker Data Engine',
    description: 'Data for training models',
    path: '/data-engine',
    icon: '🔧'
  },
  {
    name: 'For Generative AI',
    description: 'Supervised fine-tuning and RLHF',
    path: '/generative-ai',
    icon: '✨',
    nested: true
  },
  {
    name: 'For Physical AI',
    description: 'Powering next-gen robotics',
    path: '/physical-ai',
    icon: '🤖',
    nested: true
  },
  {
    name: 'For Government',
    description: 'High-quality data for public sector',
    path: '/government',
    icon: '🏛️',
    nested: true
  },
  {
    name: 'For Automotive',
    description: 'Unlock L2 to L5 autonomy',
    path: '/automotive',
    icon: '🚗',
    nested: true
  }
];

const applyAIProducts = [
  {
    name: 'Dusker Donovan',
    description: 'Mission-critical Agentic AI',
    path: '/donovan',
    icon: '⚡'
  },
  {
    name: 'Dusker GenAI Platform',
    description: 'Full-stack Generative AI',
    path: '/genai-platform',
    icon: '🎯'
  }
];

const evaluateAIProducts = [
  {
    name: 'Dusker Evaluation',
    description: 'Evaluation of AI models and applications',
    path: '/evaluation',
    icon: '📊'
  },
  {
    name: 'For Model Developers',
    description: 'Model evaluations and red teaming',
    path: '/evaluation/developers',
    icon: '👨‍💻',
    nested: true
  },
  {
    name: 'For Public Sector',
    description: 'Evaluation for AI systems',
    path: '/evaluation/public',
    icon: '🏢',
    nested: true
  },
  {
    name: 'For Enterprise',
    description: 'Evaluation and monitoring for Enterprise AI apps',
    path: '/evaluation/enterprise',
    icon: '🏭',
    nested: true
  }
];

const leaderboards = [
  {
    name: 'SEAL Leaderboards',
    description: 'Expert-driven private evaluations',
    path: '/leaderboards',
    icon: '🏆'
  }
];

const customers = [
  {
    name: 'Case Studies',
    description: 'Success stories from our customers',
    path: '/customers/case-studies',
    icon: '📖'
  },
  {
    name: 'Testimonials',
    description: 'What our customers say',
    path: '/customers/testimonials',
    icon: '💬'
  }
];

const resources = [
  {
    name: 'Documentation',
    description: 'Product guides and API reference',
    path: '/resources/docs',
    icon: '📚'
  },
  {
    name: 'Blog',
    description: 'Latest insights and updates',
    path: '/blog',
    icon: '✍️'
  },
  {
    name: 'Community',
    description: 'Join our developer community',
    path: '/community',
    icon: '👥'
  }
];

export default function NewNavbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleDropdown = (name: string) => {
    setOpenDropdown(prevState => prevState === name ? null : name);
  };

  const ProductsDropdown = () => (
    <AnimatePresence>
      {hoverDropdown === 'products' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={styles.dropdown}
        >
          <div className={styles.dropdownGrid}>
            <div className={styles.dropdownSection}>
              <h4 className={styles.sectionTitle}>BUILD AI</h4>
              <ul className={styles.productList}>
                {buildAIProducts.map((product, index) => (
                  <li key={index} className={product.nested ? styles.nestedItem : ''}>
                    <a href={product.path} className={styles.productLink}>
                      <span className={styles.productIcon}>{product.icon}</span>
                      <div>
                        <span className={styles.productName}>{product.name}</span>
                        <span className={styles.productDesc}>{product.description}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.dropdownSection}>
              <h4 className={styles.sectionTitle}>APPLY AI</h4>
              <ul className={styles.productList}>
                {applyAIProducts.map((product, index) => (
                  <li key={index}>
                    <a href={product.path} className={styles.productLink}>
                      <span className={styles.productIcon}>{product.icon}</span>
                      <div>
                        <span className={styles.productName}>{product.name}</span>
                        <span className={styles.productDesc}>{product.description}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.dropdownSection}>
              <h4 className={styles.sectionTitle}>EVALUATE AI</h4>
              <ul className={styles.productList}>
                {evaluateAIProducts.map((product, index) => (
                  <li key={index} className={product.nested ? styles.nestedItem : ''}>
                    <a href={product.path} className={styles.productLink}>
                      <span className={styles.productIcon}>{product.icon}</span>
                      <div>
                        <span className={styles.productName}>{product.name}</span>
                        <span className={styles.productDesc}>{product.description}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const SimpleDropdown = ({ items, dropdownName }: { items: typeof leaderboards, dropdownName: string }) => (
    <AnimatePresence>
      {hoverDropdown === dropdownName && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={styles.dropdownSimple}
        >
          <ul className={styles.productList}>
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.path} className={styles.productLink}>
                  <span className={styles.productIcon}>{item.icon}</span>
                  <div>
                    <span className={styles.productName}>{item.name}</span>
                    <span className={styles.productDesc}>{item.description}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            {/* Logo */}
            <a href="/" className={styles.logo}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.logoContent}
              >
                <img 
                  src="https://raw.githubusercontent.com/sinhabinayak2207/duskerservices/main/public/duskerlogonew.jpg"
                  alt="Dusker Logo"
                  className={styles.logoImage}
                />
                <span className={styles.logoText}>Dusker</span>
              </motion.div>
            </a>

            {/* Desktop Menu */}
            <div className={styles.desktopMenu}>
              {/* Products Dropdown */}
              <div 
                className={styles.navItem}
                onMouseEnter={() => setHoverDropdown('products')}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <button
                  className={styles.navButton}
                  aria-expanded={hoverDropdown === 'products'}
                >
                  Products
                </button>
                <ProductsDropdown />
              </div>

              {/* Leaderboards Dropdown - Commented out */}
              {/* <div 
                className={styles.navItem}
                onMouseEnter={() => setHoverDropdown('leaderboards')}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <button
                  className={styles.navButton}
                  aria-expanded={hoverDropdown === 'leaderboards'}
                >
                  Leaderboards
                </button>
                <SimpleDropdown items={leaderboards} dropdownName="leaderboards" />
              </div> */}

              {/* Enterprise Link */}
              <a href="/enterprise" className={styles.navLink}>Enterprise</a>

              {/* Government Link - Commented out */}
              {/* <a href="/government" className={styles.navLink}>Government</a> */}

              {/* Customers Dropdown */}
              <div 
                className={styles.navItem}
                onMouseEnter={() => setHoverDropdown('customers')}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <button
                  className={styles.navButton}
                  aria-expanded={hoverDropdown === 'customers'}
                >
                  Customers
                </button>
                <SimpleDropdown items={customers} dropdownName="customers" />
              </div>

              {/* About Link */}
              <a href="/about" className={styles.navLink}>About</a>

              {/* Resources Dropdown - Commented out */}
              {/* <div 
                className={styles.navItem}
                onMouseEnter={() => setHoverDropdown('resources')}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <button
                  className={styles.navButton}
                  aria-expanded={hoverDropdown === 'resources'}
                >
                  Resources
                </button>
                <SimpleDropdown items={resources} dropdownName="resources" />
              </div> */}
            </div>

            {/* Right Side Actions */}
            <div className={styles.navActions}>
              <ThemeToggle />
              <a href="/contact" className={styles.btnContact}>Contact</a>
              <a href="/demo" className={styles.btnDemo}>Book a Demo →</a>
              {/* Login button removed */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuButton}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className={styles.hamburger}>
                <span className={menuOpen ? styles.hamburgerOpen : ''}></span>
                <span className={menuOpen ? styles.hamburgerOpen : ''}></span>
                <span className={menuOpen ? styles.hamburgerOpen : ''}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className={styles.spacer}></div>
    </>
  );
}
