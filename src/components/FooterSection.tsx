import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Terminal, Shield, ExternalLink, Mail, Phone, Linkedin, Github, FileText } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: 'whoami',
      output: 'g.karthik // Cybersecurity Student | Aspiring Penetration Tester // Shiv Nadar University Chennai',
    },
    {
      cmd: 'cat certs.txt',
      output: '• TryHackMe: Ranked Top 20% Globally (7M+ users)\n• EC-Council: Cybersecurity for Blockchain (Score: 90%)\n• TryHackMe: Junior Penetration Tester Path\n• eJPT: Currently Preparing',
    },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    let reply = '';
    if (cleanCmd === 'help') {
      reply = 'Available commands: whoami, projects, certs, resume, nmap, flag, clear, contact';
    } else if (cleanCmd === 'whoami') {
      reply = 'G. Karthik — Cybersecurity Student | Aspiring Penetration Tester @ SNUC (3rd Year) | Former Maveric Systems Intern';
    } else if (cleanCmd === 'resume' || cleanCmd === 'cat resume' || cleanCmd === 'cat resume.pdf' || cleanCmd === 'download resume') {
      if (typeof window !== 'undefined') {
        window.open('/resume.pdf', '_blank');
      }
      reply = '📄 Opening G. Karthik\'s Resume (PDF) in a new tab... [karthikgportfolio.vercel.app/resume.pdf]';
    } else if (cleanCmd === 'projects') {
      reply = '1. DevOps SIEM Monitoring Platform (FastAPI/React)\n2. WSL-Based EDR Evasion Detection (SigmaHQ)\n3. Magic Number Analyzer (Static Malware Tool)\n4. Web Application VAPT (Burp Suite/OWASP)';
    } else if (cleanCmd === 'nmap') {
      reply = 'Starting Nmap 7.94 scan on karthik.local...\nHost is up (0.0012s latency).\nPORT 22/tcp   OPEN  ssh\nPORT 80/tcp   OPEN  http (Portfolio HUD)\nPORT 443/tcp  OPEN  https\nPORT 8000/tcp OPEN  fastapi-siem\nPORT 9200/tcp OPEN  opensearch\nService Info: OS: Kali Linux 6.1';
    } else if (cleanCmd === 'flag' || cleanCmd === 'cat flag.txt') {
      reply = '🚩 flag{k4rth1k_3jpt_s1gm4hq_pwn3d_2026} — Great job finding the hidden flag!';
    } else if (cleanCmd === 'certs') {
      reply = '• TryHackMe Top 20% (43+ labs)\n• EC-Council Blockchain Security (90%)\n• Advent of Cyber 2025\n• eJPT (In Progress)';
    } else if (cleanCmd === 'contact') {
      reply = 'Email: karthikganesh10@outlook.com | GitHub: @karthikgk1001 | Phone: +91 99622 45056';
    } else if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else {
      reply = `bash: command not found: ${cleanCmd}. Type "help" for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output: reply }]);
    setInputVal('');
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 py-20 border-t border-[#D7E2EA]/10 select-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Interactive Terminal Drawer Toggle */}
        <div className="w-full rounded-2xl border border-[#D7E2EA]/20 bg-[#121212] p-5 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-[#D7E2EA]/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#f43f5e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]"></span>
              <span className="w-3 h-3 rounded-full bg-[#10b981]"></span>
              <span className="text-xs font-mono text-[#D7E2EA]/60 ml-2">
                karthik@sec-terminal ~ (interactive)
              </span>
            </div>
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className="text-xs font-mono text-[#00ff9d] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              {terminalOpen ? 'Collapse Terminal' : 'Open Interactive CLI'}
            </button>
          </div>

          {terminalOpen && (
            <div className="mt-4 font-mono text-xs sm:text-sm text-left">
              <div className="flex flex-col gap-2 max-h-60 overflow-y-auto mb-3 pr-2">
                {history.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="text-[#00ff9d]">
                      karthik@portfolio:~$ <span className="text-white">{item.cmd}</span>
                    </div>
                    <div className="text-[#BBCCD7] whitespace-pre-line pl-2 opacity-90">
                      {item.output}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-white/10">
                <span className="text-[#00ff9d]">karthik@portfolio:~$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type 'help', 'nmap', 'flag', 'certs'..."
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm"
                  autoFocus
                />
              </form>
            </div>
          )}
        </div>

        {/* Contact Hero CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h3
              className="hero-heading font-black uppercase tracking-tight leading-none"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Ready To Collaborate?
            </h3>
            <p className="text-[#BBCCD7] font-light max-w-lg text-sm sm:text-base">
              Available for Offensive Security, VAPT, and Detection Engineering internships & research roles.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <ContactButton
              label="Get In Touch"
              href="mailto:karthikganesh10@outlook.com"
            />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-7 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white hover:text-white cursor-pointer select-none"
            >
              <FileText className="w-4 h-4 text-[#00ff9d]" />
              <span>View Resume ↗</span>
            </a>
          </div>
        </div>

        {/* Links row */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-10 border-t border-[#D7E2EA]/10 text-xs sm:text-sm font-mono text-[#D7E2EA]/70">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/karthikgk1001"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 text-[#00ff9d]" />
              github.com/karthikgk1001
            </a>
            <a
              href="https://linkedin.com/in/g-karthik"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#38bdf8]" />
              linkedin.com/in/g-karthik
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[#00ff9d] hover:underline transition-colors"
            >
              <FileText className="w-4 h-4" />
              resume.pdf ↗
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#f59e0b]" />
              karthikganesh10@outlook.com
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>+91 99622 45056</span>
          </div>
        </div>

        <div className="text-center text-xs font-mono text-[#D7E2EA]/40 pt-4">
          © 2026 G. Karthik. Built with React, TypeScript, Tailwind CSS, & Framer Motion. Hosted on GitHub Pages.
        </div>
      </div>
    </footer>
  );
};
