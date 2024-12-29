import React from "react";
import FullContainer from "./common/FullContainer";
import BgAnimation from "./BgAnimation";
import Container from "./common/Container";
import { ArrowRight } from "lucide-react";

export default function WorkHero() {
  return (
    <FullContainer className="relative bg-[linear-gradient(125deg,#0a0505,#1a0808_40%,#2a0a0a_70%,#0a0505)] text-white overflow-hidden">
      <BgAnimation />

      <Container className="py-24 space-y-8 max-w-screen-md text-center">
        <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1]">
          Case Studies{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
              Our Work
            </span>
            <span className="absolute inset-0 animate-[glitch_3s_infinite]"></span>
          </span>{" "}
          Solutions
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-300 leading-relaxed">
          Following clear and consistent procedures for software development
          services, we create custom web-based, mobile, SaaS, and other
          solutions that fit users criteria and improve company processes and
          market presence.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <button className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] active:scale-95">
            Talk to an Expert
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </Container>
    </FullContainer>
  );
}
