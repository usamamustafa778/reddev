import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Leadership() {
  const leadership = [
    {
      name: "Usama Bhatti",
      role: "Founder and CEO",
      image: "/img/member1.png",
      linkedin: "#"
    },
    {
      name: "Hamza Ali",
      role: "Chief Technical Officer",
      image: "/img/member2.png",
      linkedin: "#"
    },
    {
      name: "Aman Zaheer",
      role: "Chief Operating Officer",
      image: "/img/member3.png",
      linkedin: "#"
    },
    {
      name: "Umar Janjua",
      role: "Chief Marketing Officer",
      image: "/img/member.png",
      linkedin: "#"
    },
    {
      name: "Hunain Abbasi",
      role: "Business Developer",
      image: "/img/member.png",
      linkedin: "#"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
      
      {/* Accent shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

      <div className="grid lg:grid-cols-2 gap-0 items-center relative z-10">
        {/* Left Content */}
        <Container>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="py-16 md:py-24 lg:py-32 pl-4 md:pl-8 lg:pl-12"
          >
            <div className="space-y-8">
              {/* Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12 shadow-lg">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white mb-6">
                  Built by{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    Operators
                  </span>
                  ,<br />Not Freelancers
                </h2>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                  Founder-led execution with direct ownership of architecture and delivery.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
                  Direct accountability from design through deployment. Every system is built to survive growth, not just launch.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>

        {/* Right: Team Photos - Full bleed */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-0 h-full min-h-[500px] lg:min-h-[600px]">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Image */}
              <div className="relative h-full">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-110"
                />
                {/* Lighter Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent group-hover:via-slate-900/50 transition-all duration-300"></div>
              </div>

              {/* Name, Role & LinkedIn */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-center transform group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-sm md:text-base lg:text-lg font-black text-white mb-1">
                  {leader.name}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 font-medium mb-3">
                  {leader.role}
                </p>
                {/* LinkedIn Icon */}
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-white/10 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 backdrop-blur-sm border border-white/20 transition-all duration-300 group/icon"
                >
                  <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
