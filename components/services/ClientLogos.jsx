import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function ClientLogos() {
  const clients = [
    {
      name: "FinTech",
      category: "Series A Startup",
      icon: "💳"
    },
    {
      name: "B2B SaaS",
      category: "Enterprise Platform",
      icon: "🚀"
    },
    {
      name: "E-commerce",
      category: "8-Figure Revenue",
      icon: "🛒"
    },
    {
      name: "Healthcare Tech",
      category: "HIPAA Compliant",
      icon: "🏥"
    },
    {
      name: "Manufacturing",
      category: "Supply Chain",
      icon: "⚙️"
    }
  ];

  return (
    <FullContainer className="py-8 bg-white border-t border-gray-100">
      <Container>
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Trusted by Growing Companies
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Our Clients Range from Funded Startups to Enterprise Leaders
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center mb-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group text-center"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {client.icon}
              </div>
              <div className="space-y-1">
                <p className="font-medium text-gray-900 text-sm">
                  {client.name}
                </p>
                <p className="text-xs text-gray-500">
                  {client.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Minimum project size: $15,000
          </div>
          <a 
            href="#testimonials" 
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
          >
            View case studies
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Container>
    </FullContainer>
  );
}
