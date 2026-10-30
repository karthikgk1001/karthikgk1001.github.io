import React, { useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
  hasGlow?: boolean;
}

export const StarryGalaxyBackground: React.FC = () => {
  // Generate a deterministic constellation of stars
  const stars: Star[] = useMemo(() => {
    const list: Star[] = [];
    const colors = [
      '#FFFFFF',
      '#E0F2FE', // Pale Ice Blue
      '#BAE6FD', // Stellar Cyan
      '#F3E8FF', // Cosmic Violet
      '#FDF4FF', // Stellar Pearl
    ];

    for (let i = 0; i < 110; i++) {
      // Deterministic pseudo-random seed using sine
      const seedX = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
      const seedY = Math.cos(i * 39.346 + 11.135) * 43758.5453;
      const randX = Math.abs(seedX - Math.floor(seedX)) * 100;
      const randY = Math.abs(seedY - Math.floor(seedY)) * 100;

      const size = (i % 7 === 0) ? 2.5 : (i % 3 === 0) ? 1.8 : 1.1;
      const opacity = 0.25 + ((i % 5) / 5) * 0.65;
      const duration = 2.5 + (i % 4) * 1.5;
      const delay = (i % 6) * 0.8;
      const color = colors[i % colors.length];
      const hasGlow = i % 11 === 0;

      list.push({
        id: i,
        x: randX,
        y: randY,
        size,
        opacity,
        duration,
        delay,
        color,
        hasGlow,
      });
    }
    return list;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] select-none z-0">
      {/* Deep Space Background Layer */}
      <div className="absolute inset-0 bg-[#07080e]" />

      {/* Cosmic Nebula Cloud 1: Deep Cosmic Violet / Magenta */}
      <div
        className="absolute w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] rounded-full blur-[120px] opacity-25"
        style={{
          top: '10%',
          left: '15%',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.45) 0%, rgba(186, 24, 169, 0.25) 50%, transparent 70%)',
        }}
      />

      {/* Cosmic Nebula Cloud 2: Stellar Electric Cyan */}
      <div
        className="absolute w-[500px] sm:w-[800px] h-[500px] sm:h-[700px] rounded-full blur-[140px] opacity-20"
        style={{
          top: '45%',
          right: '5%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(56, 189, 248, 0.2) 45%, transparent 70%)',
        }}
      />

      {/* Cosmic Nebula Cloud 3: Midnight Blue & Amber Dust */}
      <div
        className="absolute w-[600px] sm:w-[850px] h-[400px] sm:h-[600px] rounded-full blur-[130px] opacity-20"
        style={{
          bottom: '5%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(217, 70, 239, 0.15) 50%, transparent 70%)',
        }}
      />

      {/* Star Field */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            boxShadow: star.hasGlow
              ? `0 0 6px 1px ${star.color}, 0 0 12px 2px rgba(56, 189, 248, 0.4)`
              : undefined,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}

      {/* Shooting Stars */}
      <div
        className="absolute w-[180px] h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 rounded-full"
        style={{
          top: '18%',
          right: '15%',
          animation: 'shootingStar 9s ease-in-out 1s infinite',
        }}
      />
      <div
        className="absolute w-[220px] h-[2px] bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-0 rounded-full"
        style={{
          top: '55%',
          right: '25%',
          animation: 'shootingStar 13s ease-in-out 5s infinite',
        }}
      />
      <div
        className="absolute w-[160px] h-[1.5px] bg-gradient-to-r from-transparent via-[#c084fc] to-transparent opacity-0 rounded-full"
        style={{
          top: '75%',
          right: '10%',
          animation: 'shootingStar 11s ease-in-out 8s infinite',
        }}
      />

      {/* Subtle Star Dust Overlay Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
