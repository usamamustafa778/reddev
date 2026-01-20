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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Title with Icon */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900">
                Infrastructure{" "}
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Is the Bottleneck
                  </span>
                </span>
              </h2>
            </div>

            {/* Body Text */}
            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Your leads are increasing — but revenue isn't scaling at the same rate. 
                Manual handling, poor routing, and disconnected systems are leaking money 
                at every step of your growth journey.
              </p>
              
              <p>
                Your operations require more people instead of better systems. As volume 
                grows, margins shrink. You're making critical decisions without real-time 
                visibility, scaling blind in a market that punishes inefficiency.
              </p>
              
              <p>
                Your tech stack wasn't designed for scale — it was stitched together to 
                survive, not to grow. Partner with infrastructure experts who understand 
                that sustainable growth requires robust systems that compound results, 
                not collapse under pressure.
              </p>
              
              <p className="text-slate-900 font-bold text-lg md:text-xl">
                Growth without infrastructure doesn't compound. It collapses.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/contact-us">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-red-500/30 transform hover:-translate-y-1 transition-all duration-300">
                  Get A Free Quote
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative shapes */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-400 to-orange-400 rounded-3xl transform rotate-12 opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl transform -rotate-12 opacity-20 blur-xl"></div>
              
              {/* Main visual container */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 shadow-2xl overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                
                {/* Accent shapes */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl transform rotate-12 opacity-80"></div>
                <div className="absolute bottom-12 left-12 w-16 h-16 bg-gradient-to-br from-red-400 to-orange-400 rounded-xl transform -rotate-12 opacity-60"></div>
                
                {/* Center icon/graphic */}
                <div className="relative z-10 flex items-center justify-center py-20">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                    <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center border-4 border-white/20 shadow-2xl">
                      <TrendingUp className="w-24 h-24 text-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-1/4 left-8 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-12 w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-75"></div>
                <div className="absolute bottom-1/4 left-16 w-2 h-2 bg-red-300 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </FullContainer>
  );
}
