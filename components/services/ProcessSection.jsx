import React from "react";
import {
  Search,
  PenTool,
  Rocket,
  Code2,
  LineChart,
  Settings,
} from "lucide-react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

const iconComponents = {
  Search: Search,
  PenTool: PenTool,
  Rocket: Rocket,
  Code2: Code2,
  LineChart: LineChart,
  Settings: Settings,
};

export default function ProcessSection({ heading, des, data }) {
  return (
    <FullContainer className="py-32 bg-gradient-to-br from-secondary via-secondary/90 to-secondary relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {heading}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {des}
          </p>
        </div>

        {/* Enhanced Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={200 * index}
              className="group relative rounded-2xl transition-all duration-300"
            >
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-xl border border-white/10"></div>

              {/* Hover effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl"></div>
              </div>

              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon Container */}
                <div className="mb-8">
                  <div className="relative inline-flex p-3 rounded-xl bg-white/10">
                    {React.createElement(
                      iconComponents[item.icon] || Settings,
                      {
                        className:
                          "w-10 h-10 text-primary group-hover:text-white transition-colors duration-300",
                        strokeWidth: 1.5,
                      }
                    )}
                    <div className="absolute inset-0 bg-primary/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">
                  {item.heading}
                </h3>

                {/* Key Points */}
                <ul className="space-y-4">
                  {item.keypoint.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-white/80 group-hover:text-white transition-colors duration-300"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                        <span className="text-primary group-hover:text-white text-sm transition-colors duration-300">
                          ✓
                        </span>
                      </span>
                      <span className="text-base leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:border-2 group-hover:border-primary/50"></div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
