import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import BgAnimation from "@/components/BgAnimation";
import { Target, Zap, Shield, TrendingUp, Lightbulb, Users, Check, Minus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Careers() {
  const [showPopup, setShowPopup] = useState(false);

  const principles = [
    {
      icon: Target,
      title: "Ownership",
      description: "You own outcomes, not tasks. Decisions, failures, and wins are yours to make."
    },
    {
      icon: Lightbulb,
      title: "Clarity over complexity",
      description: "Simple solutions that work beat clever code that doesn't ship."
    },
    {
      icon: Zap,
      title: "Speed of execution",
      description: "Shipping working software is better than perfecting plans."
    },
    {
      icon: Shield,
      title: "Honesty",
      description: "Say what you mean. Flag problems early. No politics."
    },
    {
      icon: TrendingUp,
      title: "Learning bias",
      description: "Every hospitality project is a chance to get better at building AI-powered systems."
    },
    {
      icon: Users,
      title: "Long-term thinking",
      description: "Build things that compound in value, not disposable features."
    }
  ];

  const thriveHere = [
    "Self-driven builders who don't need hand-holding",
    "People who enjoy responsibility and making decisions",
    "Those who want to grow into leadership roles",
    "Engineers who think about hospitality business outcomes, not just code",
    "Anyone interested in AI-powered systems that eliminate operational bottlenecks",
    "Developers who measure success by impact on hotels, resorts, and property managers"
  ];

  const openRoles = [
    {
      title: "Full-Stack Engineer",
      description: "Build AI-powered booking platforms, property management systems, and operations automation for hotels, resorts, serviced apartments, and property managers",
      type: "Engineering"
    },
    {
      title: "Hospitality Tech Integration Specialist",
      description: "Design and implement AI-enhanced integrations for PMS, channel managers, OTAs, payment systems, and property management tools with real-time sync",
      type: "Engineering"
    },
    {
      title: "AI/ML Engineer",
      description: "Build AI-powered features for pricing optimization, task automation, upsell recommendations, and predictive analytics in hospitality systems",
      type: "Engineering"
    }
  ];

  const hiringProcess = [
    {
      number: "01",
      title: "Application review",
      description: "We look for clarity of thought, relevant experience, and alignment with how we work"
    },
    {
      number: "02",
      title: "Conversation",
      description: "Deep discussion about skills, mindset, and mutual fit—no trick questions"
    },
    {
      number: "03",
      title: "Trial or decision",
      description: "Paid trial project or final offer based on role complexity and mutual confidence"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers | Build AI-Powered Hospitality Systems | RedDev</title>
        <meta
          name="description"
          content="Join a team building AI-powered booking platforms, property management systems, and automation solutions for hotels, resorts, serviced apartments, and property managers. For self-driven engineers who want ownership, growth, and impact."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:title" content="Careers | Build AI-Powered Hospitality Systems | RedDev" />
        <meta property="og:description" content="Join a team building AI-powered booking platforms, property management systems, and automation solutions for hotels, resorts, serviced apartments, and property managers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reddev.vercel.app/careers" />
        <meta property="og:image" content="https://reddev.vercel.app/reddev.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | Build AI-Powered Hospitality Systems | RedDev" />
        <meta name="twitter:description" content="Join a team building AI-powered booking platforms and property management systems for hotels, resorts, and serviced apartments." />
        <meta name="twitter:image" content="https://reddev.vercel.app/reddev.png" />
        
        <link rel="canonical" href="https://reddev.vercel.app/careers" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <FullContainer className="relative bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden pt-32 pb-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80")',
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
              Build AI-powered booking & management systems that
              <span className="relative block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
                  scale hospitality operations
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              We&apos;re building AI-enhanced booking platforms, property management systems, and operations 
              automation for hotels, resorts, serviced apartments, and property managers. If you want ownership, 
              responsibility, and real growth—keep reading.
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* Why Work With Us */}
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
            className="max-w-4xl mx-auto"
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
                Why Work{" "}
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    With Us
                  </span>
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
              <p>
                We&apos;re not building a corporate ladder or a comfort-driven workplace. 
                We&apos;re building AI-powered booking platforms, property management systems, and automation 
                solutions that help hotels, resorts, and serviced apartments scale without operational chaos—and we need 
                people who want to own that process from end to end.
              </p>
              
              <p>
                That means learning fast, making decisions, shipping AI-enhanced code that eliminates overbookings, 
                syncs pricing across PMS and channel managers, automates guest communications, and scales hospitality 
                operations. If you want someone to tell you exactly what to do every day, this isn&apos;t the place.
              </p>
              
              <p className="text-slate-900 font-black text-lg md:text-xl">
                If you want to build AI-powered systems that scale hospitality operations and 
                grow your skills exponentially—this is where you belong.
              </p>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* Our Culture & Principles */}
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
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
              Our Culture &{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Principles
                </span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              How we work, what we value, and what we expect from everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
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

      {/* Who Thrives Here */}
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
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
                Who{" "}
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Thrives Here
                  </span>
                </span>
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              {thriveHere.map((trait, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border-2 border-slate-200">
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-base md:text-lg text-slate-700">{trait}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-2 border-slate-200">
              <Minus className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
              <p className="text-base text-slate-600">
                This won&apos;t be a good fit if you prefer clear 9-5 boundaries, need extensive 
                management, want a role that doesn&apos;t change as the company grows, or aren&apos;t interested 
                in building AI-powered solutions for the hospitality industry.
              </p>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* Open Roles */}
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
              Open{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Roles
                </span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Current opportunities to join the team.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-black text-slate-900">
                          {role.title}
                        </h3>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                          {role.type}
                        </span>
                      </div>
                      <p className="text-base text-slate-600">
                        {role.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowPopup(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                    >
                      Apply
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-base text-slate-600">
              Don&apos;t see the right role?{" "}
              <Link href="/contact" className="text-red-600 font-bold hover:text-red-700 transition-colors">
                Tell us what you&apos;d bring to the table
              </Link>
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* How Hiring Works */}
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
              How Hiring{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Works
                </span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Fair, transparent, and focused on mutual fit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {hiringProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-5xl font-black text-slate-100 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < hiringProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* Call to Action */}
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
              Ready to Build{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Something Meaningful
                </span>
              </span>
              ?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              Joining isn&apos;t about filling a seat. It&apos;s about committing to building 
              AI-powered booking platforms and property management systems that scale hotels, resorts, 
              and serviced apartments without operational chaos, and growing alongside a company built for decades.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              Start a Conversation
            </Link>
            <p className="mt-6 text-sm text-slate-400">
              Send us your work, tell us what you want to build, and let&apos;s see if there&apos;s a fit.
            </p>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />

      {/* Applications Closed Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl p-8 md:p-10 max-w-md w-full shadow-2xl"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-slate-600" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                Applications Currently Closed
              </h3>
              
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                We&apos;re not actively hiring at the moment. Follow us or check back later 
                for future opportunities to join the team.
              </p>
              
              <button
                onClick={() => setShowPopup(false)}
                className="w-full px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
