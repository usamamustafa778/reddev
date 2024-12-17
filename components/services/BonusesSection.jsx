import React, { useState } from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function BonusDetails() {
  const [card1, opencard1] = useState(false);
  const [card2, opencard2] = useState(false);
  const [card3, opencard3] = useState(false);

  const bonuses = [
    {
      title: "Website Audit",
      description: "Get a comprehensive audit of your existing website.",
      bonus: "You've unlocked a Free SEO Optimization Package!",
      isOpen: card1,
      setOpen: opencard1,
      translateClass: "-translate-x-9",
    },
    {
      title: "1-Hour Strategy",
      description: "We'll align your site with your growth goals.",
      bonus: "You've unlocked a Free 1-Hour Strategy Consultation!",
      isOpen: card2,
      setOpen: opencard2,
      translateClass: "",
    },
    {
      title: "Post-Launch Support",
      description: "Get dedicated support after your site goes live.",
      bonus: "You've unlocked 30 Days of Post-Launch Support!",
      isOpen: card3,
      setOpen: opencard3,
      translateClass: "translate-x-9",
    },
  ];

  return (
    <FullContainer className="py-32 bg-gradient-to-br from-secondary via-secondary/90 to-secondary relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Exclusive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Bonus Rewards
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Unlock amazing rewards with each milestone you achieve.
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div key={index} className="relative group">
              <div
                onMouseEnter={() => bonus.setOpen(true)}
                onMouseLeave={() => bonus.setOpen(false)}
                className="relative w-full h-full"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                {/* Front Card */}
                <div
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 ${
                    bonus.isOpen ? "scale-105 z-20" : ""
                  }`}
                >
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                    Free
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {bonus.title}
                  </h3>
                  <p className="text-white/80">{bonus.description}</p>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/20 rounded-br-2xl"></div>
                </div>

                {/* Back Card */}
                <div
                  className={`absolute z-10 w-full top-0 transition-all duration-300 ${
                    bonus.isOpen ? `${bonus.translateClass} translate-y-28` : ""
                  }`}
                >
                  <div className="bg-primary rounded-2xl p-6 shadow-lg text-white flex items-center justify-center min-h-[160px]">
                    <p className="text-lg font-medium text-center">
                      {bonus.bonus}
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
