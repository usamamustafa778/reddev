import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa"; // Importing react-icons for the question mark icon

export default function FAQSection({ data }) {
  // State to keep track of which question is open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Function to toggle the accordion
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Sample FAQ data (you can replace this with dynamic content)

  return (
    <section className="py-32 bg-gradient-to-br from-secondary via-secondary/90 to-secondary relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 ${
                  openQuestion === index ? "bg-white/20" : ""
                }`}
              >
                {/* Question Header */}
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
                    <svg
                      className={`w-5 h-5 transition-colors duration-300 ${
                        openQuestion === index
                          ? "text-white"
                          : "text-white group-hover:text-primary"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer Content */}
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

                {/* Animated Border Effect */}
                {openQuestion === index && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
