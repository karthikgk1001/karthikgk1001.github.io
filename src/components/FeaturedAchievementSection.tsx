import React from 'react';
import { FadeIn } from './FadeIn';
import { Award, CheckCircle2, Shield, ExternalLink, Zap, Terminal } from 'lucide-react';

interface DomainScore {
  name: string;
  score: number;
  highlighted?: boolean;
  topics: string[];
}

const domains: DomainScore[] = [
  {
    name: 'Host & Network Pentesting',
    score: 100,
    highlighted: true,
    topics: ['Metasploit Exploitation', 'Hash Cracking', 'Pivoting & Port Forwarding', 'Brute-force Attacks'],
  },
  {
    name: 'Web Application Pentesting',
    score: 100,
    highlighted: true,
    topics: ['Web App Reconnaissance', 'Authentication Attacks', 'Hidden Files & Dirs', 'Vulnerability Exploitation'],
  },
  {
    name: 'Assessment Methodologies',
    score: 94,
    topics: ['Port & Service Enumeration', 'Vulnerability Analysis', 'OS Fingerprinting', 'Information Gathering'],
  },
  {
    name: 'Host & Network Auditing',
    score: 70,
    topics: ['System Info Enumeration', 'File & Credential Gathering', 'Target File Transfer', 'Network Discovery'],
  },
];

export const FeaturedAchievementSection: React.FC = () => {
  const scrollToCertifications = () => {
    const el = document.getElementById('certifications');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative z-10 w-full px-4 sm:px-8 md:px-12 py-16 sm:py-24 bg-[#0C0C0C] select-none border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Subtle top indicator */}
        <FadeIn delay={0} y={20} duration={0.6}>
          <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-white/10 mb-8 sm:mb-12">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff9d] animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#00ff9d]">
                Featured Milestone // Offensive Security
              </span>
            </div>
            <span className="text-[10px] sm:text-xs font-mono text-white/50">
              INE SECURITY ID: 200308598 • NOV 13, 2026
            </span>
          </div>
        </FadeIn>

        {/* Main Banner Container */}
        <FadeIn delay={0.1} y={30} duration={0.8}>
          <div className="relative rounded-[28px] sm:rounded-[40px] border-2 border-[#00ff9d]/30 bg-gradient-to-br from-[#101418] via-[#0C0C0C] to-[#121814] p-5 sm:p-8 md:p-12 shadow-[0_0_60px_rgba(0,255,157,0.12)] overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff9d]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

            {/* Header Content */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-[#00ff9d]/15 text-[#00ff9d] border border-[#00ff9d]/40 flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,157,0.2)]">
                    <Shield className="w-3.5 h-3.5" /> OFFICIAL CERTIFICATION
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono bg-white/5 text-[#D7E2EA]/80 border border-white/10">
                    Awarded: November 13, 2026
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
                    Status: Certified
                  </span>
                </div>

                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mt-1">
                  Certified Junior Penetration Tester{' '}
                  <span className="text-[#00ff9d] block sm:inline">| INE eJPT</span>
                </h2>

                <p className="text-xs sm:text-base md:text-lg text-[#D7E2EA]/90 max-w-3xl leading-relaxed font-sans pt-1">
                  &ldquo;Demonstrated practical penetration testing capabilities across network reconnaissance, service enumeration, vulnerability identification, web application exploitation, credential attacks, Windows and Linux environments, and post-exploitation techniques.&rdquo;
                </p>
              </div>

              {/* Overall Exam Score Badge */}
              <div className="flex lg:flex-col items-center justify-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-black/60 border border-[#00ff9d]/30 shadow-inner flex-shrink-0 min-w-[160px] sm:min-w-[200px]">
                <div className="flex flex-col items-center text-center">
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-[#D7E2EA]/60 tracking-wider">
                    Overall Exam Score
                  </span>
                  <div className="flex items-baseline gap-1 my-1">
                    <span className="text-4xl sm:text-6xl font-black text-[#00ff9d] tracking-tight drop-shadow-[0_0_20px_rgba(0,255,157,0.4)]">
                      91%
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-[#00ff9d] bg-[#00ff9d]/15 px-2.5 py-0.5 rounded-full border border-[#00ff9d]/30 font-semibold">
                    ✓ PASSED (Required: 70%)
                  </span>
                </div>
              </div>
            </div>

            {/* Domain Scores Breakdown with Highlighted 100% Scores */}
            <div className="relative z-10 pt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#D7E2EA]/80 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#00ff9d]" /> Examination Domain Performance
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#00ff9d]">
                  2x Perfect 100% Scores
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
                {domains.map((domain) => (
                  <div
                    key={domain.name}
                    className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
                      domain.highlighted
                        ? 'bg-[#0f1f18] border-2 border-[#00ff9d] shadow-[0_0_25px_rgba(0,255,157,0.25)] relative overflow-hidden'
                        : 'bg-white/5 border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {domain.highlighted && (
                      <div className="absolute top-2 right-2">
                        <span className="text-[9px] font-mono uppercase font-bold text-[#00ff9d] bg-[#00ff9d]/20 px-2 py-0.5 rounded-full border border-[#00ff9d]/40">
                          PERFECT SCORE
                        </span>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] sm:text-xs font-mono text-white/60">
                          Domain
                        </span>
                        <span
                          className={`text-xl sm:text-2xl font-black font-mono ${
                            domain.highlighted ? 'text-[#00ff9d]' : 'text-white'
                          }`}
                        >
                          {domain.score}%
                        </span>
                      </div>

                      <h4
                        className={`text-sm sm:text-base font-semibold leading-snug mb-3 ${
                          domain.highlighted ? 'text-[#00ff9d]' : 'text-white'
                        }`}
                      >
                        {domain.name}
                      </h4>

                      {/* Score Bar */}
                      <div className="w-full bg-white/10 rounded-full h-2 mb-3.5 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            domain.highlighted
                              ? 'bg-gradient-to-r from-[#00ff9d] to-[#10b981] shadow-[0_0_10px_#00ff9d]'
                              : 'bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9]'
                          }`}
                          style={{ width: `${domain.score}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Topic Tags */}
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-white/10">
                      {domain.topics.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono text-[#D7E2EA]/70 bg-black/40 px-1.5 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D7E2EA]/70">
                <CheckCircle2 className="w-4 h-4 text-[#00ff9d]" />
                <span>Structured PTES Report & Technical Findings Published</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={scrollToCertifications}
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider text-[#D7E2EA] border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Award className="w-4 h-4 text-[#00ff9d]" />
                  <span>Inspect Certificate</span>
                </button>

                <a
                  href="https://github.com/karthikgk1001/cyber-writeups-2026/blob/ejpt-ptes-report/eJPT_Penetration_Testing_Report_PTES.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider text-black bg-[#00ff9d] hover:bg-[#00ff9d]/90 hover:shadow-[0_0_20px_rgba(0,255,157,0.4)] transition-all cursor-pointer flex items-center gap-1.5 font-bold"
                >
                  <span>Technical Report</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
