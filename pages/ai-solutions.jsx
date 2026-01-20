import Head from "next/head";
import Link from "next/link";
import FirstNavbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";
import FullContainer from "@/components/common/FullContainer";
import BgAnimation from "@/components/BgAnimation";
import { ArrowRight, MessageSquare, Users, Brain, Zap, Code, CheckCircle, Clock, Target, TrendingUp } from "lucide-react";

export default function AISolutions() {
  const services = [
    {
      name: "AI Support Agent (RAG)",
      description: "Intelligent customer support trained on your documentation with seamless escalation to human agents.",
      deliverables: [
        "Custom RAG system trained on your docs",
        "Helpdesk integration (Zendesk, Intercom, etc.)",
        "Human escalation workflows",
        "Performance analytics dashboard",
        "Multi-channel deployment (web, Slack, email)"
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      timeline: "2-4 weeks",
      pricing: "Starting at $15k"
    },
    {
      name: "AI SDR / Lead Qualifier",
      description: "Automate lead qualification, meeting booking, and follow-ups with CRM integration.",
      deliverables: [
        "Lead scoring and qualification logic",
        "Calendar integration for meeting booking",
        "CRM sync (Salesforce, HubSpot, Pipedrive)",
        "Email sequence automation",
        "Conversion tracking and reporting"
      ],
      icon: <Users className="w-8 h-8" />,
      timeline: "3-5 weeks", 
      pricing: "Starting at $20k"
    },
    {
      name: "Internal Knowledge Assistant",
      description: "Slack/web assistant with secure access to permissioned company data and citations.",
      deliverables: [
        "Slack bot with permissions system",
        "Web interface with role-based access",
        "Document ingestion pipeline",
        "Citation and source tracking",
        "Usage analytics and insights"
      ],
      icon: <Brain className="w-8 h-8" />,
      timeline: "2-3 weeks",
      pricing: "Starting at $12k"
    },
    {
      name: "AI Workflow Automation",
      description: "Custom automations using n8n/Make/Zapier plus custom code for complex business logic.",
      deliverables: [
        "Workflow analysis and mapping",
        "Custom automation development",
        "Third-party integrations",
        "Error handling and monitoring",
        "Performance optimization"
      ],
      icon: <Zap className="w-8 h-8" />,
      timeline: "3-6 weeks",
      pricing: "Starting at $18k"
    },
    {
      name: "Custom LLM Integrations",
      description: "Embed AI capabilities into your existing products with custom API development.",
      deliverables: [
        "API design and development",
        "Model fine-tuning (if needed)",
        "Security and rate limiting",
        "Documentation and SDKs",
        "Monitoring and analytics"
      ],
      icon: <Code className="w-8 h-8" />,
      timeline: "4-8 weeks",
      pricing: "Starting at $25k"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Data Audit",
      description: "We analyze your data sources, business processes, and technical requirements to design the optimal AI solution."
    },
    {
      step: 2,
      title: "Prototype in 7-14 Days",
      description: "Rapid prototyping to validate the approach and demonstrate core functionality before full development."
    },
    {
      step: 3,
      title: "Evaluation & Guardrails",
      description: "Implement safety measures, testing protocols, and performance benchmarks to ensure reliable operation."
    },
    {
      step: 4,
      title: "Production Deployment",
      description: "Secure deployment with monitoring, logging, and integration with your existing systems."
    },
    {
      step: 5,
      title: "Monitoring & Iteration",
      description: "Ongoing performance monitoring with regular improvements based on real-world usage data."
    }
  ];

  const kpis = [
    { metric: "Ticket Deflection Rate", description: "% of inquiries resolved without human intervention" },
    { metric: "Time-to-Resolution", description: "Average time from inquiry to resolution" },
    { metric: "Lead-to-Meeting Rate", description: "% of qualified leads that book meetings" },
    { metric: "QA Accuracy Score", description: "Quality of AI responses vs human evaluation" },
    { metric: "Cost Per Ticket", description: "Total support cost divided by tickets handled" },
    { metric: "Process Cycle Time", description: "Time reduction in automated workflows" }
  ];

  const faqs = [
    {
      question: "What is RAG and how does it work?",
      answer: "RAG (Retrieval-Augmented Generation) combines your private documents with AI to provide accurate, contextual responses. The AI searches your knowledge base first, then generates responses based on that specific information, ensuring accuracy and relevance to your business."
    },
    {
      question: "How do you prevent AI hallucinations?",
      answer: "We implement multiple safety layers: RAG ensures responses are grounded in your data, confidence scoring flags uncertain responses, guardrails prevent off-topic queries, and human-in-the-loop escalation handles complex cases. All responses include citations to source material."
    },
    {
      question: "Will you train AI on our private data?",
      answer: "We use your data for RAG (retrieval) but don't fine-tune models on your private information. Your data stays secure in your vector database, and we can deploy entirely on your infrastructure if required for maximum security."
    },
    {
      question: "Can AI solutions be deployed privately?",
      answer: "Yes. We offer multiple deployment options: cloud-hosted (AWS/Azure), on-premises, or hybrid. For sensitive data, we can deploy entirely within your infrastructure with no external API calls."
    },
    {
      question: "What are typical timelines and pricing?",
      answer: "Simple AI assistants start at $12k and take 2-3 weeks. Complex integrations range from $20-50k+ and take 4-8 weeks. We provide fixed-price quotes after discovery. All projects include 90 days of optimization and support."
    }
  ];

  return (
    <>
      <Head>
        <title>AI Agents & Automations for Sales, Support, and Operations | RedDev</title>
        <meta
          name="description"
          content="Custom AI agent development for B2B companies. RAG chatbots, AI SDR agents, workflow automation, and LLM integrations. Enterprise-grade AI with human oversight and safety guardrails."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="AI agent development, RAG chatbot development, custom AI chatbot for business, AI workflow automation, LLM integration services, enterprise chatbot development, AI customer support, AI lead qualification, data privacy AI, human-in-the-loop AI, AI guardrails, prompt injection protection"
        />
        
        <meta property="og:title" content="AI Agents & Automations for Sales, Support, and Operations" />
        <meta property="og:description" content="Custom AI agent development for B2B companies. RAG chatbots, AI SDR agents, workflow automation, and LLM integrations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/ai-solutions" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Agents & Automations for Business" />
        <meta name="twitter:description" content="Custom AI agent development with enterprise-grade security and human oversight." />
        
        <link rel="canonical" href="https://yourwebsite.com/ai-solutions" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-8">
            🤖 AI Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI Agents & Automations for
            <span className="relative ml-3">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-primary to-rose-300">
                Sales, Support, and Ops
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
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Custom AI agents that handle customer support, qualify leads, and automate workflows—
            built with enterprise-grade security, human oversight, and transparent operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 group"
            >
              <span className="mr-3">Book Discovery Call</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Container>
      </FullContainer>

      {/* Services Grid */}
      <FullContainer className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Solutions We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From customer support to lead qualification, we build AI agents that integrate 
              seamlessly with your existing systems and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.timeline}
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        {service.pricing}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li
                        key={deliverableIndex}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* Process Section */}
      <FullContainer className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to deployment, we follow a proven process that ensures 
              your AI solution is safe, effective, and aligned with your business goals.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 via-primary/20 to-transparent hidden md:block" />
            
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="relative z-10 w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </FullContainer>

      {/* KPIs Section */}
      <FullContainer className="py-24 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              KPIs We Measure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We track meaningful metrics that demonstrate real business impact 
              and continuous improvement of your AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-bold text-gray-900">
                    {kpi.metric}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {kpi.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* FAQ Section */}
      <FullContainer className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about AI development, security, and implementation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </FullContainer>

      {/* CTA Section */}
      <FullContainer className="py-24 bg-gradient-to-r from-primary to-secondary">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your AI Solution?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let&apos;s discuss your specific requirements and create a custom AI solution 
              that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-50 transition-all duration-300 group"
              >
                <span className="mr-3">Book Discovery Call</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="mt-6 text-white/80">
              Projects start at $10k+ • Free consultation included
            </div>
          </div>
        </Container>
      </FullContainer>

      <Footer />
    </>
  );
}
