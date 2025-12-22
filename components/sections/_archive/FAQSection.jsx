import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import BgAnimation from "../BgAnimation";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What services do you specialize in?",
      answer:
        "We specialize in full-stack web development, mobile app development, UI/UX design, and blockchain solutions. Our expertise includes React, Next.js, Node.js, React Native, and various Web3 technologies. We create everything from corporate websites to complex decentralized applications.",
    },
    {
      question: "How long does it typically take to complete a project?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements and project goals.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process follows an agile methodology with six key phases: Discovery & Planning, Design, Development, Testing & QA, Deployment, and Maintenance. We maintain transparent communication throughout, with regular updates and milestone reviews to ensure your project stays on track.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes, we offer comprehensive post-launch support and maintenance packages. These include regular updates, security patches, performance monitoring, and technical support. We can tailor a maintenance plan specific to your needs, ensuring your application remains secure and up-to-date.",
    },
    {
      question: "How do you handle project pricing?",
      answer:
        "We offer flexible pricing models including fixed-price projects and time-and-materials arrangements. After understanding your requirements, we provide a detailed proposal outlining costs, timelines, and deliverables. We believe in transparent pricing with no hidden fees.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We stay current with modern tech stacks including React, Next.js, Node.js, and Python for development; AWS and Vercel for hosting; and various blockchain platforms. We choose technologies based on project requirements while ensuring scalability and maintainability.",
    },
    {
      question: "How do you ensure project security?",
      answer:
        "Security is paramount in our development process. We implement industry best practices including encrypted data transmission, secure authentication systems, regular security audits, and compliance with GDPR and other relevant regulations. All our code undergoes thorough security testing before deployment.",
    },
    {
      question: "Can you help with existing projects or only new ones?",
      answer:
        "We handle both new projects and existing ones. For existing projects, we begin with a thorough code audit and documentation review, then create a strategic plan for improvements or additions. We're experienced in working with legacy systems and performing seamless updates.",
    },
    {
      question: "What makes your team different from other agencies?",
      answer:
        "Our team combines technical expertise with business acumen. We don't just code – we partner with you to create solutions that drive business growth. We pride ourselves on transparent communication, attention to detail, and delivering high-quality, scalable solutions that exceed expectations.",
    },
    {
      question: "Do you provide design services as well?",
      answer:
        "Yes, we offer comprehensive UI/UX design services. Our design team creates intuitive, beautiful interfaces that enhance user engagement while maintaining brand consistency. We use tools like Figma and Adobe Creative Suite, and provide interactive prototypes before development begins.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <FullContainer className="py-24 relative bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-950 text-white overflow-hidden">
      <BgAnimation />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 animt bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-primary font-semibold mb-4 block uppercase tracking-wider">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked{" "}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">
                Questions
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
            Find detailed answers to common questions about our services,
            process, and expertise
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <div
                className={`bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/[0.05] transition-all duration-300 ${
                  openQuestion === index ? "bg-white/[0.08]" : ""
                }`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-4 flex items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`relative flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden ${
                        openQuestion === index
                          ? "bg-primary text-white"
                          : "bg-white/5 text-white group-hover:bg-primary/20"
                      } transition-all duration-300`}
                    >
                      <span className="relative z-10 text-lg font-bold">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      {openQuestion === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-rose-500 animate-gradient-x"></div>
                      )}
                    </span>
                    <h3 className="text-xl font-semibold text-left text-white group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border-2 ${
                      openQuestion === index
                        ? "border-primary bg-primary"
                        : "border-white/20 group-hover:border-primary/50"
                    } transition-all duration-300`}
                  >
                    {openQuestion === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white group-hover:text-primary" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openQuestion === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 pt-0">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
                    <p className="text-white/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
      </Container>
    </FullContainer>
  );
}
