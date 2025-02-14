import React from "react";
import Image from "next/image";
import BgAnimation from "../BgAnimation";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import { Sparkles, Linkedin, Github, ExternalLink } from "lucide-react";

export default function TeamMembers() {
  const data = [
    {
      img: "/img/member1.png",
      name: "Usama Bhatti",
      title: "Project Manager",
      socials: [
        { icon: Linkedin, link: "#", label: "LinkedIn" },
        { icon: Github, link: "#", label: "GitHub" },
      ],
    },
    {
      img: "/img/member2.png",
      name: "Hamza Ali",
      title: "Frontend Developer",
      socials: [
        { icon: Linkedin, link: "#", label: "LinkedIn" },
        { icon: Github, link: "#", label: "GitHub" },
      ],
    },
    {
      img: "/img/member3.png",
      name: "Aman Zaheer",
      title: "Backend Developer",
      socials: [
        { icon: Linkedin, link: "#", label: "LinkedIn" },
        { icon: Github, link: "#", label: "GitHub" },
      ],
    },
  ];

  return (
    <FullContainer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      <BgAnimation />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 animt bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <Container className="relative py-16 md:py-24">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-primary font-semibold mb-4 block uppercase tracking-wider">
            Our Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Meet Our Visionary
            <span className="relative ml-3">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-500">
                Team
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
            Our team is made up of passionate individuals who are dedicated to
            delivering excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((member, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border border-white/10 hover:border-primary/20">
                <div className="relative h-[450px] overflow-hidden">
                  <Image
                    src={member.img}
                    fill
                    className="object-cover scale-125 transition-transform duration-700 group-hover:scale-110"
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent  translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-red-400 to-white bg-clip-text text-transparent">
                      {member.name}
                    </h3>
                    <ExternalLink className="text-primary w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <p className="text-gray-400 mb-6 font-medium">
                    {member.title}
                  </p>

                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {member.socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        className="p-3 rounded-full bg-white/5 hover:bg-primary hover:scale-110 transition-all duration-300 group/icon border border-white/10"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon
                          className="w-5 h-5 text-white group-hover/icon:text-white transition-colors duration-300"
                          strokeWidth={1.5}
                        />
                      </a>
                    ))}
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
