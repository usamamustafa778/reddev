import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Calendar, Users, CheckCircle, Clock, ArrowRight } from "lucide-react";

export default function FinalCTA() {

  const capacityStats = [
    {
      icon: <Users className="w-6 h-6" />,
      number: "2-3",
      label: "New Projects Monthly",
      description: "We limit capacity to ensure quality"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      number: "Limited",
      label: "Capacity Available",
      description: "Join the queue for next opening"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      number: "48hrs",
      label: "Response Time",
      description: "For qualified inquiries"
    }
  ];

  return (
    <FullContainer className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold mb-8 border border-purple-200">
            🎯 Ready to Start?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
            Let's Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600">
              Next Growth Engine
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            We take 2-3 new builds per month to protect quality and ensure dedicated attention. 
            Share your project details and we'll respond within 48 hours.
          </p>
        </div>

        {/* Capacity Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {capacityStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-purple-600 mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-slate-700 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-slate-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group transform hover:-translate-y-0.5"
            >
              <span className="mr-3">Get In Touch</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/ai-solutions"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 text-lg font-semibold rounded-xl hover:bg-slate-50 transition-all duration-300 border-2 border-slate-300 hover:border-purple-400 shadow-sm"
            >
              View AI Solutions
            </a>
          </div>
          
          <div className="text-slate-600 text-sm">
            <p>
              <strong className="text-slate-900">Minimum engagement:</strong> $15,000 • 
              <strong className="text-slate-900 ml-2">Discovery Sprint:</strong> $2.5k–$7.5k (credited if we build)
            </p>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
