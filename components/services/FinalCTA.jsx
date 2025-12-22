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
    <FullContainer className="py-24 bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-950 text-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-8">
            🎯 Ready to Start?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
              Next Growth Engine
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            We take 2-3 new builds per month to protect quality and ensure dedicated attention. 
            Share your project details and we'll respond within 48 hours.
          </p>
        </div>

        {/* Capacity Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {capacityStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-white/90 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-white/60">
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
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 group"
            >
              <span className="mr-3">Book Discovery Call</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/ai-solutions"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              View AI Solutions
            </a>
          </div>
          
          <div className="text-white/70 text-sm">
            <p>
              <strong className="text-white">Minimum engagement:</strong> $15,000 • 
              <strong className="text-white ml-2">Discovery Sprint:</strong> $2.5k–$7.5k (credited if we build)
            </p>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
