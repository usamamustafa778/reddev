import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { TrendingUp, Users, RefreshCw, Award, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProofAuthority() {
  const metrics = [
    {
      icon: TrendingUp,
      number: "15+",
      label: "Products Built",
      description: "Real products shipped across 8 industries for clients in the US, UK, Canada and Africa."
    },
    {
      icon: Users,
      number: "8+",
      label: "Industries Served",
      description: "HealthTech, Travel, FinTech, Hospitality, Real Estate, Restaurant Tech and more."
    },
    {
      icon: RefreshCw,
      number: "500+",
      label: "Lead Gen Sites",
      description: "Built over 500 niche lead generation websites for a $5M/year US operation."
    },
    {
      icon: Award,
      number: "6+",
      label: "Years Experience",
      description: "Six years building funded startups, enterprise platforms, and everything in between."
    }
  ];

  const industries = [
    {
      icon: "🏥",
      title: "HealthTech",
      desc: "HIPAA-aware platforms, patient portals, and healthcare financing systems.",
      tag: "Sunfish — $10M funded US startup",
    },
    {
      icon: "✈️",
      title: "Travel Tech",
      desc: "Enterprise travel portals, GDS integrations, and booking systems at scale.",
      tag: "Built on Sabre GDS",
    },
    {
      icon: "🍽️",
      title: "Restaurant Tech",
      desc: "Restaurant management SaaS, online ordering, POS integrations, and marketing systems.",
      tag: "EatsDesk — own SaaS product",
    },
    {
      icon: "🏨",
      title: "Hospitality",
      desc: "Hotel management systems, property management, and guest experience platforms.",
      tag: "ZuhaHost — own SaaS product",
    },
    {
      icon: "💰",
      title: "FinTech",
      desc: "Trading platforms, profit intelligence tools, and financial management systems.",
      tag: "BullionCRM + DigiKhata",
    },
    {
      icon: "🏠",
      title: "Real Estate",
      desc: "Property listing platforms, CRMs, and lead generation systems for real estate.",
      tag: "Multiple US clients",
    },
    {
      icon: "📋",
      title: "CRM & Operations",
      desc: "Custom CRMs, ticketing systems, and call center management platforms.",
      tag: "VerifiedCRM + ReplySystem",
    },
    {
      icon: "📍",
      title: "Local Services",
      desc: "500+ lead generation websites across 70+ US niches — HVAC, roofing, plumbing, chimney, pest control and more.",
      tag: "$5M/year US operation",
    },
  ];

  return (
    <FullContainer className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Accent shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12 shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white max-w-3xl mb-6">
            Built{" "}
            <span className="relative inline-block">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Across Industries
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
            15+ real products. 8 industries. 6 years of shipping software that works.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <metric.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                
                {/* Number */}
                <div className="text-5xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-300">
                  {metric.number}
                </div>
                
                {/* Label */}
                <div className="text-base font-bold text-white mb-2">
                  {metric.label}
                </div>
                
                {/* Description */}
                <div className="text-sm text-slate-400">
                  {metric.description}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 transition-all duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Industries We&apos;ve Built For
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h4 className="text-base font-black text-white mb-2">{industry.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{industry.desc}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30">
                    <span className="text-xs font-semibold text-red-300">{industry.tag}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </FullContainer>
  );
}
