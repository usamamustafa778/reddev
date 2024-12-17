import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { GoSquareFill } from "react-icons/go";

export default function Benefits() {
  const data = [
    {
      title: "Tailored to Specific Needs:",
      description:
        "Custom software is designed to address your organization's unique requirements and challenges, ensuring a perfect fit for your operations.",
    },
    {
      title: "Enhanced Efficiency: ",
      description:
        "Custom solutions streamline processes, automate tasks, and eliminate inefficiencies, boosting productivity and reducing manual work.",
    },
    {
      title: "Scalability:",
      description:
        " As your business grows, custom software can easily adapt and scale to accommodate increased data, users, and functionality.",
    },
    {
      title: "Cost Savings: ",
      description:
        " While the initial investment may be higher, custom software often leads to long-term cost savings by reducing the need for multiple third-party applications and licenses.",
    },
    {
      title: "Competitive Advantage:",
      description:
        "  Custom software can provide a competitive edge by enabling innovation, quicker response to market changes, and differentiation from competitors.",
    },
    {
      title: "Data Security:",
      description:
        " You have control over security measures, ensuring that sensitive data is protected according to your organization's standards and compliance requirements.",
    },
    {
      title: "Integration:",
      description:
        "Custom software can be seamlessly integrated with existing systems and applications, optimizing data flow and reducing data silos.",
    },
    {
      title: "Maintenance and Support:",
      description:
        " You have the flexibility to choose ongoing maintenance and support options, ensuring that your software remains up-to-date and functional.",
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
