"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GuidesPage() {
  // Guides data
  const guides = [
    {
      id: 1,
      title: "Getting Started with AI Training",
      description: "Learn the fundamentals of AI model training and best practices for beginners.",
      category: "Beginner",
      
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Advanced Data Annotation Techniques",
      description: "Explore sophisticated annotation methods to improve your training data quality.",
      category: "Advanced",
      
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Model Evaluation Best Practices",
      description: "Learn how to properly evaluate your AI models for production readiness.",
      category: "Intermediate",
      
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Optimizing Training Pipelines",
      description: "Strategies for improving the efficiency and speed of your AI training pipelines.",
      category: "Advanced",
      
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Deployment Strategies for AI Models",
      description: "A comprehensive guide to deploying AI models in production environments.",
      category: "Intermediate",
      
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Fine-tuning Large Language Models",
      description: "Step-by-step instructions for fine-tuning LLMs for specific use cases.",
      category: "Advanced",
      
      image: "https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  // Categories for filtering
  const categories = ["All", "Beginner", "Intermediate", "Advanced"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  // Filtered guides
  const filteredGuides = activeCategory === "All" 
    ? guides 
    : guides.filter(guide => guide.category === activeCategory);

  return (
    <main className="bg-gray-900 text-white">
      {/* Hero section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-base font-semibold text-blue-500 uppercase tracking-wider mb-4"
            >
              RESOURCES
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
                Guides & Tutorials
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300"
            >
              Comprehensive resources to help you master AI training, data annotation, and model deployment.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                
                  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 h-full flex flex-col transition-transform group-hover:scale-[1.02]">
                    <div className="relative h-48 w-full">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {guide.category}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-gray-300 mb-4 flex-grow">
                        {guide.description}
                      </p>
                      
                    </div>
                  </div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need More Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our team of AI experts is ready to assist you with any questions or challenges you may have.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              Contact Support
            </Link>
            
          </div>
        </div>
      </section>
    </main>
  );
}
