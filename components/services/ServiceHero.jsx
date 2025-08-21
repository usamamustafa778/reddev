import React, { useState, useEffect } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Form from "../common/Form";
import { CheckCircle2, Star } from "lucide-react";
import BgAnimation from "../BgAnimation";
import { motion } from "framer-motion";

const serviceConfig = {
  ecommerce: {
    hook: "Finally! An Ecommerce Store That",
    subhook: "Prints Money While You Sleep",
    description:
      "Stop losing customers to cart abandonment. Our psychology-driven ecommerce systems have generated over $50M in sales and turn window shoppers into buying customers.",
    urgency:
      "🔥 WARNING: Your competitors are stealing sales every minute you wait",
    benefits: [
      "347% more revenue in 90 days",
      "Zero cart abandonment issues",
      "Customers buy MORE per visit",
      "Sales happen 24/7 automatically",
    ],
    cta: "Show Me How to Double My Sales",
  },
  "mobile-apps": {
    hook: "The Secret to Apps That",
    subhook: "Users Become Addicted To",
    description:
      "Forget boring apps that get deleted. We create mobile experiences so addictive, users can't put them down. The result? Explosive growth and raving fans.",
    urgency:
      "📱 URGENT: Mobile users spend 7x more than desktop—are you missing out?",
    benefits: [
      "Users spend 3x longer in-app",
      "5-star ratings guaranteed",
      "Viral growth built-in",
      "Customers become ambassadors",
    ],
    cta: "Build My Million-Dollar App",
  },
  "web-development": {
    hook: "Transform Your Website Into a",
    subhook: "Lead-Generating Powerhouse",
    description:
      "Tired of websites that just sit there? We build conversion machines that work 24/7 to turn strangers into customers—even while you sleep.",
    urgency:
      "🚀 FACT: Every day without a high-converting website costs you $2,000+ in lost sales",
    benefits: [
      "10x more qualified leads",
      "Visitors become customers instantly",
      "Google loves your site",
      "Competitors can't compete",
    ],
    cta: "Turn My Website Into a Sales Machine",
  },
  "custom-solutions": {
    hook: "Escape the 80-Hour Work Week:",
    subhook: "Automate Your Way to Freedom",
    description:
      "Imagine running your entire business from your phone while competitors scramble with manual work. Our automation gives you the ultimate unfair advantage.",
    urgency:
      "⚡ REALITY CHECK: Every hour of manual work costs you $500 in lost opportunities",
    benefits: [
      "Work 20 hours, earn like 80",
      "Business runs without you",
      "Competitors can't keep up",
      "Scale infinitely with zero stress",
    ],
    cta: "Free Me From Manual Work Forever",
  },
};

export default function ServiceHero({
  service,
  title,
  heading1 = "Transform Your Business with",
  heading2 = "Professional Solutions",
  description = "Get results that matter to your bottom line",
  image = null,
}) {
  const [showForm, setShowForm] = useState(false);
  const [offset, setOffset] = useState(0);

  const config = serviceConfig[service] || serviceConfig["web-development"];

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FullContainer className="relative min-h-screen text-white overflow-hidden">
      {/* Background with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `translateY(${offset * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-950/90 via-gray-950/80 to-gray-950/90" />
      <BgAnimation />

      <Container className="relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 text-sm"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-white/80">{config.urgency}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-white">{config.hook}</span>
                <span className="block mt-2">
                  <span className="relative">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
                      {config.subhook}
                    </span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="8"
                      viewBox="0 0 100 8"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 0L50 7L100 0L100 8L0 8Z"
                        fill="currentColor"
                        className="text-primary/20"
                      />
                    </svg>
                  </span>
                </span>
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                {config.description}
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {config.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90 text-sm">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Form Header */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get Your Free Strategy Session
                  </h3>
                  <p className="text-white/70">
                    Discover how we can help grow your business
                  </p>
                </div>

                {/* Quick Form */}
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                  />
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
                  <textarea
                    placeholder="Tell us about your project..."
                    rows="3"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Book My Free Consultation
                  </button>
                </form>

                <div className="text-center text-sm text-white/60">
                  🔒 Your information is secure and confidential
                </div>
              </div>
            </div>
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
