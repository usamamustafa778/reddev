import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { GoSquareFill } from "react-icons/go";

export default function Benefits() {
  const data = [
    {
      title: "Scalability and Flexibility:",
      description:
        "Software development allows businesses to build scalable solutions that can grow with their needs, offering flexibility to adapt to future changes or demands.",
    },
    {
      title: "Custom Solutions for Business Needs:",
      description:
        "Through software development, companies can create tailored solutions to meet specific business requirements, providing a competitive edge in their industry.",
    },
    {
      title: "Improved Operational Efficiency:",
      description:
        "Custom software can streamline internal processes, automate repetitive tasks, and optimize workflows, leading to improved productivity and cost savings.",
    },
    {
      title: "Enhanced Data Security:",
      description:
        "By developing custom software, businesses can implement robust security measures that protect sensitive data and ensure compliance with industry regulations.",
    },
    {
      title: "Integration with Existing Systems:",
      description:
        "Software development enables seamless integration with existing systems and third-party tools, providing a unified platform that enhances functionality and data flow.",
    },
    {
      title: "Continuous Improvement and Updates:",
      description:
        "Custom software can be updated and improved regularly to keep up with evolving business requirements, technology advancements, and customer needs.",
    },
    {
      title: "Improved Customer Experience:",
      description:
        "Through software development, businesses can create user-friendly applications that enhance customer interaction, driving satisfaction and retention.",
    },
    {
      title: "Access to Advanced Technologies:",
      description:
        "Software development allows businesses to leverage the latest technologies like AI, machine learning, and blockchain, providing innovative solutions for market demands.",
    },
  ];
  
  return (
    <FullContainer>
      <Container>
        <h1 className="text-3xl text-secondary pb-6">Benefits</h1>
        <div>
          {data.map((item, index) => (
            <div key={index} className="flex gap-2 pb-6 text-sm">
              <GoSquareFill className="text-primary" />
              <div className="text-gray-500">
                <span className="font-bold"> {item.title}</span>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
