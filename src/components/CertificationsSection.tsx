import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import {
  Award,
  Shield,
  CheckCircle2,
  ExternalLink,
  Maximize2,
  X,
  FileText,
  Download,
  Calendar,
  Hash,
  Sparkles,
} from 'lucide-react';

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  level: string;
  dateAwarded: string;
  certId: string;
  score?: string;
  status: 'Certified' | 'Completed' | 'Active';
  featured?: boolean;
  image?: string;
  pdfUrl?: string;
  reportUrl?: string;
  description: string;
  skills: string[];
  metrics?: string;
}

const certificationsList: Certification[] = [
  {
    id: 'ejpt',
    name: 'INE Certified Junior Penetration Tester (eJPT)',
    issuer: 'INE',
    level: 'Junior Penetration Tester',
    dateAwarded: 'November 13, 2026',
    certId: '200308598',
    score: '91%',
    status: 'Certified',
    featured: true,
    image: '/ejpt-certificate.jpg',
    pdfUrl: '/ejpt-certificate.pdf',
    reportUrl:
      'https://github.com/karthikgk1001/cyber-writeups-2026/blob/ejpt-ptes-report/eJPT_Penetration_Testing_Report_PTES.md',
    description:
      'Rigorous 48-hour hands-on practical penetration testing examination simulating real-world network and web infrastructure. Evaluated across host reconnaissance, service enumeration, vulnerability analysis, exploitation, post-exploitation privilege escalation, pivoting, and reporting.',
    skills: [
      'Host & Network Pentesting (100%)',
      'Web Application Pentesting (100%)',
      'Assessment Methodologies (94%)',
      'Host & Network Auditing (70%)',
      'Metasploit Framework',
      'Port Pivoting & Routing',
      'Hash Cracking & Hydra',
      'WordPress Exploitation',
      'PTES Reporting Standard',
    ],
    metrics: '91% Score // 2x 100% Domains',
  },
  {
    id: 'thm-pentest',
    name: 'Junior Penetration Tester Path',
    issuer: 'TryHackMe',
    level: 'Offensive Security Practitioner',
    dateAwarded: '2025 - 2026',
    certId: 'THM-JUNIOR-PENTESTER',
    status: 'Certified',
    featured: false,
    reportUrl: 'https://tryhackme.com/p/karthikgk1001',
    description:
      'Comprehensive hands-on training path covering practical pentesting methodology, privilege escalation (Linux & Windows), web application security (OWASP Top 10), network exploitation, and active target compromise.',
    skills: [
      'Linux PrivEsc',
      'Windows PrivEsc',
      'Burp Suite Pro',
      'SQL Injection',
      'Cross-Site Scripting (XSS)',
      'Network Pivoting',
    ],
    metrics: 'Top 10% Global Rank // 56+ Rooted Labs',
  },
  {
    id: 'eccouncil-blockchain',
    name: 'Cybersecurity for Blockchain',
    issuer: 'EC-Council',
    level: 'Specialist Credential',
    dateAwarded: '2025',
    certId: 'ECC-BC-2025',
    score: '90%',
    status: 'Certified',
    featured: false,
    description:
      'Specialized certification evaluating smart contract vulnerability assessment, consensus mechanism security, distributed ledger auditing, cryptographic key management, and 51% attack mitigation.',
    skills: [
      'Smart Contract Security',
      'Consensus Protocols',
      'Cryptographic Primitives',
      'Ledger Integrity',
    ],
    metrics: '90% Examination Score',
  },
];

