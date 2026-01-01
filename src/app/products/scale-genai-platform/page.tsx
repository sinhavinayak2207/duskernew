"use client";
import React from 'react';
import ImageCarousel from '@/components/products/ImageCarousel';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductBenefits from '@/components/products/ProductBenefits';
// Testimonials removed
import ProductComparison from '@/components/products/ProductComparison';
import ProductFAQ from '@/components/products/ProductFAQ';
import ProductUseCases from '@/components/products/ProductUseCases';
import ProductRelated from '@/components/products/ProductRelated';
import ProductCTA from '@/components/products/ProductCTA';

export default function ScaleGenAIPlatformPage() {
  // Hero section content
  const heroContent = {
    title: "Scale GenAI Platform",
    subtitle: "Enterprise-Ready Generative AI",
    description: "Build, deploy, and manage production-ready generative AI applications with Scale's comprehensive platform. From fine-tuning foundation models to deploying robust applications, we provide the tools and infrastructure you need.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Schedule Demo",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/demo"
  };
  
  // Carousel images for GenAI platform
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      alt: "Generative AI text interface",
      
    },
    {
      src: "https://images.unsplash.com/photo-1686191128864-3e3d8a27236d?q=80&w=2070&auto=format&fit=crop",
      alt: "AI image generation visualization",
      
    },
    {
      src: "https://images.unsplash.com/photo-1675557009875-436f71457475?q=80&w=2070&auto=format&fit=crop",
      alt: "Enterprise AI deployment dashboard",
      
    },
    {
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2070&auto=format&fit=crop",
      alt: "AI model fine-tuning interface",
      
    }
  ];

  // Features section content
  const featuresContent = {
    title: "Comprehensive Platform",
    subtitle: "GENAI SOLUTIONS",
    description: "Scale GenAI Platform provides end-to-end capabilities for building and deploying production-ready generative AI applications.",
    features: [
      {
        id: 1,
        title: "Foundation Model Access",
        description: "Access a curated selection of leading foundation models through a unified API, with optimized inference and deployment options.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.27002 6.96002L12 12L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        image: "/images/products/feature-foundation-models.jpg"
      },
      {
        id: 2,
        title: "Fine-tuning & Customization",
        description: "Customize foundation models with your proprietary data using our efficient fine-tuning infrastructure and workflows.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        image: "/images/products/feature-fine-tuning.jpg"
      },
      {
        id: 3,
        title: "Prompt Engineering & Management",
        description: "Design, test, and manage prompts at scale with our collaborative prompt engineering tools and version control.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        image: "/images/products/feature-prompt-engineering.jpg"
      },
      {
        id: 4,
        title: "Evaluation & Testing",
        description: "Comprehensively evaluate model performance with automated testing frameworks and human feedback loops.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        image: "/images/products/feature-evaluation.jpg"
      },
      {
        id: 5,
        title: "Production Deployment",
        description: "Deploy models to production with enterprise-grade infrastructure, monitoring, and scaling capabilities.",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>,
        image: "/images/products/feature-deployment.jpg"
      }
    ]
  };

  // Benefits section content
  const benefitsContent = {
    title: "Why Choose Scale GenAI Platform",
    subtitle: "BENEFITS",
    description: "Scale GenAI Platform helps you build and deploy production-ready generative AI applications faster and with greater confidence.",
    benefits: [
      {
        id: 1,
        icon: <span style={{ fontSize: '24px' }}>🚀</span>,
        title: "Accelerated Development",
        description: "Reduce time-to-market with pre-built components and streamlined workflows."
      },
      {
        id: 2,
        icon: <span style={{ fontSize: '24px' }}>🔒</span>,
        title: "Enterprise Security",
        description: "Deploy with confidence using our secure, compliant, and auditable infrastructure."
      },
      {
        id: 3,
        icon: <span style={{ fontSize: '24px' }}>💰</span>,
        title: "Cost Optimization",
        description: "Optimize inference costs with intelligent routing and resource management."
      },
      {
        id: 4,
        icon: <span style={{ fontSize: '24px' }}>📈</span>,
        title: "Performance Monitoring",
        description: "Track model performance, usage patterns, and business metrics in real-time."
      },
      {
        id: 5,
        icon: <span style={{ fontSize: '24px' }}>🔄</span>,
        title: "Seamless Integration",
        description: "Connect with your existing tools and workflows through comprehensive APIs."
      },
      {
        id: 6,
        icon: <span style={{ fontSize: '24px' }}>🛠️</span>,
        title: "Customization & Control",
        description: "Maintain full control over your models, data, and deployment options."
      }
    ],
    stats: [
      { value: "70%", label: "Faster time to production" },
      { value: "40%", label: "Reduction in inference costs" },
      { value: "5x", label: "Improvement in model reliability" }
    ]
  };

  // Testimonials section content
  const testimonialsContent = {
    title: "Trusted by Industry Leaders",
    subtitle: "TESTIMONIALS",
    testimonials: [
      {
        id: 1,
        content: "Scale GenAI Platform has transformed how we build and deploy AI applications. We've gone from concept to production in weeks instead of months.",
        name: "David Park",
        role: "CTO",
        company: "InnovateAI",
        avatar: "/images/testimonials/avatar4.jpg",
        companyLogo: "/images/testimonials/logo4.png",
        rating: 5
      },
      {
        id: 2,
        content: "The fine-tuning capabilities in Scale's platform allowed us to customize foundation models with our proprietary data while maintaining enterprise-grade security.",
        name: "Jennifer Lee",
        role: "VP of AI Strategy",
        company: "Global Solutions",
        avatar: "/images/testimonials/avatar5.jpg",
        companyLogo: "/images/testimonials/logo5.png",
        rating: 5
      },
      {
        id: 3,
        content: "Scale's evaluation framework has been crucial for ensuring our models meet quality standards before deployment. It's saved us countless hours of manual testing.",
        name: "Marcus Johnson",
        role: "ML Engineering Director",
        company: "Tech Innovations",
        avatar: "/images/testimonials/avatar6.jpg",
        companyLogo: "/images/testimonials/logo6.png",
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
        name: "Foundation Model Access",
        basic: "Limited models",
        pro: "Full access",
        enterprise: "Full access + priority"
      },
      {
        name: "Fine-tuning Capacity",
        basic: "5 models/month",
        pro: "20 models/month",
        enterprise: "Unlimited"
      },
      {
        name: "Inference Requests",
        basic: "100K/month",
        pro: "1M/month",
        enterprise: "Custom volume"
      },
      {
        name: "Prompt Management",
        basic: true,
        pro: true,
        enterprise: true
      },
      {
        name: "Evaluation Tools",
        basic: "Basic",
        pro: "Advanced",
        enterprise: "Enterprise"
      },
      {
        name: "Deployment Options",
        basic: "Shared",
        pro: "Dedicated",
        enterprise: "Custom + On-prem"
      },
      {
        name: "Team Collaboration",
        basic: "Up to 5 users",
        pro: "Up to 20 users",
        enterprise: "Unlimited"
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
        question: "Which foundation models are available on the Scale GenAI Platform?",
        answer: "Scale GenAI Platform provides access to a wide range of leading foundation models including GPT-4, Claude, Llama 2, PaLM, and more. We continuously add new models as they become available and meet our quality standards. Enterprise customers can also request support for specific models."
      },
      {
        id: 2,
        question: "How does Scale ensure the security of our data during fine-tuning?",
        answer: "Scale implements comprehensive security measures including data encryption at rest and in transit, isolated training environments, secure model storage, and strict access controls. We are SOC 2, GDPR, and HIPAA compliant, and provide detailed audit logs of all data access and model usage."
      },
      {
        id: 3,
        question: "Can we deploy models in our own environment?",
        answer: "Yes, Scale GenAI Platform supports multiple deployment options including Scale-hosted API endpoints, containerized deployments in your cloud environment, and on-premises deployment for enterprise customers with specific security requirements. Our team can work with you to determine the best deployment strategy for your needs."
      },
      {
        id: 4,
        question: "How does Scale's evaluation framework help improve model quality?",
        answer: "Our evaluation framework combines automated testing with human feedback to comprehensively assess model performance across dimensions like accuracy, safety, bias, and task-specific metrics. This allows you to identify and address issues before deployment, and continuously monitor and improve models in production."
      },
      {
        id: 5,
        question: "What kind of support does Scale provide for GenAI Platform customers?",
        answer: "Scale provides tiered support options ranging from email support for basic plans to 24/7 dedicated support with guaranteed response times for enterprise customers. Enterprise customers also receive implementation assistance, regular check-ins, and access to our AI experts for consultation on model development and deployment strategies."
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
        title: "Customer Service AI",
        description: "Build intelligent customer service assistants that understand context, provide accurate information, and seamlessly escalate to human agents when needed.",
        image: "/images/products/usecase-customer-service.jpg",
        bullets: [
          "Multi-turn conversation handling",
          "Knowledge base integration",
          "Sentiment analysis and escalation",
          "Multilingual support"
        ]
      },
      {
        id: "uc2",
        title: "Content Generation",
        description: "Create high-quality, brand-consistent content at scale for marketing, documentation, and creative applications.",
        image: "/images/products/usecase-content-generation.jpg",
        bullets: [
          "Brand voice customization",
          "Multi-format content creation",
          "Content moderation and guidelines",
          "SEO optimization"
        ]
      },
      {
        id: "uc3",
        title: "Enterprise Knowledge Management",
        description: "Transform how your organization accesses and utilizes internal knowledge with AI-powered search and synthesis.",
        image: "/images/products/usecase-knowledge-management.jpg",
        bullets: [
          "Secure document indexing",
          "Natural language querying",
          "Cross-document synthesis",
          "Role-based access controls"
        ]
      }
    ]
  };

  // Related Products section content
  const relatedProductsContent = {
    title: "Related Products",
    subtitle: "EXPLORE MORE",
    products: [
      {
        id: 1,
        title: "Scale Data Engine",
        description: "Build and maintain high-quality datasets for training and fine-tuning your AI models.",
        image: "/images/products/data-engine-card.jpg",
        path: "/products/scale-data-engine",
        gradient: "linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)"
      },
     
      {
        id: 3,
        title: "For Enterprise",
        description: "Discover how Scale's enterprise solutions can transform your business with AI.",
        image: "/images/products/enterprise-card.jpg",
        path: "/products/for-enterprise",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      }
    ]
  };

  // CTA section content
  const ctaContent = {
    title: "Ready to Build Production-Ready GenAI?",
    description: "Get started with Scale GenAI Platform today and accelerate your journey from prototype to production.",
    primaryButtonText: "Start Free Trial",
    secondaryButtonText: "Talk to Sales",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/contact",
    backgroundImage: "/images/products/genai-platform-cta-bg.jpg"
  };

  return (
    <main>
      {/* Hero section with carousel */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left column: Text content */}
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-sm md:text-base font-semibold text-cyan-500 uppercase tracking-wider">
                {heroContent.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
                  {heroContent.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                {heroContent.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={heroContent.primaryButtonLink}
                  className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium transition-colors"
                >
                  {heroContent.primaryButtonText}
                </a>
                <a
                  href={heroContent.secondaryButtonLink}
                  className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors border border-gray-700"
                >
                  {heroContent.secondaryButtonText}
                </a>
              </div>
            </div>
            
            {/* Right column: Image carousel */}
            <div className="w-full md:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <ImageCarousel images={carouselImages} height={400} />
            </div>
          </div>
        </div>
      </section>
      
      <ProductFeatures {...featuresContent} />
      <ProductBenefits {...benefitsContent} />
      <ProductUseCases {...useCasesContent} />
      {/* Testimonials section removed */}
      <ProductComparison {...comparisonContent} />
      <ProductFAQ {...faqContent} />
      <ProductRelated {...relatedProductsContent} />
      <ProductCTA {...ctaContent} />
    </main>
  );
}
