import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero({
  heading1 = "Next-Gen Digital Solutions.",
  heading2 = "Built to Scale.",
  description = "Custom web and mobile applications designed to transform your ideas into high-performance digital products.",
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { number: "250+", label: "Projects Delivered", delay: 0.7 },
    { number: "50+", label: "Tech Stack Experts", delay: 0.8 },
    { number: "98%", label: "Client Satisfaction", delay: 0.9 },
    { number: "8+", label: "Years of Innovation", delay: 1 }
  ];

  return (
    <FullContainer className="relative min-h-screen overflow-hidden bg-black">
      
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.2),rgba(0,0,0,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(234,88,12,0.15),rgba(0,0,0,0))]"></div>

      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-orange-600/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-[500px] h-[500px] bg-rose-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <Container className="relative z-10 overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row text-center md:text-left py-16 md:py-20 pt-24 md:pt-32 gap-16 lg:gap-24 items-center justify-between">
          
          {/* LEFT */}
          <div className="w-full lg:w-1/2 space-y-10 md:space-y-12 flex flex-col justify-center">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center mx-auto md:mx-0 gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative h-2.5 w-2.5 bg-red-500 rounded-full"></span>
              </span>
              <span className="text-xs font-bold text-white/90 uppercase">
                Software Design & Development Hub
              </span>
            </motion.div>

            {/* Heading */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black"
              >
                <span className="block text-white">
                  {heading1.split('.')[0]}.
                </span>

                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                  {heading2}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-lg text-white/70 max-w-2xl"
              >
                {description}
              </motion.p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact-us" className="px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2">
                Start Your Project
                <ArrowRight />
              </Link>

              <a href="#solution" className="px-8 py-4 border border-white/20 rounded-xl text-white text-center">
                View Portfolio
              </a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 bg-white/10 rounded-2xl">
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>

      {/* Animations */}
      <style jsx global>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(30px,-30px); }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
      `}</style>
    </FullContainer>
  );
}