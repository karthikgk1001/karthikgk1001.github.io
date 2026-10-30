import React from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FooterSection } from './components/FooterSection';

export function App() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen w-full overflow-x-clip text-[#D7E2EA] font-['Kanit',sans-serif]">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. ABOUT SECTION */}
      <AboutSection />

      {/* 3. SKILLS SECTION (White Contrast) */}
      <SkillsSection />

      {/* 4. PROJECTS SECTION (Sticky-Stacking Cards) */}
      <ProjectsSection />

      {/* 5. FOOTER & INTERACTIVE TERMINAL */}
      <FooterSection />
    </div>
  );
}

export default App;
