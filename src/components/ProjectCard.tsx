import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { ShieldAlert, Terminal, FileCode2, CheckCircle2, Activity, Cpu, AlertTriangle, Zap, Award } from 'lucide-react';

export interface ProjectData {
  number: string;
  category: string;
  name: string;
  githubUrl: string;
  metrics?: string;
  buttonLabel?: string;
  type: 'ejpt' | 'ember' | 'wsl' | 'siem' | 'magic';
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track scroll position of each card as it sticks and gets covered
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start 80px', 'end start'],
  });

  const isLast = index === totalCards - 1;
  // Scaled down targets: Card 0 -> 0.90, Card 1 -> 0.93, Card 2 -> 0.965, Card 3 -> 1.0
  const targetScale = 1 - (totalCards - 1 - index) * 0.032;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.78]);

  return (
    <div
      ref={cardRef}
      className="sticky flex items-start justify-center will-change-transform mb-6 sm:mb-12 md:mb-16 last:mb-0"
      style={{
        top: `calc(3.6rem + ${index * 16}px)`,
        zIndex: 10 + index,
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full max-w-6xl mx-auto rounded-[24px] sm:rounded-[40px] md:rounded-[52px] border-2 border-[#D7E2EA] bg-[#0C0C0C]/95 backdrop-blur-2xl p-3.5 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-all"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-5 pb-3 sm:pb-4 border-b border-[#D7E2EA]/20">
          <div className="flex items-baseline gap-2.5 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 4.2rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-sm uppercase tracking-widest text-[#BBCCD7]/70 font-mono">
                {project.category}
              </span>
              <h3 className="text-xs sm:text-xl md:text-2xl font-medium uppercase text-white tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {project.metrics && (
              <span className="hidden sm:inline-block text-[11px] sm:text-xs font-mono text-[#00ff9d] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#00ff9d]/30 bg-[#00ff9d]/10">
                {project.metrics}
              </span>
            )}
            <LiveProjectButton
              label={project.buttonLabel || "Live Project"}
              href={project.githubUrl}
              className="!px-4 !py-1.5 sm:!px-8 sm:!py-3 !text-xs sm:!text-sm"
            />
          </div>
        </div>

        {/* Bottom row: Custom High-Tech Security Visual Panels - Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-5 items-stretch min-h-[300px] md:min-h-[400px]">
          {/* Left column (40% width on desktop, 100% on mobile): 2 stacked panels */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4">
            {project.type === 'ejpt' && (
              <>
                {/* PTES Methodology & Target Environment */}
                <div className="flex-1 rounded-[18px] sm:rounded-[32px] border border-[#00ff9d]/30 bg-[#12141a] p-3 sm:p-5 flex flex-col justify-between shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-[#00ff9d]">
                      <Terminal className="w-3.5 h-3.5" /> ptes_assessment.log
                    </span>
                    <span className="text-[10px] text-[#00ff9d] font-bold">PTES STANDARD</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-[#BBCCD7] space-y-0.5 sm:space-y-1 py-1.5 leading-relaxed">
                    <p><span className="text-[#38bdf8]">Scope:</span> Multi-Host Windows & Linux Lab</p>
                    <p><span className="text-white/40">Phases:</span> Recon → Vuln Analysis → Exploit → Pivoting</p>
                    <p><span className="text-[#f43f5e] font-bold">RCE:</span> WordPress Exploit → SYSTEM Shell</p>
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-0.5 rounded-md border border-[#00ff9d]/20 w-fit">
                    ASSESSMENT STATUS: COMPLETED (91%)
                  </div>
                </div>

                {/* Domain & Practical Competency Breakdown */}
                <div className="flex-1 rounded-[18px] sm:rounded-[32px] border border-[#D7E2EA]/30 bg-[#12141a] p-3 sm:p-5 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-white">
                      <Award className="w-3.5 h-3.5 text-[#00ff9d]" /> Examination Domains
                    </span>
                    <span className="text-[#00ff9d] text-[10px] sm:text-xs font-bold">2× 100% PERFECT</span>
                  </div>
                  <div className="space-y-1 py-1.5 font-mono text-[10px] sm:text-xs">
                    <div className="flex justify-between text-white/80">
                      <span>Host & Network Pentesting:</span>
                      <span className="text-[#00ff9d] font-bold">100%</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Web Application Pentesting:</span>
                      <span className="text-[#00ff9d] font-bold">100%</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Assessment Methodologies:</span>
                      <span className="text-[#38bdf8]">94%</span>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-white/50">
                    Validated through hands-on technical exploitation.
                  </div>
                </div>
              </>
            )}

            {project.type === 'ember' && (
              <>
                {/* CUDA Kernel Telemetry Panel */}
                <div className="flex-1 rounded-[18px] sm:rounded-[32px] border border-[#D7E2EA]/30 bg-[#12141a] p-3 sm:p-5 flex flex-col justify-between shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-[#00ff9d]">
                      <Zap className="w-3.5 h-3.5 text-[#00ff9d]" /> fused_gemm_relu.cu
                    </span>
                    <span className="text-[10px] text-white/50">CUDA C++</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-[#BBCCD7] space-y-0.5 sm:space-y-1 py-1.5 leading-relaxed">
                    <p><span className="text-[#38bdf8]">__global__</span> void fused_gemm_bias_relu(</p>
                    <p className="pl-2 text-white/50">const float* A, // 2381-dim PE</p>
                    <p className="pl-2 text-white/50">const float* W, // Weights</p>
                    <p><span className="text-[#f59e0b]">__shared__</span> float sA[32][32];</p>
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-0.5 rounded-md border border-[#00ff9d]/20 w-fit">
                    NVRTC JIT Runtime + PyTorch
                  </div>
                </div>

                {/* Model Benchmark & Speedup Panel */}
                <div className="flex-1 rounded-[18px] sm:rounded-[32px] border border-[#D7E2EA]/30 bg-[#12141a] p-3 sm:p-5 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" /> Model Evaluation
                    </span>
                    <span className="text-[#00ff9d] text-[10px] sm:text-xs font-bold">5.1× SPEEDUP</span>
                  </div>
                  <div className="space-y-1 py-1.5 font-mono text-[10px] sm:text-xs">
                    <div className="flex justify-between text-white/80">
                      <span>ROC-AUC Score:</span>
                      <span className="text-[#00ff9d]">97.12%</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Accuracy / F1:</span>
                      <span className="text-[#38bdf8]">92.90% / 92.87%</span>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-white/50">
                    5,000-sample test set vs cuBLAS & LightGBM.
                  </div>
                </div>
              </>
            )}

            {project.type === 'wsl' && (
              <>
                {/* WSL Telemetry Panel */}
                <div className="flex-1 rounded-[18px] sm:rounded-[32px] border border-[#D7E2EA]/30 bg-[#12141a] p-3 sm:p-5 flex flex-col justify-between shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-[#00ff9d]">
                      <Terminal className="w-3.5 h-3.5" /> sysmon_event_1.log
                    </span>
                    <span className="text-[10px] text-white/50">EVENT ID: 1</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-[#BBCCD7] space-y-0.5 sm:space-y-1 py-1.5 leading-relaxed">
                    <p><span className="text-[#00ff9d]">Image:</span> C:\Windows\System32\wsl.exe</p>
                    <p><span className="text-white/40">CommandLine:</span> wsl.exe -d Ubuntu -u root</p>
                    <p><span className="text-[#f59e0b]">ParentImage:</span> C:\Windows\explorer.exe</p>
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#00ff9d] bg-[#00ff9d]/10 px-2 py-0.5 rounded-md border border-[#00ff9d]/20 w-fit">
                    MATCH: WSL Process Execution Evasion
                  </div>
                </div>

                {/* WSL MITRE Mapping Panel */}
                <div className="flex-1 rounded-[18px] sm:rounded-[32px] border border-[#D7E2EA]/30 bg-[#12141a] p-3 sm:p-5 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-white">
                      <ShieldAlert className="w-3.5 h-3.5 text-[#38bdf8]" /> MITRE ATT&CK
                    </span>
                    <span className="text-[#00ff9d] text-[9px] sm:text-[10px] font-bold">SIGMAHQ</span>
                  </div>
                  <div className="flex flex-wrap gap-1 py-1.5">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-[#38bdf8]">
                      T1202 Indirect Command
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-[#f43f5e]">
                      T1562 Defense Evasion
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-white/50">
                    Validated via attack simulation & Sysmon ID 1.
                  </div>
                </div>
              </>
            )}

            {project.type === 'siem' && (
              <>
                {/* SIEM API Ingestion Panel */}
                <div className="flex-1 rounded-[18px] sm:rounded-[32px] border border-[#D7E2EA]/30 bg-[#12141a] p-3 sm:p-5 flex flex-col justify-between shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-[#38bdf8]">
                      <Activity className="w-3.5 h-3.5" /> FastAPI Ingestion API
                    </span>
                    <span className="text-[#00ff9d] text-[10px]">200 OK</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-[#BBCCD7] space-y-0.5 sm:space-y-1 py-1.5 leading-relaxed">
                    <p className="text-white/40">POST /api/v1/logs/ingest</p>
                    <p><span className="text-[#38bdf8]">Auth:</span> JWT Bearer (Argon2id)</p>
                    <p><span className="text-white/40">Latency:</span> 4.2ms | <span className="text-[#00ff9d]">Rate-Limit: Active</span></p>
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 rounded-md border border-[#38bdf8]/20 w-fit">
                    OpenSearch Normalization: PASS
                  </div>
                </div>

                {/* SIEM Automated Tests Panel */}
                <div className="flex-1 rounded-[18px] sm:rounded-[32px] border border-[#D7E2EA]/30 bg-[#12141a] p-3 sm:p-5 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff9d]" /> Test Metrics
                    </span>
                    <span className="text-[#00ff9d] text-[10px] sm:text-xs font-bold">91% COVERAGE</span>
                  </div>
                  <div className="space-y-1 py-1 font-mono text-[10px] sm:text-xs">
                    <div className="flex justify-between text-white/80">
                      <span>Automated Tests:</span>
                      <span className="text-[#00ff9d]">62/62 Passed</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Trivy & Gitleaks:</span>
                      <span className="text-[#00ff9d]">0 Findings</span>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-white/50">
                    Docker Compose & PostgreSQL architecture.
                  </div>
                </div>
              </>
            )}

            {project.type === 'magic' && (
              <>
                {/* Magic Numbers Hex Inspection */}
                <div className="flex-1 rounded-[18px] sm:rounded-[32px] border border-[#D7E2EA]/30 bg-[#12141a] p-3 sm:p-5 flex flex-col justify-between shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-[#f59e0b]">
                      <Cpu className="w-3.5 h-3.5" /> Header Analyzer
                    </span>
                    <span className="text-[#f43f5e] text-[10px] font-bold">MISMATCH</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-xs text-[#BBCCD7] space-y-0.5 sm:space-y-1 py-1 leading-relaxed">
                    <p className="text-white/40">Offset 00: <span className="text-[#f59e0b] font-bold">4D 5A 90 00</span> (PE/MZ)</p>
                    <p><span className="text-white/40">Declared:</span> .pdf vs Actual: PE32</p>
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono text-[#f43f5e] bg-[#f43f5e]/10 px-2 py-0.5 rounded-md border border-[#f43f5e]/20 w-fit">
                    ALERT: Masqueraded Binary
                  </div>
                </div>

                {/* Shannon Entropy Panel */}
                <div className="flex-1 rounded-[18px] sm:rounded-[32px] border border-[#D7E2EA]/30 bg-[#12141a] p-3 sm:p-5 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[11px] sm:text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-white">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#f59e0b]" /> Entropy Risk
                    </span>
                    <span className="text-[#f43f5e] text-[10px] sm:text-xs font-bold">7.89 / 8.0</span>
                  </div>
                  <div className="py-1 space-y-1">
                    <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#00ff9d] via-[#f59e0b] to-[#f43f5e] h-full w-[96%]"></div>
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-white/50">
                    High entropy detected in section .text (packed).
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right column (60% width on desktop, 100% on mobile): 1 visual code / telemetry panel */}
          <div className="md:col-span-6 rounded-[18px] sm:rounded-[32px] border border-[#D7E2EA]/30 bg-[#101218] p-3.5 sm:p-6 flex flex-col justify-between shadow-xl overflow-hidden min-h-[220px] sm:min-h-[280px]">
            {project.type === 'ejpt' && (
              <>
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 font-mono text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5 text-white">
                    <FileCode2 className="w-3.5 h-3.5 text-[#00ff9d]" /> eJPT_Penetration_Testing_Report_PTES.md
                  </span>
                  <span className="text-[9px] sm:text-xs px-2 py-0.5 rounded-full bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30 font-semibold">
                    OFFSEC REPORT
                  </span>
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-[#BBCCD7] space-y-1 sm:space-y-1.5 py-2 sm:py-3 overflow-x-auto leading-relaxed">
                  <p><span className="text-white/40">[1] Service Enumeration:</span> Discovered FTP (21), HTTP (80), SMB (445), MySQL (3306)</p>
                  <p><span className="text-white/40">[2] Web Exploitation:</span> WordPress plugin arbitrary file upload → Meterpreter staging</p>
                  <p><span className="text-white/40">[3] PrivEsc:</span> <span className="text-[#00ff9d] font-bold">meterpreter &gt; getuid → NT AUTHORITY\SYSTEM</span></p>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 my-0.5 sm:my-1">
                    <div className="flex flex-col gap-1 text-[10px] sm:text-[11px]">
                      <div className="flex justify-between items-center">
                        <span className="text-[#00ff9d] font-bold">[POST-EXPLOITATION] PIVOTING & LATERAL MOVEMENT</span>
                        <span className="text-[#38bdf8]">Subnet: 172.16.x.x</span>
                      </div>
                      <p className="text-white/60 text-[9px] sm:text-[10px]">
                        Routing table updated via Metasploit autoroute + SMB credential validation across internal hosts.
                      </p>
                    </div>
                  </div>
                  <p className="text-white/40">[4] Findings & Remediation: <span className="text-white font-semibold">CVSS scores, proof-of-concept logs, hardening roadmap</span></p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] sm:text-xs font-mono text-white/50">
                  <span>PTES Documentation Standard</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ff9d] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>View Technical Report ↗</span>
                  </a>
                </div>
              </>
            )}

            {project.type === 'ember' && (
              <>
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 font-mono text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5 text-white">
                    <Cpu className="w-3.5 h-3.5 text-[#00ff9d]" /> ember_pipeline.py
                  </span>
                  <span className="text-[9px] sm:text-xs px-2 py-0.5 rounded-full bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30 font-semibold">
                    CUDA
                  </span>
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-[#BBCCD7] space-y-1 sm:space-y-1.5 py-2 sm:py-3 overflow-x-auto leading-relaxed">
                  <p><span className="text-white/40">[1] PE Feature Extraction:</span> 2,381-dim vector via LIEF (1.4ms)</p>
                  <p><span className="text-white/40">[2] Kernel Execution:</span> Tiled shared-memory GEMM (32×32)</p>
                  <p><span className="text-white/40">[3] Inference:</span> <span className="text-[#f43f5e] font-bold">Malicious Prob = 0.9842</span></p>
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 my-0.5 sm:my-1">
                    <div className="flex justify-between items-center text-[10px] sm:text-[11px]">
                      <span className="text-[#f43f5e] font-bold">[VERDICT] MALWARE DETECTED</span>
                      <span className="text-[#00ff9d]">Conf: 98.42%</span>
                    </div>
                  </div>
                  <p className="text-white/40">[4] Speedup: <span className="text-[#00ff9d] font-bold">5.1× speedup</span> over CPU</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] sm:text-xs font-mono text-white/50">
                  <span>EMBER 2018 v2</span>
                  <span className="text-[#00ff9d]">ember-cuda-malware</span>
                </div>
              </>
            )}

            {project.type === 'wsl' && (
              <>
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 font-mono text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5 text-white">
                    <FileCode2 className="w-3.5 h-3.5 text-[#00ff9d]" /> proc_creation_wsl.yml
                  </span>
                  <span className="text-[9px] sm:text-xs px-2 py-0.5 rounded-full bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30 font-semibold">
                    SIGMA
                  </span>
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-[#BBCCD7] space-y-0.5 sm:space-y-1 py-2 sm:py-3 overflow-x-auto leading-relaxed opacity-95">
                  <p><span className="text-[#38bdf8]">title:</span> Suspicious WSL Execution</p>
                  <p><span className="text-[#38bdf8]">author:</span> G. Karthik (@karthikgk1001)</p>
                  <p><span className="text-[#38bdf8]">detection:</span></p>
                  <p className="pl-3 text-[#00ff9d]">Image|endswith: &apos;\wsl.exe&apos;</p>
                  <p className="pl-3 text-[#00ff9d]">CommandLine: [&apos;-u root&apos;, &apos;/tmp/&apos;]</p>
                  <p><span className="text-[#38bdf8]">level:</span> <span className="text-[#f43f5e]">high</span></p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] sm:text-xs font-mono text-white/50">
                  <span>Sysmon Event ID 1</span>
                  <span className="text-[#00ff9d]">SigmaHQ Community</span>
                </div>
              </>
            )}

            {project.type === 'siem' && (
              <>
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 font-mono text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5 text-white">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#38bdf8]" /> Incident Engine
                  </span>
                  <span className="text-[9px] sm:text-xs px-2 py-0.5 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 font-semibold">
                    REAL-TIME
                  </span>
                </div>
                <div className="space-y-1.5 py-2 sm:py-3 font-mono text-[10px] sm:text-xs">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[#f43f5e] font-bold">[T1110.001] Brute Force</span>
                      <p className="text-white/60 text-[9px] sm:text-[10px]">14 failed logins in 30s</p>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#f43f5e]/20 text-[#f43f5e]">Alerted</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[#f59e0b] font-bold">[T1046] Network Scan</span>
                      <p className="text-white/60 text-[9px] sm:text-[10px]">Port scan across 1,024 endpoints</p>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#f59e0b]/20 text-[#f59e0b]">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] sm:text-xs font-mono text-white/50">
                  <span>FastAPI + OpenSearch</span>
                  <span className="text-[#00ff9d]">GeoIP Attack Map</span>
                </div>
              </>
            )}

            {project.type === 'magic' && (
              <>
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-white/10 font-mono text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5 text-white">
                    <Terminal className="w-3.5 h-3.5 text-[#f59e0b]" /> static_report.json
                  </span>
                  <span className="text-[9px] sm:text-xs px-2 py-0.5 rounded-full bg-[#f43f5e]/10 text-[#f43f5e] border border-[#f43f5e]/30 font-semibold">
                    TRIAGE
                  </span>
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-[#BBCCD7] space-y-1 py-2 sm:py-3 overflow-x-auto leading-relaxed">
                  <p><span className="text-white/40">Target:</span> invoice_oct2026.pdf.exe</p>
                  <p><span className="text-white/40">Score:</span> <span className="text-[#f43f5e] font-bold">88 / 100 [HIGH RISK]</span></p>
                  <p className="text-[#f59e0b]">• Extension Mismatch: MZ binary disguised as PDF</p>
                  <p className="text-[#f59e0b]">• Entropy &gt; 7.8 (Packed / Encrypted)</p>
                  <p><span className="text-white/40">Verdict:</span> <span className="text-[#f43f5e] font-bold">STAGER PAYLOAD</span></p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] sm:text-xs font-mono text-white/50">
                  <span>Python Static Forensics</span>
                  <span className="text-[#00ff9d]">File Header Engine</span>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
