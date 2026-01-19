import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoWeWorkWith() {
  const idealClients = [
    "Lead-gen & arbitrage businesses",
    "Booking & marketplace operators",
    "Revenue-driven companies",
    "High-volume operations"
  ];

  const notFor = [
    "Idea-stage startups",
    "Small brochure sites",
    "Cheap development seekers",
    "Low-commitment projects"
  ];

  return (
    <FullContainer className="py-24 bg-white border-t border-b border-slate-200">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 rounded-full text-sm font-semibold mb-6 border border-red-200">
            🎯 Client Fit
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Selective Partnerships Only
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We work with a limited number of clients to ensure exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* We Work With */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                We Work With
              </h3>
            </div>
            
            <ul className="space-y-4">
              {idealClients.map((client, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700 font-medium">{client}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-2 border-red-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                <XCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Not For
              </h3>
            </div>
            
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </FullContainer>
  );
}
