import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Shield, Eye, Users, BarChart3, Lock, Database } from "lucide-react";

export default function TrustSection() {
  const trustFeatures = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "RAG Over Approved Sources",
      description: "Answers from your approved sources (RAG) — no public web scraping by default"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Guardrails & Refusal Handling", 
      description: "Built-in safety measures prevent inappropriate responses and off-topic queries"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Human-in-the-Loop Escalation",
      description: "Seamless handoff to human agents when AI confidence is low"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Logging & Evaluation",
      description: "All interactions logged with evaluation metrics for ongoing optimization"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Prompt Injection Protection",
      description: "Advanced filtering prevents data exfiltration and malicious prompt manipulation"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparent Responses",
      description: "Citations and confidence scores so users know when AI is uncertain"
    }
  ];

  const techStack = [
    "OpenAI", "Anthropic", "Google Gemini", "LangChain", 
    "pgvector", "PostgreSQL", "Redis", "Next.js"
  ];

  return (
    <FullContainer className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            🛡️ Trust, Security & AI Governance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Grade{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              AI Safety
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build AI systems with built-in safety measures, transparent operations, 
            and enterprise security from day one.
          </p>
        </div>

        {/* Trust Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Strip */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Production-Ready Technology Stack
            </h3>
            <p className="text-gray-600 text-sm">
              Enterprise-grade tools we use to build reliable AI systems
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-50 rounded-lg text-gray-700 font-medium text-sm hover:bg-gray-100 transition-colors duration-300"
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/security" 
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
            >
              See security details
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
