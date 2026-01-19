import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Award, Clock, Shield, Users, Zap, Target } from "lucide-react";

export default function WhyUs() {
  const advantages = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality-First Approach",
      description: "We limit capacity to 2-3 new builds per month, ensuring dedicated attention and exceptional results."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "95%+ on-time delivery with measurable outcomes: 34% conversion increases, 340% ROI improvements."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC2-aligned practices, security & privacy best practices, and security-first architecture from day one."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Strategic Partnership",
      description: "Dedicated account management, regular progress updates, and ongoing strategic consultation."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI Expertise",
      description: "Production-ready AI systems with human oversight, safety guardrails, and measurable KPIs."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Outcome-Focused",
      description: "We measure what matters: pipeline growth, cost reduction, automation efficiency, and user satisfaction."
    }
  ];

  return (
    <FullContainer className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold mb-6 border border-purple-200">
            ⭐ Why RedDev
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why B2B Companies{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600">
              Choose Us
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're not just developers—we're strategic partners focused on driving 
            measurable business outcomes through technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {advantage.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </FullContainer>
  );
}
