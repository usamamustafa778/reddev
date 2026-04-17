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
      title: "Web & App Development",
      tagline: "Elevate your digital presence. We build lightning-fast, SEO-optimized websites and cross-platform mobile apps using Next.js and React Native. Built for performance and designed to convert.",
      description: "We specialize in creating lightning-fast, SEO-friendly web platforms and cross-platform mobile applications. By leveraging modern frameworks like Next.js, React, and Node.js, we ensure your product is not only visually stunning but also technically superior. Whether it's an e-commerce platform or a complex internal tool, our development process focuses on user retention, speed, and seamless functionality across all devices.",
      includes: [
        "High-Performance Web Portals: Custom-built Next.js and React websites optimized for speed, SEO, and enterprise-level scalability.",
        "Cross-Platform Mobile Apps: Native-feel iOS and Android applications developed with React Native and Flutter for a seamless user experience.",
        "Dynamic UI/UX Design: User-centric, high-fidelity interfaces designed to maximize conversion rates and brand engagement.",
        "Dynamic UI/UX Design: User-centric, high-fidelity interfaces designed to maximize conversion rates and brand engagement.",
        "Cloud Infrastructure & Security: Robust backend deployment on AWS/Vercel with advanced security protocols and real-time database synchronization.",
      ]
    },
    {
      icon: Layers,
      title: "Custom AI Integrations",
      tagline: "Work smarter, not harder. From intelligent chatbots to predictive data models, we integrate custom AI agents into your existing systems to automate complex workflows and enhance user experience.",
      description: "Empowering Your Business with Artificial Intelligence Move beyond basic software with our custom AI solutions. we integrate Large Language Models (LLMs), predictive analytics, and specialized AI agents directly into your existing workflow. From automated customer support bots that sound human to intelligent data processing systems that predict market trends, we help you leverage the power of AI to stay ahead of the competition.",
      includes: [
        "Custom AI Agents & Chatbots: Development of intelligent, context-aware assistants trained on your specific business data for 24/7 automated customer support.",
        "LLM Implementation & Fine-tuning: Integration and optimization of models like GPT-4, Gemini, or Claude to handle complex text generation, summarization, and reasoning tasks.",
        "Predictive Analytics & Data Insights: AI-driven dashboards that analyze historical data to predict market trends, user behavior, and operational bottlenecks.",
        "Computer Vision & Image Processing: Automated visual inspection, OCR (Optical Character Recognition), and AI-based image/video analysis for specialized business needs.",
        "Workflow Automation & NLP: Using Natural Language Processing to automate document sorting, sentiment analysis, and email triage to reduce human error.",
        
      ]
    },
    {
      icon: Bot,
      title: "SaaS & Enterprise Automation",
      tagline: "Streamline your operations. Eliminate manual tasks with robust cloud-based software. We build centralized dashboards and automated pipelines that scale your business operations without increasing headcount.",
      description: "Streamlining Operations through Intelligent Software Manual processes are the biggest hurdle to scaling. Our SaaS solutions and enterprise tools are designed to automate repetitive tasks, manage complex data, and provide real-time insights through centralized dashboards. We build robust API integrations and automated pipelines that allow your business to handle 10x the workload without increasing your operational costs.",
      includes: [
        "Custom SaaS Architecture: End-to-end development of multi-tenant cloud applications with secure data isolation and scalable user management.",
        "Workflow & Business Logic Automation: Elimination of repetitive manual tasks through custom-built automated pipelines and intelligent decision-making logic.",
        "Centralized Operations Dashboards: Unified control centers that consolidate data from various departments into a single, real-time visual interface",
        "Enterprise Resource Integration: Seamless synchronization between CRM, ERP, and legacy systems to ensure a Single Source of Truth' for your business data.",
        "Automated Reporting & Compliance: System-generated performance audits, financial reports, and compliance tracking to maintain operational standards without human intervention.",
        
      ]
    }
  ];

  const capabilities = [
    "Web platforms (React, Next.js, etc.)",
    "Mobile applications (iOS / Android when needed)",
    "Backend systems & APIs",
    "AI & machine learning integration",
    "Cloud Security & Database Management",
    "Workflow Automation & DevOps"
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
            AI-Powered Digital Solutions{" "}
            <span className="relative inline-block">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                That Scale With Your Growth
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          High-performance web platforms, custom mobile applications, and intelligent automation built for startups, enterprises, and digital disruptors. Select the solution your business needs:
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
            Built With Modern Technology
            We deliver high-performance digital ecosystems using proven technologies—selected based on your business goals, not just industry hype. Every system we build integrates seamlessly with your existing enterprise tools, APIs, and cloud infrastructure.
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
              We don&apos;t just sell code. We build AI-enhanced digital infrastructure that eliminates technical debt, automates repetitive workflows, and scales your business revenue—without operational chaos.
            </p>
          </div>
        </motion.div>
      </Container>
    </FullContainer>
  );
}
