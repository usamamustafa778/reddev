import React from "react";
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import BgAnimation from "@/components/BgAnimation";
import { Target, Compass, Zap, Shield, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const principles = [
    {
      icon: Target,
      title: "Ownership",
      description: "We build systems we'd use ourselves and maintain for years."
    },
    {
      icon: Compass,
      title: "Clarity over complexity",
      description: "Simple, well-documented solutions that teams can actually operate."
    },
    {
      icon: Zap,
      title: "Execution speed",
      description: "Ship working software quickly, then iterate based on real usage."
    },
    {
      icon: Shield,
      title: "Long-term thinking",
      description: "Infrastructure decisions that compound value over time."
    },
    {
      icon: Lightbulb,
      title: "Continuous learning",
      description: "Every project teaches us how to build better systems."
    }
  ];

  return (
    <>
      <Head>
        <title>About Us | Travel & Accommodation Infrastructure Specialists | RedDev</title>
        <meta
          name="description"
          content="Building booking platforms, property management systems, and automation solutions for travel and accommodation businesses. Learn about our mission, vision, and specialized approach."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:title" content="About Us | Travel & Accommodation Infrastructure Specialists | RedDev" />
        <meta property="og:description" content="Building booking platforms, property management systems, and automation solutions for travel and accommodation businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reddev.vercel.app/about" />
        <meta property="og:image" content="https://reddev.vercel.app/reddev.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Travel & Accommodation Infrastructure Specialists" />
        <meta name="twitter:description" content="Building booking platforms, property management systems, and automation solutions for travel and accommodation businesses." />
        <meta name="twitter:image" content="https://reddev.vercel.app/reddev.png" />
        
        <link rel="canonical" href="https://reddev.vercel.app/about" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <FullContainer className="relative bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden pt-32 pb-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80")',
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
              Building infrastructure that
              <span className="relative block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
                  powers travel & accommodation operations
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              We build booking platforms, property management systems, and automation solutions 
              for travel and accommodation businesses processing thousands of bookings per day—where 
              operational efficiency directly impacts revenue and guest satisfaction.
            </p>
          </div>
        </Container>
      </FullContainer>

      {/* Our Story Section */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Subtle background effects */}
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
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 mb-3">
                Our{" "}
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Story
                  </span>
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-slate-600 leading-relaxed">
              <p>
                RedDev started because we kept seeing the same problem in travel and accommodation: 
                businesses generating significant bookings through marketing, but losing 30-40% of 
                revenue to operational inefficiency.
              </p>
              
              <p>
                Manual booking management. Disconnected property systems. Staff doing repetitive tasks 
                that should be automated. Critical operations—from check-ins to cleaning schedules to 
                guest communications—living in spreadsheets and WhatsApp threads instead of integrated systems.
              </p>
              
              <p>
                We started building infrastructure specifically for travel and accommodation businesses—not 
                as a generic service, but as specialists who understand the unique challenges of managing 
                properties, bookings, and guest experiences at scale. The pattern was clear: companies that 
                invested in proper booking and property management infrastructure grew faster and operated 
                leaner than those that didn&apos;t.
              </p>
              
              <p>
                Today, we work with hotels, vacation rentals, and travel booking platforms processing 
                thousands of bookings daily, building the systems that automate tasks, streamline 
                management, and let small teams operate at enterprise scale.
              </p>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      {/* Mission & Vision Section */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                      Mission
                    </h3>
                  </div>
                </div>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Build booking platforms, property management systems, and automation solutions that 
                  help travel and accommodation businesses turn operational bottlenecks into competitive 
                  advantages. We measure success by how much manual work we eliminate—from booking 
                  management to property tasks—and how much faster our clients can scale.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="p-8 bg-white rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                      Vision
                    </h3>
                  </div>
                </div>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Become the infrastructure partner for travel and accommodation businesses building 
                  for the long term. Not chasing trends or quick contracts—building specialized 
                  booking systems, property management platforms, and automation expertise that 
                  compound in value over decades.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </FullContainer>

      {/* How We Think & Work Section */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
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
                How We{" "}
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                    Think & Work
                  </span>
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Principles that guide how we build, who we work with, and what we optimize for.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-orange-500 flex items-center justify-center transition-all duration-300">
                        <principle.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                      </div>
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
          </div>
        </Container>
      </FullContainer>

      {/* Future Focus Section */}
      <FullContainer className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="absolute inset-0 opacity-20 -z-10">
          <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/50 rounded-full mix-blend-multiply filter blur-xl" />
          <div className="absolute bottom-0 -right-52 w-[50%] h-[50%] bg-orange-950/50 rounded-full mix-blend-multiply filter blur-xl" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
                Building for{" "}
                <span className="relative inline-block">
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    Decades, Not Quarters
                  </span>
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
            </div>
            
            <div className="space-y-6 text-base md:text-lg text-slate-300 leading-relaxed mb-12">
              <p>
                We&apos;re not optimizing for the next funding round or exit. We&apos;re building 
                a company that gets better at solving hard infrastructure problems every year.
              </p>
              
              <p>
                That means investing in depth over breadth. Choosing clients who value long-term 
                partnership over one-off projects. Building systems we&apos;ll maintain and improve 
                for years, not hand off and forget.
              </p>
              
              <p className="text-white font-black text-lg md:text-xl">
                The infrastructure we build today becomes the foundation for what we build tomorrow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-slate-700">
              <div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">6+</div>
                <div className="text-slate-400">Years building travel infrastructure</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">85%</div>
                <div className="text-slate-400">Long-term client retention</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2">10K+</div>
                <div className="text-slate-400">Bookings processed daily</div>
              </div>
            </div>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}
