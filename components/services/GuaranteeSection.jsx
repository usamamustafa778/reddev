import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

const GuaranteeSection = () => {
  return (
    <FullContainer className="py-32 bg-gradient-to-br from-secondary via-secondary/90 to-secondary relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl p-12 border border-white/10 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-white/20 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-white/20 rounded-br-2xl"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            {/* Percentage Circle */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <div className="absolute inset-2 bg-gradient-to-br from-primary/20 to-transparent rounded-full animate-pulse"></div>
                <span className="relative text-5xl text-white font-bold z-10 group-hover:scale-110 transition-transform duration-300">
                  100%
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Satisfaction{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                  Guarantee
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl">
                If your new website doesn't increase your leads within 30 days
                of launch, we'll redesign it for free. Your success is our
                priority!
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 group relative">
                <div className="absolute inset-0 bg-primary/40 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <span className="relative z-10">Learn More</span>
              </button>
            </div>
          </div>

          {/* Background Accent */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default GuaranteeSection;
