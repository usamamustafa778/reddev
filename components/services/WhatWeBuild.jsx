import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Brain, MessageSquare, Users, Zap, Code, Smartphone } from "lucide-react";

export default function WhatWeBuild() {
  const solutions = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "AI Customer Support Agent",
      description: "Deflect 70% of tickets + reduce response time from hours to seconds",
      features: ["24/7 availability", "Instant responses", "Human handoff"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI Lead Qualification / SDR Agent", 
      description: "Book 3x more qualified meetings while your team focuses on closing",
      features: ["Lead scoring", "Meeting booking", "CRM sync"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Internal Knowledge Assistant",
      description: "Cut research time by 80% with instant access to company knowledge",
      features: ["Secure access", "Citations", "Team integration"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Workflow Automation",
      description: "Eliminate manual tasks + reduce operational costs by 40-60%",
      features: ["Process automation", "Data sync", "Custom triggers"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Websites & Web Apps",
      description: "Increase conversions 25-40% with performance-optimized applications",
      features: ["Next.js/React", "Performance optimized", "SEO ready"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile (when required)",
      description: "Native iOS & Android apps for enterprise workflows and AI integration",
      features: ["Enterprise focus", "AI-ready", "Custom workflows"]
    }
  ];

  return (
    <FullContainer className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold mb-6 border border-purple-200">
            🚀 What We Build
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Complete{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600">
              Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From AI agents that handle customer support to high-performance web applications, 
            we build the technology that powers modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {solution.description}
              </p>
              <div className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a 
              href="/ai-solutions" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              See AI Solutions
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/contact-us" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-slate-300 hover:border-purple-400 text-slate-900 rounded-xl hover:bg-slate-50 transition-all duration-300 font-semibold group shadow-sm"
            >
              Get In Touch
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 rounded-full text-sm text-slate-700 font-medium border border-slate-200">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Projects start at $15k
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
