import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { ProjectCard, ProjectData } from './ProjectCard';
import { StarryGalaxyBackground } from './StarryGalaxyBackground';

const projects: ProjectData[] = [
  {
    number: "01",
    category: "Security Platform // FastAPI & React",
    name: "SIEM Dashboard for DevOps",
    githubUrl: "https://github.com/karthikgk1001",
    metrics: "62 Tests // 91% Backend Coverage",
    type: "siem",
  },
  {
    number: "02",
    category: "Detection Research // SigmaHQ",
    name: "WSL-Based EDR Evasion Detection",
    githubUrl: "https://github.com/karthikgk1001",
    metrics: "MITRE ATT&CK Mapped // Sysmon ID 1",
    type: "wsl",
  },
  {
    number: "03",
    category: "Malware Triage // Python & Signatures",
    name: "Magic Number Analyzer",
    githubUrl: "https://github.com/karthikgk1001",
    metrics: "Entropy & Header Mismatch Tool",
    type: "magic",
  },
];

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-44 select-none"
    >
      {/* Starry Galaxy Background - stays clipped inside without blocking sticky */}
      <StarryGalaxyBackground />

      {/* Heading */}
      <div className="relative z-10 mb-16 sm:mb-20 md:mb-24">
        <FadeIn delay={0} y={30} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>
      </div>

      {/* 3 Sticky-stacking project cards */}
      <div className="relative z-10 flex flex-col gap-16 sm:gap-24 md:gap-32">
        {projects.map((project, index) => {
          // Scale down calculations: Card 0 -> 0.92, Card 1 -> 0.96, Card 2 -> 1.0
          const targetScale = 1 - (projects.length - 1 - index) * 0.04;
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              totalCards={projects.length}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
