import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Users, Check, Minus } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoWeWorkWith() {
  const idealClients = [
    {
      title: "Lead-gen & arbitrage businesses",
      description: "Scaling paid acquisition and need infrastructure to handle volume"
    },
    {
      title: "Booking & marketplace operators",
      description: "Managing appointments, transactions, or service delivery at scale"
    },
    {
      title: "Revenue-driven companies",
      description: "Focused on measurable outcomes, not just launching features"
    },
    {
      title: "High-volume operations",
      description: "Processing hundreds or thousands of transactions monthly"
    }
  ];

  const notFor = [
    {
      title: "Idea-stage startups",
      description: "No validated revenue model or market fit yet"
    },
    {
      title: "Small brochure sites",
      description: "Looking for basic websites without complex functionality"
    },
    {
      title: "Cheap development seekers",
      description: "Shopping on price rather than investing in outcomes"
    },
    {
      title: "Low-commitment projects",
      description: "Not ready to commit resources to infrastructure transformation"
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
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
            Selective{" "}
            <span className="relative inline-block">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Partnerships Only
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            We work with a limited number of clients to ensure exceptional results. Here's who we're built for.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* We Work With */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                We Work With
              </h3>
              <p className="text-slate-600">
                Companies ready to invest in infrastructure that compounds results.
              </p>
            </div>
            
            <div className="space-y-4">
              {idealClients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-black text-slate-900 mb-1">
                          {client.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {client.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                Not For
              </h3>
              <p className="text-slate-600">
                To protect outcomes and standards, we're transparent about fit.
              </p>
            </div>
            
            <div className="space-y-4">
              {notFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center mt-1">
                        <Minus className="w-4 h-4 text-slate-600" strokeWidth={3} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-black text-slate-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-100 blur-2xl opacity-50"></div>
            <p className="relative text-xl md:text-2xl font-bold text-slate-900 leading-relaxed">
              Not sure if we're a fit?{" "}
              <span className="text-slate-600">Let's talk.</span>
            </p>
          </div>
        </motion.div>
      </Container>
    </FullContainer>
  );
}
