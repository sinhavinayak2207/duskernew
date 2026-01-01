"use client";
import React from 'react';
import ImageCarousel from '@/components/products/ImageCarousel';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductBenefits from '@/components/products/ProductBenefits';

import ProductComparison from '@/components/products/ProductComparison';
import ProductFAQ from '@/components/products/ProductFAQ';
import ProductUseCases from '@/components/products/ProductUseCases';
import ProductRelated from '@/components/products/ProductRelated';
import ProductCTA from '@/components/products/ProductCTA';

export default function ForAutomotivePage() {
  // Hero section content
  const heroContent = {
    title: "For Automotive",
    subtitle: "AI-Powered Mobility",
    description: "Accelerate autonomous vehicle development with Scale's comprehensive AI solutions for the automotive industry. From data annotation to model validation, we provide the tools and expertise to bring safe, reliable autonomous systems to market faster.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Schedule Demo",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/contact"
    // image property removed to use carousel instead
  };
  
  // Carousel images for automotive solutions
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
      alt: "Autonomous vehicle sensor system",
      
    },
    {
      src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop",
      alt: "Automotive AI technology",
      
    },
    {
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      alt: "Connected vehicle dashboard",
      
    },
    {
      src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
      alt: "Autonomous driving simulation",
      
    }
  ];

  // Features section content
  const featuresContent = {
    title: "Automotive AI Solutions",
    subtitle: "AUTONOMOUS SYSTEMS",
    description: "Scale's automotive solutions cover the entire AI development lifecycle for autonomous vehicles and advanced driver assistance systems.",
    features: [
      {
        id: 1,
        title: "Sensor Fusion Data",
        description: "Process and annotate multi-sensor data including LiDAR, radar, camera, and ultrasonic inputs with high precision and consistency.",
        icon: "📡",
        image: "/images/products/feature-sensor-fusion.jpg"
      },
      {
        id: 2,
        title: "3D Object Tracking",
        description: "Track objects across frames with consistent IDs and precise trajectories for understanding dynamic environments.",
        icon: "🔍",
        image: "/images/products/feature-3d-tracking.jpg"
      },
      {
        id: 3,
        title: "HD Map Creation",
        description: "Build and maintain high-definition maps with centimeter-level accuracy for autonomous navigation and localization.",
        icon: "🗺️",
        image: "/images/products/feature-hd-maps.jpg"
      },
      {
        id: 4,
        title: "Edge Case Discovery",
        description: "Identify and catalog rare but critical scenarios to ensure comprehensive testing and validation of autonomous systems.",
        icon: "🔎",
        image: "/images/products/feature-edge-cases.jpg"
      },
      {
        id: 5,
        title: "Simulation Integration",
        description: "Seamlessly integrate real-world data with simulation environments for comprehensive testing and validation.",
        icon: "🖥️",
        image: "/images/products/feature-simulation.jpg"
      }
    ]
  };

  // Benefits section content
  const benefitsContent = {
    title: "Why Choose Dusker for Automotive",
    subtitle: "BENEFITS",
    description: "Scale's automotive AI solutions help you accelerate development while maintaining the highest standards of safety and reliability.",
    benefits: [
      {
        id: 2,
        icon: "🔍",
        title: "Superior Accuracy",
        description: "Achieve higher model performance with our high-quality, consistent annotations."
      },
      {
        id: 3,
        icon: "🛡️",
        title: "Enhanced Safety",
        description: "Ensure your autonomous systems meet the highest safety standards with comprehensive testing."
      },
      {
        id: 4,
        icon: "📊",
        title: "Scalable Infrastructure",
        description: "Process petabytes of sensor data efficiently with our cloud infrastructure."
      },
      {
        id: 5,
        icon: "🔄",
        title: "Continuous Improvement",
        description: "Iterate faster with our closed-loop data pipeline and model evaluation framework."
      },
      {
        id: 6,
        icon: "👥",
        title: "Domain Expertise",
        description: "Leverage our specialized knowledge in autonomous systems and automotive applications."
      }
    ],
    stats: [
      { value: "40%", label: "Faster development cycles" },
      { value: "99.9%", label: "Annotation accuracy" },
      { value: "85%", label: "Reduction in edge case incidents" }
    ]
  };

  

  

  // FAQ section content
  const faqContent = {
    title: "Frequently Asked Questions",
    subtitle: "FAQ",
    faqs: [
      {
        id: 1,
        question: "What types of sensor data can Scale process for automotive applications?",
        answer: "Scale can process all major sensor types used in autonomous vehicles including cameras (RGB, infrared, thermal), LiDAR (various manufacturers and specifications), radar, ultrasonic sensors, and GPS/IMU data. Our platform is designed to handle multi-sensor fusion tasks and synchronize data across different sensor modalities with precise temporal alignment."
      },
      {
        id: 2,
        question: "How does Scale ensure the quality and accuracy of annotations for safety-critical automotive applications?",
        answer: "We employ a multi-layered quality assurance process including specialized training for automotive annotators, consensus-based annotation for critical objects, regular calibration exercises, automated quality checks, and manual reviews by domain experts. For safety-critical projects, we can implement additional verification steps and customized quality metrics specific to your requirements."
      },
      {
        id: 3,
        question: "Can Scale help with regulatory compliance for autonomous vehicle development?",
        answer: "Yes, Scale provides comprehensive documentation and traceability for data processing and model development that can support regulatory compliance efforts. Our platform maintains detailed audit trails, version control, and data lineage information. We also offer specialized workflows for safety validation that align with industry standards such as ISO 26262 and SOTIF (ISO/PAS 21448)."
      },
      {
        id: 4,
        question: "How does Scale's edge case discovery work for automotive applications?",
        answer: "Our edge case discovery combines automated detection algorithms with human review to identify rare but critical scenarios in your data. We use a combination of statistical outlier detection, model confidence analysis, and specialized heuristics for automotive-specific scenarios. Once identified, edge cases are cataloged, annotated with high precision, and can be used for targeted testing and model improvement."
      },
      {
        id: 5,
        question: "Can Scale integrate with our existing automotive development tools and workflows?",
        answer: "Absolutely. Scale's platform is designed to integrate seamlessly with common automotive development tools and workflows. We offer APIs and connectors for major simulation environments, data storage systems, ML frameworks, and CI/CD pipelines. Our team can work with you to develop custom integrations for proprietary tools and ensure a smooth workflow from data collection to model deployment."
      }
    ]
  };

  // Use Cases section content
  const useCasesContent = {
    title: "Automotive Applications",
    subtitle: "USE CASES",
    useCases: [
      {
        id: "uc1",
        title: "Autonomous Driving",
        description: "Develop and validate full self-driving systems with comprehensive data annotation, testing, and validation frameworks.",
        image: "/images/products/usecase-autonomous-driving.jpg",
        bullets: [
          "Multi-sensor perception systems",
          "Behavior prediction and planning",
          "Safety validation and verification",
          "Edge case handling and testing"
        ]
      },
      {
        id: "uc2",
        title: "Advanced Driver Assistance",
        description: "Build reliable ADAS features that enhance safety and convenience with precise object detection and scene understanding.",
        image: "/images/products/usecase-adas.jpg",
        bullets: [
          "Lane departure warning",
          "Adaptive cruise control",
          "Automated emergency braking",
          "Parking assistance systems"
        ]
      },
      {
        id: "uc3",
        title: "HD Mapping",
        description: "Create and maintain high-definition maps with centimeter-level accuracy for autonomous navigation and localization.",
        image: "/images/products/usecase-hd-mapping.jpg",
        bullets: [
          "Lane-level mapping",
          "Traffic sign and signal detection",
          "Road geometry and topology",
          "Map verification and updates"
        ]
      }
    ]
  };

  // Related Products section content
  const relatedProductsContent = {
    title: "Related Solutions",
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
        description: "Discover how Scale's enterprise solutions can accelerate your AI initiatives.",
        image: "/images/products/enterprise-card.jpg",
        path: "/products/for-enterprise",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      }
    ]
  };

  // CTA section content
  const ctaContent = {
    title: "Ready to Accelerate Your Automotive AI?",
    description: "Get started with Scale's automotive solutions today and bring safer, more reliable autonomous systems to market faster.",
    primaryButtonText: "Request Consultation",
    secondaryButtonText: "Contact",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/contact",
    backgroundImage: "/images/products/automotive-cta-bg.jpg"
  };

  return (
    <main>
      {/* Hero section with carousel */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left column: Text content */}
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-sm md:text-base font-semibold text-orange-500 uppercase tracking-wider">
                {heroContent.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                  {heroContent.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                {heroContent.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={heroContent.primaryButtonLink}
                  className="px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors"
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

      <ProductFAQ {...faqContent} />
      <ProductRelated {...relatedProductsContent} />
      <ProductCTA {...ctaContent} />
    </main>
  );
}