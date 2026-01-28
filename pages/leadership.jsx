import React from "react";
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import BgAnimation from "@/components/BgAnimation";
import { Target, Compass, Zap, Shield, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Leadership() {
  const philosophyPrinciples = [
    {
      icon: Target,
      title: "Ownership flows down",
      description: "Leaders own outcomes and give teams real authority to execute"
    },
    {
      icon: Compass,
      title: "Clarity before action",
      description: "Clear strategy, clear priorities, clear communication at every level"
    },
    {
      icon: Zap,
      title: "Execution over planning",
      description: "Ship working solutions fast, then iterate based on reality"
    },
    {
      icon: Shield,
      title: "Long-term accountability",
      description: "Decisions compound over years, not quarters"
    }
  ];

  const leadershipTeam = [
    {
      name: "Usama Bhatti",
      role: "Founder and CEO",
      focus: "Product vision, Client strategy, long-term direction",
      image: "/img/uxama.PNG",
      linkedin: "https://www.linkedin.com/in/uxamabt/"
    },
    {
      name: "Hamza Ali",
      role: "Chief Technical Officer",
      focus: "Architecture, Engineering standards, AI-powered Infrastructure decisions",
      image: "/img/hamza2.PNG",
      linkedin: "https://www.linkedin.com/in/hamza-ali-2644742b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Aman Zaheer",
      role: "Chief Operating Officer & Co-Founder",
      focus: "Project execution, Quality assurance, Hospitality client outcomes",
      image: "/img/aman12.PNG",
      linkedin: "https://www.linkedin.com/in/aman-zaheer-96664a373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Umar Janjua",
      role: "Chief Marketing Officer",
      focus: "Brand strategy, market positioning, hospitality industry growth",
      image: "/img/umer.PNG",
      linkedin: "https://www.linkedin.com/in/umer-janjua-875870352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Hunain Abbasi",
      role: "Chief Business Officer",
      focus: "Client Relationships, Hospitality Partnerships, Business Development",
      image: "/img/hunain.PNG",
      linkedin: "https://www.linkedin.com/in/hunain-mubashir-abbasi-257491368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  const clientBenefits = [
    {
      icon: CheckCircle,
      title: "Direct access to decision-makers",
      description: "No layers between you and people who can actually solve problems"
    },
    {
      icon: CheckCircle,
      title: "Accountability at the top",
      description: "Founders personally review every project and stand behind delivered work"
    },
    {
      icon: CheckCircle,
      title: "Strategic thinking, not just execution",
      description: "Leadership that understands your business model and growth challenges"
    }
  ];

  return (
    <>
      <Head>
        <title>Leadership | AI-Powered Hospitality Infrastructure Team | RedDev</title>
        <meta
          name="description"
          content="Meet the leadership team building AI-powered hospitality infrastructure for hotels, resorts, and serviced apartments. Founder-led, execution-driven, and focused on long-term hospitality partnerships."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:title" content="Leadership | AI-Powered Hospitality Infrastructure Team | RedDev" />
        <meta property="og:description" content="Meet the leadership team building AI-powered hospitality infrastructure. Founder-led, execution-driven." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reddev.vercel.app/leadership" />
        <meta property="og:image" content="https://reddev.vercel.app/reddev.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leadership | AI-Powered Hospitality Infrastructure Team | RedDev" />
        <meta name="twitter:description" content="Founder-led, execution-driven, building AI-powered hospitality infrastructure for decades." />
        <meta name="twitter:image" content="https://reddev.vercel.app/reddev.png" />
        
        <link rel="canonical" href="https://reddev.vercel.app/leadership" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <FullContainer className="relative bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden pt-32 pb-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-950/70 to-black/60 z-0" />
        
        <BgAnimation />
        <div className="absolute inset-0 opacity-20 -z-10">
          <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/40 rounded-full mix-blend-multiply filter blur-xl" />
          <div className="absolute top-0 -right-4 w-[50%] h-[50%] bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Leadership focused on
              <span className="relative block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
                  execution and accountability
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Founder-led and execution-driven. We build the company the same way we build 
              AI-powered hospitality products—with ownership, clarity, and long-term thinking.
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* Founder / CEO Section */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Photo */}
              <div className="lg:col-span-2">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200">
                  <Image
                    src="/img/uxama.PNG"
                    alt="Usama Bhatti"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                    Usama Bhatti
                  </h2>
                  <p className="text-xl text-slate-600 font-bold">
                    Founder and CEO
                  </p>
                </div>

                <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
                  <p>
                    RedDev exists because too many hospitality businesses lose revenue to operational 
                    inefficiency. We saw hotels, resorts, and serviced apartments spending millions on 
                    marketing while their infrastructure leaked 30-40% of that investment through 
                    overbookings, pricing sync issues, manual processes, disconnected PMS and channel 
                    managers, and systems that couldn&apos;t scale.
                  </p>
                  
                  <p>
                    I approach building AI-powered hospitality products the same way we approach building 
                    the company: solve real problems, own the outcomes, and optimize for long-term value. 
                    That means saying no to most projects, working with fewer hospitality clients, and 
                    investing in AI-enhanced systems that compound rather than quick wins.
                  </p>
                  
                  <p>
                    The goal isn&apos;t to be the biggest development shop. It&apos;s to be the 
                    AI-powered infrastructure partner that hospitality companies trust for decades—the 
                    team they call when scaling matters more than speed, and when operational chaos 
                    isn&apos;t an option.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* Leadership Philosophy */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
                <Compass className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
              Leadership{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Philosophy
                </span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              How we lead, decide, and build inside the company.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {philosophyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-orange-500 flex items-center justify-center mb-4 transition-all duration-300">
                    <principle.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* Core Leadership Team */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
              Core{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Leadership Team
                </span>
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="relative w-full aspect-[3/4] bg-slate-100 overflow-hidden flex-shrink-0">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectPosition: 'center 30%' }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-slate-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-bold text-red-600 mb-3">
                      {leader.role}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      {leader.focus}
                    </p>
                    {leader.linkedin && leader.linkedin !== "#" && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 text-slate-600 hover:text-white fill-current" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* How Leadership Supports Clients */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
                How Leadership{" "}
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Supports Clients
                  </span>
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {clientBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mt-1">
                    <benefit.icon className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* Closing Trust Statement */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
              We&apos;re building a company that will still be solving hard AI-powered hospitality 
              infrastructure problems a decade from now. Every client relationship, every hire, and every 
              decision is made with that timeline in mind. If you&apos;re looking for a 
              long-term partner who takes responsibility seriously and understands hospitality operations—that&apos;s what we&apos;re 
              building here.
            </p>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}
