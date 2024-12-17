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
            We offer Web Development Services to businesses of all sizes to give
            them a boost.
          </p>
          <p>
            Web development involves a range of tasks, it involves a range of
            tasks, including designing the user interface, developing the
            back-end functionality, and ensuring that the website or web app is
            responsive and user-friendly.
          </p>
          <p>
            Web development encompasses both the visual aspects of a website and
            its underlying technical infrastructure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 pt-12">
          <div className=" bg-cover w-auto h-[420px] overflow-hidden relative">
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
              <h3 className="text-xl text-secondary">Front-end Development</h3>
            </div>
            <div className="flex flex-row gap-4 border-b pb-4">
              <FaCheckCircle className="text-primary text-3xl" />
              <h3 className="text-xl text-secondary">Back-end Developmentt</h3>
            </div>
            <div className="flex flex-row gap-4 border-b pb-4">
              <FaCheckCircle className="text-primary text-3xl" />
              <h3 className="text-xl text-secondary">Content Management</h3>
            </div>
            <div className="flex flex-row gap-4 border-b pb-4">
              <FaCheckCircle className="text-primary text-3xl" />
              <h3 className="text-xl text-secondary">E-commerce Features</h3>
            </div>
            <div className="flex flex-row gap-4 border-b pb-4">
              <FaCheckCircle className="text-primary text-3xl" />
              <h3 className="text-xl text-secondary">Responsive Design</h3>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
