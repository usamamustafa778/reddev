import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceDescription() {
  return (
    <FullContainer>
      <Container className="py-24">
        <div className="text-gray-500 flex  flex-col gap-2">
          <h1 className="text-3xl font-bold text-secondary">
            Service Description
          </h1>
          <p>
            reddev’s Mobile App Development Services encompasses building of
            this field encompasses various platforms, including iOS (Apple),
            Android (Google), and others, and it plays a crucial role in shaping
            the way people interact with technology in our increasingly
            mobile-driven world. Mobile developers work on designing, coding,
            testing, and optimizing mobile apps to provide users with seamless
            and efficient digital experiences on their handheld devices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 pt-12">
          <div className=" bg-cover w-auto h-[470px] overflow-hidden relative">
            <Image
              className="rounded-xl object-cover"
              src="/img/description1.webp"
              alt="img"
              layout="fill" // This will allow the image to fill the entire div
              objectFit="cover" // Ensures the image scales and covers the entire div
            />
          </div>

          <div className="flex flex-col justify-between py-6 min-h-[400px]">
            <div className="flex flex-row gap-4 border-b pb-4">
              <FaCheckCircle className="text-primary text-3xl" />
              <h3 className="text-xl text-secondary">Discovery and Planning</h3>
            </div>
            <div className="flex flex-row gap-4 border-b pb-4">
              <FaCheckCircle className="text-primary text-3xl" />
              <h3 className="text-xl text-secondary">Design and User Experience</h3>
            </div>
            <div className="flex flex-row gap-4 border-b pb-4">
              <FaCheckCircle className="text-primary text-3xl" />
              <h3 className="text-xl text-secondary">Development</h3>
            </div>
            <div className="flex flex-row gap-4 border-b pb-4">
              <FaCheckCircle className="text-primary text-3xl" />
              <h3 className="text-xl text-secondary">Testing</h3>
            </div>
            <div className="flex flex-row gap-4 border-b pb-4">
              <FaCheckCircle className="text-primary text-3xl" />
              <h3 className="text-xl text-secondary">Deployment</h3>
            </div>
            <div className="flex flex-row gap-4 border-b pb-4">
              <FaCheckCircle className="text-primary text-3xl" />
              <h3 className="text-xl text-secondary">Maintenance and Updates</h3>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
