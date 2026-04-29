import React from "react";
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import { Target, Compass, Zap, Shield, Lightbulb, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const principles = [
  {
    icon: Target,
    title: "Ship Real Products",
    description: "We've built 15+ live products used by real customers. Not demos. Not mockups. Things that work in production.",
  },
  {
    icon: Compass,
    title: "Clarity Over Complexity",
    description: "Simple, well-built solutions that clients can actually own and operate. No unnecessary complexity.",
  },
  {
    icon: Zap,
    title: "Speed & Execution",
    description: "We move fast. Most projects have a fixed delivery date agreed upfront — and we hit it.",
  },
  {
    icon: Shield,
    title: "You Own Everything",
    description: "Every system we build is handed over completely. Your code, your domain, your data. No lock-in.",
  },
  {
    icon: Lightbulb,
    title: "Built From Experience",
    description: "We've worked across 8 industries. That cross-domain experience makes us better at every new project.",
  },
];

const stats = [
  { number: "15+", label: "Products Shipped" },
  { number: "8+", label: "Industries" },
  { number: "500+", label: "Lead Gen Sites" },
  { number: "6+", label: "Years" },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About RedDev | Custom Software Development Company</title>
        <meta name="description" content="RedDev is a custom software development company with 6+ years and 15+ products shipped across 8 industries. From HealthTech startups to 500+ lead gen systems — we build software that works." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="software development company, custom software development agency, about RedDev, software development team" />

        <meta property="og:title" content="About RedDev | Custom Software Development Company" />
        <meta property="og:description" content="6+ years. 15+ real software products. 8 industries. Clients in the US, UK, Canada, Romania, Uganda and South Africa. We build things that ship." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reddevsystems.com/about" />
        <meta property="og:image" content="https://reddevsystems.com/reddev.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="RedDev" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About RedDev | Custom Software Development Company" />
        <meta name="twitter:description" content="6+ years. 15+ products. 8 industries. A software development company that actually ships." />
        <meta name="twitter:image" content="https://reddevsystems.com/reddev.png" />

        <link rel="canonical" href="https://reddevsystems.com/about" />
      </Head>

      <Navbar />

      {/* ========== HERO ========== */}
      <FullContainer className="relative min-h-[70vh] overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.2),rgba(0,0,0,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(234,88,12,0.15),rgba(0,0,0,0))]"></div>

        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-orange-600/40 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-[500px] h-[500px] bg-rose-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center pt-36 pb-24 md:pt-44 md:pb-32">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative h-2.5 w-2.5 bg-red-500 rounded-full"></span>
              </span>
              <span className="text-xs font-bold text-white/90 uppercase">6+ Years Building Real Products</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black max-w-5xl"
            >
              <span className="block text-white">We Build Digital Products</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                That Grow Your Business.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl"
            >
              We&apos;re a software development company that ships real products — SaaS platforms, CRMs, lead generation systems, mobile apps and more. 15+ products built. 8 industries. Clients across the US, UK, Canada, Romania, Uganda and South Africa.
            </motion.p>

            {/* Stats row */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black text-white">{stat.number}</div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>

        <style jsx global>{`
          @keyframes blob {
            0%,100% { transform: translate(0,0); }
            50% { transform: translate(30px,-30px); }
          }
          .animate-blob { animation: blob 8s infinite ease-in-out; }
        `}</style>
      </FullContainer>

      {/* ========== OUR STORY ========== */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-10">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Story
              </span>
            </h2>

            <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
              <p>
                RedDev started as a small development team that kept getting asked to build things — real things. Not landing pages. Not wireframes. Actual software products that businesses depended on to operate and grow.
              </p>
              <p>
                Over 6 years, we&apos;ve built 15+ real products across 8 industries. An IVF financing platform that raised $10M Series A and got featured in Bloomberg and TechCrunch. An enterprise travel portal running on Sabre GDS — the same infrastructure behind Expedia. Restaurant management SaaS. Gold trading CRMs. HR portals. E-commerce analytics tools. And over 500 lead generation websites for a $5M/year US operation.
              </p>
              <p>
                We&apos;ve worked with clients in the US, UK, Canada, Romania, Uganda and South Africa. Funded startups, bootstrapped founders, and established businesses. The common thread: they needed software built properly, by people who&apos;ve done it before.
              </p>
              <p className="text-slate-900 font-bold text-lg md:text-xl border-l-4 border-red-500 pl-4">
                That&apos;s what we do. We build digital products that actually work — and we&apos;ve got the portfolio to prove it.
              </p>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* ========== MISSION & VISION ========== */}
      <FullContainer className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,rgba(220,38,38,0.1),rgba(0,0,0,0))]"></div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="h-full p-10 bg-white/5 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Mission</h3>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  Build digital products that genuinely grow the businesses we work with. Not templates. Not boilerplate. Real software engineered for the specific problem at hand — delivered on time and handed over completely.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="h-full p-10 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">Vision</h3>
                <p className="text-white/70 leading-relaxed text-base md:text-lg">
                  Become the development partner that founders and business owners call first — because they know we&apos;ve built something like it before, we&apos;ll do it properly, and we&apos;ll actually deliver.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </FullContainer>

      {/* ========== HOW WE THINK ========== */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
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
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-4">
              How We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                Think & Work
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Principles that guide every project we take on.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-red-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-orange-500 flex items-center justify-center transition-all duration-300 mb-4">
                    <principle.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* ========== TRACK RECORD ========== */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              A Track Record{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Worth Sharing
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mb-10"></div>

            <div className="space-y-5 text-base md:text-lg text-slate-300 leading-relaxed mb-14">
              <p>
                Sunfish — an IVF financing platform we helped build — raised $10M Series A and was featured in Bloomberg, TechCrunch, and the Wall Street Journal.
              </p>
              <p>
                OggoAir runs on Sabre GDS — the same global distribution infrastructure that powers Expedia and American Airlines — and is live across Canada, Uganda and South Africa.
              </p>
              <p>
                We&apos;ve built 500+ lead generation websites for a single US client operating a $5M/year local services business across 70+ niches.
              </p>
              <p className="text-white font-bold text-lg md:text-xl">
                We don&apos;t just write code. We build things that matter to the businesses that depend on them.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-slate-700">
              <div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">$10M</div>
                <div className="text-slate-400 text-sm">Raised by a startup we helped build (Sunfish)</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">500+</div>
                <div className="text-slate-400 text-sm">Lead gen websites for a US $5M/year operation</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">6</div>
                <div className="text-slate-400 text-sm">Countries — US, UK, Canada, Romania, Uganda, South Africa</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* ========== CTA ========== */}
      <FullContainer className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900 mb-6">
              Want to See What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                We&apos;ve Built?
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              Our portfolio has 14+ real projects with live URLs, industry context, and the story behind each one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-500/30"
                >
                  <span>View Our Portfolio</span>
                  <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 text-lg font-bold rounded-xl hover:bg-slate-50 transition-all duration-300 border-2 border-slate-200 shadow-sm"
                >
                  Start a Project
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}
