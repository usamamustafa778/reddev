import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { ArrowRight } from "lucide-react";
import BgAnimation from "../BgAnimation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero({
  heading1 = "AI-Powered Revenue Infrastructure.",
  heading2 = "Built to Scale.",
  description = "Enterprise-grade AI solutions that transform your business operations, automate workflows, and drive exponential growth.",
  image = null,
}) {
  const [offset, setOffset] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const keyFeatures = [
    {
      icon: "🚀",
      title: "Rapid Deployment",
      description: "Launch in weeks, not months",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level encryption & compliance",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized for peak performance",
    },
    {
      icon: "🔄",
      title: "Seamless Integration",
      description: "Works with your existing stack",
    },
  ];

  return (
    <FullContainer className="relative min-h-screen overflow-hidden">
      {/* Bright Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `translateY(${offset * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      
      {/* Light gradient overlay for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/90 via-red-50/80 to-orange-50/90" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 z-0 bg-white/80 backdrop-blur-sm" />
      
      <BgAnimation />

      <Container className="relative z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 text-center md:text-left py-20 md:py-32 pt-32 md:pt-44 gap-16 md:gap-20 items-center">
          {/* Left Column - Main Content */}
          <div className="flex-1 space-y-8 md:space-y-10 flex flex-col justify-center">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center mx-auto md:mx-0 gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50 backdrop-blur-md w-fit shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent">
                Enterprise AI Solutions
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight"
            >
              <span className="text-slate-900">
                {heading1}
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-orange-600 animate-gradient">
                  {heading2}
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-red-200 via-rose-200 to-orange-200 blur-lg opacity-60"></span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Custom platforms and automation that turn traffic into predictable, scalable revenue.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 mx-auto md:mx-0"
            >
              <Link
                href="/contact-us"
                className="group relative px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg
                hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 
                flex items-center justify-center gap-3 overflow-hidden
                transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Book a Strategy Call</span>
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform relative z-10 group-hover:text-white" />
              </Link>
              
              <a
                href="#solution"
                className="group relative px-10 py-5 bg-white/5 text-white rounded-2xl font-bold text-lg
                border-2 border-white/20 hover:border-white/40 backdrop-blur-xl transition-all duration-500 
                flex items-center justify-center gap-3
                hover:bg-white/10"
              >
                <span className="relative z-10">See How It Works</span>
                <svg className="w-6 h-6 relative z-10 transform group-hover:translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>

            {/* Trust Micro-Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-6 mx-auto md:mx-0 text-white/60 text-sm"
            >
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">High-Volume Operations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Real-Time Processing</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative lg:ml-auto"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-red-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-white mb-2">10K+</div>
                  <div className="text-sm text-white/60 font-medium">Leads/Day</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-orange-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-white mb-2">5K+</div>
                  <div className="text-sm text-white/60 font-medium">Bookings/Month</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-red-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-white mb-2">85%</div>
                  <div className="text-sm text-white/60 font-medium">Repeat Clients</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-orange-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-black text-white mb-2">8+</div>
                  <div className="text-sm text-white/60 font-medium">Years Building</div>
                </div>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-6 -right-6 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-600 shadow-2xl shadow-red-500/50"
            >
              <span className="text-white font-bold text-sm">Enterprise-Grade</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.1);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </FullContainer>
  );
}
