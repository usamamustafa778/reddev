import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

const GuaranteeSection = () => {
  return (
    <FullContainer className="bg-[#E6F9F7] py-20">
      <Container className="container mx-auto flex flex-col items-center text-center">
        <div className="flex items-center mb-6">
          <div className="relative inline-flex items-center justify-center w-20 h-20 bg-primary text-white rounded-full shadow-lg">
            <span className="text-4xl text-orange-400 z-10 font-bold">100%</span>
            <div className="absolute inset-0 border-8 border-white rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-3xl font-semibold text-[#042638] ml-4">
            Satisfaction Guarantee
          </h2>
        </div>
        <p className="text-lg text-gray-700 mb-8 max-w-lg">
          If your new website doesn’t increase your leads within 30 days of launch, we’ll redesign it for free. Your success is our priority!
        </p>
        <button className="bg-[#0EBAB1] text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-[#05a69b] transition duration-300">
          Learn More
        </button>
      </Container>
    </FullContainer>
  );
};

export default GuaranteeSection;
