import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import {
  Sparkles,
  Linkedin,
  Twitter,
  Github,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function TeamMembers() {
  const data = [
    {
      img: "/img/member1.webp",
      name: "Usama Bhatti",
      title: "Founder, CEO",
      socials: [
        { icon: Linkedin, link: "#", label: "LinkedIn" },
        { icon: Github, link: "#", label: "GitHub" },
        { icon: Mail, link: "mailto:example@reddev.com", label: "Email" },
      ],
    },
    {
      img: "/img/member1.webp",
      name: "Umer Bhatti",
      title: "Co-Founder, CMO",
      socials: [
        { icon: Linkedin, link: "#", label: "LinkedIn" },
        { icon: Github, link: "#", label: "GitHub" },
        { icon: Mail, link: "mailto:example@reddev.com", label: "Email" },
      ],
    },
    {
      img: "/img/member1.webp",
      name: "Usman Asif",
      title: "Founder, CEO",
      socials: [
        { icon: Linkedin, link: "#", label: "LinkedIn" },
        { icon: Github, link: "#", label: "GitHub" },
        { icon: Mail, link: "mailto:example@reddev.com", label: "Email" },
      ],
    },
  ];

  return (
    <FullContainer className="bg-[linear-gradient(125deg,#1a0505,#4d1111_40%,#a82424_70%,#1a0505)] relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        {/* Base grid pattern */}
        <div className="absolute inset-0">
          {/* Horizontal lines */}
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_19px,#ff222215_19px_21px,transparent_21px)] bg-[size:20px_20px]"></div>
          {/* Vertical lines */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_19px,#ff222215_19px_21px,transparent_21px)] bg-[size:20px_20px]"></div>
        </div>

        {/* Digital noise overlay */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay animate-[noise_8s_steps(10)_infinite]">
          <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat bg-[length:100px_100px]"></div>
        </div>

        {/* Scanning line effect */}
        <div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent blur-sm"
          style={{
            animation: "scan 4s ease-in-out infinite",
          }}
        />

        {/* Data stream lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-[120px] animate-[dataStream_3s_linear_infinite]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #ff2222, transparent)",
                top: `${Math.random() * 100}%`,
                left: "-120px",
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        {/* Glowing nodes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[4px] h-[4px] bg-red-500/50 rounded-full animate-[glow_4s_ease-in-out_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Add these animations to your global CSS */}
        <style jsx global>{`
          @keyframes scan {
            0%,
            100% {
              top: 0%;
              opacity: 0;
            }
            25%,
            75% {
              opacity: 1;
            }
            50% {
              top: 100%;
              opacity: 0;
            }
          }

          @keyframes dataStream {
            0% {
              transform: translateX(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translateX(calc(100vw + 120px));
              opacity: 0;
            }
          }

          @keyframes glow {
            0%,
            100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.5);
              box-shadow: 0 0 10px #ff2222;
            }
          }

          @keyframes noise {
            0%,
            100% {
              transform: translate(0, 0);
            }
            10% {
              transform: translate(-5%, -5%);
            }
            20% {
              transform: translate(-10%, 5%);
            }
            30% {
              transform: translate(5%, -10%);
            }
            40% {
              transform: translate(-5%, 15%);
            }
            50% {
              transform: translate(-10%, 5%);
            }
            60% {
              transform: translate(15%, 0);
            }
            70% {
              transform: translate(0, 10%);
            }
            80% {
              transform: translate(-15%, 0);
            }
            90% {
              transform: translate(10%, 5%);
            }
          }
        `}</style>
      </div>

      {/* Actual Section  */}
      <Container className="relative py-16 md:py-24">
        {/* Header Section */}
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

        {/* Team Grid */}
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
              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border border-white/10 hover:border-primary/20">
                {/* Image Container */}
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={member.img}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                      {member.name}
                    </h3>
                    <ExternalLink className="text-primary w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <p className="text-gray-400 mb-6 font-medium">
                    {member.title}
                  </p>

                  {/* Social Links */}
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
