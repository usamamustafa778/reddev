import Image from "next/image";
import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Form from "../common/Form";
import { X } from "lucide-react";
import Link from "next/link";
import BgAnimation from "../BgAnimation";

export default function Hero({ heading2, heading1, des, img }) {
  const [showForm, setShowForm] = useState(false);

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <FullContainer className="relative bg-[linear-gradient(125deg,#0a0505,#1a0808_40%,#2a0a0a_70%,#0a0505)] text-white overflow-hidden">
      {/* Futuristic Background Elements */}
      <BgAnimation />

      <Container className="relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-24 gap-24">
          <div className="flex-1 space-y-10">
            {/* Status Badge - changed to red */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-white/80">
                Available for New Projects
              </span>
            </div>

            {/* Main Heading - changed gradient to red */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] relative">
              {heading1}{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                  {heading2}
                </span>
                <span className="absolute inset-0 animate-[glitch_3s_infinite]"></span>
              </span>{" "}
              Solutions
            </h1>

            {/* Description with modern font */}
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl font-light">
              {des}
            </p>

            {/* Enhanced CTA Buttons - changed to red */}
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => setShowForm(true)}
                className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl text-lg font-medium transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              </button>

              <Link
                href="/portfolio"
                className="group px-8 py-4 text-lg border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </div>

            {/* Stats with enhanced styling */}
            <div className="grid grid-cols-3 gap-8 pt-5">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2 relative group">
                  <div className="text-3xl font-bold text-white relative">
                    {stat.number}
                    <div className="absolute -inset-2 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image Section - changed gradient to red */}
          <div className="relative rounded-2xl h-full overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent"></div>
            <Image
              src={img}
              alt="Digital Solutions"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0505]/50 to-transparent"></div>
          </div>
        </div>
      </Container>

      {/* Form Modal - changed to red */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-gradient-to-br from-gray-900 to-red-900/30 rounded-2xl border border-white/10">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
            >
              <X className="w-5 h-5" />
            </button>
            <Form form={showForm} setform={setShowForm} />
          </div>
        </div>
      )}

      {/* Updated glow animation to red */}
      <style jsx global>{`
        @keyframes dataStream {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 120px));
            opacity: 0;
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
            box-shadow: 0 0 10px #ff2222;
          }
        }

        @keyframes glitch {
          0% {
            clip-path: inset(71% 0 10% 0);
          }
          5% {
            clip-path: inset(24% 0 61% 0);
          }
          10% {
            clip-path: inset(77% 0 4% 0);
          }
          15% {
            clip-path: inset(100% 0 1% 0);
          }
          20% {
            clip-path: inset(36% 0 53% 0);
          }
          25% {
            clip-path: inset(3% 0 46% 0);
          }
          30% {
            clip-path: inset(82% 0 2% 0);
          }
          35% {
            clip-path: inset(88% 0 1% 0);
          }
          40% {
            clip-path: inset(43% 0 56% 0);
          }
          45% {
            clip-path: inset(59% 0 38% 0);
          }
          50% {
            clip-path: inset(0% 0 99% 0);
          }
          55% {
            clip-path: inset(95% 0 4% 0);
          }
          60% {
            clip-path: inset(87% 0 5% 0);
          }
          65% {
            clip-path: inset(84% 0 15% 0);
          }
          70% {
            clip-path: inset(96% 0 3% 0);
          }
          75% {
            clip-path: inset(100% 0 0% 0);
          }
          80% {
            clip-path: inset(15% 0 79% 0);
          }
          85% {
            clip-path: inset(69% 0 9% 0);
          }
          90% {
            clip-path: inset(23% 0 75% 0);
          }
          95% {
            clip-path: inset(46% 0 50% 0);
          }
          100% {
            clip-path: inset(71% 0 10% 0);
          }
        }
      `}</style>
    </FullContainer>
  );
}
