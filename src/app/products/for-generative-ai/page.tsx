"use client";
import React from 'react';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductBenefits from '@/components/products/ProductBenefits';
// Testimonials removed
import ProductComparison from '@/components/products/ProductComparison';
import ProductFAQ from '@/components/products/ProductFAQ';
import ProductUseCases from '@/components/products/ProductUseCases';
import ProductRelated from '@/components/products/ProductRelated';
import ProductCTA from '@/components/products/ProductCTA';
import ImageCarousel from '@/components/products/ImageCarousel';

export default function ForGenerativeAIPage() {
  // Hero section content
  const heroContent = {
    title: "For Generative AI",
    subtitle: "Complete GenAI Solution",
    description: "Build, optimize, and deploy state-of-the-art generative AI applications with Scale's comprehensive solution for the entire generative AI lifecycle. From data preparation to model evaluation, we provide everything you need.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Schedule Demo",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/demo"
  };
  
  // Carousel images for hero section
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      alt: "AI visualization with neural network",
      
    },
    {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      alt: "Generative AI art visualization",
      
    },
    {
      src: "https://images.unsplash.com/photo-1684391845084-8f3bf9e5d03b",
      alt: "AI text generation interface",
      
    },
    {
      src: "https://images.unsplash.com/photo-1675557009875-436f71457475",
      alt: "AI image generation example",
      
    }
  ];

  // Features section content
  const featuresContent = {
    title: "End-to-End GenAI Solution",
    subtitle: "GENERATIVE AI",
    description: "Scale's generative AI solution covers the entire lifecycle from data preparation to deployment and monitoring.",
    features: [
      {
        id: 1,
        title: "High-Quality Training Data",
        description: "Access curated datasets specifically designed for training and fine-tuning generative AI models across text, image, and multimodal domains.",
        icon: "📊",
        image: "/images/products/feature-training-data.jpg"
      },
      {
        id: 2,
        title: "Model Fine-tuning",
        description: "Fine-tune foundation models with your proprietary data using our efficient infrastructure and proven methodologies.",
        icon: "🔧",
        image: "/images/products/feature-fine-tuning.jpg"
      },
      {
        id: 3,
        title: "Prompt Engineering",
        description: "Design, test, and optimize prompts at scale with our collaborative prompt engineering platform and best practices.",
        icon: "✏️",
        image: "/images/products/feature-prompt-engineering.jpg"
      },
      {
        id: 4,
        title: "RLHF & Alignment",
        description: "Align models with human preferences and values using our reinforcement learning from human feedback (RLHF) pipeline.",
        icon: "🔄",
        image: "/images/products/feature-rlhf.jpg"
      },
      {
        id: 5,
        title: "Safety & Evaluation",
        description: "Comprehensively evaluate and improve model safety, accuracy, and performance with our testing frameworks.",
        icon: "🛡️",
        image: "/images/products/feature-safety.jpg"
      }
    ]
  };

  // Benefits section content
  const benefitsContent = {
    title: "Why Choose Scale for GenAI",
    subtitle: "BENEFITS",
    description: "Scale's generative AI solution helps you build better models faster with comprehensive tools and expertise.",
    benefits: [
      {
        id: 1,
        icon: "🚀",
        title: "Accelerated Development",
        description: "Reduce time-to-market with our end-to-end platform and proven methodologies."
      },
      {
        id: 2,
        icon: "🔍",
        title: "Superior Quality",
        description: "Build more capable and reliable models with high-quality data and evaluation."
      },
      {
        id: 3,
        icon: "🛡️",
        title: "Enhanced Safety",
        description: "Ensure your models are safe, aligned, and free from harmful behaviors."
      },
      {
        id: 4,
        icon: "💡",
        title: "Domain Expertise",
        description: "Leverage our specialized knowledge across industries and use cases."
      },
      {
        id: 5,
        icon: "⚙️",
        title: "Production Readiness",
        description: "Deploy with confidence using our enterprise-grade infrastructure."
      },
      {
        id: 6,
        icon: "📊",
        title: "Continuous Improvement",
        description: "Iterate and improve your models with comprehensive analytics and feedback."
      }
    ],
    stats: [
      { value: "65%", label: "Faster time to production" },
      { value: "3x", label: "Improvement in model quality" },
      { value: "90%", label: "Reduction in harmful outputs" }
    ]
  };

  // Testimonials section content
  const testimonialsContent = {
    title: "Trusted by AI Innovators",
    subtitle: "TESTIMONIALS",
    testimonials: [
      {
        id: 1,
        name: "Rebecca Chen",
        role: "AI Research Director",
        company: "Innovate Labs",
        content: "Scale's generative AI solution has transformed how we build and deploy AI applications. The quality of data and evaluation frameworks has been game-changing for us.",
        avatar: "/images/testimonials/avatar13.jpg",
        rating: 5,
        companyLogo: "/images/testimonials/logo13.png"
      },
      {
        id: 2,
        name: "Thomas Wright",
        role: "Product Lead",
        company: "AI Solutions",
        content: "The prompt engineering platform has allowed us to iterate much faster and build more reliable applications. Our team's productivity has increased dramatically.",
        avatar: "/images/testimonials/avatar14.jpg",
        rating: 5,
        companyLogo: "/images/testimonials/logo14.png"
      },
      {
        id: 3,
        name: "Sophia Martinez",
        role: "ML Engineering Manager",
        company: "Future Tech",
        content: "Scale's RLHF pipeline has been crucial for aligning our models with our values and user expectations. The improvement in output quality has been remarkable.",
        avatar: "/images/testimonials/avatar15.jpg",
        rating: 4,
        companyLogo: "/images/testimonials/logo15.png"
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
        question: "What types of generative AI models does Scale support?",
        answer: "Scale supports a wide range of generative AI models including large language models (LLMs), text-to-image models, text-to-video models, multimodal models, and more. Our platform is designed to be model-agnostic, allowing you to work with both open-source and proprietary models across different architectures and capabilities."
      },
      {
        id: 2,
        question: "How does Scale's data differ from publicly available datasets?",
        answer: "Scale's datasets are specifically curated for generative AI applications with a focus on quality, diversity, and specialized use cases. Our data undergoes rigorous cleaning, validation, and annotation processes to ensure it meets the highest standards. We also offer custom data collection and curation services for specific domains and requirements that aren't well-served by public datasets."
      },
      {
        id: 3,
        question: "What is RLHF and why is it important for generative AI?",
        answer: "Reinforcement Learning from Human Feedback (RLHF) is a technique used to align AI models with human preferences and values. It involves collecting human feedback on model outputs and using that feedback to further train the model. RLHF is crucial for improving the helpfulness, harmlessness, and honesty of generative AI systems, reducing harmful outputs, and ensuring the models behave in ways that users find valuable."
      },
      {
        id: 4,
        question: "How does Scale ensure the safety of generative AI models?",
        answer: "Scale employs a multi-layered approach to AI safety including comprehensive testing frameworks, red-teaming exercises, adversarial testing, and continuous monitoring. Our safety evaluations cover areas such as harmful content generation, bias, toxicity, factuality, and security vulnerabilities. We also provide tools for implementing safety guardrails and content filtering in production systems."
      },
      {
        id: 5,
        question: "Can Scale help with deploying generative AI in regulated industries?",
        answer: "Yes, Scale has extensive experience helping organizations in regulated industries such as healthcare, finance, and government deploy generative AI solutions. We provide specialized tools and workflows for compliance documentation, audit trails, explainability, and risk management. Our team can work with you to ensure your AI implementations meet regulatory requirements while delivering business value."
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
        title: "Content Creation",
        description: "Build AI-powered content creation tools that generate high-quality text, images, and videos while maintaining brand consistency and quality standards.",
        image: "/images/products/usecase-content-creation.jpg",
        bullets: [
          "Marketing content generation",
          "Product descriptions and catalogs",
          "Creative asset production",
          "Personalized content at scale"
        ]
      },
      {
        id: "uc2",
        title: "Conversational AI",
        description: "Develop sophisticated conversational agents that understand context, maintain coherence, and provide helpful, accurate responses across various domains.",
        image: "/images/products/usecase-conversational-ai.jpg",
        bullets: [
          "Customer service automation",
          "Virtual assistants and agents",
          "Knowledge base integration",
          "Multi-turn conversation handling"
        ]
      },
      {
        id: "uc3",
        title: "Code Generation",
        description: "Create AI coding assistants that help developers write, explain, and debug code across multiple programming languages and frameworks.",
        image: "/images/products/usecase-code-generation.jpg",
        bullets: [
          "Code completion and generation",
          "Documentation automation",
          "Bug detection and fixing",
          "Code translation and optimization"
        ]
      }
    ]
  };



  // CTA section content
  const ctaContent = {
    title: "Ready to Build Better GenAI?",
    description: "Get started with Scale's generative AI solution today and build more capable, safer, and reliable AI applications.",
    primaryButtonText: "Start Free Trial",
    secondaryButtonText: "Talk to Sales",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/contact",
    backgroundImage: "/images/products/generative-ai-cta-bg.jpg"
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
                COMPLETE GENAI SOLUTION
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
                For Generative AI
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
                  transition: 'all 0.2s ease',
                  
                }}>
                  <a href='/contact'>Request Demo</a>
                  
                  <span>→</span>
                </button>
                
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
                   <a href='/contact'>Learn More</a>
                  <span>→</span>
                </button>
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

      <ProductFeatures {...featuresContent} />
      <ProductBenefits {...benefitsContent} />
      <ProductUseCases {...useCasesContent} />
      {/* Testimonials section removed */}

      <ProductFAQ {...faqContent} />
 
      <ProductCTA {...ctaContent} />
    </main>
  );
}