import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Save Time",
      description:
        "Our streamlined processes and experienced team ensure faster project completion without compromising on quality. We handle everything so you can focus on growing your business.",
    },
    {
      title: "Minimum Costs",
      description:
        "We provide cost-effective solutions that don't break the bank. With transparent pricing and no hidden fees, you get high-quality services at the best possible price.",
    },
    {
      title: "Results-Driven Approach",
      description:
        "Our strategies are tailored to deliver measurable results. From increased website traffic to higher conversion rates, we focus on helping you achieve your business goals.",
    },
    {
      title: "Customized Solutions",
      description:
        "Unlike other agencies that use generic templates, we provide fully customized solutions that meet your specific needs, ensuring your business stands out in the digital space.",
    },
    {
      title: "Ongoing Support",
      description:
        "We don't just build your website and leave. Our team provides continuous support and updates to ensure your site remains secure and up-to-date.",
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
            Why Choose Us Over{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Other Agencies?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our approach focuses on saving your time, minimizing costs, and
            driving real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="group relative rounded-2xl transition-all duration-300"
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-100"></div>

              {/* Hover effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl"></div>
              </div>

              {/* Card Content */}
              <div className="relative p-8">
                {/* Number indicator */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/20">
                  <span className="text-primary font-bold">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
};

export default WhyChooseUs;
