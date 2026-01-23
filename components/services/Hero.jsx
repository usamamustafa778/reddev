import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero({
  heading1 = "Travel & Accommodation Revenue Infrastructure.",
  heading2 = "Built to Scale.",
  description = "Custom booking platforms, property management systems, and automation solutions that turn traffic into predictable, scalable revenue for travel and accommodation businesses.",
  image = null,
}) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stats = [
    { number: "10K+", label: "Bookings/Day", delay: 0.7 },
    { number: "5K+", label: "Properties Managed", delay: 0.8 },
    { number: "85%", label: "Repeat Clients", delay: 0.9 },
    { number: "6+", label: "Years Building", delay: 1 }
  ];

  return (
    <FullContainer className="relative min-h-screen overflow-hidden bg-black">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
      
      {/* Radial gradient spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.2),rgba(0,0,0,0))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(234,88,12,0.15),rgba(0,0,0,0))]"></div>
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-red-600/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-orange-600/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-[500px] h-[500px] bg-rose-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }}></div>

      <Container className="relative z-10">
        <div className="w-full flex flex-col lg:flex-row text-center md:text-left py-16 md:py-20 pt-24 md:pt-32 gap-16 lg:gap-24 items-center">
          {/* Left Column - Main Content */}
          <div className="flex-1 space-y-10 md:space-y-12 flex flex-col justify-center max-w-4xl mx-auto lg:mx-0">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center mx-auto md:mx-0 gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl w-fit group hover:bg-white/10 transition-all duration-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold text-white/90 tracking-widest uppercase">
                Travel & Accommodation Specialists
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1] tracking-tight">
                <span className="block text-white mb-4">
                  {heading1.split('.')[0]}.
                </span>
                <span className="block relative">
                  <span className="relative inline-block">
                    <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-60"></span>
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient bg-[length:200%_auto]">
                      {heading2}
                    </span>
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl lg:text-3xl text-white/70 leading-relaxed max-w-3xl font-light"
            >
              {description}
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
                hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500 
                flex items-center justify-center gap-3 overflow-hidden
                transform hover:scale-[1.02] hover:-translate-y-1"
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
                <span className="font-medium">Booking Management</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Property Management</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Task Automation</span>
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
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-red-500/50 transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-red-500/10' : 'from-orange-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-white/60 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-6 -right-6 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-600 shadow-2xl shadow-red-500/50"
            >
              <span className="text-white font-bold text-sm whitespace-nowrap">Enterprise-Grade</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </FullContainer>
  );
}
