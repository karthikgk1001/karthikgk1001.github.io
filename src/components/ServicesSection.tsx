import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    name: "Penetration Testing & VAPT",
    description: "Simulating realistic corporate attack surfaces using Metasploit, Burp Suite, and Kali Linux. Discovering SQLi, XSS, and authentication bypasses, producing structured CVSS-rated reports with actionable developer-facing remediation guidance."
  },
  {
    number: "02",
    name: "Detection Engineering",
    description: "Authoring high-fidelity Sigma detection rules mapped to the MITRE ATT&CK framework. Researching EDR evasion techniques (such as WSL process abuse via Sysmon Event ID 1 telemetry) and contributing verified rules to the open-source SigmaHQ community."
  },
  {
    number: "03",
    name: "Static Malware Analysis",
    description: "Developing automated forensic triage tools in Python. Analyzing file signatures (magic numbers) against declared extensions, calculating Shannon entropy, and parsing PE headers to identify packed, encrypted, or disguised malicious files."
  },
  {
    number: "04",
    name: "EDR Triage & Incident Response",
    description: "Hands-on investigation and alert triage across enterprise endpoints using SentinelOne, Netskope, Tenable Nessus, and Trellix DLP. Performing root cause analysis, verifying compromised credentials, and recommending mitigation workflows."
  },
  {
    number: "05",
    name: "Security Tooling & SIEM Systems",
    description: "Designing and building end-to-end security monitoring backends using Python (FastAPI), OpenSearch schemas, Docker Compose, and MITRE-mapped correlation rules with 91% automated test coverage and zero security audit findings."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={30} duration={0.8}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service items in vertical list */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={40}
              duration={0.7}
              className="border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 first:border-t"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-12">
                {/* Number on the left */}
                <span
                  className="font-black text-[#0C0C0C] leading-none select-none tracking-tighter"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </span>

                {/* Name + Description stacked vertically on the right */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1 md:pt-4">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
