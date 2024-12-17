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
        "We provide cost-effective solutions that don’t break the bank. With transparent pricing and no hidden fees, you get high-quality services at the best possible price.",
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
        "We don’t just build your website and leave. Our team provides continuous support and updates to ensure your site remains secure and up-to-date.",
    },
  ];

  return (
    <FullContainer className="bg-gray-100 py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Why Choose Us Over Other Agencies?
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-600">
            Our approach focuses on saving your time, minimizing costs, and
            driving real results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[#0EBAB1] mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
};

export default WhyChooseUs;
