import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Form from "../common/Form";
import { ArrowRight, CheckCircle2, Clock, Shield, Award } from "lucide-react";
import { motion } from "framer-motion";

const ctaConfig = {
  "ecommerce": {
    headline: "Ready to 3x Your Online Sales?",
    subheadline: "Join 500+ businesses that chose our ecommerce solutions",
    urgency: "Limited time: Get 50% off setup fees this month",
    buttonText: "Start My Ecommerce Project",
    guarantees: [
      "30-day money-back guarantee",
      "Free support for 6 months",
      "Mobile-first design included"
    ]
  },
  "mobile-apps": {
    headline: "Launch Your App in 30 Days",
    subheadline: "Get a professional mobile app that users love",
    urgency: "Free app store submission included this month",
    buttonText: "Start My App Development",
    guarantees: [
      "App store approval guaranteed",
      "99.9% crash-free performance",
      "Lifetime technical support"
    ]
  },
  "web-development": {
    headline: "Get a Website That Actually Converts",
    subheadline: "Professional web development that drives results",
    urgency: "This month only: Free SEO audit worth $500",
    buttonText: "Start My Website Project",
    guarantees: [
      "100% satisfaction guarantee",
      "Free SSL and security setup",
      "Mobile responsive design"
    ]
  },
  "custom-solutions": {
    headline: "Automate Your Business Today",
    subheadline: "Save 40+ hours per week with custom software",
    urgency: "Free process audit included this month",
    buttonText: "Start My Custom Solution",
    guarantees: [
      "ROI guaranteed within 6 months",
      "Unlimited revisions included",
      "24/7 priority support"
    ]
  }
};

export default function CallToAction({ service, title }) {
  const [showForm, setShowForm] = useState(false);
  const config = ctaConfig[service] || ctaConfig["web-development"];

  return (
    <FullContainer className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-red-600/20" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 font-semibold">
              <Clock className="w-4 h-4" />
              {config.urgency}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {config.headline}
              <span className="block text-lg md:text-xl font-normal text-white/80 mt-4">
                {config.subheadline}
              </span>
            </motion.h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  What You Get When You Work With Us:
                </h3>
                
                <div className="space-y-4">
                  {config.guarantees.map((guarantee, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="text-white/90 text-lg">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-white font-bold">500+</div>
                  <div className="text-white/60 text-sm">Projects Done</div>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-white font-bold">98%</div>
                  <div className="text-white/60 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-white font-bold">24/7</div>
                  <div className="text-white/60 text-sm">Support</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - CTA Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get Started Today
                </h3>
                <p className="text-white/70">
                  Free consultation • No commitment • 24-hour response
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                />
                
                <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary">
                  <option value="">Project Budget</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
                
                <textarea
                  placeholder="Tell us about your project..."
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                >
                  {config.buttonText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="text-center text-sm text-white/60 mt-4">
                🔒 Your information is secure and confidential
              </div>
            </motion.div>
          </div>

          {/* Bottom Trust Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 pt-16 border-t border-white/10"
          >
            <p className="text-white/80 text-lg">
              Join the 500+ businesses that trust us with their digital success
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-gradient-to-br from-gray-900 to-red-900/30 rounded-2xl border border-white/10">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300"
            >
              ×
            </button>
            <Form form={showForm} setform={setShowForm} />
          </div>
        </div>
      )}
    </FullContainer>
  );
}