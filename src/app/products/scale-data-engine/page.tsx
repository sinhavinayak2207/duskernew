"use client";
import React from 'react';
import Link from 'next/link';
import ImageCarousel from '@/components/products/ImageCarousel';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductBenefits from '@/components/products/ProductBenefits';
// Testimonials removed
import ProductComparison from '@/components/products/ProductComparison';
import ProductFAQ from '@/components/products/ProductFAQ';
import ProductUseCases from '@/components/products/ProductUseCases';
import ProductRelated from '@/components/products/ProductRelated';
import ProductCTA from '@/components/products/ProductCTA';

export default function ScaleDataEnginePage() {
  // Hero section content
  const heroContent = {
    title: "Scale Data Engine",
    subtitle: "Accelerate AI Development",
    description: "Build and maintain high-quality datasets to train, fine-tune, and evaluate your AI models with Scale Data Engine. Our comprehensive data platform streamlines your workflow from data collection to model evaluation.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Schedule Demo",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/demo",
    image: "/images/products/data-engine-hero.jpg"
  };
  
  // Carousel images
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      alt: "Tech/AI visualization",
      
    },
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop",
      alt: "Data visualization dashboard",
      
    },
    {
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      alt: "Server/data center",
      
    },
    {
      src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
      alt: "AI/ML visualization",
      
    }
  ];

  // Features section content
  const featuresContent = {
    title: "Powerful Features",
    subtitle: "DATA PLATFORM",
    description: "Scale Data Engine provides everything you need to build and maintain high-quality datasets throughout your AI development lifecycle.",
    features: [
      {
        id: 1,
        title: "Data Collection & Labeling",
        description: "Collect and label diverse, high-quality data with our human-in-the-loop platform, ensuring your models have the training data they need.",
        icon: "📊",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Data Curation & Cleaning",
        description: "Clean, deduplicate, and curate your datasets with advanced tools that ensure data quality and relevance for your specific use case.",
        icon: "🧹",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "Data Validation & QA",
        description: "Validate your datasets with comprehensive quality assurance processes that catch errors and inconsistencies before they impact your models.",
        icon: "✓",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 4,
        title: "Data Versioning & Management",
        description: "Track changes, manage versions, and maintain provenance of your datasets throughout the development lifecycle.",
        icon: "🔄",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2068&auto=format&fit=crop"
      },
      {
        id: 5,
        title: "Synthetic Data Generation",
        description: "Generate synthetic data to augment your training sets and address edge cases that are difficult to collect in the real world.",
        icon: "🔮",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
      }
    ]
  };

  // Benefits section content
  const benefitsContent = {
    title: "Why Choose Scale Data Engine",
    subtitle: "BENEFITS",
    description: "Scale Data Engine helps you build better AI models faster by providing high-quality data and streamlined workflows.",
    benefits: [
      {
        id: 1,
        icon: "⚡",
        title: "10x Faster Development",
        description: "Accelerate your AI development cycle with efficient data workflows and automation."
      },
      {
        id: 2,
        icon: "🔍",
        title: "Higher Quality Data",
        description: "Ensure your models train on clean, relevant, and diverse datasets."
      },
      {
        id: 3,
        icon: "📊",
        title: "Comprehensive Analytics",
        description: "Gain insights into your data quality and model performance with detailed analytics."
      },
     
      {
        id: 5,
        icon: "🛡️",
        title: "Enterprise Security",
        description: "Keep your data secure with enterprise-grade security and compliance features."
      },
      {
        id: 6,
        icon: "💰",
        title: "Cost Efficiency",
        description: "Reduce costs by optimizing your data collection and labeling processes."
      }
    ],
    stats: [
      { value: "85%", label: "Reduction in data preparation time" },
      { value: "3x", label: "Faster model iteration cycles" },
      { value: "99.9%", label: "Data labeling accuracy" }
    ]
  };

  // Testimonials section content
  const testimonialsContent = {
    title: "What Our Customers Say",
    subtitle: "TESTIMONIALS",
    testimonials: [
      {
        id: 1,
        name: "Sarah Johnson",
        content: "Scale Data Engine has transformed how we build and maintain our training datasets. Our model accuracy improved by 23% within the first month.",
        role: "AI Research Lead",
        company: "TechCorp Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
        logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop",
        rating: 5
      },
      {
        id: 2,
        name: "Michael Chen",
        content: "The data quality improvements we've seen with Scale Data Engine have been remarkable. Our models are more robust and reliable than ever before.",
        role: "CTO",
        company: "AI Innovations",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
        rating: 5
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        content: "We've cut our data preparation time by 70% while improving data quality. Scale Data Engine is now an essential part of our AI development pipeline.",
        role: "Data Science Director",
        company: "Global AI Solutions",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop",
        rating: 4
      }
    ]
  };

  // Comparison section content
  const comparisonContent = {
    title: "Choose Your Plan",
    subtitle: "PRICING",
    features: [
      {
        name: "Data Volume",
        basic: "Up to 100K samples",
        pro: "Up to 1M samples",
        enterprise: "Unlimited"
      },
      {
        name: "Data Labeling",
        basic: true,
        pro: true,
        enterprise: true
      },
      {
        name: "Data Curation",
        basic: true,
        pro: true,
        enterprise: true
      },
      {
        name: "Data Validation",
        basic: true,
        pro: true,
        enterprise: true
      },
      {
        name: "Data Versioning",
        basic: false,
        pro: true,
        enterprise: true
      },
      {
        name: "Synthetic Data",
        basic: false,
        pro: "Limited",
        enterprise: "Advanced"
      },
      {
        name: "API Access",
        basic: "Basic",
        pro: "Full",
        enterprise: "Enterprise"
      },
      {
        name: "Support",
        basic: "Email",
        pro: "Email + Chat",
        enterprise: "24/7 Dedicated"
      },
      {
        name: "SLA",
        basic: false,
        pro: "99.5%",
        enterprise: "99.9%"
      }
    ]
  };

  // FAQ section content
  const faqContent = {
    title: "Frequently Asked Questions",
    subtitle: "FAQ",
    faqs: [
      {
        id: 1,
        question: "How does Scale Data Engine improve data quality?",
        answer: "Scale Data Engine improves data quality through a combination of human-in-the-loop labeling, automated quality checks, deduplication tools, and comprehensive validation processes. Our platform ensures that your data is accurate, diverse, and relevant to your specific use case."
      },
      {
        id: 2,
        question: "Can I integrate Scale Data Engine with my existing tools?",
        answer: "Yes, Scale Data Engine offers comprehensive API access and integrations with popular ML tools, data storage solutions, and development environments. Our flexible architecture allows for seamless integration into your existing workflows."
      },
      {
        id: 3,
        question: "How secure is my data with Scale Data Engine?",
        answer: "Scale Data Engine implements enterprise-grade security measures including encryption at rest and in transit, role-based access controls, and compliance with industry standards like SOC 2, GDPR, and HIPAA. We take data security extremely seriously and provide comprehensive audit logs and security features."
      },
      {
        id: 4,
        question: "What types of data can Scale Data Engine handle?",
        answer: "Scale Data Engine supports a wide range of data types including text, images, video, audio, and structured data. Our platform is designed to be flexible and can be customized to handle specialized data formats for specific industries or use cases."
      },
      {
        id: 5,
        question: "How does pricing work for Scale Data Engine?",
        answer: "Scale Data Engine offers tiered pricing based on data volume, features required, and level of support. We provide flexible options ranging from pay-as-you-go to enterprise contracts. Contact our sales team for a customized quote based on your specific needs."
      }
    ]
  };

  // Use Cases section content
  const useCasesContent = {
    title: "Real-World Applications",
    subtitle: "USE CASES",
    useCases: [
      {
        id: "uc1",
        title: "Computer Vision",
        description: "Build robust computer vision models with high-quality image and video datasets, precisely labeled for your specific use case.",
        image: "/images/products/usecase-computer-vision.jpg",
        bullets: [
          "Object detection and classification",
          "Image segmentation and annotation",
          "Video analysis and tracking",
          "Specialized datasets for autonomous vehicles, retail, and more"
        ]
      },
      {
        id: "uc2",
        title: "Natural Language Processing",
        description: "Create comprehensive text datasets for training and fine-tuning language models across multiple domains and languages.",
        image: "/images/products/usecase-nlp.jpg",
        bullets: [
          "Text classification and sentiment analysis",
          "Named entity recognition",
          "Question answering and summarization",
          "Multilingual dataset creation and translation"
        ]
      },
      {
        id: "uc3",
        title: "Generative AI",
        description: "Develop and refine generative AI models with diverse, high-quality training data and evaluation frameworks.",
        image: "/images/products/usecase-generative-ai.jpg",
        bullets: [
          "Prompt engineering and curation",
          "Content moderation and safety",
          "Synthetic data generation",
          "Human feedback for reinforcement learning"
        ]
      }
    ]
  };

  // Related Products section content
  

  // CTA section content
  const ctaContent = {
    title: "Ready to Accelerate Your AI Development?",
    description: "Get started with Scale Data Engine today and build better AI models faster with high-quality data.",
    primaryButtonText: "Start Free Trial",
    secondaryButtonText: "Talk to Sales",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/contact",
    backgroundImage: "/images/products/data-engine-cta-bg.jpg"
  };

  return (
    <main>
      <div className="hero-container" style={{ 
        position: 'relative',
        backgroundColor: '#0f0f1a',
        overflow: 'hidden',
        minHeight: '600px'
      }}>
        {/* Using global grid background */}
        <div style={{ 
          display: 'flex',
          position: 'relative',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{ 
            width: '50%', 
            paddingRight: '2rem',
            paddingTop: '80px',
            paddingBottom: '80px',
            zIndex: 2
          }}>
            <div style={{ maxWidth: '500px' }}>
              <div style={{ 
                color: '#6a5af9', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                fontSize: '0.9rem',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                ACCELERATE AI DEVELOPMENT
              </div>
              
              <h1 style={{ 
                fontSize: '3.5rem', 
                background: 'linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                fontWeight: 'bold',
                lineHeight: '1.1'
              }}>
                Scale Data Engine
              </h1>
              
              <p style={{ 
                color: '#e0e0e0', 
                fontSize: '1.1rem', 
                lineHeight: '1.6',
                marginBottom: '2rem',
                maxWidth: '450px'
              }}>
                {heroContent.description}
              </p>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{ 
                    backgroundColor: '#6a5af9', 
                    color: 'white',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                    Request Demo
                    <span>→</span>
                  </button>
                </Link>
                
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)', 
                    color: 'white',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '50px',
                    fontWeight: 'bold',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                    Learn More
                    <span>→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          <div style={{ 
            width: '50%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '40px',
            paddingBottom: '40px'
          }}>
            <div style={{ 
              width: '100%', 
              maxWidth: '600px',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
              <ImageCarousel images={carouselImages} height={400} />
            </div>
          </div>
        </div>
      </div>
      <ProductFeatures 
        features={featuresContent.features} 
        title={featuresContent.title} 
        subtitle={featuresContent.subtitle} 
      />
      <ProductBenefits 
        benefits={benefitsContent.benefits} 
        title={benefitsContent.title} 
        subtitle={benefitsContent.subtitle}
      />
      <ProductUseCases {...useCasesContent} />
      {/* Testimonials section removed */}
      <ProductFAQ {...faqContent} />
     
      <ProductCTA {...ctaContent} />
    </main>
  );
}