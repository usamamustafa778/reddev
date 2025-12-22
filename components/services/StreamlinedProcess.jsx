import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Search, Code, Rocket, TrendingUp } from "lucide-react";

export default function StreamlinedProcess() {
  const processSteps = [
    {
      step: 1,
      icon: <Search className="w-8 h-8" />,
      title: "Discovery",
      duration: "5–10 days",
      description: "Data audit + success metrics definition. We analyze your business, existing systems, and design measurable AI solutions.",
      deliverables: ["Technical requirements", "Success metrics framework", "Risk assessment"]
    },
    {
      step: 2,
      icon: <Code className="w-8 h-8" />,
      title: "Build",
      duration: "Sprints + weekly demos",
      description: "Evaluation + guardrails implementation. Agile development with AI testing, safety measures, and iterative improvements.",
      deliverables: ["Weekly progress demos", "AI evaluation metrics", "Safety guardrails"]
    },
    {
      step: 3,
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch",
      duration: "Performance baseline",
      description: "Monitoring + logging setup. We don't launch until performance, AI safety, and monitoring baselines are met.",
      deliverables: ["Performance monitoring", "AI interaction logging", "Go-live support"]
    },
    {
      step: 4,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Optimize",
      duration: "90-day window",
      description: "Iteration based on metrics. Post-launch optimization using real user data, AI performance, and business metrics.",
      deliverables: ["AI performance analysis", "User behavior insights", "Continuous improvements"]
    }
  ];

  return (
    <FullContainer className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            🚀 How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Proven{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Development Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From discovery to optimization, we follow a proven process that ensures 
            your project delivers measurable results.
          </p>
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Most projects start with a 5–10 day Discovery Sprint
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Process Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative text-center"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 150}
              >
                {/* Step Circle */}
                <div className="relative z-10 w-20 h-20 bg-primary rounded-xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-sm z-20">
                  {step.step}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <div className="text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1 inline-block">
                    {step.duration}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Deliverables */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-1">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="text-xs text-gray-500 flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
