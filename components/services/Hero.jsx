import React, { useEffect, useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { ArrowRight, Globe, Cpu, Smartphone, BarChart3, Layers, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const defaultStats = [
  { number: "15+", label: "Products Built" },
  { number: "8+", label: "Industries Served" },
  { number: "500+", label: "Lead Gen Sites" },
  { number: "6+", label: "Years Experience" },
];

const services = [
  { icon: Globe, label: "Web Development" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Cpu, label: "SaaS Platforms" },
  { icon: BarChart3, label: "CRM Systems" },
  { icon: Layers, label: "Lead Gen" },
];

const achievements = [
  "Raised $10M Series A — Sunfish",
  "500+ lead gen sites across the US",
  "Clients in 6 countries",
];

export default function Hero({
  heading1 = "We Build Digital Products",
  heading2 = "That Grow Your Business.",
  description = "From SaaS platforms and CRMs to lead generation systems and mobile apps — we've built 15+ real products across 8 industries for clients worldwide.",
  cta1Text = "See Our Work",
  cta1Href = "/portfolio",
  cta2Text = "Start a Project",
  cta2Href = "/contact",
  stats: statsProp,
}) {
  const stats = statsProp || defaultStats;

  return (
    <FullContainer className="relative min-h-screen overflow-hidden bg-black">

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.22),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_85%_60%,rgba(234,88,12,0.12),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] bg-red-600/40 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] bg-orange-600/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-20 w-[400px] h-[400px] bg-rose-600/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10">
        <div className="w-full flex flex-col lg:flex-row py-16 md:py-20 pt-28 md:pt-36 gap-12 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="w-full lg:w-[52%] flex flex-col gap-8 text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center self-center lg:self-start gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative h-2 w-2 bg-red-500 rounded-full" />
              </span>
              <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                Software Design &amp; Development
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black leading-[1.08] tracking-tight"
            >
              <span className="block text-white">{heading1}</span>
              {heading2 && (
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-red-500">
                  {heading2}
                </span>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href={cta1Href}
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-100 transition-all duration-200 shadow-xl shadow-white/10"
              >
                {cta1Text}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href={cta2Href}
                className="inline-flex items-center justify-center px-7 py-4 border border-white/20 rounded-xl text-white font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-200"
              >
                {cta2Text}
              </Link>
            </motion.div>

            {/* Achievement strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"
            >
              {achievements.map((a, i) => (
                <div key={i} className="inline-flex items-center gap-2 text-xs text-white/45 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500/70 flex-shrink-0" />
                  {a}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <div className="w-full lg:w-[48%] flex flex-col gap-4">

            {/* Top row — 2 large stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <div className="relative overflow-hidden p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-red-500/30 hover:bg-white/8 transition-all duration-300 group">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-white/50 font-semibold uppercase tracking-widest">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle — services pill grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-5 bg-white/5 rounded-2xl border border-white/10"
            >
              <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-4">What We Build</p>
              <div className="flex flex-wrap gap-2">
                {services.map((s, i) => (
                  <div key={i} className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/30 hover:bg-white/8 transition-all duration-200 group">
                    <s.icon className="w-3.5 h-3.5 text-orange-400 group-hover:text-orange-300 transition-colors" strokeWidth={2} />
                    <span className="text-xs font-semibold text-white/70">{s.label}</span>
                  </div>
                ))}
                <div className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl">
                  <span className="text-xs font-semibold text-white/40">+more</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom row — 2 smaller stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(2, 4).map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                >
                  <div className="relative overflow-hidden p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/30 hover:bg-white/8 transition-all duration-300 group">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                    <div className="text-3xl md:text-4xl font-black text-white/90 mb-1">{stat.number}</div>
                    <div className="text-xs text-white/45 font-semibold uppercase tracking-widest">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Countries served strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex items-center gap-3 px-5 py-3.5 bg-white/[0.03] rounded-xl border border-white/8"
            >
              <Globe className="w-4 h-4 text-red-400 flex-shrink-0" />
              <p className="text-xs text-white/40 font-medium">
                Clients in <span className="text-white/70">US · UK · Canada · Romania · Uganda · South Africa</span>
              </p>
            </motion.div>
          </div>

        </div>
      </Container>

      <style jsx global>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-30px) scale(1.05); }
          66% { transform: translate(-20px,20px) scale(0.95); }
        }
        .animate-blob { animation: blob 10s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </FullContainer>
  );
}
