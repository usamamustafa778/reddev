import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FullContainer from "@/components/common/FullContainer";
import Container from "@/components/common/Container";
import { ArrowRight, ShoppingCart, CreditCard, BarChart3, Package, Globe, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const features = [
  {
    icon: ShoppingCart,
    title: "Custom Storefront",
    desc: "No Shopify templates. A fully custom e-commerce frontend built to match your brand — product pages, collections, filtering, search, and mobile checkout.",
  },
  {
    icon: CreditCard,
    title: "Cart & Checkout",
    desc: "Frictionless checkout flows. Guest checkout, saved addresses, multiple payment methods, discount codes, and cart abandonment recovery.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    desc: "Real-time stock tracking, low-stock alerts, variant management (size, colour, SKU), and multi-warehouse support if needed.",
  },
  {
    icon: Globe,
    title: "Multi-Currency & Markets",
    desc: "Sell internationally with localised pricing, currency switching, and tax handling. Built for cross-border commerce from day one.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Profit Intelligence",
    desc: "Track revenue, margins, returns, and customer lifetime value. We can build custom analytics or integrate with tools like Google Analytics and SalesLens.",
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    desc: "Fast product pages, clean URLs, structured data markup, and image optimisation. Google loves fast e-commerce — and so do customers.",
  },
];

const process = [
  {
    number: "1",
    title: "Strategy & Scoping",
    desc: "We learn about your products, your customers, and your current conversion problems — then design the right solution.",
  },
  {
    number: "2",
    title: "Design & UX",
    desc: "Custom designs built for conversion. Product pages, collection layouts, and checkout flows reviewed and approved before build.",
  },
  {
    number: "3",
    title: "Build & Integrate",
    desc: "Full store development, payment gateway integration, inventory setup, and connection to your existing tools.",
  },
  {
    number: "4",
    title: "Launch & Optimise",
    desc: "We go live, monitor performance, and handle any post-launch issues within the included support window.",
  },
];

const deliverables = [
  "Custom e-commerce storefront",
  "Product & inventory management",
  "Cart, checkout & payment integration",
  "Discount codes & promotions",
  "Customer accounts & order history",
  "SEO-optimised product pages",
  "Mobile-first responsive design",
  "Analytics & conversion tracking",
  "30-day post-launch support",
  "Full source code ownership",
];

const proofProjects = [
  {
    name: "SalesLens",
    tag: "E-commerce · Analytics",
    desc: "Multi-channel profit intelligence platform. Gives merchants full visibility into real profitability across every sales channel.",
    badge: "Own Product",
    url: "saleslens.co",
  },
  {
    name: "500+ Lead Gen Stores",
    tag: "Local Services · US Market",
    desc: "Built hundreds of niche e-commerce and lead gen sites across 70+ US local service verticals — roofing, HVAC, plumbing and more.",
    badge: "500+ Sites",
    url: null,
  },
  {
    name: "Custom Storefronts",
    tag: "Various Industries",
    desc: "Custom e-commerce builds for clients across multiple markets — product catalogues, booking flows, and subscription stores.",
    badge: null,
    url: null,
  },
];

export default function EcomDevelopment() {
  return (
    <>
      <Head>
        <title>E-commerce Development Services | RedDev</title>
        <meta name="description" content="Custom e-commerce development — no templates, no Shopify constraints. Full-stack online stores with custom checkout, inventory management, and analytics." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://reddevsystems.com/services/ecom-development" />
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
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10">
              <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute h-full w-full rounded-full bg-red-500 opacity-75" /><span className="relative h-2.5 w-2.5 bg-red-500 rounded-full" /></span>
              <span className="text-xs font-bold text-white/90 uppercase">E-commerce Development</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black max-w-5xl">
              <span className="block text-white">E-commerce Built</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">to Sell.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl">
              Custom online stores with no template constraints. Fast product pages, frictionless checkout, real inventory management, and analytics that show you what&apos;s actually making money.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2">
                Build My Store <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="px-8 py-4 border border-white/20 rounded-xl text-white text-center font-semibold">
                View Our Work
              </Link>
            </motion.div>

            <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
              {[{ number: "Custom", label: "No Templates" }, { number: "Full Stack", label: "End-to-End Build" }, { number: "100%", label: "You Own It" }].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="text-center">
                  <div className="text-lg md:text-xl font-black text-white">{s.number}</div>
                  <div className="text-sm text-white/60 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
        <style jsx global>{`@keyframes blob{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-30px)}}.animate-blob{animation:blob 8s infinite ease-in-out}`}</style>
      </FullContainer>

      {/* FEATURES */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl" /></div>
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              What Every Store <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">We Build Includes</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">The six capabilities that turn a website into a store that actually converts.</p>
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

      {/* DELIVERABLES */}
      <FullContainer className="relative py-20 md:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">What You <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Get.</span></h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">A complete, production-ready store — custom built, properly tested, and handed over with full ownership. No monthly platform fees to us.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-xl">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="space-y-3">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </FullContainer>

      {/* PROCESS */}
      <FullContainer className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Build Your Store.</span>
            </h2>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">From Our Portfolio.</h2>
            <p className="text-white/60">Real e-commerce and commerce-adjacent projects we&apos;ve built.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {proofProjects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <div className="relative h-full p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300">
                  {p.badge && (
                    <span className="absolute top-6 right-6 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold">{p.badge}</span>
                  )}
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-xs font-semibold text-red-300 mb-4">{p.tag}</span>
                  <h3 className="text-xl font-black text-white mb-3">{p.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{p.desc}</p>
                  {p.url && <p className="text-xs text-white/30 font-mono">{p.url}</p>}
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

      {/* CTA */}
      <FullContainer className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6">
              Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Online Store?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">Tell us what you sell and how you sell it. We&apos;ll design an e-commerce experience built to convert.</p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300">
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
