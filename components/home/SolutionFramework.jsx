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
      description: "Revenue & operations analysis"
    },
    {
      number: "02",
      icon: Pencil,
      title: "Design",
      description: "AI-enabled system architecture"
    },
    {
      number: "03",
      icon: Code,
      title: "Build",
      description: "Platform & integrations"
    },
    {
      number: "04",
      icon: Zap,
      title: "Scale",
      description: "Automate, optimize, and expand"
    }
  ];

  return (
    <FullContainer className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 rounded-full text-sm font-semibold mb-6 border border-red-200">
            🎯 Our Framework
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How We Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-orange-600">
              Revenue Infrastructure
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="text-7xl font-bold text-slate-100 absolute -top-4 -left-2">
                    {step.number}
                  </div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-300 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
