import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { TrendingUp, Calendar, Bot, Layers, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OutcomesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: TrendingUp,
      title: "AI-Powered Lead Systems",
      tagline: "Turn attention into qualified conversations—automatically.",
      description: "We design lead engines that capture intent, segment prospects, and follow up with intelligence so you're not relying on \"post and pray.\"",
      includes: [
        "Landing pages built for conversion",
        "CRM + pipeline automation",
        "AI chat / qualification flows",
        "Email, WhatsApp, and follow-up sequences",
        "Analytics dashboards for lead quality and ROI"
      ]
    },
    {
      icon: Calendar,
      title: "Booking & Transaction Platforms",
      tagline: "Reduce friction. Increase completion rates. Scale predictably.",
      description: "If your business depends on appointments, bookings, subscriptions, or payments—this is your revenue infrastructure. We build platforms that make scaling predictable.",
      includes: [
        "Booking portals & service marketplaces",
        "Payment flows, subscriptions, invoices",
        "Admin panels & customer dashboards",
        "Secure user accounts & role access",
        "Integrations with payment providers and tools"
      ]
    },
    {
      icon: Bot,
      title: "Automation & Intelligence",
      tagline: "Operations bottlenecks, solved.",
      description: "Most businesses don't have a \"marketing problem\"—they have an operations bottleneck. We connect your tools, remove manual work, and build automations that make the business run smoother, faster, and cheaper.",
      includes: [
        "Workflow automations (sales, ops, support)",
        "Integrations across platforms (CRM, forms, email, payments)",
        "Reporting + real-time visibility",
        "AI copilots for internal teams",
        "Process redesign for scale"
      ]
    }
  ];

  const capabilities = [
    "Web platforms (React, Next.js, etc.)",
    "Mobile applications (iOS / Android when needed)",
    "Backend systems & APIs",
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
            Revenue Infrastructure,{" "}
            <span className="relative inline-block">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Not Software Projects
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            We build systems that generate, process, and scale revenue. Choose what you need:
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
              Under the Hood
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl">
              Our solutions are delivered using a combination of capabilities—selected based on the problem, not the trend.
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
              We don't sell development in isolation. We build revenue infrastructure that happens to include development.
            </p>
          </div>
        </motion.div>
      </Container>
    </FullContainer>
  );
}
