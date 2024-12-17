import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function Banner() {
  return (
    <FullContainer className="bg-primary h-[60vh] md:h-[70vh]">
      <Container className="flex flex-col justify-center  gap-4 text-white">
        <h1 className="text-5xl  font-bold text-start sm:text-center">
          Web Development
        </h1>
        <p className="text-2xl text-start sm:text-center">
          Encompasses building and maintaining websites, including front-end
          (user interface) and back-end (server-side) development.
        </p>
      </Container>
    </FullContainer>
  );
}
