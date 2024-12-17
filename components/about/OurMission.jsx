import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

function OurMission() {
  return (
    <FullContainer className="bg-secondary">
      <Container className="py-12">
        <button className="text-white bg-gray-700 p-3 border border-gray-400 rounded-md mb-6">Our Mission</button>
        <p className="text-white text-3xl font-semibold">
          Our Mission Help companies and organizations deliver <span className="text-primary"> innovative
          technology</span>  solutions to <span className="text-primary"> power their growth</span> by unlocking access to
          passionate and experienced <span className="text-primary">  engineers and solution providers.</span>
        </p>
      </Container>
    </FullContainer>
  );
}

export default OurMission;
