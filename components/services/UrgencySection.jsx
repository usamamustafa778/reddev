import React, { useState, useEffect } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function UrgencySection() {
  const initialTime = 24 * 60 * 60; // 1 day in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : initialTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
        {[
          { value: days, label: "Days" },
          { value: hours, label: "Hours" },
          { value: minutes, label: "Minutes" },
          { value: secs, label: "Seconds" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative group"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={index * 100}
          >
            {/* Card Background */}
            <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-100"></div>

            {/* Hover Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl"></div>
            </div>

            {/* Content */}
            <div className="relative p-4 md:p-6 flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                {item.value < 10 ? `0${item.value}` : item.value}
              </span>
              <span className="text-sm md:text-lg text-gray-600">
                {item.label}
              </span>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20 rounded-br-2xl"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <FullContainer className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Limited Spots{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Available!
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Don't miss out on this exclusive offer. Time is running out!
          </p>

          <div className="mb-12">{formatTime(timeLeft)}</div>

          {/* CTA Button */}
          <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 group relative">
            <div className="absolute inset-0 bg-white/20 rounded-xl transform -skew-x-12 group-hover:translate-x-full transition-transform duration-500"></div>
            <span className="relative z-10">Get Your Spot Now</span>
          </button>
        </div>
      </Container>
    </FullContainer>
  );
}
