import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const data = [
    {
      img: "/img/openproject1.png",
      title: "STARLIGHTxSOCIETY",
      aspectRatio: "aspect-video",
      size: "large",
      company: "STARLIGHTxSOCIETY-(SXS)",
      description:
        "Revolutionizing the NFT music platform with seamless integration of digital collectibles and exclusive artist experiences. Supporting over 100k monthly active users and partnering with major record labels.",
      tags: ["NFT", "Music", "Web3"],
    },
    {
      img: "/img/openproject2.png",
      title: "United Insurance",
      aspectRatio: "aspect-square",
      size: "small",
      company: "United-Insurance",
      description:
        "Streamlined policy management platform serving 50k+ clients.",
      tags: ["FinTech", "Insurance"],
    },
    {
      img: "/img/openproject3.png",
      title: "Beastables NFT",
      aspectRatio: "aspect-[4/5]",
      size: "medium",
      company: "Beastables",
      description:
        "Revolutionary blockchain-based collectibles platform with unique gaming integrations.",
      tags: ["Blockchain", "Gaming", "NFT"],
    },
    {
      img: "/img/openproject4.png",
      title: "Tekruiter AI",
      aspectRatio: "aspect-[3/4]",
      size: "large",
      company: "Tekruiter",
      description:
        "AI-powered recruitment platform revolutionizing the hiring process. Leveraging machine learning for perfect candidate matching with 98% accuracy rate. Serving over 200 enterprise clients.",
      tags: ["AI", "HR Tech", "Machine Learning"],
    },
    {
      img: "/img/openproject5.png",
      title: "Recurate",
      aspectRatio: "aspect-square",
      size: "small",
      company: "QuickShipCars",
      description: "Next-gen P2P marketplace solution.",
      tags: ["E-commerce", "P2P"],
    },
    {
      img: "/img/openproject6.png",
      title: "Relik Metaverse",
      aspectRatio: "aspect-video",
      size: "medium",
      company: "relik",
      description:
        "Pioneering metaverse marketplace with virtual reality integrations and social features.",
      tags: ["NFT", "Metaverse", "VR"],
    },
  ];

  return (
    <FullContainer className="py-10 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute inset-0">
        <div className="absolute -left-4 -top-24 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Container>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 py-14 [column-fill:_balance] space-y-6">
          {data.map((item, index) => (
            <Project key={index} {...item} index={index} />
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}

function Project({
  index,
  title,
  description,
  img,
  company,
  aspectRatio,
  size,
  tags,
}) {
  return (
    <div
      className={`group relative flex flex-col items-center 
        break-inside-avoid
        ${size === "small" ? "p-4" : size === "large" ? "p-6" : "p-5"}
        rounded-2xl overflow-hidden
        bg-white
        transition-all duration-500 hover:scale-[1.02]
        shadow-md hover:shadow-xl border border-gray-100`}
    >
      {/* Image Section with dynamic aspect ratio */}
      <div
        className={`w-full ${aspectRatio} relative rounded-xl overflow-hidden`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        />
        <Image
          className="object-cover w-full h-full rounded-xl transform transition-all duration-700
            group-hover:scale-105"
          src={img}
          alt={`${title} project screenshot`}
          width={1200}
          height={900}
          priority={index === 0}
        />
      </div>

      {/* Content Section */}
      <div
        className={`flex flex-col gap-4 mt-5 w-full
        ${size === "small" ? "gap-3" : size === "large" ? "gap-5" : "gap-4"}`}
      >
        <h5
          className={`font-bold leading-tight text-gray-800
          ${
            size === "small"
              ? "text-lg"
              : size === "large"
              ? "text-2xl"
              : "text-xl"
          }`}
        >
          {title}
        </h5>

        <p
          className={`text-gray-600 leading-relaxed
          ${
            size === "small"
              ? "text-xs line-clamp-2"
              : size === "large"
              ? "text-sm line-clamp-4"
              : "text-sm line-clamp-3"
          }`}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full bg-blue-50 text-blue-600
                ${size === "small" ? "text-[10px]" : "text-xs"}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/our-work/${company}`}
          className={`group/btn relative w-fit overflow-hidden rounded-lg
            bg-gray-100 hover:bg-gray-200 transition-all duration-300
            ${
              size === "small"
                ? "text-xs"
                : size === "large"
                ? "text-sm"
                : "text-xs"
            }`}
        >
          <span className="block py-2 px-4 font-medium relative z-10">
            <span className="flex items-center gap-2">
              View Details
              <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
