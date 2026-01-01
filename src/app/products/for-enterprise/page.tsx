"use client";
import React from 'react';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductBenefits from '@/components/products/ProductBenefits';
import ProductComparison from '@/components/products/ProductComparison';
import ProductFAQ from '@/components/products/ProductFAQ';
import ProductUseCases from '@/components/products/ProductUseCases';
import ProductRelated from '@/components/products/ProductRelated';
import ProductCTA from '@/components/products/ProductCTA';
import ImageCarousel from '@/components/products/ImageCarousel';

export default function ForEnterprisePage() {
  // Hero section content
  const heroContent = {
    title: "For Enterprise",
    subtitle: "Enterprise AI Solutions",
    description: "Transform your business with Scale's enterprise-grade AI solutions designed to drive innovation, enhance productivity, and deliver measurable ROI across your organization. Our comprehensive platform addresses the unique challenges of enterprise AI adoption.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Schedule Demo",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/contact"
  };
  
  // Carousel images for hero section
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      alt: "Enterprise AI dashboard visualization",
    },
    {
      src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
      alt: "Modern corporate office with AI technology",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      alt: "Enterprise team collaborating with AI tools",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      alt: "Data visualization for business intelligence",
    }
  ];

  // Features section content with emoji icons
  const featuresContent = {
    title: "Enterprise-Grade Solutions",
    subtitle: "CAPABILITIES",
    description: "Our comprehensive suite of enterprise AI solutions is designed to address the complex challenges of large organizations.",
    features: [
      {
        id: 1,
        title: "Scalable Infrastructure",
        description: "Deploy AI solutions that scale seamlessly with your business needs, from departmental pilots to organization-wide implementations.",
        icon: "🖥️"
      },
      {
        id: 2,
        title: "Enterprise Security",
        description: "Protect sensitive data with our enterprise-grade security features, including encryption, access controls, and compliance certifications.",
        icon: "🛡️"
      },
      {
        id: 3,
        title: "Integration Capabilities",
        description: "Connect seamlessly with your existing enterprise systems, including ERP, CRM, and data warehouses through our robust APIs and connectors.",
        icon: "🔗"
      },
      {
        id: 4,
        title: "Governance Framework",
        description: "Maintain control and visibility with our comprehensive AI governance framework, ensuring responsible and transparent AI deployment.",
        icon: "✅"
      }
    ]
  };

  // Benefits section content with emoji icons
  const benefitsContent = {
    title: "Enterprise Benefits",
    subtitle: "BUSINESS IMPACT",
    description: "Discover how Scale's enterprise solutions can transform your business operations and drive measurable results.",
    benefits: [
      {
        id: 1,
        title: "Operational Efficiency",
        description: "Streamline processes and reduce operational costs through intelligent automation and workflow optimization.",
        icon: "⚙️"
      },
      {
        id: 2,
        title: "Data-Driven Decisions",
        description: "Make informed strategic decisions based on comprehensive data analysis and predictive insights.",
        icon: "📊"
      },
      {
        id: 3,
        title: "Innovation Acceleration",
        description: "Accelerate innovation cycles and bring new products and services to market faster with AI-powered development.",
        icon: "⚡"
      },
      {
        id: 4,
        title: "Customer Experience",
        description: "Enhance customer satisfaction and loyalty through personalized experiences and proactive service.",
        icon: "👥"
      }
    ]
  };

  // Use cases section content
  const useCasesContent = {
    title: "Enterprise Use Cases",
    subtitle: "APPLICATIONS",
    description: "Explore how our AI solutions are being applied across various enterprise domains.",
    useCases: [
      {
        id: "usecase1",
        title: "Intelligent Document Processing",
        description: "Automate document processing and data extraction to streamline administrative workflows and reduce manual effort.",
        image: "/images/products/usecase-document-processing.jpg",
        bullets: [
          "Automate document processing and data extraction",
          "Streamline administrative workflows",
          "Reduce manual effort and increase productivity",
          "Improve data accuracy and compliance"
        ]
      },
      {
        id: "usecase2",
        title: "Enterprise AI Integration",
        description: "Seamlessly integrate AI capabilities into your existing enterprise systems and workflows.",
        image: "/images/products/usecase-enterprise-integration.jpg",
        bullets: [
          "Seamless integration with existing enterprise systems",
          "Custom API development for specific business needs",
          "Secure data handling and compliance with regulations",
          "Scalable architecture for growing enterprise needs"
        ]
      },
      {
        id: "usecase3",
        title: "Supply Chain Optimization",
        description: "Enhance supply chain visibility, predict disruptions, and optimize inventory management with AI-powered analytics.",
        image: "/images/products/usecase-supply-chain.jpg",
        bullets: [
          "Enhance supply chain visibility and predictability",
          "Predict and mitigate potential disruptions",
          "Optimize inventory management and reduce costs",
          "Improve supplier relationships and collaboration"
        ]
      },
      {
        id: "usecase4",
        title: "Customer Experience Enhancement",
        description: "Elevate customer experiences with personalized, AI-driven interactions and insights.",
        image: "/images/products/usecase-customer-experience.jpg",
        bullets: [
          "Personalized customer interactions and recommendations",
          "Sentiment analysis and customer feedback processing",
          "Predictive customer service and issue resolution",
          "Omnichannel customer engagement optimization"
        ]
      }
    ]
  };

  // Comparison section content
  const comparisonContent = {
    title: "Why Choose Scale for Enterprise",
    subtitle: "COMPETITIVE ADVANTAGE",
    description: "See how Scale's enterprise solutions compare to alternatives.",
    comparisonTable: {
      headers: ["Features", "Scale", "Competitors"],
      rows: [
        ["Enterprise Integration", "Seamless with existing systems", "Often requires custom work"],
        ["Scalability", "From department to enterprise-wide", "Limited scaling capabilities"],
        ["Security & Compliance", "Enterprise-grade, multi-certification", "Variable security standards"],
        ["Implementation Time", "Rapid deployment methodology", "Extended implementation cycles"],
        ["Total Cost of Ownership", "Predictable, transparent pricing", "Hidden costs and overruns"],
        ["Support & Services", "Dedicated enterprise success team", "Tiered support with limitations"]
      ]
    },
    features: [
      {
        name: "Enterprise Integration",
        basic: "Limited",
        pro: "Partial",
        enterprise: "Full"
      },
      {
        name: "Security & Compliance",
        basic: "Standard",
        pro: "Enhanced",
        enterprise: "Enterprise-grade"
      },
      {
        name: "24/7 Support",
        basic: false,
        pro: true,
        enterprise: true
      }
    ]
  };

  // FAQ section content
  const faqContent = {
    title: "Frequently Asked Questions",
    subtitle: "FAQs",
    faqs: [
      {
        id: 1,
        question: "How does Scale ensure enterprise-grade security and compliance?",
        answer: "Scale maintains the highest security standards with SOC 2, ISO 27001, GDPR, HIPAA, and other relevant compliance certifications. Our infrastructure includes end-to-end encryption, role-based access controls, audit trails, and regular security assessments. We also provide data residency options to meet regulatory requirements in different regions."
      },
      {
        id: 2,
        question: "Can Scale's solutions integrate with our existing enterprise systems?",
        answer: "Yes, our solutions are designed to integrate seamlessly with existing enterprise IT infrastructure, including ERP systems, CRM platforms, data warehouses, and legacy applications. We provide robust APIs, pre-built connectors for common enterprise systems, and custom integration services to ensure smooth implementation without disrupting current operations."
      },
      {
        id: 3,
        question: "What kind of support and services does Scale provide for enterprise customers?",
        answer: "Enterprise customers receive dedicated support from our Enterprise Success team, including a named account manager, solution architects, and technical support specialists. We offer 24/7 support, regular business reviews, priority issue resolution, and access to our product roadmap and early feature releases. Our professional services team can also provide implementation assistance, custom development, and training."
      },
      {
        id: 4,
        question: "How long does it typically take to implement Scale's enterprise solutions?",
        answer: "Implementation timelines vary based on project scope and complexity, but our modular approach allows for phased implementation with initial capabilities deployed within weeks rather than months. Our rapid deployment methodology focuses on delivering quick wins while building toward comprehensive solutions. We work closely with your teams to develop realistic timelines that align with your business objectives."
      },
      {
        id: 5,
        question: "How does Scale help ensure AI governance and responsible use?",
        answer: "Our enterprise solutions include a comprehensive governance framework that provides visibility, control, and accountability throughout the AI lifecycle. This includes model documentation, explainability tools, bias detection and mitigation, version control, approval workflows, and detailed audit trails. We also provide guidance on developing internal AI policies and best practices for responsible AI deployment."
      }
    ]
  };

  // Related products section content
  const relatedProductsContent = {
    title: "Related Products",
    subtitle: "EXPLORE MORE",
    description: "Discover other Scale products that complement our enterprise solutions.",
    products: [
      {
        id: 1,
        title: "Scale Data Engine",
        description: "Access high-quality, diverse datasets to train your enterprise AI models.",
        image: "/images/products/data-engine-card.jpg",
        path: "/products/scale-data-engine",
        gradient: "linear-gradient(135deg, #6a5af9 0%, #f857a6 100%)"
      }
    ]
  };

  // CTA section content
  const ctaContent = {
    title: "Ready to Transform Your Enterprise with AI?",
    description: "Get started with Scale's enterprise solutions and drive measurable business impact today.",
    primaryButtonText: "Request Demo",
    secondaryButtonText: "Contact Sales",
    primaryButtonLink: "/contact",
    secondaryButtonLink: "/contact",
    backgroundImage: "/images/products/enterprise-cta-bg.jpg"
  };

  return (
    <main>
      {/* Hero section with carousel */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left column: Text content */}
            <div className="w-full md:w-1/2 space-y-6">
              <p className="text-sm md:text-base font-semibold text-teal-500 uppercase tracking-wider">
                {heroContent.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">
                  {heroContent.title}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                {heroContent.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={heroContent.primaryButtonLink}
                  className="px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors"
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
      <ProductFAQ {...faqContent} />
      <ProductRelated {...relatedProductsContent} />
      <ProductCTA {...ctaContent} />
    </main>
  );
}