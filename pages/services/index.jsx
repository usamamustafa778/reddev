import React from "react";
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import BgAnimation from "@/components/BgAnimation";
import { Brain, Smartphone, Code, Zap, Check, Minus, Search, Pencil, Rocket, Target, Users, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Brain,
      name: "AI-Powered Web Development",
      description: "Custom web platforms that use AI to automate operations, qualify leads, and scale revenue without scaling headcount.",
      outcomes: [
        "Automated lead routing and qualification",
        "AI-powered customer support systems",
        "Revenue operations at scale",
        "Real-time decision automation"
      ]
    },
    {
      icon: Smartphone,
      name: "AI-Enabled Mobile App Development",
      description: "Mobile applications that leverage AI for intelligent user experiences and operational efficiency.",
      outcomes: [
        "Intelligent user interfaces",
        "Automated workflow management",
        "Predictive features and recommendations",
        "Native iOS & Android platforms"
      ]
    },
    {
      icon: Code,
      name: "Custom SaaS & Internal Tools",
      description: "Purpose-built software that replaces spreadsheets, manual processes, and disconnected tools with unified systems.",
      outcomes: [
        "Custom business logic automation",
        "Multi-tenant architecture",
        "Role-based access & workflows",
        "API integrations & data sync"
      ]
    },
    {
      icon: Zap,
      name: "Automation & AI Integrations",
      description: "Connect your tools, eliminate manual work, and embed AI capabilities into existing systems.",
      outcomes: [
        "Cross-platform workflow automation",
        "AI agent development (RAG, SDR)",
        "Third-party API integrations",
        "Process optimization & monitoring"
      ]
    }
  ];

  const process = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Clarity",
      description: "Understand your business model, bottlenecks, and success metrics before writing code"
    },
    {
      number: "02",
      icon: Pencil,
      title: "Architecture & Planning",
      description: "Design systems that scale with your growth and integrate with your existing operations"
    },
    {
      number: "03",
      icon: Code,
      title: "Build & Iterate",
      description: "Ship working software quickly, then refine based on real usage and feedback"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Scale & Optimize",
      description: "Monitor performance, eliminate bottlenecks, and compound improvements over time"
    }
  ];

  const differentiators = [
    {
      icon: Brain,
      title: "AI-first thinking",
      description: "We design systems around what AI can automate, not just digitize manual work"
    },
    {
      icon: Target,
      title: "Product mindset, not just code",
      description: "We think like founders building products, not contractors executing specs"
    },
    {
      icon: Users,
      title: "Founder-led execution",
      description: "Direct access to decision-makers who understand both business and technology"
    },
    {
      icon: Shield,
      title: "Long-term partnership",
      description: "We build systems we maintain for years, not hand off and disappear"
    },
    {
      icon: TrendingUp,
      title: "Revenue infrastructure focus",
      description: "We optimize for systems that directly impact your bottom line"
    },
    {
      icon: Zap,
      title: "Execution speed",
      description: "Ship working software in weeks, not quarters, then iterate based on data"
    }
  ];

  const engagementModels = [
    {
      title: "Fixed-Scope Builds",
      description: "Clear deliverables, timelines, and pricing for defined projects with measurable outcomes."
    },
    {
      title: "Long-Term Product Partnerships",
      description: "Ongoing development, optimization, and scaling as your business grows and evolves."
    },
    {
      title: "Dedicated Teams",
      description: "Embedded engineers and AI specialists working as an extension of your internal team."
    }
  ];

  const idealClients = [
    "Funded startups building AI-enabled products",
    "Growing businesses replacing manual workflows with automation",
    "Companies processing high transaction volumes",
    "Founders scaling operations without scaling headcount"
  ];

  return (
    <>
      <Head>
        <title>Services | AI-Powered Development & Automation | RedDev</title>
        <meta
          name="description"
          content="We design, build, and scale AI-powered digital products for growing businesses. Custom SaaS, intelligent automation, and revenue infrastructure."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:title" content="Services | AI-Powered Development & Automation | RedDev" />
        <meta property="og:description" content="We design, build, and scale AI-powered digital products for growing businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reddev.vercel.app/services" />
        <meta property="og:image" content="https://reddev.vercel.app/reddev.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | AI-Powered Development | RedDev" />
        <meta name="twitter:description" content="AI-powered digital products and automation for growing businesses." />
        <meta name="twitter:image" content="https://reddev.vercel.app/reddev.png" />
        
        <link rel="canonical" href="https://reddev.vercel.app/services" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <FullContainer className="relative bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden pt-32 pb-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80")',
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
              AI-powered systems that
              <span className="relative block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
                  scale revenue without scaling costs
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-10">
              We design, build, and scale digital products for growing businesses—turning 
              operational bottlenecks into automated systems that compound value over time.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 text-lg font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              Discuss Your Project
            </Link>
          </div>
        </Container>
      </FullContainer>

      {/* Who Our Services Are For */}
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center transform -rotate-12">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-8">
              Built for{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Serious Growth
                </span>
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left max-w-3xl mx-auto">
              {idealClients.map((client, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">{client}</span>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 justify-center text-slate-600 italic max-w-2xl mx-auto">
              <Minus className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
              <p className="text-base">
                Not a fit for quick-turnaround projects, low-budget builds, or teams looking for 
                staff augmentation rather than strategic partnership.
              </p>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* Core Service Areas */}
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
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
              What We{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Actually Build
                </span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Solution-focused services designed to create measurable business impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-slate-900 mb-3">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-base text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Key Outcomes</p>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, outcomeIndex) => (
                        <li key={outcomeIndex} className="flex items-start gap-3 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* How We Deliver */}
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
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
              How We{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Deliver
                </span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Communication, ownership, and execution at every stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-black text-slate-200 group-hover:text-red-100 transition-colors">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* Why Clients Choose Us */}
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
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
              Why Clients{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Choose Us
                </span>
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
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
                    <item.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* Engagement Model */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              How Clients{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Work With Us
                </span>
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Flexible engagement models designed for different stages and needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border-2 border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-2xl font-black text-white mb-4">
                    {model.title}
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed">
                    {model.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* Call to Action */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-6">
              Ready to Build Infrastructure{" "}
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  That Scales
                </span>
              </span>
              ?
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              Let&apos;s have a strategic conversation about your business, challenges, and how 
              AI-powered infrastructure can accelerate your growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              Schedule a Discussion
            </Link>
            <p className="mt-6 text-sm text-slate-500">
              No sales pitch. Just a conversation about what&apos;s possible.
            </p>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}
