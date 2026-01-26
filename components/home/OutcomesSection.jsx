import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { TrendingUp, Calendar, Bot, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OutcomesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: Calendar,
      title: "Booking Management Systems",
      tagline: "Streamline reservations. Reduce no-shows. Scale predictably.",
      description: "We build custom booking platforms powered by AI that eliminate overbookings and pricing sync issues. Real-time availability sync across your PMS, channel managers, and OTAs ensures accurate inventory. AI-driven pricing optimization and automated confirmations reduce no-shows while improving guest experience.",
      includes: [
        "Real-time booking portals for hotels, resorts, and serviced apartments",
        "Multi-channel synchronization (PMS, channel managers, OTAs, direct bookings) with conflict resolution",
        "Automated confirmation and pre-arrival communication systems to reduce no-shows",
        "Payment processing, invoicing, and revenue management automation",
        "AI-powered booking analytics, occupancy tracking, and revenue optimization dashboards with real-time visibility"
      ]
    },
    {
      icon: Layers,
      title: "Property Management Platforms",
      tagline: "Manage properties, tasks, and operations—all in one system.",
      description: "Centralize operations across multiple properties with AI-enhanced systems that integrate seamlessly with your existing PMS. Handle maintenance tasks, guest communications, inventory, and housekeeping schedules from a single dashboard. AI-powered predictive analytics provide real-time visibility into occupancy, revenue, and operational KPIs across your portfolio.",
      includes: [
        "Property and room/unit management dashboards with real-time status and availability",
        "Task automation and assignment systems for housekeeping and maintenance workflows",
        "Maintenance request tracking and vendor management systems",
        "Guest communication automation and unified support ticket systems",
        "AI-driven inventory, supplies, and asset management with intelligent automated reordering",
        "Multi-property portfolio management with centralized reporting and analytics"
      ]
    },
    {
      icon: Bot,
      title: "Task & Operations Automation",
      tagline: "Eliminate manual work. Scale operations. Reduce costs.",
      description: "Automate repetitive tasks with AI that drain your team&apos;s time. From check-in/check-out workflows to housekeeping schedules, guest communications, and upsell opportunities—our AI-powered automation systems ensure consistent workflows across properties. Your staff focuses on guest experience while operations scale efficiently.",
      includes: [
        "Automated check-in/check-out workflows and digital key management systems",
        "Housekeeping and maintenance task scheduling with intelligent assignment",
        "AI-powered guest communication automation (emails, SMS, WhatsApp) with intelligent personalized messaging",
        "Integration with PMS, channel managers, booking platforms, and CRM systems",
        "Real-time operational dashboards with occupancy, revenue, and KPI tracking",
        "AI-powered task prioritization, upsell recommendations, and workflow routing"
      ]
    }
  ];

  const capabilities = [
    "Web platforms (React, Next.js, etc.)",
    "Mobile applications (iOS / Android when needed)",
    "Backend systems & APIs",
    "AI & machine learning integration",
    "Databases, security, and scalable infrastructure",
    "Integrations, automation, and marketing tech"
  ];

  return (
    <FullContainer className="relative py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
              <Layers className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 max-w-3xl mx-auto mb-6">
            AI-Powered Hospitality Systems{" "}
            <span className="relative inline-block">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                That Scale With Your Growth
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            AI-enhanced booking platforms, property management systems, and operations automation built for hotels, resorts, serviced apartments, and property managers. Select the solution you need:
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveTab(index)}
                className={`flex-1 p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                  activeTab === index
                    ? 'border-red-500 bg-gradient-to-br from-red-50 to-orange-50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-br from-red-600 to-orange-600 shadow-lg'
                      : 'bg-slate-100 group-hover:bg-slate-200'
                  }`}>
                    <service.icon className={`w-6 h-6 ${
                      activeTab === index ? 'text-white' : 'text-slate-600'
                    }`} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-black mb-1 ${
                      activeTab === index ? 'text-slate-900' : 'text-slate-700'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm ${
                      activeTab === index ? 'text-red-700 font-semibold' : 'text-slate-500'
                    }`}>
                      {service.tagline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border-2 border-slate-200 p-8 md:p-12 shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold mb-6">
                  {services[activeTab].title}
                </div>
                <p className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed mb-4">
                  {services[activeTab].tagline}
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  {services[activeTab].description}
                </p>
              </div>
            </div>

            {/* Right: What's Included */}
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                What This Can Include
              </h4>
              <div className="space-y-4">
                {services[activeTab].includes.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mt-1">
                      <ArrowRight className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base text-slate-700 leading-relaxed font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Under the Hood Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Built With Modern Technology
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl">
              We deliver AI-powered hospitality software using proven technologies—selected based on your operational needs, not industry trends. Every system integrates seamlessly with your existing PMS, channel managers, and booking platforms.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
                  <span className="text-base">{capability}</span>
                </div>
              ))}
            </div>
            
            <p className="text-base text-slate-400 italic border-t border-slate-700 pt-6">
              We don&apos;t sell development in isolation. We build AI-enhanced operational infrastructure that eliminates overbookings, automates workflows, and scales your hospitality revenue—without operational chaos.
            </p>
          </div>
        </motion.div>
      </Container>
    </FullContainer>
  );
}
