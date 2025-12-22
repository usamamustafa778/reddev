import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Shield, Lock, CheckCircle, Globe, Server, Database } from "lucide-react";

export default function SecurityCompliance() {
  const securityFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant development practices"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Protection",
      description: "GDPR, CCPA, and HIPAA compliance implementation"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure Security",
      description: "AWS/Azure security best practices & monitoring"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Secure Development",
      description: "OWASP Top 10 protection & security audits"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SSL & Encryption",
      description: "End-to-end encryption & certificate management"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Compliance Reporting",
      description: "Detailed security documentation & audit trails"
    }
  ];

  return (
    <FullContainer className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            🔒 Enterprise-Grade Security
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Security & Compliance{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
              Built-In
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We implement enterprise-grade security measures and compliance standards 
            from day one, protecting your business and customer data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Security-First Development Process
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Every project includes security assessment, penetration testing, and compliance documentation. 
              We don't launch until security baselines are met.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Security Audit Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Penetration Testing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Compliance Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Ongoing Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
}
