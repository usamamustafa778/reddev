import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Search, Pencil, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionFramework() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnose",
      description: "Audit your booking, ops, and guest communication flow to uncover revenue leaks (overbookings, slow responses, missed upsells) and bottlenecks."
    },
    {
      number: "02",
      icon: Pencil,
      title: "Design",
      description: "Map a scalable hospitality workflow — PMS + channel manager + OTAs + CRM — with automation points your team will actually use."
    },
    {
      number: "03",
      icon: Code,
      title: "Build",
      description: "Develop and integrate reliable systems: real-time availability/pricing sync, unified inbox, automated guest messaging, and ops dashboards."
    },
    {
      number: "04",
      icon: Zap,
      title: "Scale",
      description: "Optimize performance as you grow — improve direct bookings, streamline staff workload, and standardize operations across properties."
    }
  ];

  return (
    <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
              <Code className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 max-w-3xl">
            How We Help Hotels{" "}
            <span className="relative inline-block">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Scale Without Chaos
              </span>
            </span>
            .
          </h2>
        </motion.div>

        {/* Process Steps - Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute top-6 right-6 text-5xl font-black text-slate-100 group-hover:text-red-100 transition-colors duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 relative z-10">
                  <h3 className="text-xl font-black text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50/0 to-orange-50/0 group-hover:from-red-50/50 group-hover:to-orange-50/50 transition-all duration-300 -z-10"></div>
              </div>

              {/* Step connector arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 -right-4 z-20">
                  <div className="flex items-center">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-slate-300 via-slate-400 to-transparent"></div>
                    <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-slate-400 -ml-px"></div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
