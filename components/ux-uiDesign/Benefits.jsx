import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { GoSquareFill } from "react-icons/go";

export default function Benefits() {
  const data = [
    {
      title: "Improved Usability:",
      description:
        "A well-designed UI ensures that users can easily navigate and interact with a product, leading to a more intuitive and satisfying experience.",
    },
    {
      title: "Enhanced User Engagement:",
      description:
        "Effective UX design keeps users engaged by providing seamless interactions, clear navigation, and a visually appealing interface.",
    },
    {
      title: "Brand Consistency:",
      description:
        "UI design helps maintain brand consistency across digital platforms, reinforcing brand identity and building trust with users.",
    },
    {
      title: "Higher Conversion Rates:",
      description:
        "By optimizing the user journey and reducing friction points, good UX design can lead to higher conversion rates and increased revenue.",
    },
    {
      title: "Mobile-Friendly Design:",
      description:
        "UX/UI design ensures that digital products are responsive and mobile-friendly, providing a seamless experience across different devices.",
    },
    {
      title: "Accessibility and Inclusivity:",
      description:
        "UX/UI design incorporates accessibility features to ensure that digital products are usable by people of all abilities, promoting inclusivity.",
    },
    {
      title: "Faster Development and Fewer Errors:",
      description:
        "A well-planned UI design can speed up development time by providing clear guidelines, reducing the need for revisions and minimizing design-related errors.",
    },
    {
      title: "Improved Customer Retention:",
      description:
        "A positive user experience encourages customers to return, increasing customer retention and fostering long-term relationships.",
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
