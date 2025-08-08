import React, { useState, useEffect } from "react";
import Container from "../common/Container";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const industriesData = {
  healthcare: {
    title: "Healthcare",
    description: "Transforming healthcare with innovative digital solutions",
    heroImage: "/images/industries/healthcare.jpg",
    intro: "In today's rapidly evolving healthcare landscape, digital transformation is essential for improving patient outcomes, streamlining operations, and enhancing the quality of care. Our tailored healthcare solutions are designed to meet the unique challenges faced by healthcare providers, payers, and life sciences organizations.",
    benefits: [
      "HIPAA-compliant software development",
      "Electronic Health Record (EHR) integration",
      "Telemedicine platforms",
      "Patient engagement portals",
      "Healthcare analytics solutions",
      "Medical device connectivity"
    ],
    caseStudy: {
      title: "Revolutionizing Patient Care with Custom EHR Integration",
      description: "We helped a regional healthcare provider streamline their patient management system, resulting in 35% reduction in administrative time and improved patient satisfaction scores.",
      image: "/images/case-studies/healthcare.jpg"
    }
  },
  ecommerce: {
    title: "E-commerce",
    description: "Building scalable, feature-rich online stores that convert",
    heroImage: "/images/industries/ecommerce.jpg",
    intro: "In the competitive world of online retail, having a powerful, user-friendly e-commerce platform is crucial for success. We develop custom e-commerce solutions that drive sales, enhance customer experience, and streamline operations for businesses of all sizes.",
    benefits: [
      "Custom e-commerce platform development",
      "Seamless payment gateway integration",
      "Inventory management systems",
      "Mobile commerce solutions",
      "Personalized shopping experiences",
      "Performance optimization for high-traffic stores"
    ],
    caseStudy: {
      title: "Scaling a Boutique Retailer to Enterprise Success",
      description: "Our team helped a niche fashion retailer scale their online presence, resulting in a 120% increase in online sales within the first year.",
      image: "/images/case-studies/ecommerce.jpg"
    }
  },
  hospitality: {
    title: "Hospitality",
    description: "Enhancing guest experiences through digital innovation",
    heroImage: "/images/industries/hospitality.jpg",
    intro: "The hospitality industry is all about creating memorable guest experiences. Our digital solutions help hotels, restaurants, and travel companies streamline operations, enhance customer engagement, and drive loyalty through personalized services.",
    benefits: [
      "Booking and reservation systems",
      "Property management solutions",
      "Guest experience platforms",
      "Restaurant management software",
      "Mobile check-in/check-out",
      "Customer loyalty programs"
    ],
    caseStudy: {
      title: "Digital Transformation for a Luxury Hotel Chain",
      description: "We implemented a comprehensive digital strategy for a luxury hotel brand, resulting in 28% increase in direct bookings and enhanced guest satisfaction.",
      image: "/images/case-studies/hospitality.jpg"
    }
  },
  automotive: {
    title: "Automotive",
    description: "Driving innovation in the automotive industry",
    heroImage: "/images/industries/automotive.jpg",
    intro: "The automotive industry is undergoing a significant transformation with the rise of connected vehicles, electric cars, and autonomous driving. Our solutions help automotive manufacturers, dealerships, and service providers navigate this changing landscape.",
    benefits: [
      "Dealer management systems",
      "Connected vehicle applications",
      "Service and maintenance platforms",
      "Inventory management solutions",
      "Customer relationship management",
      "Analytics and reporting dashboards"
    ],
    caseStudy: {
      title: "Modernizing Dealer Operations with Cloud Technology",
      description: "Our team helped a multi-location auto dealership group unify their operations with a cloud-based platform, improving inventory turnover by 22%.",
      image: "/images/case-studies/automotive.jpg"
    }
  },
  saas: {
    title: "SaaS",
    description: "Building scalable, reliable software-as-a-service solutions",
    heroImage: "/images/industries/saas.jpg",
    intro: "Software-as-a-Service has revolutionized how businesses access and utilize technology. We help SaaS startups and established companies build scalable, secure, and user-friendly platforms that deliver consistent value to their customers.",
    benefits: [
      "Multi-tenant architecture design",
      "Subscription management systems",
      "User onboarding experiences",
      "Analytics and reporting features",
      "API development and integration",
      "Scalable cloud infrastructure"
    ],
    caseStudy: {
      title: "From MVP to Enterprise-Grade SaaS Platform",
      description: "We partnered with a B2B SaaS startup to evolve their minimum viable product into a fully-featured platform serving 250+ enterprise clients.",
      image: "/images/case-studies/saas.jpg"
    }
  },
  realestate: {
    title: "Real Estate",
    description: "Transforming property management and real estate experiences",
    heroImage: "/images/industries/realestate.jpg",
    intro: "The real estate industry relies increasingly on digital tools to manage properties, facilitate transactions, and provide better experiences for buyers, sellers, and renters. Our solutions help real estate professionals streamline operations and stay competitive.",
    benefits: [
      "Property listing and management platforms",
      "Virtual tour applications",
      "CRM for real estate agents",
      "Tenant and lease management systems",
      "Real estate analytics tools",
      "Document management and e-signatures"
    ],
    caseStudy: {
      title: "Digitizing Property Management for Large Portfolio",
      description: "Our custom property management system helped a commercial real estate company reduce administrative costs by 40% while improving tenant satisfaction.",
      image: "/images/case-studies/realestate.jpg"
    }
  },
  gaming: {
    title: "Gaming",
    description: "Leveling up gaming experiences with cutting-edge technology",
    heroImage: "/images/industries/gaming.jpg",
    intro: "The gaming industry demands innovation, performance, and engaging user experiences. Our solutions help gaming companies create immersive environments, manage player communities, and optimize monetization strategies.",
    benefits: [
      "Game development and optimization",
      "Player analytics platforms",
      "Community management tools",
      "In-game purchase systems",
      "Cross-platform experiences",
      "Game server infrastructure"
    ],
    caseStudy: {
      title: "Building a Cross-Platform Gaming Community",
      description: "We developed a cross-platform community and matchmaking system for an indie game studio, growing their player base by 175% in six months.",
      image: "/images/case-studies/gaming.jpg"
    }
  },
  publicsector: {
    title: "Public Sector",
    description: "Modernizing government services through digital transformation",
    heroImage: "/images/industries/publicsector.jpg",
    intro: "Public sector organizations face unique challenges in delivering efficient, accessible services to citizens while managing complex regulatory requirements. Our solutions help government agencies at all levels modernize their digital infrastructure.",
    benefits: [
      "Citizen service portals",
      "Document management systems",
      "Compliance and reporting tools",
      "Legacy system modernization",
      "Secure data management",
      "Accessible public interfaces"
    ],
    caseStudy: {
      title: "Modernizing Municipal Services with Digital-First Approach",
      description: "Our team helped a mid-sized city transform their citizen services portal, reducing processing times by 65% and improving public satisfaction ratings.",
      image: "/images/case-studies/publicsector.jpg"
    }
  }
};

