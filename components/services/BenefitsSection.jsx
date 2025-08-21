import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { CheckCircle2, ArrowRight, TrendingUp, Clock, DollarSign, Shield } from "lucide-react";
import { motion } from "framer-motion";

const serviceBenefits = {
  "ecommerce": {
    mainBenefit: "Watch Your Bank Account Explode",
    description: "Stop losing money to cart abandonment and competitor theft. Our psychology-driven ecommerce systems force visitors to buy and keep coming back for more.",
    benefits: [
      {
        icon: TrendingUp,
        title: "Higher Conversion Rates",
        description: "Proven design patterns that convert 3x better than industry average",
        metric: "+300% sales"
      },
      {
        icon: DollarSign,
        title: "Increased Average Order Value",
        description: "Smart upselling and cross-selling features built in",
        metric: "+45% AOV"
      },
      {
        icon: Clock,
        title: "Faster Time to Market",
        description: "Get your store live and selling in record time",
        metric: "2-4 weeks"
      },
      {
        icon: Shield,
        title: "Secure & Compliant",
        description: "PCI compliant with enterprise-grade security",
        metric: "100% secure"
      }
    ]
  },
  "mobile-apps": {
    mainBenefit: "Create Your Army of Addicted Customers",
    description: "Forget apps that get deleted in 30 days. We build mobile experiences so irresistible, users become obsessed and tell everyone about you.",
    benefits: [
      {
        icon: TrendingUp,
        title: "Higher User Engagement",
        description: "Push notifications and app features keep users coming back",
        metric: "+40% retention"
      },
      {
        icon: Clock,
        title: "Faster Performance",
        description: "Native apps that load instantly and work offline",
        metric: "99.9% uptime"
      },
      {
        icon: DollarSign,
        title: "Revenue Growth",
        description: "In-app purchases and premium features drive revenue",
        metric: "+250% ROI"
      },
      {
        icon: Shield,
        title: "App Store Success",
        description: "Optimized for app store approval and featuring",
        metric: "4.8+ rating"
      }
    ]
  },
  "web-development": {
    mainBenefit: "Turn Your Website Into a 24/7 Sales Machine",
    description: "Stop paying for websites that just sit there looking pretty. We build conversion monsters that work around the clock to steal customers from your competitors.",
    benefits: [
      {
        icon: TrendingUp,
        title: "Better SEO Rankings",
        description: "Optimized code and structure for search engine success",
        metric: "Top 3 Google"
      },
      {
        icon: Clock,
        title: "Lightning Fast Speed",
        description: "Optimized performance that loads in under 3 seconds",
        metric: "3x faster"
      },
      {
        icon: DollarSign,
        title: "More Conversions",
        description: "Strategic design that guides visitors to take action",
        metric: "+50% leads"
      },
      {
        icon: Shield,
        title: "Mobile Responsive",
        description: "Perfect experience across all devices and screen sizes",
        metric: "100% mobile"
      }
    ]
  },
  "custom-solutions": {
    mainBenefit: "Escape the Manual Work Prison Forever",
    description: "Imagine working 20 hours but earning like you worked 80. Our automation systems eliminate soul-crushing manual work and give you the freedom to focus on what actually makes money.",
    benefits: [
      {
        icon: Clock,
        title: "Process Automation",
        description: "Eliminate repetitive tasks and human error completely",
        metric: "40+ hrs saved"
      },
      {
        icon: DollarSign,
        title: "Cost Reduction",
        description: "Reduce operational costs through smart automation",
        metric: "60% cost cut"
      },
      {
        icon: TrendingUp,
        title: "Scalable Growth",
        description: "Systems that grow with your business automatically",
        metric: "10x capacity"
      },
      {
        icon: Shield,
        title: "Data Security",
        description: "Enterprise-grade security for your business data",
        metric: "Bank-level"
      }
    ]
  }
};

export default function BenefitsSection({ service, processData }) {
  const config = serviceBenefits[service] || serviceBenefits["web-development"];

  return (
    <FullContainer className="py-24 bg-gradient-to-b from-white to-gray-50">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Proven Benefits
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {config.mainBenefit}
            <span className="block text-lg md:text-xl font-normal text-gray-600 mt-4">
              {config.description}
            </span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {config.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Metric */}
                <div className="text-2xl font-bold text-primary mb-2">
                  {benefit.metric}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Preview */}
        {processData && (
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Proven Process
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a systematic approach that ensures your project is delivered on time, on budget, and exceeds expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {processData.slice(0, 3).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {step.heading}
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    {step.keypoint.slice(0, 2).map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors">
                Learn More About Our Process
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </Container>
    </FullContainer>
  );
}

