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

export default function ForGovernmentPage() {
  // Hero section content
  const heroContent = {
    title: "For Government",
    subtitle: "AI for Public Service",
    description: "Modernize government operations and enhance public services with Scale's secure, compliant, and purpose-built AI solutions for the public sector. From document processing to decision support, we help agencies serve citizens more effectively.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Schedule Demo",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/demo"
  };
  
  // Carousel images for government solutions
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2069&auto=format&fit=crop",
      alt: "Government building with modern architecture",
      
    },
    {
      src: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?q=80&w=1969&auto=format&fit=crop",
      alt: "Secure data center for government operations",
      
    },
    {
      src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      alt: "Digital government services interface",
      
    },
    {
      src: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=2070&auto=format&fit=crop",
      alt: "Government data analytics dashboard",
      
    }
  ];

  // Features section content
  const featuresContent = {
    title: "Government AI Solutions",
    subtitle: "PUBLIC SECTOR",
    description: "Scale's government solutions are designed to address the unique challenges and requirements of public sector organizations.",
    features: [
      {
        id: 1,
        title: "Document Intelligence",
        description: "Automate processing of forms, applications, and documents with high accuracy while maintaining compliance with privacy regulations.",
        icon: "📄"
      },
      {
        id: 2,
        title: "Secure Infrastructure",
        description: "Deploy AI solutions in FedRAMP-compliant environments with the highest security standards for sensitive government data.",
        icon: "🔒"
      },
      {
        id: 3,
        title: "Decision Support",
        description: "Enhance decision-making with AI-powered analytics and insights while maintaining human oversight and accountability.",
        icon: "⚖️"
      },
      
    ]
  };

  // Benefits section content
  const benefitsContent = {
    title: "Why Choose Scale for Government",
    subtitle: "BENEFITS",
    description: "Scale's government AI solutions help agencies modernize operations while maintaining the highest standards of security, compliance, and transparency.",
    benefits: [
      
      {
        id: 2,
        icon: "📊",
        title: "Cost Efficiency",
        description: "Reduce operational costs and maximize the impact of taxpayer dollars with AI-powered automation."
      },
     
      {
        id: 4,
        icon: "🔍",
        title: "Enhanced Accuracy",
        description: "Improve decision quality and reduce errors with AI-assisted workflows and verification."
      },
      
      
    ],
    stats: [
      { value: "70%", label: "Reduction in processing time" },
      { value: "45%", label: "Cost savings on operations" },
      { value: "90%", label: "Citizen satisfaction improvement" }
    ]
  };
    
  

  // Testimonials section content
  const testimonialsContent = {
    title: "Trusted by Government Leaders",
    subtitle: "TESTIMONIALS",
    testimonials: [
      {
        id: 1,
        name: "Jennifer Martinez",
        role: "Chief Digital Officer",
        company: "Federal Agency",
        content: "Scale's document intelligence solution has transformed how we process applications. What used to take weeks now takes hours, allowing us to serve citizens more effectively.",
        avatar: "/images/testimonials/avatar19.jpg",
        logo: "/images/testimonials/logo19.png",
        rating: 5
      },
      {
        id: 2,
        name: "William Thompson",
        role: "IT Modernization Director",
        company: "State Government",
        content: "The security and compliance features of Scale's platform gave us confidence to move forward with AI adoption. Their understanding of government requirements made implementation smooth.",
        avatar: "/images/testimonials/avatar20.jpg",
        logo: "/images/testimonials/logo20.png",
        rating: 5
      },
      {
        id: 3,
        name: "Dr. Sarah Johnson",
        role: "Data Science Lead",
        company: "Municipal Analytics Office",
        content: "Scale's solutions have helped us make data-driven decisions that directly improve services for our residents. The combination of AI capabilities and ease of use has been invaluable.",
        avatar: "/images/testimonials/avatar21.jpg",
        logo: "/images/testimonials/logo21.png",
        rating: 4
      }
    ]
  };

  // Comparison section content
  const comparisonContent = {
    title: "Choose Your Solution",
    subtitle: "OFFERINGS",
    features: [
      {
        name: "Security Clearance",
        basic: "Public data only",
        pro: "Sensitive but unclassified",
        enterprise: "Classified"
      },
      {
        name: "Compliance",
        basic: "FedRAMP Moderate",
        pro: "FedRAMP High",
        enterprise: "FedRAMP High + CMMC"
      },
      {
        name: "Document Processing",
        basic: "Up to 10K pages/month",
        pro: "Up to 100K pages/month",
        enterprise: "Unlimited"
      },
      {
        name: "Deployment Options",
        basic: "Cloud only",
        pro: "Cloud or on-premise",
        enterprise: "Any environment"
      },
      {
        name: "Custom Models",
        basic: false,
        pro: "Limited",
        enterprise: "Full customization"
      },
      {
        name: "Integration Support",
        basic: "Basic APIs",
        pro: "Standard integrations",
        enterprise: "Custom integrations"
      },
      {
        name: "Training & Support",
        basic: "Documentation",
        pro: "Training sessions",
        enterprise: "Dedicated support team"
      },
      {
        name: "SLA",
        basic: "Standard",
        pro: "Enhanced",
        enterprise: "Mission-critical"
      },
      {
        name: "Procurement Vehicle",
        basic: "Credit card",
        pro: "Standard contract",
        enterprise: "Multiple vehicles"
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
        question: "What security certifications does Scale have for government work?",
        answer: "Scale maintains a comprehensive set of security certifications relevant to government work including FedRAMP High authorization, FISMA compliance, CMMC Level 3, NIST 800-53 controls, and more. Our platform is designed to handle sensitive government data with appropriate controls for confidentiality, integrity, and availability. We can provide detailed documentation on our security posture and compliance status upon request."
      },
      {
        id: 2,
        question: "How does Scale handle PII and sensitive government data?",
        answer: "Scale implements strict data handling protocols for PII and sensitive government data, including encryption at rest and in transit, access controls, data minimization practices, and secure deletion procedures. Our platform is designed with privacy by design principles and can be configured to meet specific agency requirements for data handling. We also provide audit logs and documentation to demonstrate compliance with relevant privacy regulations."
      },
      {
        id: 3,
        question: "Can Scale's solutions be deployed in government cloud environments?",
        answer: "Yes, Scale's solutions can be deployed in various government cloud environments including AWS GovCloud, Azure Government, and Google Cloud for Government. We also support on-premises deployments for agencies with specific requirements. Our team has experience navigating the unique challenges of government IT environments and can work with your technical teams to ensure successful implementation."
      },
      {
        id: 4,
        question: "What procurement vehicles are available for purchasing Scale's solutions?",
        answer: "Scale offers multiple procurement options for government agencies including GSA Schedule, NASA SEWP, CIO-SP3, and various state and local contract vehicles. We also work with several system integrators who hold additional contract vehicles. Our government solutions team can help identify the most appropriate and efficient procurement path for your agency."
      },
      {
        id: 5,
        question: "How does Scale ensure AI transparency and explainability for government use cases?",
        answer: "Scale's government solutions include built-in explainability features that provide insight into how AI systems reach conclusions or recommendations. We implement appropriate human review workflows, confidence scoring, and audit trails to ensure transparency and accountability. Our team can also work with your agency to develop custom explainability frameworks that align with your specific governance requirements and use cases."
      }
    ]
  };

  // Use Cases section content
  const useCasesContent = {
    title: "Government Applications",
    subtitle: "USE CASES",
    useCases: [
      {
        id: "uc1",
        title: "Benefits Processing",
        description: "Streamline the processing of benefits applications and claims with intelligent document processing and eligibility determination.",
        image: "/images/products/usecase-benefits.jpg",
        bullets: [
          "Automated form extraction and validation",
          "Eligibility verification and fraud detection",
          "Case prioritization and routing",
          "Status tracking and notifications"
        ]
      },
      {
        id: "uc2",
        title: "Regulatory Compliance",
        description: "Enhance regulatory oversight and compliance monitoring with AI-powered document analysis and risk assessment.",
        image: "/images/products/usecase-compliance.jpg",
        bullets: [
          "Automated document review and classification",
          "Anomaly and violation detection",
          "Risk-based inspection prioritization",
          "Compliance reporting and analytics"
        ]
      },
      {
        id: "uc3",
        title: "Citizen Engagement",
        description: "Improve citizen services with intelligent virtual assistants, personalized recommendations, and omnichannel support.",
        image: "/images/products/usecase-engagement.jpg",
        bullets: [
          "24/7 virtual assistants and chatbots",
          "Intelligent search and knowledge bases",
          "Personalized service recommendations",
          "Multilingual support and accessibility"
        ]
      }
    ]
  };

  // Related Products section content
  

  // CTA section content
  const ctaContent = {
    title: "Ready to Transform Government Services?",
    description: "Get started with Scale's government solutions today and modernize your agency's operations with secure, compliant AI technology.",
    primaryButtonText: "Request Consultation",
    secondaryButtonText: "Download Case Study",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/contact",
    backgroundImage: "/images/products/government-cta-bg.jpg"
  };

  return (
    <main>
      {/* Hero section with carousel */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left column: Text content */}
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-sm md:text-base font-semibold text-blue-500 uppercase tracking-wider">
                {heroContent.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  {heroContent.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                {heroContent.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={heroContent.primaryButtonLink}
                  className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
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
      
      <ProductCTA {...ctaContent} />
    </main>
  );
}
