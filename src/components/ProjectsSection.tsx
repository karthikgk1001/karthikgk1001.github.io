import React from 'react';
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
  return (
    <section
      id="projects"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-28 sm:pb-36 select-none"
    >
      {/* Starry Galaxy Background */}
      <StarryGalaxyBackground />

      {/* Heading */}
      <div className="relative z-10 mb-12 sm:mb-16 md:mb-20">
        <FadeIn delay={0} y={30} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>
      </div>

      {/* Tight Stacking Deck of Cards */}
      <div className="relative z-10 flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
};
