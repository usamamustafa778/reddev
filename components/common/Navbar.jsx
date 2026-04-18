import React, { useState, useEffect } from "react";
import Container from "./Container";
import FullContainer from "./FullContainer";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar({ className }) {
  const [sidebar, openSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSidebar = () => {
    openSidebar(!sidebar);
    if (!sidebar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 10) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Grouped Services based on your image
  const serviceGroups = [
    {
      heading: "Digital Transformation",
      services: [
        { label: "Web development", href: "/services/web-development" },
        { label: "App Development", href: "/services/app-development" },
        { label: "Custom Software Development", href: "/services/custom-software" },
        { label: "UX/UI Design", href: "/services/ux-ui-design" },
      ],
    },
    {
      heading: "Core Solutions",
      services: [
        { label: "Quality Assurance", href: "/services/quality-assurance" },
        { label: "DevOps", href: "/services/devops" },
        { label: "Cybersecurity", href: "/services/cybersecurity" },
        { label: "SaaS", href: "/services/saas-development" },
      ],
    },
    {
      heading: "E-commerce",
      services: [
        { label: "Design & Development", href: "/services/ecom-design" },
        { label: "Maintenance & Support", href: "/services/ecom-support" },
        { label: "Automation & Apps", href: "/services/ecom-automation" },
      ],
    },
    {
      heading: "Gaming & Web3",
      services: [
        { label: "Art & Design", href: "/services/gaming-art" },
        { label: "Web3", href: "/services/webthree-development" },
        { label: "AR/VR/XR", href: "/services/ar-vr-xr" },
      ],
    },
  ];

  return (
    <>
      <FullContainer
        className={`z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg text-slate-900 fixed top-0" 
            : "bg-transparent text-white pt-3 fixed top-0"
        }`}
      >
        <Container className="flex items-center justify-between h-fit py-3 md:py-4">
          <Link className="relative z-10" href="/">
            <Image src="/logo.png" alt="Logo" width={180} height={48} className="h-11 md:h-12 w-auto object-contain" priority />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li><Link href="/" className={`py-2 font-semibold transition-colors ${scrolled ? "hover:text-red-600" : "hover:text-red-300"}`}>Home</Link></li>
            <li><Link href="/about" className={`py-2 font-semibold transition-colors ${scrolled ? "hover:text-red-600" : "hover:text-red-300"}`}>About</Link></li>

            {/* Grouped Dropdown */}
            <li 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 py-2 font-semibold transition-colors ${scrolled ? "hover:text-red-600" : "hover:text-red-300"}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-2xl rounded-2xl p-6 text-slate-900 border border-gray-100 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}`}>
                <div className="grid grid-cols-2 gap-8">
                  {serviceGroups.map((group, idx) => (
                    <div key={idx} className="space-y-3">
                      <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider border-b border-gray-50 pb-1">
                        {group.heading}
                      </h3>
                      <ul className="space-y-2">
                        {group.services.map((service, sIdx) => (
                          <li key={sIdx}>
                            <Link href={service.href} className="text-[13px] text-slate-600 hover:text-red-600 hover:pl-1 transition-all block">
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li><Link href="/leadership" className={`py-2 font-semibold transition-colors ${scrolled ? "hover:text-red-600" : "hover:text-red-300"}`}>Leadership</Link></li>
            <li><Link href="/careers" className={`py-2 font-semibold transition-colors ${scrolled ? "hover:text-red-600" : "hover:text-red-300"}`}>Careers</Link></li>
          </ul>

          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="group relative inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-xl transition-all shadow-lg">
              <span className="mr-2 relative z-10">Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </Link>
          </div>

          <button onClick={handleSidebar} className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-gray-700" : "text-white"}`}>
            <LuMenu className="w-6 h-6" />
          </button>
        </Container>
      </FullContainer>

      {/* Mobile Menu Overlay */}
      {sidebar && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleSidebar} />
          <div className="absolute right-0 top-0 h-full w-[320px] bg-white shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <Image src="/logo.png" alt="Logo" width={120} height={32} className="h-8 w-auto brightness-0" style={{ filter: 'invert(17%) sepia(97%) saturate(6213%) hue-rotate(356deg)' }} />
              <button onClick={handleSidebar} className="p-2"><RxCross2 className="w-6 h-6" /></button>
            </div>

            <nav className="space-y-6">
              <Link href="/" className="block font-semibold" onClick={handleSidebar}>Home</Link>
              
              {/* Mobile Services Grouped */}
              <div className="space-y-4">
                <p className="text-red-600 font-bold text-xs uppercase">Our Services</p>
                {serviceGroups.map((group, idx) => (
                  <div key={idx} className="pl-2 space-y-2">
                    <p className="text-[13px] font-bold text-slate-800">{group.heading}</p>
                    <div className="pl-3 space-y-2 border-l border-red-100">
                      {group.services.map((service, sIdx) => (
                        <Link key={sIdx} href={service.href} className="block text-sm text-slate-500" onClick={handleSidebar}>
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/leadership" className="block font-semibold" onClick={handleSidebar}>Leadership</Link>
              <Link href="/contact" className="block w-full py-3 bg-red-600 text-white rounded-xl text-center font-bold">Get In Touch</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}