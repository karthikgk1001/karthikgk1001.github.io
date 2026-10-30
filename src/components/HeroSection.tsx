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
      {/* Navbar */}
      <FadeIn delay={0} y={-20} duration={0.6}>
        <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 z-30">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.35rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
            >
              {item}
            </button>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading: Just "KARTHIK" - formatted cleanly without clipping */}
      <div className="w-full overflow-hidden flex items-center justify-center -mt-8 sm:-mt-4 md:-mt-8 z-0 px-4">
        <FadeIn delay={0.15} y={40} duration={0.8} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[13vw] sm:text-[14.5vw] md:text-[16vw] lg:text-[17vw]">
            karthik
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait: Cutout Transparent PNG with Magnet hover effect */}
      <FadeIn
        delay={0.6}
        y={30}
        duration={0.9}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[490px] bottom-0 pointer-events-auto flex justify-center"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex items-end justify-center"
        >
          <div className="relative select-none pointer-events-none">
            <img
              src={avatarImg}
              alt="G. Karthik"
              className="w-full h-auto max-h-[62vh] sm:max-h-[68vh] md:max-h-[72vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Bar: Left subtitle, Right contact button - No text under image */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20} duration={0.7}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.3vw, 1.4rem)' }}
          >
            a cybersecurity analyst driven by offensive security, edr evasion & threat detection
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} duration={0.7}>
          <ContactButton
            label="Contact Me"
            href="mailto:karthikganesh10@outlook.com"
          />
        </FadeIn>
      </div>
    </section>
  );
};
