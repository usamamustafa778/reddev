import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { TrendingUp, Users, RefreshCw, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function ProofAuthority() {
  const metrics = [
    {
      icon: TrendingUp,
      number: "10K+",
      label: "Leads/Day Processed",
      description: "Across client platforms"
    },
    {
      icon: Users,
      number: "5K+",
      label: "Bookings/Month",
      description: "Automated & tracked"
    },
    {
      icon: RefreshCw,
      number: "85%",
      label: "Repeat Clients",
      description: "Long-term partnerships"
    },
    {
      icon: Award,
      number: "8+",
      label: "Years",
      description: "Building revenue systems"
    }
  ];

  const industries = [
    "Lead Generation",
    "Healthcare",
    "Legal Services",
    "Home Services",
    "E-commerce",
    "SaaS",
    "Marketplace",
    "Hospitality"
  ];

  return (
    <FullContainer className="py-24 bg-slate-900 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
            📊 Track Record
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              High-Volume Operations
            </span>
          </h2>
        </motion.div>

        {/* Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2">{metric.number}</div>
              <div className="text-lg font-semibold text-white/90 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-white/60">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Industries Served</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 font-medium hover:bg-white/20 transition-all duration-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </FullContainer>
  );
}
