import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { FaCheck, FaStar, FaRocket, FaArrowRight, FaShoppingCart, FaMobile, FaCode, FaCog } from "react-icons/fa";

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
    title: "Web Development Packages",
    subtitle: "Professional websites that drive results",
    plans: [
      {
        name: "Business Website",
        subtitle: "Perfect for small businesses",
        icon: <FaCode className="w-6 h-6" />,
        pricing: "$2,999",
        monthlyOption: "$299/mo for 10 months",
        deliveryTime: "2-3 Weeks",
        popular: false,
        features: [
          "5-10 Custom Pages",
          "Mobile Responsive Design",
          "Content Management System",
          "Contact Form Integration",
          "Basic SEO Setup",
          "Google Analytics",
          "Social Media Integration",
          "SSL Certificate",
          "Speed Optimization",
          "3 Months Free Support",
        ],
        additionalFeatures: [
          "WordPress/Next.js Development",
          "Basic Security Setup",
          "Browser Compatibility",
        ],
        buttonText: "Launch My Website",
      },
      {
        name: "Professional Website",
        subtitle: "For growing companies",
        icon: <FaStar className="w-6 h-6" />,
        pricing: "$6,999",
        monthlyOption: "$699/mo for 10 months",
        deliveryTime: "4-6 Weeks",
        popular: true,
        features: [
          "15-25 Custom Pages",
          "Advanced Responsive Design",
          "Custom CMS Development",
          "Advanced Forms & Logic",
          "Complete SEO Package",
          "E-commerce Ready",
          "Payment Integration",
          "Custom Animations",
          "Database Integration",
          "Performance Optimization",
          "Advanced Security",
          "6 Months Free Support",
        ],
        additionalFeatures: [
          "React/Next.js Development",
          "API Integration",
          "Custom Admin Dashboard",
          "Marketing Tool Integration",
        ],
        buttonText: "Build Professional Site",
      },
      {
        name: "Enterprise Website",
        subtitle: "For large-scale operations",
        icon: <FaRocket className="w-6 h-6" />,
        pricing: "Custom",
        monthlyOption: "Starting at $1,999/mo",
        deliveryTime: "8-12 Weeks",
        popular: false,
        features: [
          "Unlimited Pages",
          "100% Custom Development",
          "Enterprise CMS Solution",
          "Complex Business Logic",
          "Advanced SEO & Analytics",
          "Full E-commerce Platform",
          "Multiple Integrations",
          "Custom API Development",
          "Advanced Security Features",
          "Scalable Architecture",
          "Multi-Language Support",
          "12 Months Free Support",
        ],
        additionalFeatures: [
          "Full-Stack Development",
          "Cloud Infrastructure",
          "CI/CD Pipeline Setup",
          "24/7 Priority Support",
        ],
        buttonText: "Get Enterprise Quote",
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            💰 Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {serviceData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {serviceData.subtitle}
          </p>
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

                {/* Features */}
                <div className="space-y-4 mb-8">
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

                {/* Additional Features */}
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

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.buttonText}
                  <FaArrowRight className="w-4 h-4" />
                </button>
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
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors">
              Schedule Free Consultation
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default PricingSection;