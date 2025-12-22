import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { FaCheck, FaStar, FaRocket, FaArrowRight, FaShoppingCart, FaMobile, FaCode, FaCog, FaBrain } from "react-icons/fa";

// Pricing constants for easy editing
const PRICING_CONSTANTS = {
  tier1: { min: 15000, label: "From $15k" },
  tier2: { min: 35000, max: 60000, label: "From $35k–$60k" },
  tier3: { min: 75000, label: "From $75k+" },
  discovery: { min: 2500, max: 7500, label: "$2.5k–$7.5k" }
};

const servicePricing = {
  "ecommerce": {
    title: "Ecommerce Development Packages",
    subtitle: "Choose the perfect plan to launch your online store",
    plans: [
      {
        name: "Starter Store",
        subtitle: "Perfect for new online businesses",
        icon: <FaShoppingCart className="w-6 h-6" />,
        pricing: "$4,999",
        monthlyOption: "$499/mo for 10 months",
        deliveryTime: "3-4 Weeks",
        popular: false,
        features: [
          "Up to 50 Products",
          "Mobile-Responsive Design",
          "Payment Gateway Integration",
          "Shopping Cart & Checkout",
          "Inventory Management",
          "Order Management System",
          "Basic SEO Setup",
          "SSL Certificate",
          "3 Months Free Support",
          "Analytics Integration",
        ],
        additionalFeatures: [
          "Shopify/WooCommerce Platform",
          "Basic Product Import",
          "Email Notifications",
        ],
        buttonText: "Launch My Store",
      },
      {
        name: "Growth Store",
        subtitle: "For scaling online businesses",
        icon: <FaStar className="w-6 h-6" />,
        pricing: "$9,999",
        monthlyOption: "$999/mo for 10 months",
        deliveryTime: "5-6 Weeks",
        popular: true,
        features: [
          "Unlimited Products",
          "Custom Store Design",
          "Advanced Product Filtering",
          "Multi-Payment Gateways",
          "Advanced Inventory System",
          "Customer Account Portal",
          "Wishlist & Favorites",
          "Product Reviews System",
          "Advanced SEO Package",
          "Email Marketing Integration",
          "Abandoned Cart Recovery",
          "Discount & Coupon System",
          "6 Months Free Support",
          "Performance Optimization",
        ],
        additionalFeatures: [
          "Custom Ecommerce Development",
          "Third-party Integrations",
          "Advanced Analytics",
          "Mobile App Ready API",
        ],
        buttonText: "Scale My Business",
      },
      {
        name: "Enterprise Store",
        subtitle: "For large-scale operations",
        icon: <FaRocket className="w-6 h-6" />,
        pricing: "Custom",
        monthlyOption: "Starting at $2,999/mo",
        deliveryTime: "8-12 Weeks",
        popular: false,
        features: [
          "Unlimited Everything",
          "100% Custom Development",
          "Multi-Store Management",
          "Advanced B2B Features",
          "Custom Workflow Automation",
          "Enterprise Integrations",
          "Advanced Security Features",
          "Custom Admin Dashboard",
          "Multi-Language Support",
          "Multi-Currency Support",
          "Advanced Reporting",
          "White-Label Solution",
          "12 Months Free Support",
          "24/7 Priority Support",
        ],
        additionalFeatures: [
          "Custom Backend Development",
          "Cloud Infrastructure Setup",
          "API Development",
          "Third-party System Integration",
        ],
        buttonText: "Get Enterprise Quote",
      },
    ]
  },
  "mobile-apps": {
    title: "Mobile App Development Packages",
    subtitle: "Build the mobile experience your users will love",
    plans: [
      {
        name: "MVP App",
        subtitle: "Perfect for startups and testing",
        icon: <FaMobile className="w-6 h-6" />,
        pricing: "$7,999",
        monthlyOption: "$799/mo for 10 months",
        deliveryTime: "4-6 Weeks",
        popular: false,
        features: [
          "iOS & Android Apps",
          "Cross-Platform Development",
          "5 Core Features",
          "User Authentication",
          "Basic Push Notifications",
          "App Store Submission",
          "Basic Analytics",
          "Cloud Backend Setup",
          "3 Months Free Support",
          "Bug Fixes Included",
        ],
        additionalFeatures: [
          "React Native Development",
          "Firebase Integration",
          "Basic Admin Panel",
        ],
        buttonText: "Build My MVP",
      },
      {
        name: "Professional App",
        subtitle: "For established businesses",
        icon: <FaStar className="w-6 h-6" />,
        pricing: "$19,999",
        monthlyOption: "$1,999/mo for 10 months",
        deliveryTime: "8-10 Weeks",
        popular: true,
        features: [
          "Native iOS & Android",
          "Custom UI/UX Design",
          "Unlimited Features",
          "Advanced User Management",
          "Real-time Notifications",
          "Offline Functionality",
          "Payment Integration",
          "Social Media Integration",
          "Advanced Analytics",
          "Custom Backend API",
          "Admin Dashboard",
          "App Store Optimization",
          "6 Months Free Support",
          "Performance Monitoring",
        ],
        additionalFeatures: [
          "Native Development (Swift/Kotlin)",
          "Custom Cloud Infrastructure",
          "Third-party Integrations",
          "Advanced Security Features",
        ],
        buttonText: "Launch Professional App",
      },
      {
        name: "Enterprise App",
        subtitle: "For large-scale mobile solutions",
        icon: <FaRocket className="w-6 h-6" />,
        pricing: "Custom",
        monthlyOption: "Starting at $4,999/mo",
        deliveryTime: "12-16 Weeks",
        popular: false,
        features: [
          "Full Native Development",
          "100% Custom Solution",
          "Enterprise-Grade Security",
          "Complex Business Logic",
          "Multi-Platform Support",
          "Advanced Integrations",
          "Custom Workflow Engine",
          "White-Label Solution",
          "Advanced Reporting",
          "Multi-Language Support",
          "Scalable Architecture",
          "Enterprise Support",
          "12 Months Free Support",
          "24/7 Monitoring",
        ],
        additionalFeatures: [
          "Custom Architecture Design",
          "Enterprise Cloud Setup",
          "DevOps & CI/CD Pipeline",
          "Dedicated Development Team",
        ],
        buttonText: "Get Enterprise Quote",
      },
    ]
  },
  "web-development": {
    title: "Web + AI Engagements",
    subtitle: "Systems that drive pipeline growth, cost reduction, and operational efficiency",
    plans: [
      {
        name: "Growth Website",
        subtitle: "For established businesses ready to scale",
        icon: <FaCode className="w-6 h-6" />,
        pricing: PRICING_CONSTANTS.tier1.label,
        monthlyOption: "Starting investment",
        deliveryTime: "4-6 Weeks",
        popular: false,
        acquire: [
          "Up to 15 pages built from approved templates",
          "Technical SEO foundation + on-page optimization",
          "Lead capture system with form analytics",
          "Google Analytics 4 + conversion tracking"
        ],
        convert: [
          "Conversion-focused page design",
          "A/B testing setup for key pages"
        ],
        scale: [
          "Next.js/React architecture",
          "CMS integration for content updates"
        ],
        trust: [
          "SSL + basic security hardening",
          "GDPR-compliant data handling"
        ],
        warranty: "30-day launch warranty (bugs + fixes)",
        buttonText: "Book a Discovery Call",
        ctaRoute: "/contact-us"
      },
      {
        name: "Scale + AI Website",
        subtitle: "Web platform with integrated AI automation",
        icon: <FaBrain className="w-6 h-6" />,
        pricing: PRICING_CONSTANTS.tier2.label,
        monthlyOption: "Premium engagement",
        deliveryTime: "6-8 Weeks",
        popular: true,
        acquire: [
          "Up to 25 pages + custom templates",
          "Technical SEO + content optimization for core pages",
          "Advanced lead generation with scoring",
          "Multi-channel analytics dashboard"
        ],
        convert: [
          "Conversion rate optimization (CRO) audit + implementation",
          "Funnel optimization with heat mapping"
        ],
        scale: [
          "Custom API development",
          "CRM integration (Salesforce, HubSpot, Pipedrive)",
          "Performance monitoring + Core Web Vitals optimization"
        ],
        trust: [
          "Enterprise security + penetration testing",
          "Security & privacy best practices + data retention controls"
        ],
        aiModule: {
          included: "AI lead qualification + CRM routing",
          description: "Production-ready AI that enriches form submissions, scores leads, and routes to appropriate sales reps",
          kpis: "Measures: lead-to-meeting rate, qualification accuracy, routing speed"
        },
        warranty: "30-day launch warranty + optional optimization retainer",
        buttonText: "Book Discovery Call",
        ctaRoute: "/contact-us"
      },
      {
        name: "Enterprise Platform",
        subtitle: "For market leaders and funded companies",
        icon: <FaRocket className="w-6 h-6" />,
        pricing: PRICING_CONSTANTS.tier3.label,
        monthlyOption: "Custom scope",
        deliveryTime: "10-16 Weeks",
        popular: false,
        acquire: [
          "Platform build + scalable page templates",
          "Enterprise SEO strategy + technical implementation",
          "Multi-channel lead generation system",
          "Advanced analytics + executive reporting"
        ],
        convert: [
          "Comprehensive CRO program",
          "Personalization engine + dynamic content"
        ],
        scale: [
          "Microservices architecture + API gateway",
          "Multi-system integrations (CRM, ERP, marketing stack)",
          "Auto-scaling infrastructure + SLA options available"
        ],
        trust: [
          "SOC2-aligned practices + support for compliance",
          "Advanced security + compliance documentation",
          "Multi-region deployment + disaster recovery"
        ],
        aiModule: {
          included: "Multiple AI modules available",
          description: "Choose from: AI support agent, workflow automation, predictive analytics, or custom LLM integration",
          kpis: "Measures: conversion rate, qualified leads, speed/Core Web Vitals, support deflection, reliability"
        },
        warranty: "30-day launch warranty + 90-day optimization period",
        buttonText: "Request a Scope Call",
        ctaRoute: "/contact-us"
      },
    ]
  },
  "custom-solutions": {
    title: "Custom Software Development",
    subtitle: "Tailored solutions for your unique business needs",
    plans: [
      {
        name: "Process Automation",
        subtitle: "Automate your daily operations",
        icon: <FaCog className="w-6 h-6" />,
        pricing: "$12,999",
        monthlyOption: "$1,299/mo for 10 months",
        deliveryTime: "6-8 Weeks",
        popular: false,
        features: [
          "Workflow Analysis",
          "Custom Automation Tools",
          "Data Integration",
          "Reporting Dashboard",
          "User Management",
          "Email Notifications",
          "Basic API Integrations",
          "Cloud Deployment",
          "Training Included",
          "6 Months Free Support",
        ],
        additionalFeatures: [
          "Process Optimization",
          "Basic Third-party Integrations",
          "Standard Security Features",
        ],
        buttonText: "Automate My Business",
      },
      {
        name: "Business Platform",
        subtitle: "Complete business management solution",
        icon: <FaStar className="w-6 h-6" />,
        pricing: "$29,999",
        monthlyOption: "$2,999/mo for 10 months",
        deliveryTime: "10-12 Weeks",
        popular: true,
        features: [
          "Complete Business Analysis",
          "Custom Software Development",
          "Advanced Workflow Engine",
          "Multi-User System",
          "Advanced Reporting",
          "API Development",
          "Third-party Integrations",
          "Mobile-Responsive Interface",
          "Advanced Security",
          "Data Backup & Recovery",
          "Performance Monitoring",
          "Staff Training",
          "12 Months Free Support",
          "Priority Updates",
        ],
        additionalFeatures: [
          "Full-Stack Development",
          "Database Design & Optimization",
          "Cloud Infrastructure Setup",
          "Advanced Integration Capabilities",
        ],
        buttonText: "Build My Platform",
      },
      {
        name: "Enterprise Solution",
        subtitle: "Large-scale custom development",
        icon: <FaRocket className="w-6 h-6" />,
        pricing: "Custom",
        monthlyOption: "Starting at $9,999/mo",
        deliveryTime: "16-24 Weeks",
        popular: false,
        features: [
          "Complete Digital Transformation",
          "Multi-System Integration",
          "Custom Enterprise Architecture",
          "Advanced Security Framework",
          "Scalable Cloud Infrastructure",
          "Real-time Analytics",
          "Custom Workflow Engine",
          "Multi-Platform Support",
          "Advanced User Management",
          "Compliance & Regulations",
          "24/7 Monitoring",
          "Dedicated Support Team",
          "Ongoing Development",
          "Strategic Consulting",
        ],
        additionalFeatures: [
          "Enterprise Architecture Design",
          "DevOps & Infrastructure",
          "Dedicated Development Team",
          "Executive-Level Reporting",
        ],
        buttonText: "Transform My Enterprise",
      },
    ]
  }
};

