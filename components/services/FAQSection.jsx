import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa"; // Importing react-icons for the question mark icon

export default function FAQSection({data}) {
  // State to keep track of which question is open
  const [openQuestion, setOpenQuestion] = useState(null);

  // Function to toggle the accordion
  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index); 
  };

  // Sample FAQ data (you can replace this with dynamic content)
 

  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 ">
          {data.map((faq, index) => (
            <div key={index} className="border-b-2 pb-4">
              {/* Question */}
              <div
                className="flex items-center justify-between cursor-pointer py-2"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center">
                  {/* Icon */}
                  <FaQuestionCircle className="text-xl text-secondary mr-3" />
                  <h3 className="text-lg md:text-xl font-semibold">
                    {faq.question}
                  </h3>
                </div>
                {/* Toggle Indicator */}
                <span>{openQuestion === index ? "▼" : "►"}</span>
              </div>

              
              {openQuestion === index && (
                <div className="mt-2 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
