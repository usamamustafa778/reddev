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
    <FullContainer className="relative bg-[linear-gradient(125deg,#0a0505,#1a0808_40%,#2a0a0a_70%,#0a0505)] text-white overflow-hidden">
      <BgAnimation />

      <Container className="relative py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center text-white gap-2 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/10 mb-6 hover:scale-105 transition-all duration-300">
            <Sparkles className="w-5 h-5 text-primary animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-white to-primary/80 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-primary/80 to-white bg-clip-text text-transparent">
            Visionaries & Innovators
          </h2>

          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Pioneering the future of software development with creativity,
            expertise, and unwavering dedication.
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
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={member.img}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
