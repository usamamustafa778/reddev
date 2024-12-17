import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function ValueStack() {
  const values = [
    {
      title: "Custom Website Development",
      value: "$6,000",
      description: "A website crafted to suit your unique business needs.",
    },
    {
      title: "SEO Optimization Suite",
      value: "$1,000",
      description: "Enhance your online presence with our SEO strategies.",
    },
    {
      title: "One-on-One Strategy Session",
      value: "$500",
      description:
        "Personalized consultation to align your vision with our solutions.",
    },
    {
      title: "30 Days of Dedicated Support",
      value: "$500",
      description: "Ongoing support to ensure your site runs smoothly.",
    },
  ];

  return (
    <FullContainer className="py-32 bg-gradient-to-br from-secondary via-secondary/90 to-secondary relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unmatched Value for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Investment
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore the comprehensive benefits included in our services.
          </p>
        </div>

        {/* Value Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10"></div>

              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  {item.value}
                </p>
                <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Banner */}
        <div className="mt-16 text-center">
          <div
            className="inline-block relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Total Value:{" "}
              <span className="line-through text-red-400">$8,000</span>
            </h3>
            <p className="text-2xl font-bold text-primary mb-6">
              Special Offer: $5,000
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 group relative">
              <div className="absolute inset-0 bg-white/20 rounded-xl transform -skew-x-12 group-hover:translate-x-full transition-transform duration-500"></div>
              <span className="relative z-10">Claim Your Offer</span>
            </button>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl"></div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
