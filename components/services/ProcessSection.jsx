import React from "react";
import BgAnimation from "../BgAnimation";

export default function ProcessSection({ 
  heading = "Our Development Process",
  description = "We follow a proven methodology to deliver exceptional results",
  processData = null 
}) {
  const defaultProcesses = [
    {
      number: 1,
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business, goals, and target audience. Through collaborative discussions, we define project requirements, timelines, and resources to create a roadmap for success.",
    },
    {
      number: 2,
      title: "Design & Prototyping",
      description:
        "Our design team creates wireframes and prototypes that reflect the user journey and interface flow. We focus on ensuring intuitive navigation and visually appealing design to engage users from the first interaction.",
    },
    {
      number: 3,
      title: "Development & Coding",
      description:
        "Once designs are approved, we start building the website using the latest technologies and frameworks like React, Node.js, and Laravel. We ensure the website is responsive, secure, and high-performance.",
    },
    {
      number: 4,
      title: "Testing & Quality Assurance",
      description:
        "Our team rigorously tests the website across multiple devices and browsers to ensure optimal functionality. We address bugs, fix issues, and ensure the site performs flawlessly under all conditions.",
    },
    {
      number: 5,
      title: "Launch & Deployment",
      description:
        "After final approvals, we deploy the website to the live environment. Our team ensures smooth migration and scaling for minimal downtime and a successful launch.",
    },
    {
      number: 6,
      title: "Post-Launch Support & Maintenance",
      description:
        "After launch, we offer ongoing maintenance and support services to keep your website updated, secure, and running efficiently. We regularly monitor performance and provide enhancements as needed.",
    },
  ];

  // Convert processData format from JSON to component format
  const processes = processData ? processData.map((item, index) => ({
    number: index + 1,
    title: item.heading,
    description: `${item.keypoint.join('. ')}.`,
    image: item.img
  })) : defaultProcesses;

  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-950 relative overflow-hidden">
      <BgAnimation />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 animt bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-semibold mb-4 block uppercase tracking-wider">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {heading}
            <span className="relative ml-3">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-white">
                
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
            {description}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {processes.map((process) => (
              <div key={process.number} className="group relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-rose-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

                <div className="relative bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group-hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16">
                        {/* Animated Number Container */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-500 to-orange-400 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300 animate-pulse" />
                        <div className="absolute inset-0.5 bg-gray-800 rounded-lg flex items-center justify-center">
                          <span className="font-bold text-2xl bg-gradient-to-br from-red-400 via-rose-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                            {process.number}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-red-400 transition-colors duration-300">
                        {process.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div className="absolute -right-2 -bottom-2 w-32 h-32 bg-gradient-to-br from-red-600/20 via-rose-500/20 to-orange-400/20 rounded-br-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="absolute right-0 bottom-0 w-1 h-20 bg-gradient-to-b from-transparent via-red-500/30 to-transparent rounded-full group-hover:h-full transition-all duration-500" />

                  {/* Cyber Lines */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-4 w-8 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent group-hover:w-16 transition-all duration-300" />
                    <div className="absolute bottom-0 right-4 w-8 h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
