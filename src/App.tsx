import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturedAchievementSection } from './components/FeaturedAchievementSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { FooterSection } from './components/FooterSection';

export function App() {
  // Support direct hash navigation on page load (e.g. /#certifications)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="bg-[#0C0C0C] min-h-screen w-full overflow-x-clip text-[#D7E2EA] font-['Kanit',sans-serif]">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. ABOUT SECTION */}
      <AboutSection />

      {/* 3. FEATURED ACHIEVEMENT: INE eJPT MILESTONE */}
      <FeaturedAchievementSection />

      {/* 4. SKILLS SECTION (White Contrast) */}
      <SkillsSection />

      {/* 5. PROJECTS SECTION (Sticky-Stacking Cards with eJPT PTES Report) */}
      <ProjectsSection />

      {/* 6. DEDICATED CERTIFICATIONS SECTION */}
      <CertificationsSection />

      {/* 7. FOOTER & INTERACTIVE TERMINAL */}
      <FooterSection />
    </div>
  );
}

export default App;
