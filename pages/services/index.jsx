import Head from "next/head";
import Link from "next/link";
import FirstNavbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import BgAnimation from "@/components/BgAnimation";
import { ArrowRight } from "lucide-react";

export default function ServicesLanding() {
  const services = [
    {
      name: "Ecommerce Development",
      slug: "ecommerce",
      description:
        "Build a powerful, conversion-optimized ecommerce platform that drives sales and enhances customer experience.",
      features: [
        "Custom ecommerce solutions",
        "Payment gateway integration",
        "Inventory management",
        "Mobile-responsive design",
      ],
      icon: "🛒",
    },
    {
      name: "Mobile App Development",
      slug: "mobile-apps",
      description:
        "Get a custom-built, conversion-optimized app that drives your business growth on iOS and Android platforms.",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "App store optimization",
        "User-friendly interfaces",
      ],
      icon: "📱",
    },
    {
      name: "Web Development",
      slug: "web-development",
      description:
        "Build a website that not only looks great but also drives results and user engagement.",
      features: [
        "Custom web applications",
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
      ],
      icon: "💻",
    },
    {
      name: "Custom Software Solutions",
      slug: "custom-solutions",
      description:
        "Tailored software solutions that meet your unique business needs and scale with your growth.",
      features: [
        "Enterprise software",
        "API integrations",
        "Cloud solutions",
        "Custom automation",
      ],
      icon: "⚙️",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | Professional Development Solutions</title>
        <meta
          name="description"
          content="Discover our comprehensive range of development services including web development, mobile apps, ecommerce solutions, and custom software development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="web development services, mobile app development, ecommerce development, custom software solutions"
        />
        <link rel="canonical" href="https://yourwebsite.com/services" />
      </Head>

      <FirstNavbar />

      {/* Hero Section */}
      <FullContainer className="relative bg-gradient-to-br from-gray-950 via-zinc-950 to-gray-950 text-white overflow-hidden py-24">
        <BgAnimation />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-52 w-[50%] h-[50%] bg-red-950/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 -right-4 w-[50%] h-[50%] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 -left-32 w-[50%] h-[50%] bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <Container className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Our
            <span className="relative ml-3">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
                Services
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0L50 7L100 0L100 8L0 8Z"
                  fill="currentColor"
                  className="text-primary/20"
                />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From web development to mobile apps, we provide comprehensive
            solutions that drive your business forward
          </p>
        </Container>
      </FullContainer>

      {/* Services Grid */}
      <FullContainer className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300 group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}
