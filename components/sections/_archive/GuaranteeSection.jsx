import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import BgAnimation from "../BgAnimation";
import {
  FaCheckCircle,
  FaRocket,
  FaChartLine,
  FaCode,
  FaMobile,
  FaSearch,
  FaShieldAlt,
  FaBolt,
  FaUserFriends,
} from "react-icons/fa";
import { useRouter } from "next/router";

const GuaranteeSection = () => {
  const router = useRouter();

  const guaranteePoints = [
    {
      icon: <FaRocket className="w-6 h-6 text-primary" />,
      title: "Quality Standards",
      description:
        "We don't launch until Core Web Vitals, accessibility baselines, and performance benchmarks are met. Your site will be enterprise-ready from day one.",
      features: [
        "Core Web Vitals optimization",
        "WCAG 2.1 AA compliance",
        "Security audit included",
      ],
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-primary" />,
      title: "90-Day Optimization",
      description:
        "Post-launch optimization window included with every project. We monitor, analyze, and improve performance based on real user data.",
      features: [
        "Performance monitoring",
        "User behavior analysis",
        "Conversion optimization",
      ],
    },
    {
      icon: <FaCheckCircle className="w-6 h-6 text-primary" />,
      title: "Partnership Approach",
      description:
        "We're invested in your long-term success. Our dedicated account management ensures your project stays on track and exceeds expectations.",
      features: [
        "Dedicated account manager",
        "Regular progress updates",
        "Strategic consultation",
      ],
    },
  ];

  const developmentFeatures = [
    {
      icon: <FaCode className="w-6 h-6 text-primary" />,
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business, goals, and target audience. Through collaborative discussions, we define project requirements, timelines, and resources to create a roadmap for success.",
    },
    {
      icon: <FaMobile className="w-6 h-6 text-primary" />,
      title: "Design & Prototyping",
      description:
        "Our design team creates wireframes and prototypes that reflect the user journey and interface flow. We focus on ensuring intuitive navigation and visually appealing design to engage users from the first interaction.",
    },
    {
      icon: <FaSearch className="w-6 h-6 text-primary" />,
      title: "Development & Coding",
      description:
        "Once designs are approved, we start building the website using the latest technologies and frameworks like React, Node.js, and Laravel. We ensure the website is responsive, secure, and high-performance.",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 text-primary" />,
      title: "Testing & Quality Assurance",
      description:
        "Our team rigorously tests the website across multiple devices and browsers to ensure optimal functionality. We address bugs, fix issues, and ensure the site performs flawlessly under all conditions.",
    },
    {
      icon: <FaBolt className="w-6 h-6 text-primary" />,
      title: "Launch & Deployment",
      description:
        "After final approvals, we deploy the website to the live environment. Our team ensures smooth migration and scaling for minimal downtime and a successful launch.",
    },
    {
      icon: <FaUserFriends className="w-6 h-6 text-primary" />,
      title: "Post-Launch Support & Maintenance",
      description:
        "After launch, we offer ongoing maintenance and support services to keep your website updated, secure, and running efficiently. We regularly monitor performance and provide enhancements as needed.",
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

      <Container className="relative z-10 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold mb-4 block">
            WEB DEVELOPMENT EXCELLENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise-Grade Development with Our
            <span className="relative inline-block">
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
                  Quality Commitment
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
              <span className="absolute inset-0 animate-[glitch_3s_infinite]"></span>
            </span>{" "}
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We {"don't"} just build websites - we create high-performing digital
            assets that drive real business results. Our quality standards ensure your
            investment delivers measurable value from launch day.
          </p>
        </div>

        {/* Main Guarantees Section */}
        <div className="max-w-6xl mx-auto relative mb-28">
          <div className="relative grid md:grid-cols-3 gap-8">
            {guaranteePoints.map((point, index) => (
              <div key={index} className="group relative">
                {/* Card Background with Gradient Border */}
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-primary/20 via-primary/5 group-hover:from-primary/70 to-transparent transition-all">
                  <div className="relative h-full p-8 rounded-2xl bg-white/5 group-hover:bg-gray-950/90 transition-all backdrop-blur-sm">
                    {/* Glowing Orb Background Effect */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-colors duration-500" />

                    {/* Content Container */}
                    <div className="relative z-10">
                      {/* Icon Container */}
                      <div className="mb-8">
                        <div className="relative w-16 h-16 mx-auto">
                          {/* Animated Background Ring */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-rose-500 animate-spin-slow opacity-70" />

                          {/* Icon Background */}
                          <div className="absolute inset-[2px] rounded-full bg-gray-950 flex items-center justify-center">
                            {React.cloneElement(point.icon, {
                              className:
                                "w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300",
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Title with Gradient Underline */}
                      <div className="relative mb-6">
                        <h3 className="text-2xl font-bold text-white/75 text-center group-hover:text-white transition-colors duration-300">
                          {point.title}
                        </h3>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-24 transition-all duration-500" />
                      </div>

                      {/* Description */}
                      <p className="text-white/70 text-center mb-8 group-hover:text-white/90 transition-colors duration-300">
                        {point.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-4">
                        {point.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 group/item"
                          >
                            {/* Feature Icon Container */}
                            <div className="relative flex-shrink-0 w-8 h-8">
                              <div className="absolute inset-0 rounded-full bg-primary/20 group-hover/item:bg-primary/30 transition-colors duration-300" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <FaCheckCircle className="w-4 h-4 text-primary" />
                              </div>
                            </div>

                            {/* Feature Text */}
                            <span className="text-white/70 group-hover/item:text-white/90 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/0 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Development Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold mb-4 block uppercase tracking-wider">
              Our Development Process
            </span>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital Excellence with
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-white ml-3">
                  Cutting-Edge Technology
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
            </h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our development approach combines innovative technologies with
              proven methodologies to deliver exceptional digital experiences
              that drive real business growth.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line - Visible on all screens */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />

            <div className="flex flex-col gap-8">
              {developmentFeatures.map((feature, index) => (
                <div key={index} className="group relative">
                  {/* Container with responsive layout */}
                  <div
                    className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                      index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Step number - Aligned with timeline on mobile */}
                    <div className="relative ml-[0.35rem] md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-8 z-20 mb-4 md:mb-0">
                      <div className="relative w-10 h-10 md:w-12 md:h-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-rose-500 to-primary rounded-full opacity-75 group-hover:animate-pulse" />
                        <div className="absolute inset-[2px] bg-gray-900 rounded-full flex items-center justify-center">
                          <span className="text-sm md:text-xl font-bold text-primary">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content card - Adjusted padding for mobile timeline */}
                    <div
                      className={`w-full pl-16 md:pl-0 md:w-[45%] ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="relative h-full p-6 md:p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl transition-all duration-500 group-hover:border-primary/50 group-hover:translate-y-[-4px] group-hover:shadow-lg group-hover:shadow-primary/20">
                        {/* Icon container - Adjusted positioning for mobile */}
                        <div
                          className={`absolute top-0 ${
                            index % 2 === 0
                              ? "right-8 md:-right-7"
                              : "left-8 md:-left-7"
                          } -translate-y-3/4 md:-translate-y-1/4`}
                        >
                          <div className="relative w-14 h-14">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary via-rose-500 to-primary rounded-lg opacity-75 group-hover:animate-pulse" />
                            <div className="absolute inset-[2px] bg-gray-900 rounded-lg flex items-center justify-center">
                              {React.cloneElement(feature.icon, {
                                className:
                                  "w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300",
                              })}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>

                        {/* Decorative elements */}
                        <div
                          className={`absolute top-0 ${
                            index % 2 === 0 ? "left-0" : "right-0"
                          } w-24 h-24 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500`}
                        />
                        <div
                          className={`absolute bottom-0 ${
                            index % 2 === 0 ? "right-0" : "left-0"
                          } w-24 h-24 bg-primary/5 rounded-tr-full opacity-0 group-hover:opacity-100 transition-all duration-500`}
                        />
                      </div>
                    </div>

                    {/* Empty space - Hidden on mobile */}
                    <div className="hidden md:block md:w-[45%]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats and CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          {/* <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-white/70">Client Satisfaction</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">250+</div>
                <p className="text-white/70">Projects Delivered</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">45%</div>
                <p className="text-white/70">Avg. Conversion Increase</p>
              </div>
            </div> */}

          <p className="text-lg text-white/80 mb-8">
            Join growing B2B companies who have transformed their
            digital presence with our enterprise-grade development services. Start
            your journey to digital excellence today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 group relative">
              <div className="absolute inset-0 bg-primary/40 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <span className="relative z-10">Schedule Strategy Call</span>
            </button>
            <button
              onClick={() => router.push("/our-work")}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              View Our Portfolio
            </button>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default GuaranteeSection;