function IndustryDetails({ industry }) {
  const [industryData, setIndustryData] = useState(null);
  
  useEffect(() => {
    // Set default to healthcare if no industry is specified
    const industryKey = industry ? industry.toLowerCase().replace('-', '') : 'healthcare';
    setIndustryData(industriesData[industryKey] || industriesData.healthcare);
  }, [industry]);

  if (!industryData) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 -right-4 w-[50%] h-[50%] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 -left-32 w-[50%] h-[50%] animt bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
        
        <Container>
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              {industryData.title} Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {industryData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact-us" className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-colors duration-300 font-semibold">
                Get Started
              </Link>
              <Link href="#benefits" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl transition-colors duration-300 font-semibold">
                Learn More
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Introduction */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              Specialized {industryData.title} Solutions
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {industryData.intro}
            </p>
            <Link href="/contact-us" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-300">
              Talk to our {industryData.title} specialists
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="order-1 md:order-2 relative" data-aos="fade-left">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-xl"></div>
            <div className="aspect-video relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src={industryData.heroImage || "/images/placeholder.jpg"} 
                alt={`${industryData.title} Industry`}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Benefits */}
      <div className="bg-gray-950/50 py-16" id="benefits">
        <Container>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              How We Help {industryData.title} Businesses
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our specialized solutions address the unique challenges faced by businesses in the {industryData.title.toLowerCase()} industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryData.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Case Study */}
      <Container className="py-16">
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 rounded-xl p-8 md:p-12" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-primary font-semibold mb-2 block">CASE STUDY</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{industryData.caseStudy.title}</h3>
              <p className="text-gray-300 mb-6">{industryData.caseStudy.description}</p>
              <Link href="/our-work" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-300">
                View case study
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent rounded-xl blur-xl"></div>
              <div className="aspect-video relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image 
                  src={industryData.caseStudy.image || "/images/placeholder.jpg"} 
                  alt={industryData.caseStudy.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* CTA */}
      <div className="bg-gray-950 py-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              Ready to Transform Your {industryData.title} Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Partner with us to leverage cutting-edge technology solutions tailored specifically for the {industryData.title.toLowerCase()} industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact-us" className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-colors duration-300 font-semibold">
                Start Your Project
              </Link>
              <Link href="/about" className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl transition-colors duration-300 font-semibold">
                Learn About Our Process
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default IndustryDetails; 