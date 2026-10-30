import React from 'react';
import { FadeIn } from './FadeIn';
import { EtherealCloudsBackground } from './EtherealCloudsBackground';

interface SkillItem {
  number: string;
  name: string;
  description: string;
  tools: string[];
}

const skills: SkillItem[] = [
  {
    number: "01",
    name: "Offensive Security & VAPT",
    description: "Vulnerability assessment and penetration testing across simulated corporate networks and web applications. Skilled in manual verification of SQLi, reflected XSS, authentication bypasses, service enumeration, and generating structured CVSS remediation reports.",
    tools: ["Burp Suite", "Metasploit", "Nmap", "Gobuster", "Hydra", "OWASP Top 10"]
  },
  {
    number: "02",
    name: "Defensive Security & EDR",
    description: "Enterprise endpoint threat triage and incident investigation from hands-on industry experience at Maveric Systems. Validating malware alerts, investigating unauthorized binaries, analyzing compromised credentials, and enforcing enterprise security policies.",
    tools: ["SentinelOne", "Netskope", "Tenable Nessus", "Trellix DLP", "Credential Auditing"]
  },
  {
    number: "03",
    name: "Threat Detection Engineering",
    description: "Researching advanced evasion mechanics (such as WSL process abuse) and developing production-grade detection rules mapped to the MITRE ATT&CK framework. Successfully contributed verified detection rules to the open-source SigmaHQ repository.",
    tools: ["Sigma Rules", "Sysmon Event Telemetry", "MITRE ATT&CK", "Correlation Windows", "SIEM Logic"]
  },
  {
    number: "04",
    name: "Malware Analysis & Forensics",
    description: "Static file inspection and binary triage. Calculating file header signatures (magic numbers) against file extensions, computing Shannon entropy for packed/encrypted malware detection, and conducting network packet analysis.",
    tools: ["Wireshark", "Static Malware Analysis", "Entropy Scoring", "PE Headers", "TCP/IP Telemetry"]
  },
  {
    number: "05",
    name: "Scripting & DevSecOps",
    description: "Developing robust automation tooling and self-hosted monitoring platforms. Architecting modular FastAPI backends, OpenSearch schemas, PostgreSQL databases, Docker Compose stacks, and comprehensive automated test suites (91% test coverage).",
    tools: ["Python", "Bash", "FastAPI", "OpenSearch", "PostgreSQL", "Docker Compose"]
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative z-0 text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none overflow-hidden"
    >
      {/* Ethereal Pastel Clouds & Sky Background */}
      <EtherealCloudsBackground />

      {/* Content Container */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <FadeIn delay={0} y={30} duration={0.8}>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* 5 Skills items in vertical list */}
        <div className="flex flex-col">
          {skills.map((skill, index) => (
            <FadeIn
              key={skill.number}
              delay={index * 0.1}
              y={40}
              duration={0.7}
              className="border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12 first:border-t"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 md:gap-12">
                {/* Number on the left */}
                <span
                  className="font-black text-[#0C0C0C] leading-none select-none tracking-tighter drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {skill.number}
                </span>

                {/* Name + Description + Tool Tags on the right */}
                <div className="flex flex-col gap-3 flex-1 md:pt-4">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {skill.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-75 font-sans"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#0C0C0C]/10 text-[#0C0C0C]/85 shadow-sm hover:bg-white hover:border-[#0C0C0C]/25 transition-all"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
