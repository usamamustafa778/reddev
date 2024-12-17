import Image from "next/image";
import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { RxCross2 } from "react-icons/rx";
import Form from "../common/Form";
import TypingTextManual from "../common/TypingTextManual";

export default function Hero({ heading2, heading1, des, img }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <FullContainer className="relative min-h-screen bg-gradient-to-br from-secondary via-secondary/95 to-secondary text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full filter blur-[120px] opacity-50"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row min-h-screen items-center py-20 gap-20">
          {/* Content Section */}
          <div className="flex-1 space-y-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-white/80">
                Available for New Projects
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
              {heading1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                {heading2}
              </span>{" "}
              Solutions
            </h1>

            {/* Description */}
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              {des}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => setShowForm(true)}
                className="group relative px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl text-lg font-medium transition-all duration-300"
              >
                Get Free Consultation
                <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform translate-y-1"></div>
              </button>

              <a
                href="#portfolio"
                className="group px-8 py-4 text-lg border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
              >
                View Portfolio
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "10+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
              <Image
                src={img}
                alt="Digital Solutions"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </Container>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-white rounded-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
            >
              ✕
            </button>
            <Form form={showForm} setform={setShowForm} />
          </div>
        </div>
      )}
    </FullContainer>
  );
}
