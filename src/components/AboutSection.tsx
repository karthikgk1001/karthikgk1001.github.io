import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  const bioText = "Third-year Cybersecurity student at Shiv Nadar University Chennai with hands-on experience in offensive security, endpoint incident response, and threat detection engineering. Completed an information security internship at Maveric Systems and contributed to the SigmaHQ open-source community. Ranked Top 20% globally on TryHackMe, actively developing high-fidelity detection rules and preparing for the eJPT. Let's secure something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-10 md:px-14 py-28 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* 4 Decorative 3D Corner Elements */}
      {/* Top-left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[3%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-10 w-[100px] sm:w-[140px] md:w-[180px] opacity-70 sm:opacity-90"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Element"
          className="w-full h-auto drop-shadow-[0_10px_30px_rgba(255,255,255,0.08)] filter brightness-95"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[6%] left-[2%] sm:left-[4%] md:left-[8%] pointer-events-none z-10 w-[90px] sm:w-[120px] md:w-[160px] opacity-70 sm:opacity-90"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Shield Element"
          className="w-full h-auto drop-shadow-[0_10px_30px_rgba(255,255,255,0.08)] filter brightness-95"
        />
      </FadeIn>

      {/* Top-right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[3%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-10 w-[100px] sm:w-[140px] md:w-[180px] opacity-70 sm:opacity-90"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Block Element"
          className="w-full h-auto drop-shadow-[0_10px_30px_rgba(255,255,255,0.08)] filter brightness-95"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[6%] right-[2%] sm:right-[4%] md:right-[8%] pointer-events-none z-10 w-[110px] sm:w-[140px] md:w-[180px] opacity-70 sm:opacity-90"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Cluster Element"
          className="w-full h-auto drop-shadow-[0_10px_30px_rgba(255,255,255,0.08)] filter brightness-95"
        />
      </FadeIn>

      {/* Central Content */}
      <div className="z-20 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-12 sm:mb-16 md:mb-20 text-center"
            style={{ fontSize: 'clamp(2.8rem, 10vw, 150px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Character-by-character animated paragraph with zero mid-word breaks */}
        <div className="mb-14 sm:mb-18 md:mb-20 max-w-3xl sm:max-w-4xl px-2">
          <AnimatedText
            text={bioText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed sm:leading-loose text-base sm:text-xl md:text-2xl"
          />
        </div>

        {/* Contact button */}
        <FadeIn delay={0.3} y={20} duration={0.7}>
          <ContactButton
            label="Connect on LinkedIn"
            href="https://linkedin.com/in/g-karthik"
          />
        </FadeIn>
      </div>
    </section>
  );
};
