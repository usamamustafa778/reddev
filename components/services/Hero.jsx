import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Form from "../common/Form";
import { ArrowRight, X } from "lucide-react";
import BgAnimation from "../BgAnimation";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Hero({ heading2, heading1, des, img }) {
  const [showForm, setShowForm] = useState(false);

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "10+", label: "Years Experience" },
  ];

  return (
    <FullContainer className="relative bg-[linear-gradient(125deg,#0a0505,#1a0808_40%,#2a0a0a_70%,#0a0505)] text-white overflow-hidden">
      <BgAnimation />

      <Container className="relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 text-center md:text-left py-16 md:py-24 gap-14 md:gap-24">
          <div className="flex-1 space-y-7 md:space-y-10 flex flex-col justify-center">
            {/* Status Badge - changed to red */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm w-fit">
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
            <p className=" md:text-xl text-white/80 leading-relaxed max-w-2xl font-light">
              {des}
            </p>

            {/* Stats with enhanced styling */}
            <div className="grid grid-cols-3 gap-8 pt-4 md:pt-5">
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

          {/* New Lead Form replacing the image */}
          <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
            <div className="relative p-8 md:p-10">
              <div className="space-y-8">
                {/* Form Header */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    Get Your Free Consultation
                  </h3>
                  <p className="text-white/60 text-sm md:text-base">
                    Fill out this form and {"we'll"} contact you within 24
                    hours.
                  </p>
                </div>

                {/* Lead Form */}
                <form className="space-y-6">
                  <div className="space-y-5">
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-5 py-4 bg-white/5 rounded-xl border border-white/10 
                        focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none
                        text-white placeholder:text-white/40 transition-all duration-300
                        backdrop-blur-sm group-hover:border-white/20"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full px-5 py-4 bg-white/5 rounded-xl border border-white/10 
                          focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none
                          text-white placeholder:text-white/40 transition-all duration-300
                          backdrop-blur-sm group-hover:border-white/20"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                      </div>

                      <div className="relative group">
                        <PhoneInput
                          placeholder="Phone Number"
                          className="w-full px-5 py-4 bg-white/5 rounded-xl border border-white/10 
                          focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none
                          text-white placeholder:text-white/40 transition-all duration-300
                          backdrop-blur-sm group-hover:border-white/20"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                      </div>
                    </div>

                    <div className="relative group">
                      <textarea
                        placeholder="Tell us about your project..."
                        rows="3"
                        className="w-full px-5 py-4 bg-white/5 rounded-xl border border-white/10 
                        focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none
                        text-white placeholder:text-white/40 transition-all duration-300
                        backdrop-blur-sm resize-none group-hover:border-white/20"
                      ></textarea>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-white text-slate-900 py-4 px-6 
                    rounded-xl hover:shadow-lg hover:shadow-white/20 transition-all duration-300 
                    flex items-center justify-center gap-2 group relative overflow-hidden font-medium
                    hover:bg-white/90 active:bg-white/80"
                  >
                    <span className="relative z-10">Get Free Consultation</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform relative z-10" />
                  </button>
                </form>

                {/* Trust Indicators */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center gap-6 text-white/60">
                    <div className="flex items-center gap-2 group">
                      <svg
                        className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm group-hover:text-white/80 transition-colors">
                        Free Consultation
                      </span>
                    </div>
                    <div className="flex items-center gap-2 group">
                      <svg
                        className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm group-hover:text-white/80 transition-colors">
                        24/7 Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