const PricingSection = ({ service = "web-development" }) => {
  const serviceData = servicePricing[service] || servicePricing["web-development"];

  return (
    <FullContainer className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            💰 Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {serviceData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {serviceData.subtitle}
          </p>
          
          {/* Discovery Sprint Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-blue-800 text-sm font-medium">
              Most projects start with a 5–10 day Discovery Sprint ({PRICING_CONSTANTS.discovery.label}, credited if we build).
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {serviceData.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-gray-200 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600">{plan.subtitle}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.pricing}
                  </div>
                  <div className="text-gray-600 mb-4">{plan.monthlyOption}</div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    🚀 {plan.deliveryTime}
                  </div>
                </div>

                {/* Features - New Structure */}
                <div className="space-y-6 mb-8">
                  {/* Legacy features for non-web-development services */}
                  {plan.features && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">What&apos;s Included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <FaCheck className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* New categorized structure for web-development */}
                  {plan.acquire && (
                    <>
                      {/* Acquire */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-green-600 text-sm uppercase tracking-wider">Acquire</h5>
                        <ul className="space-y-2">
                          {plan.acquire.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <FaCheck className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Convert */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-blue-600 text-sm uppercase tracking-wider">Convert</h5>
                        <ul className="space-y-2">
                          {plan.convert.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <FaCheck className="w-3 h-3 text-blue-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Scale */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-purple-600 text-sm uppercase tracking-wider">Scale</h5>
                        <ul className="space-y-2">
                          {plan.scale.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <FaCheck className="w-3 h-3 text-purple-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Trust */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-orange-600 text-sm uppercase tracking-wider">Trust</h5>
                        <ul className="space-y-2">
                          {plan.trust.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <FaCheck className="w-3 h-3 text-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* AI Module (for tier 2 and 3) */}
                      {plan.aiModule && (
                        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 border border-primary/20">
                          <div className="flex items-center gap-2 mb-2">
                            <FaBrain className="w-4 h-4 text-primary" />
                            <h5 className="font-semibold text-primary text-sm">AI Module Included</h5>
                          </div>
                          <p className="text-gray-700 text-sm mb-2">{plan.aiModule.included}</p>
                          <p className="text-gray-600 text-xs mb-2">{plan.aiModule.description}</p>
                          {plan.aiModule.kpis && (
                            <p className="text-gray-500 text-xs italic">{plan.aiModule.kpis}</p>
                          )}
                          {index === 1 && (
                            <p className="text-primary text-xs font-medium mt-2">
                              + Additional AI modules available
                            </p>
                          )}
                        </div>
                      )}

                      {/* Warranty */}
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-600 text-sm">
                          <strong>Warranty:</strong> {plan.warranty}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Legacy Additional Features */}
                {plan.additionalFeatures && (
                  <div className="space-y-4 mb-8 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900">Bonus Features:</h4>
                    <ul className="space-y-2">
                      {plan.additionalFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <FaStar className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href={plan.ctaRoute || "/contact-us"}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.buttonText}
                  <FaArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Every business is unique. Let&apos;s discuss your specific requirements and create a tailored solution.
            </p>
            <a 
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Book Discovery Call
              <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default PricingSection;