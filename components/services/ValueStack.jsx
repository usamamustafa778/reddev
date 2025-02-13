import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import BgAnimation from "../BgAnimation";
import {
  FaLightbulb,
  FaRocket,
  FaCogs,
  FaUserFriends,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

export default function ValueStack() {
  const valuePropositions = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation-Driven Development",
      description:
        "We don't just build websites; we create digital experiences that set new industry standards",
      benefits: [
        "Cutting-edge tech stack implementation",
        "Future-proof architecture",
        "Innovative user experiences",
        "Performance-first approach",
      ],
      highlight: "Latest Technologies",
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Accelerated Business Growth",
      description:
        "Transform your digital presence into a powerful growth engine for your business",
      benefits: [
        "Conversion-optimized design",
        "Scalable solutions",
        "Market-ready features",
        "Growth-focused strategy",
      ],
      highlight: "Proven Results",
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Seamless Integration",
      description:
        "Perfect harmony between your business processes and digital solutions",
      benefits: [
        "Custom API development",
        "Third-party integrations",
        "Workflow automation",
        "Business process optimization",
      ],
      highlight: "Enhanced Efficiency",
    },
    {
      icon: <FaUserFriends className="w-8 h-8" />,
      title: "User-Centric Design",
      description:
        "Creating engaging experiences that keep your users coming back",
      benefits: [
        "Intuitive interfaces",
        "Accessibility-first design",
        "User journey optimization",
        "Engagement-focused features",
      ],
      highlight: "Enhanced Engagement",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description:
        "Protecting your digital assets with industry-leading security measures",
      benefits: [
        "Advanced security protocols",
        "Regular security audits",
        "Data protection compliance",
        "Secure authentication systems",
      ],
      highlight: "Total Protection",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Measurable Impact",
      description:
        "Delivering quantifiable results that directly impact your bottom line",
      benefits: [
        "Performance analytics",
        "Conversion tracking",
        "ROI measurement",
        "Growth metrics",
      ],
      highlight: "Data-Driven Success",
    },
  ];

  return (
    <FullContainer className="relative bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-950 text-white overflow-hidden">
      <BgAnimation />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 animt bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10 py-24 md:py-32">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-primary font-semibold mb-4 block uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transforming Visions into
            <span className="relative ml-3">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-white">
                Digital Reality
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0L50 7L100 0L100 8L0 8Z"
                  fill="currentColor"
                  className="text-primary/20"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We combine technical expertise with strategic thinking to deliver
            solutions that drive real business growth and create lasting impact.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuePropositions.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="group relative"
            >
              {/* Card Background */}
              <div
                className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 
                            group-hover:bg-white/[0.05] transition-all duration-300"
              ></div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 mb-6">{item.description}</p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {item.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-white/70 group-hover:text-white/90 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help achieve your business goals
            and create exceptional digital experiences for your users.
          </p>
          <button
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg 
                             font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 
                             group relative"
          >
            <div
              className="absolute inset-0 bg-white/20 rounded-xl transform -skew-x-12 
                            group-hover:translate-x-full transition-transform duration-500"
            ></div>
            <span className="relative z-10">Schedule a Discovery Call</span>
          </button>
        </div>
      </Container>
    </FullContainer>
  );
}
