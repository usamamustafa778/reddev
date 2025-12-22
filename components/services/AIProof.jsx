import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Shield, Eye, Users, BarChart3, Lock, Database } from "lucide-react";

export default function AIProof() {
  const safetyFeatures = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "RAG Over Approved Sources",
      description: "AI trained only on your docs, CRM, and helpdesk data—no external web scraping"
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
      title: "Logging & Continuous Improvement",
      description: "All interactions logged with evaluation metrics for ongoing optimization"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security Options",
      description: "Encryption, access controls, data retention policies, and audit trails"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparent AI Responses",
      description: "Citations and confidence scores so users know when AI is uncertain"
    }
  ];

  const techStack = [
    { name: "OpenAI", category: "LLM Provider" },
    { name: "Anthropic", category: "LLM Provider" },
    { name: "Google Gemini", category: "LLM Provider" },
    { name: "LangChain", category: "AI Framework" },
    { name: "pgvector", category: "Vector Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Caching" },
    { name: "Next.js", category: "Frontend" }
  ];

  return (
    <FullContainer className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            🛡️ AI Safety & Trust
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              AI Safely
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade AI systems with built-in safety measures, 
            transparent operations, and human oversight.
          </p>
        </div>

        {/* Safety Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {safetyFeatures.map((feature, index) => (
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

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our AI Technology Stack
            </h3>
            <p className="text-gray-600">
              Production-ready tools and frameworks we use to build reliable AI systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="font-semibold text-gray-900 mb-1">
                  {tech.name}
                </div>
                <div className="text-sm text-gray-500">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
