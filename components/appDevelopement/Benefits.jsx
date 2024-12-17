import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { GoSquareFill } from "react-icons/go";

export default function Benefits() {
  const data = [
    {
      title: "Expanded Market Reach:",
      description:
        "Mobile apps enable businesses to reach a broader audience as smartphones and tablets are ubiquitous and accessible to a large portion of the global population.",
    },
    {
      title: "Enhanced User Experience: ",
      description:
        "Mobile apps are designed to provide a user-friendly and intuitive experience, often leading to higher user engagement and customer satisfaction.",
    },
    {
      title: "Improved Brand Loyalty:",
      description:
        " A well-designed and functional mobile app can foster brand loyalty and keep customers coming back for more.",
    },
    {
      title: "Increased Sales and Revenue: ",
      description:
        " Mobile apps can serve as a powerful sales and revenue channel through in-app purchases, subscriptions, and e-commerce functionalities.",
    },
    {
      title: "Access to Device Features:",
      description:
        "  Developers can leverage device-specific features like GPS, camera, and sensors to create innovative and personalized experiences.",
    },
    {
      title: "Offline Access: ",
      description:
        "Many mobile apps offer offline functionality, allowing users to access content and perform tasks even without an internet connection.",
    },
    {
      title: "Push Notifications: ",
      description:
        " Apps can send push notifications to users, keeping them informed, engaged, and prompting action.",
    },
    {
      title: "Data Analytics:",
      description:
        "Mobile apps provide valuable data on user behavior, enabling businesses to make data-driven decisions and refine their strategies.",
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
