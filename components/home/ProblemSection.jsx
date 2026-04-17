import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ProblemSection() {
  return (
    <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
      </div>

     
      
<Container className="relative z-10">
  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[600px]">
    {/* Left Column - Text Content */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center space-y-8 py-10" // Padding added for safety
    >
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 max-w-2xl">
          Your Business Potential{" "}
          <span className="relative inline-block">
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
              Is Restricted by Outdated Systems
            </span>
          </span>
        </h2>
      </div>

      <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
        <p>
          Clients are demanding more, but your current workflows and delivery models aren’t scaling. 
          Juggling manual updates between disconnected tools creates delivery delays and 
          fragmented project visibility.
        </p>
        
        <p>
          Slow response times mean missed opportunities. You lack real-time visibility into 
          performance and ROI. Your team is drowning in manual tasks instead of delivering 
          exceptional digital products.
        </p>
        
        <p className="text-slate-900 font-bold text-lg md:text-xl border-l-4 border-red-500 pl-4">
          Growth without a robust digital ecosystem doesn&apos;t compound. It collapses.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link href="/contact-us">
          <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-2xl text-lg hover:shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-fit">
            Get A Free Audit →
          </button>
        </Link>
      </motion.div>
    </motion.div>

    {/* Right Visual - Same as before but with better scaling */}
    {/* Right Visual - Increased Height Version */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  viewport={{ once: true }}
  className="relative w-full h-full flex items-center" // 'h-full' added to fill parent space
>
  <div className="relative w-full">
    {/* Background Glows */}
    <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-600/20 rounded-full blur-[100px]"></div>
    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]"></div>

    {/* Main Black Card - Height increased with 'aspect-[4/5]' or custom min-h */}
    <div className="relative bg-[#0B0F1A] rounded-[3rem] p-12 md:p-16 shadow-2xl overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-center border border-white/5">
      
      {/* 1. Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)', 
          backgroundSize: '45px 45px' 
        }}
      ></div>
      
      {/* 2. Top-Right Decorative Element */}
      <div className="absolute top-12 right-12 w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl transform rotate-12 shadow-2xl"></div>
      
      {/* 3. Bottom-Left Decorative Element */}
      <div className="absolute bottom-12 left-12 w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl transform -rotate-12 opacity-80 shadow-xl"></div>
      
      {/* 4. Center Glowing Icon Section */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative">
          {/* Pulsing Glow */}
          <div className="absolute inset-0 bg-orange-600 rounded-full blur-[60px] opacity-30 animate-pulse"></div>
          
          {/* Main Circle */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-orange-600 flex items-center justify-center shadow-[0_0_60px_rgba(234,88,12,0.5)] border-4 border-white/10">
            <TrendingUp className="w-20 h-20 md:w-28 md:h-28 text-white drop-shadow-2xl" strokeWidth={2.5} />
          </div>
        </div>

        {/* Optional: Add a small label inside the card to fill height if needed */}
        <div className="mt-8 text-center">
          <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium tracking-widest uppercase">
            Scalable Infrastructure
          </span>
        </div>
      </div>

      {/* 5. Floating Accents */}
      <div className="absolute top-1/4 left-12 w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/4 right-16 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
    </div>
  </div>
</motion.div>
  </div>
</Container>
    </FullContainer>
  );
}
