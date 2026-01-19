import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { TrendingUp, Calendar, Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OutcomesSection() {
  const outcomes = [
    {
      icon: TrendingUp,
      title: "Lead Revenue Systems",
      outcomes: [
        "High-converting funnels that capture and qualify at scale",
        "CRM automation that routes and scores without human touch",
        "Real-time analytics showing cost per lead and LTV",
        "Integration with your existing ad and email stack"
      ]
    },
    {
      icon: Calendar,
      title: "Booking & Transaction Platforms",
      outcomes: [
        "Custom booking engines handling thousands of appointments",
        "Payment processing integrated across all channels",
        "Automated confirmations, reminders, and follow-ups",
        "Full transaction visibility and reporting"
      ]
    },
    {
      icon: Bot,
      title: "Automation & AI Intelligence",
      outcomes: [
        "AI agents deflecting 70%+ of support volume",
        "Workflow automation eliminating manual handoffs",
        "Predictive insights for inventory, capacity, and demand",
        "Custom integrations linking your entire operation"
      ]
    }
  ];

  return (
    <FullContainer className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 rounded-full text-sm font-semibold mb-6 border border-red-200">
            ⚡ What We Build
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Revenue Infrastructure,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-orange-600">
              Not Software Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:from-red-600 group-hover:to-orange-600 group-hover:text-white transition-all duration-300">
                <outcome.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {outcome.title}
              </h3>
              
              <ul className="space-y-4">
                {outcome.outcomes.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
