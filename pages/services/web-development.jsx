import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import { ArrowRight, Globe, Zap, Search, Smartphone, Layers, Plug, CheckCircle2, Bot, Sparkles, Code, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const features = [
  {
    icon: Code,
    title: "Custom Development",
    desc: "No templates. Every site is built from scratch to match your brand, your goals, and your users. React, Next.js, or whatever the project needs.",
  },
  {
    icon: Zap,
    title: "Performance-First",
    desc: "We obsess over load times. Sub-2-second pages, optimized assets, and clean code that scores well on Core Web Vitals.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    desc: "Structured markup, metadata, sitemaps, and canonical URLs baked in from day one — not bolted on after launch.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    desc: "Looks and works perfectly on every screen size. Over 60% of web traffic is mobile — your site is built for that.",
  },
  {
    icon: Layers,
    title: "CMS Integration",
    desc: "Need to update content without a developer? We integrate headless CMS tools so your team can manage pages, blogs, and media independently.",
  },
  {
    icon: Plug,
    title: "API & Third-Party Integrations",
    desc: "CRMs, payment gateways, analytics, booking systems — we connect your site to the tools your business runs on.",
  },
];

const process = [
  {
    number: "1",
    title: "Discovery Call",
    desc: "We learn about your business, your users, and what success looks like. No assumptions — just honest scoping.",
  },
  {
    number: "2",
    title: "Architecture & Design",
    desc: "We map out the site structure, page layouts, and key flows before writing a single line of code.",
  },
  {
    number: "3",
    title: "Build & Review",
    desc: "You get regular progress updates and a staging environment to review before anything goes live.",
  },
  {
    number: "4",
    title: "Launch & Handover",
    desc: "We deploy, configure your domain, and hand over full ownership — code, CMS access, everything.",
  },
];

const deliverables = [
  "Full website, delivered on an agreed date",
  "Mobile-responsive across all devices",
  "SEO foundation (meta, schema, sitemap)",
  "CMS setup if needed",
  "Analytics & tracking configured",
  "30-day post-launch support",
  "Full code & admin ownership",
  "Domain & hosting setup or migration",
];

const proofProjects = [
  {
    name: "Sunfish",
    tag: "HealthTech · US",
    desc: "IVF financing platform. Raised $10M Series A. Featured in Bloomberg and TechCrunch.",
    url: "joinsunfish.com",
  },
  {
    name: "SiteBuilderz",
    tag: "CMS · Platform",
    desc: "Custom CMS platform built from scratch — enables non-technical teams to publish without developers.",
    url: "sitebuilderz.com",
  },
  {
    name: "Tekruiter",
    tag: "HR Tech · Job Portal",
    desc: "Full job portal with advanced search, application tracking, and employer dashboards.",
    url: "tekruiter.com",
  },
];

export default function WebDevelopment() {
  return (
    <>
      <Head>
        <title>Web Development Services | RedDev</title>
        <meta name="description" content="Custom web development using React and Next.js. Performance-first, SEO-ready, mobile-optimized websites built for real business goals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://reddevsystems.com/services/web-development" />
      </Head>

      <Navbar />

      {/* HERO */}
      <FullContainer className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.2),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-40 w-[500px] h-[500px] bg-red-600/40 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-orange-600/40 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center pt-36 pb-24 md:pt-44 md:pb-32">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-center justify-center gap-3 mb-10">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75" /><span className="relative h-2.5 w-2.5 bg-red-500 rounded-full" /></span>
                <span className="text-xs font-bold text-white/90 uppercase">Web Development</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 backdrop-blur-xl">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-xs font-bold text-orange-300 uppercase tracking-wide">Built with AI</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black max-w-5xl">
              <span className="block text-white">Modern Websites.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">Intelligent by Default.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl">
              Built on React & Next.js, powered by the latest AI tools — no templates, no shortcuts. Sites that load fast, rank well, and convert visitors into customers.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="px-8 py-4 border border-white/20 rounded-xl text-white text-center font-semibold">
                View Our Work
              </Link>
            </motion.div>
          </div>
        </Container>
        <style jsx global>{`@keyframes blob{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-30px)}}.animate-blob{animation:blob 8s infinite ease-in-out}`}</style>
      </FullContainer>

      {/* WHAT WE BUILD */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl" /><div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/40 rounded-full blur-3xl" /></div>
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              What Every Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Ships With.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">Six non-negotiables we bake into every project — from a landing page to a full platform.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }} viewport={{ once: true }} className="group">
                <div className="h-full p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-red-200 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                    <f.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* TECH STACK */}
      <FullContainer className="relative py-20 md:py-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              The Stack We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Build With.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">Latest production-grade tools — not buzzwords. Everything chosen for performance, maintainability, and scale.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
            {[
              { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
              { category: "Backend", techs: ["Node.js", "Express", "Python", "FastAPI", "REST & GraphQL"] },
              { category: "AI & ML", techs: ["OpenAI API", "LangChain", "Vercel AI SDK", "Pinecone", "Hugging Face"] },
              { category: "Database", techs: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "Prisma ORM"] },
              { category: "DevOps", techs: ["Vercel", "AWS", "Docker", "GitHub Actions", "CI/CD Pipelines"] },
              { category: "CMS & Tools", techs: ["Sanity", "Contentful", "Strapi", "Stripe", "Twilio"] },
            ].map((group, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }} viewport={{ once: true }}>
                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 h-full">
                  <p className="text-xs font-black text-orange-400 uppercase tracking-widest mb-4">{group.category}</p>
                  <ul className="space-y-2">
                    {group.techs.map((tech, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                        <span className="w-1 h-1 rounded-full bg-red-500 flex-shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "Python", "OpenAI", "PostgreSQL", "Supabase", "Vercel", "Docker", "Stripe", "Sanity", "Framer Motion", "LangChain"].map((tag, i) => (
              <span key={i} className="px-4 py-2 text-xs font-semibold text-white/60 bg-white/5 border border-white/10 rounded-full hover:border-orange-500/40 hover:text-white/90 transition-all duration-200">
                {tag}
              </span>
            ))}
          </motion.div>
        </Container>
      </FullContainer>

      {/* AI INTEGRATION */}
      <FullContainer className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(234,88,12,0.08),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <Container className="relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-bold text-white/70 uppercase tracking-wide">Optional Add-on</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                AI That&apos;s Actually{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Useful.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl">
                We don&apos;t slap a chatbot on and call it AI. We integrate intelligent features that solve real problems — from smart search to live personalisation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Bot,
                  title: "AI Chat & Support",
                  desc: "Context-aware chatbot trained on your content. Handles FAQs, lead capture, and customer support 24/7.",
                },
                {
                  icon: Search,
                  title: "Smart Search",
                  desc: "Semantic search that understands intent — not just keywords. Users find what they need faster.",
                },
                {
                  icon: Sparkles,
                  title: "Personalisation",
                  desc: "Dynamic content that adapts to each visitor — recommendations, CTAs, and messaging tailored in real time.",
                },
                {
                  icon: BarChart3,
                  title: "AI-Powered Analytics",
                  desc: "Behaviour prediction, churn signals, and automated insights — not just dashboards, but decisions.",
                },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} viewport={{ once: true }}>
                  <div className="h-full p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-black text-white mb-2">{item.title}</h3>
                    <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mt-8 text-sm text-white/40 italic">
              AI features are scoped per project. We&apos;ll tell you what&apos;s worth adding for your use case — and what isn&apos;t.
            </motion.p>
          </div>
        </Container>
      </FullContainer>

      {/* DELIVERABLES */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl" /><div className="absolute top-0 right-1/4 w-64 h-64 bg-slate-300/40 rounded-full blur-3xl" /></div>
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                Everything Handed <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Over to You.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Every web project comes with a clear scope, a fixed delivery date, and full ownership at handover. No hidden extras.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-xl shadow-red-500/20">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="space-y-3">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-red-200 transition-colors duration-200">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </FullContainer>

      {/* PROCESS */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl" /></div>
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              From Call to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Live in 4 Steps.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">No surprises, no disappearing acts. You see progress at every stage.</p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.12 }} viewport={{ once: true }} className="text-center relative">
                {i < process.length - 1 && <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-red-200 to-orange-200 z-0" />}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-red-500/20">
                    <span className="text-3xl font-black text-white">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* PROOF */}
      <FullContainer className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Shipped. Live. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Proven.</span></h2>
            <p className="text-white/60">Real projects built with this exact stack.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {proofProjects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="h-full p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-xs font-semibold text-red-300 mb-4">{p.tag}</span>
                  <h3 className="text-xl font-black text-white mb-3">{p.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{p.desc}</p>
                  <p className="text-xs text-white/30 font-mono">{p.url}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-red-400 font-bold hover:text-red-300 transition-colors">
              See Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </FullContainer>

      {/* PRICING */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl" /></div>
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Fixed Price. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Zero Surprises.</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">No hourly billing. No scope creep. You know the number before we write a line of code.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$800",
                desc: "Perfect for landing pages, portfolios, or simple service sites.",
                features: [
                  "Up to 5 pages",
                  "Mobile responsive",
                  "Contact form",
                  "SEO foundation",
                  "Analytics setup",
                  "14-day delivery",
                  "30-day support",
                ],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Business",
                badge: "Most Popular",
                price: "$1,800",
                desc: "Full website with CMS, integrations, and everything your business needs to grow.",
                features: [
                  "Up to 15 pages",
                  "CMS integration",
                  "API & third-party integrations",
                  "Custom animations",
                  "Advanced SEO setup",
                  "Performance optimized",
                  "30-day support",
                ],
                cta: "Get Started",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "Complex platforms, multi-region sites, or anything that needs a tailored scope.",
                features: [
                  "Unlimited pages",
                  "AI feature integration",
                  "Custom backend & APIs",
                  "Multi-language / region",
                  "Dedicated project manager",
                  "60-day post-launch support",
                  "Priority turnaround",
                ],
                cta: "Get a Custom Quote",
                highlight: false,
                isEnterprise: true,
              },
            ].map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                {pkg.isEnterprise ? (
                  <div className="h-full p-8 bg-slate-900 rounded-2xl border-2 border-slate-700 flex flex-col">
                    <div className="mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white/70 uppercase tracking-wide mb-4">{pkg.name}</span>
                      <div className="text-4xl font-black text-white mb-2">{pkg.price}</div>
                      <p className="text-sm text-white/50">{pkg.desc}</p>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="block text-center py-3 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all duration-200">
                      {pkg.cta}
                    </Link>
                  </div>
                ) : (
                  <div className={`h-full p-8 rounded-2xl border-2 flex flex-col ${pkg.highlight ? "bg-gradient-to-br from-red-600 to-orange-600 border-transparent shadow-2xl shadow-red-500/30 scale-[1.03]" : "bg-white border-slate-200 hover:border-red-200 hover:shadow-xl transition-all duration-300"}`}>
                    <div className="mb-6">
                      {pkg.badge && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black uppercase tracking-wide mb-3 bg-white text-red-600">
                          {pkg.badge}
                        </span>
                      )}
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-sm font-black uppercase tracking-widest ${pkg.highlight ? "text-white/70" : "text-slate-400"}`}>{pkg.name}</span>
                      </div>
                      <div className={`text-4xl font-black mb-2 ${pkg.highlight ? "text-white" : "text-slate-900"}`}>{pkg.price}</div>
                      <p className={`text-sm ${pkg.highlight ? "text-white/80" : "text-slate-500"}`}>{pkg.desc}</p>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((f, j) => (
                        <li key={j} className={`flex items-center gap-3 text-sm ${pkg.highlight ? "text-white/90" : "text-slate-700"}`}>
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${pkg.highlight ? "text-white" : "text-red-500"}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={`block text-center py-3 px-6 font-bold rounded-xl transition-all duration-200 ${pkg.highlight ? "bg-white text-red-600 hover:bg-slate-100" : "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:opacity-90"}`}>
                      {pkg.cta}
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mt-10 text-center text-sm text-slate-400">
            All prices are starting points. Final quote is based on scope — we&apos;ll confirm before any work begins.
          </motion.p>
        </Container>
      </FullContainer>

      {/* CTA */}
      <FullContainer className="relative py-24 md:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_120%,rgba(220,38,38,0.18),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400">Website?</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">Tell us what you need. We&apos;ll tell you how long it takes and what it costs — no fluff.</p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group inline-flex items-center justify-center px-10 py-5 bg-white text-black text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Start a Project <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </motion.button>
            </Link>
          </motion.div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}
