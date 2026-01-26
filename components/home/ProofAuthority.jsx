import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { TrendingUp, Users, RefreshCw, Award, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function ProofAuthority() {
  const metrics = [
    {
      icon: TrendingUp,
      number: "10K+",
      label: "Bookings/Day Processed",
      description: "Across hotels, resorts & serviced apartments"
    },
    {
      icon: Users,
      number: "5K+",
      label: "Properties Managed",
      description: "Hotels, resorts, serviced apartments & rentals"
    },
    {
      icon: RefreshCw,
      number: "85%",
      label: "Repeat Clients",
      description: "Long-term hospitality partnerships"
    },
    {
      icon: Award,
      number: "6+",
      label: "Years",
      description: "Building AI-powered hospitality infrastructure"
    }
  ];

  const industries = [
    "Hotels",
    "Resorts",
    "Serviced Apartments",
    "Property Management",
    "Vacation Rentals",
    "Boutique Hotels",
    "Hostel Operations",
    "Short-term Rentals"
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
            Built for{" "}
            <span className="relative inline-block">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Hospitality Scale
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
            AI-powered booking infrastructure, property management systems, and operational automation that scale hotels, resorts, and serviced apartments without chaos.
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
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              Hospitality Sectors We Serve
            </h3>
            <p className="text-slate-400">
              AI-powered systems built specifically for hotels, resorts, serviced apartments, and property management companies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <span className="text-white/90 font-semibold text-sm group-hover:text-white transition-colors duration-300">
                    {industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </FullContainer>
  );
}
