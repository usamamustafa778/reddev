import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

const PricingSection = () => {
  const allPlans = [
    {
      name: "Basic Plan",
      pricing: "$499",
      deliveryTime: "7-10 Days",
      popular: false,
      features: {
        feature1: "5 Pages Website",
        feature2: "Mobile Responsive Design",
        feature3: "Content Management System",
        feature4: "Contact Form Integration",
        feature5: "Basic SEO Setup",
        feature6: "Social Media Integration",
      },
    },
    {
      name: "Professional",
      pricing: "$999",
      deliveryTime: "14-21 Days",
      popular: true,
      features: {
        feature1: "10 Pages Website",
        feature2: "Advanced Responsive Design",
        feature3: "Custom CMS Integration",
        feature4: "Advanced Contact Forms",
        feature5: "Complete SEO Setup",
        feature6: "Social Media Integration",
        feature7: "E-commerce Features",
        feature8: "Payment Gateway Integration",
      },
    },
    {
      name: "Enterprise",
      pricing: "$1999",
      deliveryTime: "21-30 Days",
      popular: false,
      features: {
        feature1: "Unlimited Pages",
        feature2: "Custom Design & Development",
        feature3: "Advanced CMS with Custom Features",
        feature4: "Complex Form Logic & Integration",
        feature5: "Advanced SEO & Analytics",
        feature6: "Full E-commerce Solution",
        feature7: "Multiple Payment Gateways",
        feature8: "Custom API Integration",
        feature9: "Advanced Security Features",
      },
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the pricing plan that suits your needs and start growing your
            business today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPlans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className={`group relative rounded-2xl h-fit transition-all duration-300 ${
                plan.popular ? "scale-105 lg:scale-110" : ""
              }`}
            >
              {/* Card background */}
              <div
                className={`absolute inset-0 bg-white rounded-2xl shadow-lg border ${
                  plan.popular ? "border-primary/20" : "border-gray-100"
                }`}
              ></div>

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Hover effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl"></div>
              </div>

              {/* Card Content */}
              <div className="relative p-8">
                {/* Plan name and price */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <div className="text-2xl font-bold text-primary">
                    {plan.pricing}
                  </div>
                </div>

                {/* Delivery time */}
                <div className="text-lg font-medium text-gray-700 mb-6">
                  Delivery Time: {plan.deliveryTime}
                </div>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {Object.values(plan.features).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <span className="text-primary text-sm">✓</span>
                      </span>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action button */}
                <button
                  className={`w-full inline-flex items-center justify-center px-8 py-4 ${
                    plan.popular ? "bg-primary" : "bg-gray-900"
                  } text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-primary transition-all duration-300 group relative`}
                >
                  <div className="absolute inset-0 bg-primary/40 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Select Plan</span>
                </button>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
};

export default PricingSection;
