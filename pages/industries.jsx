import React, { useState } from "react";
import Head from "next/head";
import FirstNavbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import IndustryDetails from "@/components/industries/IndustryDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import BgAnimation from "@/components/BgAnimation";

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Transforming healthcare with innovative digital solutions",
    icon: "/images/industries/healthcare-icon.svg"
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Building scalable, feature-rich online stores that convert",
    icon: "/images/industries/ecommerce-icon.svg"
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Enhancing guest experiences through digital innovation",
    icon: "/images/industries/hospitality-icon.svg"
  },
  {
    id: "automotive",
    title: "Automotive",
    description: "Driving innovation in the automotive industry",
    icon: "/images/industries/automotive-icon.svg"
  },
  {
    id: "saas",
    title: "SaaS",
    description: "Building scalable, reliable software-as-a-service solutions",
    icon: "/images/industries/saas-icon.svg"
  },
  {
    id: "realestate",
    title: "Real Estate",
    description: "Transforming property management and real estate experiences",
    icon: "/images/industries/realestate-icon.svg"
  },
  {
    id: "gaming",
    title: "Gaming",
    description: "Leveling up gaming experiences with cutting-edge technology",
    icon: "/images/industries/gaming-icon.svg"
  },
  {
    id: "publicsector",
    title: "Public Sector",
    description: "Modernizing government services through digital transformation",
    icon: "/images/industries/publicsector-icon.svg"
  }
];

export default function Industries() {
  const router = useRouter();
  const { industry } = router.query;
  
  // If an industry is specified in the URL, show details for that industry
  if (industry) {
    return (
      <>
        <Head>
          <title>{getIndustryTitle(industry)} Solutions | reddev</title>
          <meta
            name="description"
            content={`Professional ${industry} development services tailored for your business needs. Transform your digital presence today.`}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <FirstNavbar />
        <IndustryDetails industry={industry} />
        <Footer />
      </>
    );
  }

  // Otherwise show the industries overview page
  return (
    <>
      <Head>
        <title>Industry Solutions | reddev</title>
        <meta
          name="description"
          content="Tailored digital solutions for multiple industries including Healthcare, E-commerce, Hospitality, Automotive, SaaS, Real Estate, Gaming and Public Sector."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FirstNavbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-950 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
        <BgAnimation />
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 -right-4 w-[50%] h-[50%] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 -left-32 w-[50%] h-[50%] animt bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              Industry-Specific Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Tailored software solutions designed to address the unique challenges of your industry
            </p>
          </div>
        </Container>
      </div>

      {/* Industries Grid */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link 
                href={`/industries?industry=${industry.id}`}
                key={industry.id}
                className="bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6 h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  {/* Placeholder for industry icons */}
                  <span className="text-primary text-2xl">{industry.title.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-400 mb-6">{industry.description}</p>
                <div className="text-primary font-semibold flex items-center">
                  <span>Explore solutions</span>
                  <svg 
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-950 text-white py-16 md:py-24">
        <Container>
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              Why Choose reddev For Your Industry
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our deep expertise across multiple industries allows us to create solutions that address specific challenges unique to your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Expertise",
                description: "Our team has deep knowledge across multiple industries, ensuring solutions that address your specific needs."
              },
              {
                title: "Tailored Approach",
                description: "We don&apos;t believe in one-size-fits-all. Every solution is custom-built for your industry&apos;s unique requirements."
              },
              {
                title: "Regulatory Compliance",
                description: "We stay up-to-date with industry regulations to ensure all solutions meet compliance standards."
              },
              {
                title: "Scalable Solutions",
                description: "Our industry solutions grow with your business, adapting to changing needs and market conditions."
              },
              {
                title: "Integration Capabilities",
                description: "Seamless integration with your existing systems and industry-specific software."
              },
              {
                title: "Continuous Innovation",
                description: "We constantly research industry trends to bring innovative solutions to our clients."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-950 text-white py-16 md:py-24">
        <Container>
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 rounded-xl p-8 md:p-12" data-aos="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
                Ready to discuss your industry-specific needs?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact our team today to explore how our tailored solutions can address your industry&apos;s unique challenges.
              </p>
              <Link 
                href="/contact-us" 
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-colors duration-300 font-semibold inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

// Helper function to get industry title based on URL param
function getIndustryTitle(industryParam) {
  const industry = industries.find(i => i.id === industryParam);
  return industry ? industry.title : 'Industry';
} 