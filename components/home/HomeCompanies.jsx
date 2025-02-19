import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";

export default function HomeCompanies() {
  return (
    <>
      <FullContainer className=" bg-white   ">
        <Container>
          <h1 className="text-4xl font-bold text-heading py-12 text-center">Brands Powered By reddev</h1>
          <div className="flex items-center md:gap-16 lg:gap-24 gap-8  justify-center overflow-scroll sm:overflow-visible">
            <Image src="/img/industry5.png" alt="image" width={120} height={120} />
            <Image src="/img/industry7.png" alt="image" width={120} height={120} />
            <Image src="/img/industry3.png" alt="image" width={100} height={100} />
            <Image src="/img/industry11.png" alt="image" width={120} height={120} />
          </div>
        </Container>
      </FullContainer>
    </>
  );
}
