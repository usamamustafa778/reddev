import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function Banner() {
  return (
    <FullContainer className="bg-colorBanner">
      <Container>
        <div className="py-16">
          <h2 className="elementHeading2 py-20 text-white text-center mx-24 lg:mx-80">
            Portfolio
          </h2>
        </div>
      </Container>
    </FullContainer>
  );
}
