import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

function CallToAction() {
  return (
    <FullContainer className="h-auto overflow-hidden bg-custom-gradient flex flex-col gap-24 pt-24 pb-[-25] from-innerbanner to-secondary  ">
      <Container className="flex flex-col items-center sm:px-[50px] lg:px-[100px] ">
        <div className="text-white items-center flex flex-col justify-center gap-3  max-w-[1000px] ">
          <h2 className="text-4xl sm:text-5xl  font-bold text-center">
          Ready to accelerate your software development?
          </h2>
          <p className="text-lg text-center">
            Take the first step towards a brighter future and supercharge your
            business with cutting-edge technologies, expert guidance, and
            unparalleled support.
          </p>
          <button className="p-7 rounded-full text-xl mt-6  bg-primary hover:bg-white text-white hover:text-black">
            Schedule Now
          </button>
        </div>
      </Container>
      <div className="bg-cover flex flex-row w-[auto]  ">
        <Image
          className="-rotate-6 rounded-2xl"
          src="/img/calltoaction.webp"
          alt="image"
          width={1200} 
          height={1200} 
        />
        <Image
          className="rotate-6 rounded-2xl"
          src="/img/calltoaction2.webp"
          alt="image"
          width={1200} 
          height={1200}
        />
        <Image
          className="-rotate-6 rounded-2xl"
          src="/img/calltoaction3.webp"
          alt="image"
          width={1200} 
          height={1200}
        />
        <Image
          className="rotate-6 rounded-2xl"
          src="/img/calltoaction4.webp"
          alt="image"
          width={1200} 
          height={1200}
        />
      </div>
    </FullContainer>
  );
}

export default CallToAction;
