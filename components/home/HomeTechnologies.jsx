import React from "react";
import Image from "next/image";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

export default function HomeTechnologies() {
  return (
    <>
      <FullContainer className="py-10 md:px-10 px-5">
        <Container>
          <div className="flex flex-col justify-center items-center py-20">
            <h1 className="font-poppins inline lg:text-4xl md:text-3xl text-xl font-bold">
              Technology Expertise
            </h1>
            <h3 className="text-lg text-center pt-10 w-full lg:w-[500px]">
              It thrills us to deliver trendy solutions using the latest tech.
            </h3>
          </div>

          {/* First section */}
          <h3 className="pt-10 text-center font-poppins lg:text-2xl font-bold">
            Web Front-End
          </h3>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 lg:gap-8 p-0 md:p-12 pt-12 font-poppins">
            {[
              { src: "/img/tech1.png", alt: "Angular", label: "Angular" },
              { src: "/img/tech2.png", alt: "React", label: "React" },
              { src: "/img/tech3.png", alt: "JavaScript", label: "JavaScript" },
              { src: "/img/tech4.png", alt: "TypeScript", label: "TypeScript" },
              { src: "/img/tech5.png", alt: "HTML5", label: "HTML5" },
            ].map((tech) => (
              <li className="flex flex-col items-center" key={tech.label}>
                <Image
                  width={90}
                  height={90}
                  src={tech.src}
                  alt={tech.alt}
                />
                <h4 className="mt-2">{tech.label}</h4>
              </li>
            ))}
          </ul>

          {/* Second section */}
          <h3 className="pt-10 text-center font-poppins lg:text-2xl font-bold">
            Web Back-End
          </h3>
          <ul className="grid sm:grid-cols-4 grid-cols-3 lg:px-[150px] gap-6 lg:gap-8 p-0 md:p-12 pt-12 font-poppins">
            {[
              { src: "/img/tech21.png", alt: "ASP.Net Core", label: "ASP.Net Core" },
              { src: "/img/tech22.png", alt: "ASP.Net MVC", label: "ASP.Net MVC" },
              { src: "/img/tech23.png", alt: "Laravel", label: "Laravel" },
              { src: "/img/tech24.png", alt: "Node.js", label: "Node.js" },
            ].map((tech) => (
              <li className="flex flex-col items-center" key={tech.label}>
                <Image
                  width={90}
                  height={90}
                  src={tech.src}
                  alt={tech.alt}
                />
                <h4 className="mt-2">{tech.label}</h4>
              </li>
            ))}
          </ul>

          {/* Third section with three sub sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
            {[
              {
                title: "iOS",
                items: [
                  { src: "/img/tech31.png", alt: "Swift", label: "Swift" },
                  { src: "/img/tech32.png", alt: "Objective-C", label: "Objective-C" },
                ],
              },
              {
                title: "Android",
                items: [
                  { src: "/img/tech41.png", alt: "Kotlin", label: "Kotlin" },
                  { src: "/img/tech42.png", alt: "Java", label: "Java" },
                ],
              },
              {
                title: "Cross-Platform",
                items: [
                  { src: "/img/tech51.png", alt: "Flutter", label: "Flutter" },
                  { src: "/img/tech52.png", alt: "React Native", label: "React Native" },
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="pt-10 text-center font-poppins lg:text-2xl font-bold">
                  {section.title}
                </h3>
                <ul className="grid grid-cols-2 gap-8 p-10 font-poppins">
                  {section.items.map((tech) => (
                    <li className="flex flex-col items-center" key={tech.label}>
                      <Image
                        width={90}
                        height={90}
                        src={tech.src}
                        alt={tech.alt}
                      />
                      <h4 className="mt-2">{tech.label}</h4>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Fourth section with two subsections */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            <div className="col-span-3">
              <h3 className="pt-10 pb-10 sm:pb-0 text-center font-poppins lg:text-2xl font-bold">
                Database
              </h3>
              <ul className="grid grid-cols-3 gap-8 p-2 sm:p-10 font-poppins">
                {[
                  { src: "/img/tech61.png", alt: "SQL Server", label: "SQL Server" },
                  { src: "/img/tech62.png", alt: "MySQL", label: "MySQL" },
                  { src: "/img/tech63.png", alt: "MongoDB", label: "MongoDB" },
                ].map((tech) => (
                  <li className="flex flex-col items-center" key={tech.label}>
                    <Image
                      width={90}
                      height={90}
                      src={tech.src}
                      alt={tech.alt}
                    />
                    <h4 className="mt-2">{tech.label}</h4>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="pt-10 text-center font-poppins lg:text-2xl font-bold">
                Infrastructure
              </h3>
              <ul className="grid grid-cols-2 gap-8 p-10 font-poppins">
                {[
                  { src: "/img/tech71.png", alt: "Azure", label: "Azure" },
                  { src: "/img/tech72.png", alt: "AWS", label: "AWS" },
                ].map((tech) => (
                  <li className="flex flex-col items-center" key={tech.label}>
                    <Image
                      width={90}
                      height={90}
                      src={tech.src}
                      alt={tech.alt}
                    />
                    <h4 className="mt-2">{tech.label}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fifth section */}
          <h3 className="pt-10 text-center font-poppins lg:text-2xl font-bold">
            Automation
          </h3>
          <ul className="grid grid-cols-3 lg:px-[300px] md:px-16 items-center px-1 gap-8 p-10 font-poppins">
            {[
              { src: "/img/tech81.png", alt: "Selenium", label: "Selenium" },
              { src: "/img/tech31.png", alt: "Apache Jmeter", label: "Apache Jmeter" },
              { src: "/img/tech82.png", alt: "Jenkins", label: "Jenkins" },
            ].map((tech) => (
              <li className="flex flex-col items-center" key={tech.label}>
                <Image
                  width={90}
                  height={90}
                  src={tech.src}
                  alt={tech.alt}
                />
                <h4 className="mt-2">{tech.label}</h4>
              </li>
            ))}
          </ul>
        </Container>
      </FullContainer>
    </>
  );
}
