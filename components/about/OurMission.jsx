import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

function OurMission() {
  return (
    <FullContainer className="bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="py-20 md:py-24 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <button className="text-secondary bg-secondary/10 px-6 py-2.5 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-secondary/20 transition-colors duration-300">
              Our Mission
            </button>

            <h2 className="text-secondary text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2]">
              Our Mission Help companies and organizations deliver{" "}
              <span className="text-primary relative inline-block group">
                innovative technology
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </span>{" "}
              solutions to{" "}
              <span className="text-primary relative inline-block group">
                power their growth
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </span>{" "}
              by unlocking access to passionate and experienced{" "}
              <span className="text-primary relative inline-block group">
                engineers and solution providers
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </span>
              .
            </h2>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}

export default OurMission;
