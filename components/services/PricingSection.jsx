import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { FaCheck, FaStar, FaRocket, FaArrowRight } from "react-icons/fa";

const PricingSection = () => {
  const allPlans = [
    {
      name: "Startup Package",
      subtitle: "Perfect for small businesses",
      icon: <FaRocket className="w-6 h-6" />,
      pricing: "$2,499",
      monthlyOption: "$249/mo",
      deliveryTime: "2-3 Weeks",
      popular: false,
      features: [
        "5 Pages Custom Design",
        "Mobile Responsive Design",
        "Content Management System",
        "Contact Form Integration",
        "Basic SEO Setup",
        "Social Media Integration",
        "Google Analytics Setup",
        "Speed Optimization",
        "3 Rounds of Revisions",
        "1 Month Free Support",
      ],
      additionalFeatures: [
        "WordPress/Next.js Development",
        "Basic Security Setup",
        "Browser Compatibility",
      ],
      buttonText: "Start Small Business Project",
    },
    {
      name: "Business Growth",
      subtitle: "Ideal for growing companies",
      icon: <FaStar className="w-6 h-6" />,
      pricing: "$4,999",
      monthlyOption: "$499/mo",
      deliveryTime: "4-6 Weeks",
      popular: true,
      features: [
        "Up to 15 Custom Pages",
        "Advanced Responsive Design",
        "Custom CMS Development",
        "Advanced Contact Forms",
        "Complete SEO Package",
        "Social Media Integration",
        "E-commerce Features",
        "Payment Gateway Integration",
        "Custom Animations",
        "Database Integration",
        "Advanced Security Setup",
        "Performance Optimization",
        "5 Rounds of Revisions",
        "3 Months Free Support",
      ],
      additionalFeatures: [
        "React/Next.js Development",
        "API Integration",
        "Custom Admin Dashboard",
        "Marketing Integration",
      ],
      buttonText: "Launch Business Growth",
    },
    {
      name: "Enterprise Solution",
      subtitle: "For large-scale operations",
      icon: <FaRocket className="w-6 h-6" />,
      pricing: "Custom",
      monthlyOption: "Custom Quote",
      deliveryTime: "8-12 Weeks",
      popular: false,
      features: [
        "Unlimited Pages",
        "Custom Design & Development",
        "Enterprise CMS Solution",
        "Complex Form Logic",
        "Advanced SEO & Analytics",
        "Full E-commerce Solution",
        "Multiple Payment Gateways",
        "Custom API Development",
        "Advanced Security Features",
        "Load Balancing Setup",
        "Database Optimization",
        "Scalable Architecture",
        "Unlimited Revisions",
        "12 Months Free Support",
      ],
      additionalFeatures: [
        "Full-Stack Development",
        "Cloud Infrastructure",
        "CI/CD Pipeline Setup",
        "24/7 Priority Support",
        "Custom Feature Development",
      ],
      buttonText: "Schedule Enterprise Consultation",
    },
  ];

  return (
    <FullContainer className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-4 block uppercase tracking-wider">
            Flexible Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your Path to
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 ml-3">
                Digital Excellence
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
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that best
            fits your business needs and scale as you grow.
          </p>
        </div>

        {/* Monthly/Annual Toggle - Optional */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-xl inline-flex items-center">
            <button className="px-6 py-2 rounded-lg bg-white shadow text-gray-900 font-semibold">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-lg text-gray-600 hover:text-gray-900 transition-colors">
              Annual
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPlans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className={`group relative rounded-2xl h-fit transition-all duration-300 hover:shadow-xl ${
                plan.popular ? "scale-105 lg:scale-110" : ""
              }`}
            >
              {/* Card background with refined shadow */}
              <div
                className={`absolute inset-0 rounded-2xl shadow-lg ${
                  plan.popular
                    ? "bg-white border-2 border-primary/20"
                    : "bg-white border border-gray-200"
                }`}
              ></div>

              {/* Popular badge with enhanced design */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Enhanced Card Content */}
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{plan.subtitle}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-primary/5 transition-colors duration-300">
                    {plan.icon}
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    <span className="text-primary">{plan.pricing}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    or {plan.monthlyOption}
                  </div>
                </div>

                <div className="text-gray-600 mb-6 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Delivery Time:{" "}
                  <span className="text-gray-900 font-medium">
                    {plan.deliveryTime}
                  </span>
                </div>

                {/* Feature lists with enhanced styling */}
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      Core Features
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 mb-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <FaCheck className="w-3 h-3 text-primary" />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.additionalFeatures && (
                    <div>
                      <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                        Additional Features
                      </div>
                      {plan.additionalFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 mb-3">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <FaCheck className="w-3 h-3 text-primary" />
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  className={`w-full inline-flex items-center justify-center px-6 py-4 ${
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : "bg-gray-900 hover:bg-gray-800"
                  } text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 group relative`}
                >
                  <span className="relative z-10">
                    {plan.name === "Startup Package" && "Launch Your Website"}
                    {plan.name === "Business Growth" && "Accelerate Your Growth"}
                    {plan.name === "Enterprise Solution" && "Transform Your Business"}
                  </span>
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            All plans include: SSL Certificate, Basic Analytics, and our 30-day satisfaction guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg transition-colors duration-300 flex items-center gap-2">
              View Detailed Feature Comparison
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-6 py-3 bg-white border-2 border-primary/20 hover:border-primary text-gray-900 rounded-lg transition-colors duration-300">
              Book a Free Strategy Call
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default PricingSection;
