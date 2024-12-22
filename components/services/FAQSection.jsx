import React, { useState } from "react";
import { Plus } from "lucide-react"; // Replace react-icons with lucide
import BgAnimation from "../BgAnimation";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function FAQSection({ data }) {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <FullContainer className="relative bg-[linear-gradient(125deg,#0a0505,#1a0808_40%,#2a0a0a_70%,#0a0505)] text-white overflow-hidden">
      <BgAnimation />

      <Container className="relative z-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white animate-gradient-x">
              Questions
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {data.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="group"
            >
              <div
                className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 ${
                  openQuestion === index ? "bg-white/20" : ""
                }`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`relative flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden ${
                        openQuestion === index
                          ? "bg-primary text-white"
                          : "bg-white/10 text-white group-hover:bg-primary/20"
                      } transition-all duration-300`}
                    >
                      <span className="relative z-10 text-lg font-bold">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      {openQuestion === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 animate-gradient-x"></div>
                      )}
                    </span>
                    <h3 className="text-xl font-semibold text-left text-white group-hover:text-primary transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>

                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border-2 ${
                      openQuestion === index
                        ? "border-primary rotate-45 bg-primary"
                        : "border-white/20 group-hover:border-primary/50"
                    } transition-all duration-300`}
                  >
                    <Plus
                      className={`w-5 h-5 transition-colors duration-300 ${
                        openQuestion === index
                          ? "text-white"
                          : "text-white group-hover:text-primary"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openQuestion === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6 pt-0">
                    <div className="h-px bg-white/10 mb-6"></div>
                    <p className="text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
