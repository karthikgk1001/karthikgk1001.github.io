import React, { useRef } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { ShieldAlert, Terminal, FileCode2, CheckCircle2, Activity, Cpu, AlertTriangle } from 'lucide-react';

export interface ProjectData {
  number: string;
  category: string;
  name: string;
  githubUrl: string;
  metrics?: string;
  type: 'wsl' | 'siem' | 'magic';
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  progress,
  range,
  targetScale,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Smooth scale down as subsequent cards scroll over it
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Subtle dimming as the card is covered by newer cards in the stack
  const isLast = index === totalCards - 1;
  const opacity = useTransform(progress, range, [1, isLast ? 1 : 0.85]);

  return (
    <div
      ref={cardRef}
      className="min-h-[78vh] sm:min-h-[82vh] md:min-h-[85vh] sticky flex items-center justify-center"
      style={{
        top: `calc(4.5rem + ${index * 26}px)`,
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full max-w-6xl mx-auto rounded-[36px] sm:rounded-[48px] md:rounded-[56px] border-2 border-[#D7E2EA] bg-[#0C0C0C]/95 backdrop-blur-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-all will-change-transform"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-4 border-b border-[#D7E2EA]/20">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#BBCCD7]/70 font-mono">
                {project.category}
              </span>
              <h3 className="text-base sm:text-xl md:text-2xl font-medium uppercase text-white tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.metrics && (
              <span className="hidden lg:inline-block text-xs font-mono text-[#00ff9d] px-3 py-1 rounded-full border border-[#00ff9d]/30 bg-[#00ff9d]/10">
                {project.metrics}
              </span>
            )}
            <LiveProjectButton
              label="Live Project"
              href={project.githubUrl}
            />
          </div>
        </div>

        {/* Bottom row: Custom High-Tech Security Visual Panels */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-5 items-stretch min-h-[360px] md:min-h-[420px]">
          {/* Left column (40% width): 2 stacked panels */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {project.type === 'wsl' && (
              <>
                {/* WSL Telemetry Panel */}
                <div className="flex-1 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/30 bg-[#12141a] p-4 sm:p-5 flex flex-col justify-between shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                    <span className="flex items-center gap-2 text-[#00ff9d]">
                      <Terminal className="w-3.5 h-3.5" /> sysmon_event_1.log
                    </span>
                    <span className="text-xs text-white/50">EVENT ID: 1</span>
                  </div>
                  <div className="font-mono text-[11px] sm:text-xs text-[#BBCCD7] space-y-1 py-2 leading-relaxed">
                    <p><span className="text-white/40">UtcTime:</span> 2026-10-30 14:22:01.412</p>
                    <p><span className="text-[#00ff9d]">Image:</span> C:\Windows\System32\wsl.exe</p>
                    <p><span className="text-white/40">CommandLine:</span> wsl.exe -d Ubuntu -u root</p>
                    <p><span className="text-[#f59e0b]">ParentImage:</span> C:\Windows\explorer.exe</p>
                  </div>
                  <div className="text-[10px] font-mono text-[#00ff9d] bg-[#00ff9d]/10 px-2.5 py-1 rounded-md border border-[#00ff9d]/20 w-fit">
                    MATCH: WSL Process Execution EDR Evasion
                  </div>
                </div>

                {/* WSL MITRE Mapping Panel */}
                <div className="flex-1 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/30 bg-[#12141a] p-4 sm:p-5 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-white">
                      <ShieldAlert className="w-3.5 h-3.5 text-[#38bdf8]" /> MITRE ATT&CK Matrix
                    </span>
                    <span className="text-[#00ff9d] text-[10px] font-bold">SIGMAHQ VERIFIED</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 py-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-[#38bdf8]">
                      T1202 Indirect Command
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-[#38bdf8]">
                      T1059.004 Unix Shell
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-[#f43f5e]">
                      T1562 Defense Evasion
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-white/60">
                    Validated via attack simulation & EDR evasion telemetry.
                  </div>
                </div>
              </>
            )}

            {project.type === 'siem' && (
              <>
                {/* SIEM API Ingestion Panel */}
                <div className="flex-1 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/30 bg-[#12141a] p-4 sm:p-5 flex flex-col justify-between shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                    <span className="flex items-center gap-2 text-[#38bdf8]">
                      <Activity className="w-3.5 h-3.5" /> FastAPI Ingestion API
                    </span>
                    <span className="text-[#00ff9d] text-xs">200 OK</span>
                  </div>
                  <div className="font-mono text-[11px] sm:text-xs text-[#BBCCD7] space-y-1 py-2 leading-relaxed">
                    <p className="text-white/40">POST /api/v1/logs/ingest</p>
                    <p><span className="text-[#38bdf8]">Auth:</span> JWT Bearer (Argon2id)</p>
                    <p><span className="text-white/40">Latency:</span> 4.2ms | <span className="text-[#00ff9d]">Rate-Limit: Active</span></p>
                    <p className="text-white/50">Sources: Windows, Linux, Nginx, Docker</p>
                  </div>
                  <div className="text-[10px] font-mono text-[#38bdf8] bg-[#38bdf8]/10 px-2.5 py-1 rounded-md border border-[#38bdf8]/20 w-fit">
                    OpenSearch Schema Normalization: PASS
                  </div>
                </div>

                {/* SIEM Automated Tests Panel */}
                <div className="flex-1 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/30 bg-[#12141a] p-4 sm:p-5 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff9d]" /> CI/CD & Test Metrics
                    </span>
                    <span className="text-[#00ff9d] text-xs font-bold">91% COVERAGE</span>
                  </div>
                  <div className="space-y-1.5 py-2 font-mono text-xs">
                    <div className="flex justify-between text-white/80">
                      <span>Automated Tests:</span>
                      <span className="text-[#00ff9d]">62/62 Passed</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>End-to-End Smoke:</span>
                      <span className="text-[#00ff9d]">13/13 Passed</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                      <span>Trivy & Gitleaks:</span>
                      <span className="text-[#00ff9d]">0 Vulnerabilities</span>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-white/50">
                    Docker Compose & PostgreSQL production architecture.
                  </div>
                </div>
              </>
            )}

            {project.type === 'magic' && (
              <>
                {/* Magic Numbers Hex Inspection */}
                <div className="flex-1 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/30 bg-[#12141a] p-4 sm:p-5 flex flex-col justify-between shadow-lg overflow-hidden">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                    <span className="flex items-center gap-2 text-[#f59e0b]">
                      <Cpu className="w-3.5 h-3.5" /> Header Signature Analyzer
                    </span>
                    <span className="text-[#f43f5e] text-xs font-bold">MISMATCH</span>
                  </div>
                  <div className="font-mono text-[11px] sm:text-xs text-[#BBCCD7] space-y-1 py-1 leading-relaxed">
                    <p className="text-white/40">Offset 00: <span className="text-[#f59e0b] font-bold">4D 5A 90 00</span> (MZ Header)</p>
                    <p><span className="text-white/40">Declared Ext:</span> .pdf (Expected: %PDF)</p>
                    <p><span className="text-white/40">Actual Format:</span> PE32 Executable</p>
                  </div>
                  <div className="text-[10px] font-mono text-[#f43f5e] bg-[#f43f5e]/10 px-2.5 py-1 rounded-md border border-[#f43f5e]/20 w-fit">
                    ALERT: Masqueraded Malicious Binary
                  </div>
                </div>

                {/* Shannon Entropy Panel */}
                <div className="flex-1 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/30 bg-[#12141a] p-4 sm:p-5 flex flex-col justify-between shadow-lg">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-white">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#f59e0b]" /> Shannon Entropy Risk
                    </span>
                    <span className="text-[#f43f5e] text-xs font-bold">7.89 / 8.0</span>
                  </div>
                  <div className="py-2 space-y-1">
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#00ff9d] via-[#f59e0b] to-[#f43f5e] h-full w-[96%]"></div>
                    </div>
                    <div className="flex justify-between text-[11px] font-mono text-white/70 pt-1">
                      <span>Plain Text (0-4)</span>
                      <span>Packed / Encrypted (7-8)</span>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-white/50">
                    High entropy detected in section .text (packed payload).
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right column (60% width): 1 tall visual code / telemetry panel */}
          <div className="md:col-span-6 rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/30 bg-[#101218] p-5 sm:p-6 flex flex-col justify-between shadow-xl overflow-hidden min-h-[300px]">
            {project.type === 'wsl' && (
              <>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                  <span className="flex items-center gap-2 text-white">
                    <FileCode2 className="w-4 h-4 text-[#00ff9d]" /> rules/windows/proc_creation_win_wsl_evasion.yml
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#00ff9d]/10 text-[#00ff9d] border border-[#00ff9d]/30 font-semibold">
                    SIGMA RULE
                  </span>
                </div>
                <div className="font-mono text-xs text-[#BBCCD7] space-y-1 py-3 overflow-x-auto leading-relaxed opacity-95">
                  <p><span className="text-[#38bdf8]">title:</span> Suspicious WSL Execution For Defense Evasion</p>
                  <p><span className="text-[#38bdf8]">author:</span> G. Karthik (github.com/karthikgk1001)</p>
                  <p><span className="text-[#38bdf8]">status:</span> production</p>
                  <p><span className="text-[#38bdf8]">references:</span> [https://github.com/SigmaHQ/sigma]</p>
                  <p><span className="text-[#38bdf8]">logsource:</span></p>
                  <p className="pl-4"><span className="text-[#f59e0b]">category:</span> process_creation</p>
                  <p className="pl-4"><span className="text-[#f59e0b]">product:</span> windows</p>
                  <p><span className="text-[#38bdf8]">detection:</span></p>
                  <p className="pl-4"><span className="text-[#f59e0b]">selection_img:</span></p>
                  <p className="pl-8 text-[#00ff9d]">Image|endswith: &apos;\wsl.exe&apos;</p>
                  <p className="pl-4"><span className="text-[#f59e0b]">selection_cli:</span></p>
                  <p className="pl-8 text-[#00ff9d]">CommandLine|contains: [&apos;-u root&apos;, &apos;/tmp/&apos;, &apos;exec&apos;]</p>
                  <p className="pl-4"><span className="text-[#f59e0b]">condition:</span> selection_img and selection_cli</p>
                  <p><span className="text-[#38bdf8]">level:</span> <span className="text-[#f43f5e]">high</span></p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-white/50">
                  <span>Target Telemetry: Sysmon Event ID 1</span>
                  <span className="text-[#00ff9d]">Submitted to SigmaHQ Community</span>
                </div>
              </>
            )}

            {project.type === 'siem' && (
              <>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                  <span className="flex items-center gap-2 text-white">
                    <ShieldAlert className="w-4 h-4 text-[#38bdf8]" /> SOC Security Incident & Alert Engine
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 font-semibold">
                    REAL-TIME
                  </span>
                </div>
                <div className="space-y-2 py-3 font-mono text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[#f43f5e] font-bold">[T1110.001] Brute Force</span>
                      <p className="text-white/60 text-[11px]">14 failed logins in 30s window (auth-api)</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#f43f5e]/20 text-[#f43f5e]">Suppressed / Alerted</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[#f59e0b] font-bold">[T1046] Network Scan</span>
                      <p className="text-white/60 text-[11px]">Port scan across 1,024 endpoints (Nmap probe)</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#f59e0b]/20 text-[#f59e0b]">Active Triage</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[#38bdf8] font-bold">[T1059] Suspicious Command</span>
                      <p className="text-white/60 text-[11px]">Encoded PowerShell invocation in container</p>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded bg-[#38bdf8]/20 text-[#38bdf8]">Logged</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-white/50">
                  <span>FastAPI + PostgreSQL + OpenSearch</span>
                  <span className="text-[#00ff9d]">GeoIP Attack Map Enabled</span>
                </div>
              </>
            )}

            {project.type === 'magic' && (
              <>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                  <span className="flex items-center gap-2 text-white">
                    <Terminal className="w-4 h-4 text-[#f59e0b]" /> static_analysis_report.json
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#f43f5e]/10 text-[#f43f5e] border border-[#f43f5e]/30 font-semibold">
                    MALWARE TRIAGE
                  </span>
                </div>
                <div className="font-mono text-xs text-[#BBCCD7] space-y-1.5 py-3 overflow-x-auto leading-relaxed">
                  <p><span className="text-white/40">Target File:</span> invoice_oct2026.pdf.exe</p>
                  <p><span className="text-white/40">SHA-256:</span> a3f81e9d2c55bf09128...8b74108</p>
                  <p><span className="text-white/40">Risk Score:</span> <span className="text-[#f43f5e] font-bold">88 / 100 [HIGH RISK]</span></p>
                  <p><span className="text-white/40">Heuristics Detected:</span></p>
                  <p className="pl-4 text-[#f59e0b]">• Extension Mismatch: MZ / PE32 binary disguised as PDF</p>
                  <p className="pl-4 text-[#f59e0b]">• Shannon Entropy &gt; 7.8 (Packed / Cryptor)</p>
                  <p className="pl-4 text-[#f59e0b]">• Suspicious APIs: VirtualAlloc, WriteProcessMemory</p>
                  <p><span className="text-white/40">Triage Verdict:</span> <span className="text-[#f43f5e] font-bold">STAGER / DROPPER PAYLOAD</span></p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-white/50">
                  <span>Automated Python Forensics Tool</span>
                  <span className="text-[#00ff9d]">Static Binary Inspection</span>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
