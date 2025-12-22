import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

export default function ProofSection({ testimonialData }) {
  const caseStudies = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      industry: "SaaS Platform",
      title: "34% Conversion Increase",
      description: "Rebuilt platform using Next.js, reducing load times from 2s to 0.4s",
      metrics: ["0.4s load time", "34% conversion boost", "99.97% uptime"],
      tech: ["Next.js", "PostgreSQL", "Redis"],
      quote: "We went from 2-second load times to 0.4 seconds, increasing our trial-to-paid conversion by 34%.",
      client: "Michael Chen, CTO",
      company: "DataFlow Analytics"
    },
    {
      icon: <Users className="w-8 h-8" />,
      industry: "B2B Services", 
      title: "340% ROI in 90 Days",
      description: "Lead generation site with AI qualification generated 127 qualified leads in first month",
      metrics: ["127 qualified leads", "340% ROI", "28% close rate"],
      tech: ["AI Lead Scoring", "CRM Integration", "Analytics"],
      quote: "ROI was 340% within 90 days—best investment we've made.",
      client: "Sarah Rodriguez, VP Marketing",
      company: "TechConsult Pro"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      industry: "E-commerce",
      title: "$2M+ Monthly Volume", 
      description: "Custom e-commerce platform handling high-volume transactions with AI-powered recommendations",
      metrics: ["$2M+ monthly", "28% cart recovery", "45% mobile conversion"],
      tech: ["Custom Platform", "AI Recommendations", "Payment Processing"],
      quote: "Cart abandonment dropped 28% and mobile conversions increased 45%.",
      client: "David Park, CEO",
      company: "IndustrialSupply Co"
    }
  ];


  return (
    <FullContainer className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            📈 Proven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Outcomes from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Real Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable results from B2B companies who've transformed their 
            digital presence and operations with our solutions.
          </p>
        </div>

        {/* Case Studies with Integrated Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 150}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {study.icon}
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">{study.industry}</div>
                  <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {study.description}
                </p>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm font-bold text-primary">{metric}</div>
                    </div>
                  ))}
                </div>
                
                {/* Integrated Testimonial Quote */}
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-gray-700 text-sm italic mb-3">
                    "{study.quote}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">
                        {study.client.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{study.client}</p>
                      <p className="text-xs text-gray-500">{study.company}</p>
                    </div>
                  </div>
                </div>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </FullContainer>
  );
}
