import React from "react";
import FullContainer from "./FullContainer";
import Container from "./Container";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import BgAnimation from "../BgAnimation";

function Footer() {
  return (
    <FullContainer className="relative bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-950 text-white overflow-hidden">
      <BgAnimation />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 -right-4 w-[50%] h-[50%] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 -left-32 w-[50%] h-[50%] animt bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <Container className="z-10 py-16 md:py-24 ">
        <div className="text-white/80">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Company Info */}
            <div className="lg:col-span-4 space-y-8">
              <Link
                className="relative z-10 hover:opacity-75 transition-opacity duration-300"
                href="/"
              >
                <Image
                  src="/logo-white.png"
                  alt="reddev Logo"
                  width={180}
                  height={48}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="text-white/90 max-w-sm text-lg">
                Transforming ideas into exceptional digital experiences. Your
                trusted partner in innovative software solutions.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Facebook, link: "#" },
                  {
                    icon: Instagram,
                    link: "https://www.instagram.com/reddev",
                  },
                  { icon: Linkedin, link: "#" },
                  { icon: Twitter, link: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-primary text-white/80 hover:text-white flex items-center justify-center transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
              {/* Company Links */}
              <div className="space-y-8">
                <h5 className="text-xl font-semibold text-white">Company</h5>
                <div className="flex flex-col space-y-4">
                  {["Home", "About", "Work", "Client", "Contact us"].map(
                    (item, index) => (
                      <Link
                        key={index}
                        href={`/${item.toLowerCase().replace(" ", "")}`}
                        className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {item}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Industries */}
              <div className="space-y-8">
                <h5 className="text-xl font-semibold text-white">Industries</h5>
                <div className="flex flex-col space-y-4">
                  {[
                    { name: "Healthcare", id: "healthcare" },
                    { name: "E-commerce", id: "ecommerce" },
                    { name: "Hospitality", id: "hospitality" },
                    { name: "Automotive", id: "automotive" },
                    { name: "SaaS", id: "saas" },
                    { name: "Real Estate", id: "realestate" },
                    { name: "Gaming", id: "gaming" },
                    { name: "Public Sector", id: "publicsector" },
                  ].map((industry, index) => (
                    <Link
                      key={index}
                      href={`/industries?industry=${industry.id}`}
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {industry.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="space-y-8">
                <h5 className="text-xl font-semibold text-white">Services</h5>
                <div className="flex flex-col space-y-4">
                  {[
                    { name: "Ecommerce", slug: "ecommerce" },
                    { name: "Mobile Apps", slug: "mobile-apps" },
                    { name: "Web Development", slug: "web-development" },
                    { name: "Custom Solutions", slug: "custom-solutions" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={`/services/${item.slug}`}
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-xl mt-16">
            <h5 className="text-2xl font-semibold text-white mb-2">
              Stay Updated
            </h5>
            <p className="text-white/70 mb-5 text-lg">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/10 rounded-xl focus:outline-none focus:border-primary text-white placeholder:text-white/50 backdrop-blur-sm"
              />
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-colors duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-16">
            <p className="text-white/70">
              © {new Date().getFullYear()} reddev. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacy"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/70 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}

export default Footer;
