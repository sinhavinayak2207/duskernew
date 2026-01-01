"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const products = [
  { 
    name: 'Scale Data Engine', 
    path: '/products/scale-data-engine',
    icon: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1932&auto=format&fit=crop',
    description: 'Data labeling and annotation platform'
  },
  { 
    name: 'For Generative AI', 
    path: '/products/for-generative-ai',
    icon: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    description: 'Solutions for generative AI models'
  },
  { 
    name: 'For Government', 
    path: '/products/for-government',
    icon: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2069&auto=format&fit=crop',
    description: 'AI solutions for government agencies'
  },
  { 
    name: 'For Automotive', 
    path: '/products/for-automotive',
    icon: 'https://images.unsplash.com/photo-1553260168-69b041873e65?q=80&w=1974&auto=format&fit=crop',
    description: 'AI training for autonomous vehicles'
  },
  { 
    name: 'For Enterprise', 
    path: '/products/for-enterprise',
    icon: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
    description: 'Enterprise-grade AI training solutions'
  },
];

const solutions = [
  { 
    name: 'AI Training Pipelines', 
    path: '/solutions/training-pipelines',
    icon: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop',
    description: 'End-to-end AI training workflows'
  },
  { 
    name: 'Data Annotation', 
    path: '/solutions/data-annotation',
    icon: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description: 'High-quality data labeling services'
  },
  { 
    name: 'Model Evaluation', 
    path: '/solutions/model-evaluation',
    icon: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    description: 'Comprehensive model testing suite'
  },
  { 
    name: 'Deployment', 
    path: '/solutions/deployment',
    icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    description: 'Seamless AI model deployment'
  },
];

const resources = [
  { 
    name: 'Docs', 
    path: '/resources/docs',
    icon: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2068&auto=format&fit=crop',
    description: 'Product documentation'
  },
  { 
    name: 'API Reference', 
    path: '/resources/api',
    icon: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop',
    description: 'API documentation and examples'
  },
  { 
    name: 'Guides', 
    path: '/resources/guides',
    icon: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    description: 'Step-by-step implementation guides'
  },
  { 
    name: 'Community', 
    path: '/resources/community',
    icon: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop',
    description: 'Join our developer community'
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
  
  const handleLinkClick = () => {
    setOpenDropdown(null);
  };
  
  const handleDropdownContentClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('a')) {
      e.stopPropagation();
    }
  };

  const DropdownContent = ({ items, isOpen }: { items: typeof products, isOpen: boolean }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
          style={{ width: 'max-content', minWidth: '600px', maxWidth: '800px' }}
          onClick={handleDropdownContentClick}
        >
          <div className="grid grid-cols-2 gap-2 p-4">
            {items.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-800 transition-all duration-200 group"
                onClick={handleLinkClick}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-zinc-800">
                  <img 
                    src={item.icon} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-white text-sm mb-1 group-hover:text-blue-400 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-xs text-zinc-400 line-clamp-2">
                    {item.description}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <nav className="fixed top-[44px] left-0 right-0 z-50 bg-black border-b border-zinc-800 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <img 
                  src="https://raw.githubusercontent.com/sinhabinayak2207/duskerservices/main/public/duskerlogonew.jpg"
                  alt="Dusker Logo"
                  className="w-10 h-10 rounded"
                />
                <span className="text-xl font-semibold text-white whitespace-nowrap">Dusker AI</span>
              </motion.div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdown('products')}
                  className="text-zinc-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-zinc-900"
                  aria-expanded={openDropdown === 'products'}
                >
                  Products
                </button>
                <DropdownContent items={products} isOpen={openDropdown === 'products'} />
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdown('solutions')}
                  className="text-zinc-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-zinc-900"
                  aria-expanded={openDropdown === 'solutions'}
                >
                  Solutions
                </button>
                <DropdownContent items={solutions} isOpen={openDropdown === 'solutions'} />
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdown('resources')}
                  className="text-zinc-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-zinc-900"
                  aria-expanded={openDropdown === 'resources'}
                >
                  Resources
                </button>
                <DropdownContent items={resources} isOpen={openDropdown === 'resources'} />
              </div>

              <a href="/about" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-zinc-900">About</a>
              <a href="/careers" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-zinc-900">Careers</a>
              <a href="/blog" className="text-zinc-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-zinc-900">Blog</a>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <ThemeToggle />
              <a href="/contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-zinc-300 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-zinc-800 bg-black overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
                {/* Mobile Products */}
                <div>
                  <h3 className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-3">Products</h3>
                  <div className="space-y-2">
                    {products.map((p) => (
                      <a
                        key={p.path}
                        href={p.path}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-900 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <img src={p.icon} alt={p.name} className="w-8 h-8 rounded object-cover" />
                        <span className="text-white text-sm font-medium">{p.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Solutions */}
                <div>
                  <h3 className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-3">Solutions</h3>
                  <div className="space-y-2">
                    {solutions.map((s) => (
                      <a
                        key={s.path}
                        href={s.path}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-900 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <img src={s.icon} alt={s.name} className="w-8 h-8 rounded object-cover" />
                        <span className="text-white text-sm font-medium">{s.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Resources */}
                <div>
                  <h3 className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-3">Resources</h3>
                  <div className="space-y-2">
                    {resources.map((r) => (
                      <a
                        key={r.path}
                        href={r.path}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-900 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <img src={r.icon} alt={r.name} className="w-8 h-8 rounded object-cover" />
                        <span className="text-white text-sm font-medium">{r.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Nav Links */}
                <div className="pt-4 border-t border-zinc-800 space-y-2">
                  <a href="/about" className="block px-2 py-2 text-white hover:bg-zinc-900 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>About</a>
                  <a href="/careers" className="block px-2 py-2 text-white hover:bg-zinc-900 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>Careers</a>
                  <a href="/blog" className="block px-2 py-2 text-white hover:bg-zinc-900 rounded-lg transition-colors" onClick={() => setMenuOpen(false)}>Blog</a>
                  <a href="/contact" className="block px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Spacer to prevent content from hiding under fixed navbar and banner */}
      <div className="h-[108px]"></div>
    </>
  );
}