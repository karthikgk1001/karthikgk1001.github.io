import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';
import avatarImg from '../assets/avatar.png';

interface HeroSectionProps {
  onNavClick?: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavClick }) => {
  const scrollTo = (id: string) => {
    if (onNavClick) {
      onNavClick(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Navbar with Links & Resume - Mobile Optimized */}
      <FadeIn delay={0} y={-20} duration={0.6}>
        <nav className="w-full flex items-center justify-between px-3.5 sm:px-8 md:px-10 pt-4 sm:pt-6 md:pt-8 z-30">
          <div className="flex items-center gap-2.5 sm:gap-6 md:gap-10">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[11px] sm:text-sm md:text-base lg:text-[1.25rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff9d] border border-[#00ff9d]/40 bg-[#00ff9d]/10 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full font-medium uppercase tracking-wider text-[10px] sm:text-xs md:text-sm hover:bg-[#00ff9d]/20 hover:border-[#00ff9d] transition-all cursor-pointer flex items-center gap-1 shadow-[0_0_15px_rgba(0,255,157,0.15)] flex-shrink-0"
          >
            <span>Resume</span>
            <span className="text-[9px] sm:text-xs opacity-80">↗</span>
          </a>
        </nav>
      </FadeIn>

      {/* Hero Heading: Just "KARTHIK" - formatted cleanly without clipping */}
      <div className="w-full overflow-hidden flex items-center justify-center -mt-4 sm:-mt-2 md:-mt-6 z-0 px-2 sm:px-4">
        <FadeIn delay={0.15} y={40} duration={0.8} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13.5vw] sm:text-[14.5vw] md:text-[16vw] lg:text-[17vw]">
            karthik
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait: Cutout Transparent PNG with Magnet hover effect - Mobile Calibrated */}
      <FadeIn
        delay={0.6}
        y={30}
        duration={0.9}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[220px] sm:w-[320px] md:w-[420px] lg:w-[480px] bottom-0 pointer-events-auto flex justify-center"
      >
        <Magnet
          padding={120}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex items-end justify-center"
        >
          <div className="relative select-none pointer-events-none">
            <img
              src={avatarImg}
              alt="G. Karthik"
              className="w-full h-auto max-h-[52vh] sm:max-h-[64vh] md:max-h-[72vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Bar: Left subtitle, Right contact button - No overlapping on small screens */}
      <div className="w-full flex justify-between items-end px-4 sm:px-8 md:px-10 pb-5 sm:pb-8 md:pb-10 z-20 gap-3">
        <FadeIn delay={0.35} y={20} duration={0.7}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[125px] sm:max-w-[220px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1.4rem)' }}
          >
            a cybersecurity student driven by offensive security, edr evasion & threat detection
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} duration={0.7} className="flex-shrink-0">
          <ContactButton
            label="Contact Me"
            href="mailto:karthikganesh10@outlook.com"
            className="!px-5 !py-2.5 sm:!px-8 sm:!py-3.5 !text-[11px] sm:!text-xs md:!text-sm"
          />
        </FadeIn>
      </div>
    </section>
  );
};