export const CertificationsSection: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const featuredCert = certificationsList.find((c) => c.featured);
  const otherCerts = certificationsList.filter((c) => !c.featured);

  return (
    <section
      id="certifications"
      className="relative z-10 w-full px-4 sm:px-8 md:px-12 py-20 sm:py-28 md:py-36 bg-[#0C0C0C] text-[#D7E2EA] select-none border-t border-white/10"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00ff9d]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-20">
          <FadeIn delay={0} y={30} duration={0.8}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ff9d]/30 bg-[#00ff9d]/10 text-[#00ff9d] text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Industry Verified Credentials
            </div>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight text-white"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 130px)' }}
            >
              Certifications
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-[#BBCCD7]/70 font-light max-w-2xl mx-auto mt-4 font-sans">
              Demonstrated hands-on offensive & defensive security capabilities validated through practical examinations and rigorous technical assessments.
            </p>
          </FadeIn>
        </div>

        {/* 1. Featured Spotlight: INE eJPT */}
        {featuredCert && (
          <FadeIn delay={0.15} y={40} duration={0.9} className="mb-14 sm:mb-20">
            <div className="rounded-[28px] sm:rounded-[44px] border-2 border-[#00ff9d]/40 bg-gradient-to-b from-[#14181f] via-[#0E1015] to-[#0A0C0E] p-5 sm:p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(0,255,157,0.1)] relative overflow-hidden">
              {/* Corner Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#00ff9d]/20 border border-[#00ff9d]/40 flex items-center justify-center text-[#00ff9d] shadow-[0_0_15px_rgba(0,255,157,0.3)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#00ff9d] font-bold">
                      FLAGSHIP OFFENSIVE SECURITY CERTIFICATION
                    </span>
                    <p className="text-[11px] font-mono text-white/50">
                      Standard: PTES Aligned Practical Examination
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/40 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {featuredCert.status}
                  </span>
                  {featuredCert.score && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-[#00ff9d] text-black shadow-[0_0_15px_rgba(0,255,157,0.4)]">
                      SCORE: {featuredCert.score}
                    </span>
                  )}
                </div>
              </div>

              {/* Grid: Certificate Preview on Left / Details on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Certificate Image Frame (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div
                    onClick={() => setModalImage(featuredCert.image || null)}
                    className="group relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 hover:border-[#00ff9d] bg-black/60 shadow-2xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <img
                      src={featuredCert.image}
                      alt={featuredCert.name}
                      className="w-full h-full object-contain p-2 sm:p-3 transition-opacity duration-300 group-hover:opacity-90"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-full bg-[#00ff9d] text-black flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                        View Full Resolution
                      </span>
                    </div>

                    {/* Resolution / click pill */}
                    <div className="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[10px] font-mono text-white/70 flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-[#00ff9d]" /> 2376 × 1836 HQ
                    </div>
                  </div>

                  <p className="text-[11px] font-mono text-white/40 mt-2.5 flex items-center gap-1">
                    Click certificate image for full-resolution inspection
                  </p>
                </div>

                {/* Details & Metadata (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <div>
                    <span className="text-xs font-mono text-[#00ff9d] uppercase tracking-widest font-bold">
                      {featuredCert.issuer} // {featuredCert.level}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight mt-1">
                      {featuredCert.name}
                    </h3>
                  </div>

                  {/* Metadata Chips Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 py-1 font-mono text-xs">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                      <span className="text-[10px] text-white/50 flex items-center gap-1">
                        <Hash className="w-3 h-3 text-[#38bdf8]" /> Cert ID
                      </span>
                      <span className="text-white font-bold mt-0.5">{featuredCert.certId}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                      <span className="text-[10px] text-white/50 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#00ff9d]" /> Date Awarded
                      </span>
                      <span className="text-white font-bold mt-0.5">{featuredCert.dateAwarded}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-white/50 flex items-center gap-1">
                        <Award className="w-3 h-3 text-[#f59e0b]" /> Exam Score
                      </span>
                      <span className="text-[#00ff9d] font-black mt-0.5">{featuredCert.score} (Passed)</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#BBCCD7] leading-relaxed font-sans">
                    {featuredCert.description}
                  </p>

                  {/* Skills & Domain Pills */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/60 mb-2 block">
                      Validated Practical Domains:
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {featuredCert.skills.map((skill) => {
                        const isHundred = skill.includes('100%');
                        return (
                          <span
                            key={skill}
                            className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-medium transition-colors ${
                              isHundred
                                ? 'bg-[#00ff9d]/20 text-[#00ff9d] border border-[#00ff9d]/50 font-bold shadow-[0_0_10px_rgba(0,255,157,0.15)]'
                                : 'bg-white/5 text-white/80 border border-white/10'
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    {featuredCert.pdfUrl && (
                      <a
                        href={featuredCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-[#00ff9d] hover:bg-[#00ff9d]/90 hover:shadow-[0_0_20px_rgba(0,255,157,0.35)] transition-all cursor-pointer flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        <span>View Official Certificate (PDF)</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {featuredCert.reportUrl && (
                      <a
                        href={featuredCert.reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA] border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer flex items-center gap-2"
                      >
                        <span>View Technical Pentest Report</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#00ff9d]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* 2. Scalable Additional Certifications Grid */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
            <h3 className="text-base sm:text-xl font-bold uppercase tracking-wide text-white">
              Professional Credentials & Specializations
            </h3>
            <span className="text-[11px] font-mono text-white/50">
              {certificationsList.length} Credential(s) Validated
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {otherCerts.map((cert, idx) => (
              <FadeIn key={cert.id} delay={0.1 * idx} y={20} duration={0.6}>
                <div className="h-full rounded-2xl sm:rounded-3xl border border-white/15 bg-[#12141a] p-5 sm:p-7 flex flex-col justify-between hover:border-[#00ff9d]/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                  <div>
                    {/* Top Row */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[11px] font-mono text-[#00ff9d] uppercase font-bold tracking-wider">
                          {cert.issuer}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold uppercase text-white mt-0.5">
                          {cert.name}
                        </h4>
                      </div>

                      {cert.score ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/30 whitespace-nowrap">
                          {cert.score}
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/10 text-white/80 border border-white/10 whitespace-nowrap">
                          {cert.status}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#BBCCD7] leading-relaxed font-sans mb-4">
                      {cert.description}
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-white/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom info */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] font-mono">
                    <span className="text-[#00ff9d] font-semibold">{cert.metrics}</span>
                    {cert.reportUrl && (
                      <a
                        href={cert.reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Profile</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* High-Resolution Certificate Lightbox Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#12141a] border-2 border-[#00ff9d]/50 rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-[0_0_80px_rgba(0,255,157,0.3)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00ff9d]" />
                <span className="text-xs sm:text-sm font-mono text-white font-bold">
                  INE Certified Junior Penetration Tester (eJPT) — Official Credential
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/ejpt-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-[#00ff9d] hover:text-black text-white transition-colors"
                  title="Open Original PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setModalImage(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-[#f43f5e] text-white transition-colors cursor-pointer"
                  title="Close Preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="w-full max-h-[75vh] overflow-auto rounded-xl bg-black flex items-center justify-center p-2">
              <img
                src={modalImage}
                alt="eJPT Certificate Full Resolution"
                className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/15 text-[11px] font-mono text-white/60">
              <span>Certification ID: 200308598 • Date: November 13, 2026</span>
              <span className="text-[#00ff9d]">Score: 91% • Verified</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
