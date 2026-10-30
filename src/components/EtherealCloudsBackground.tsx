import React from 'react';

export const EtherealCloudsBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] select-none z-0">
      {/* Luminous Sky Gradient Base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #FBF8FF 0%, #FFF5F7 22%, #FEF8F2 45%, #F0F7FF 75%, #FFFFFF 100%)',
        }}
      />

      {/* Radiant Sunrise / Ambient Light Bloom (Top Right) */}
      <div
        className="absolute w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] rounded-full blur-[100px] opacity-70"
        style={{
          top: '-10%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(254, 240, 199, 0.8) 0%, rgba(253, 216, 175, 0.45) 35%, rgba(254, 205, 211, 0.25) 60%, transparent 80%)',
        }}
      />

      {/* Soft Rose / Lavender Morning Glow (Top Left) */}
      <div
        className="absolute w-[500px] sm:w-[800px] h-[400px] sm:h-[600px] rounded-full blur-[110px] opacity-60"
        style={{
          top: '5%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(243, 232, 255, 0.9) 0%, rgba(252, 231, 243, 0.5) 45%, transparent 75%)',
        }}
      />

      {/* Soft Sky Blue Ethereal Wash (Center & Bottom) */}
      <div
        className="absolute w-[700px] sm:w-[1000px] h-[500px] sm:h-[700px] rounded-full blur-[130px] opacity-45"
        style={{
          bottom: '10%',
          right: '15%',
          background: 'radial-gradient(circle, rgba(224, 242, 254, 0.8) 0%, rgba(219, 234, 254, 0.4) 40%, transparent 70%)',
        }}
      />

      {/* Layer 1: Distant Ethereal Clouds (Warm Peach & Lavender Puffs) */}
      <div className="absolute inset-0 opacity-60" style={{ animation: 'cloudDriftSlow 32s ease-in-out infinite' }}>
        <div
          className="absolute w-[380px] sm:w-[540px] h-[220px] rounded-[100%] blur-[40px]"
          style={{
            top: '8%',
            right: '8%',
            background: 'linear-gradient(135deg, rgba(254, 242, 242, 0.9) 0%, rgba(253, 230, 138, 0.4) 50%, rgba(254, 215, 170, 0.3) 100%)',
          }}
        />
        <div
          className="absolute w-[420px] sm:w-[620px] h-[260px] rounded-[100%] blur-[45px]"
          style={{
            top: '18%',
            left: '2%',
            background: 'linear-gradient(135deg, rgba(250, 245, 255, 0.95) 0%, rgba(245, 208, 254, 0.45) 50%, rgba(254, 226, 226, 0.3) 100%)',
          }}
        />
      </div>

      {/* Layer 2: Mid-Level Volumetric Cloud Formations */}
      <div className="absolute inset-0 opacity-75" style={{ animation: 'cloudDriftMedium 24s ease-in-out infinite' }}>
        {/* Cloud Puff Cluster Right */}
        <div
          className="absolute w-[460px] sm:w-[680px] h-[300px] rounded-[100%] blur-[35px]"
          style={{
            top: '38%',
            right: '-8%',
            background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 243, 199, 0.5) 40%, rgba(254, 215, 226, 0.35) 75%, transparent 100%)',
          }}
        />
        {/* Cloud Puff Cluster Left */}
        <div
          className="absolute w-[440px] sm:w-[640px] h-[280px] rounded-[100%] blur-[35px]"
          style={{
            top: '52%',
            left: '-6%',
            background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.6) 45%, rgba(237, 233, 254, 0.4) 80%, transparent 100%)',
          }}
        />
      </div>

      {/* Layer 3: Lower Foreground Rolling Cumulus Cloud Bank */}
      <div className="absolute inset-x-0 bottom-0 h-[450px] pointer-events-none opacity-85">
        {/* SVG Detailed Rolling Cloud Puffs */}
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full object-cover filter drop-shadow-[0_-15px_30px_rgba(253,230,138,0.18)]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#FFF7ED" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#FAF5FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.98" />
            </linearGradient>
            <linearGradient id="cloudGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#F0F9FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFF1F2" stopOpacity="0.75" />
            </linearGradient>
            <filter id="softBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          {/* Background Cloud Wave */}
          <path
            d="M-50 240 C120 180, 260 210, 420 160 C580 110, 720 180, 890 140 C1060 100, 1220 170, 1500 120 L1500 400 L-50 400 Z"
            fill="url(#cloudGrad2)"
            filter="url(#softBlur)"
            opacity="0.8"
          />

          {/* Midground Billowy Cloud Puffs */}
          <path
            d="M-40 280 C100 210, 240 230, 380 190 C520 150, 640 210, 800 170 C960 130, 1100 190, 1260 160 C1380 135, 1450 170, 1500 180 L1500 400 L-40 400 Z"
            fill="url(#cloudGrad1)"
            opacity="0.92"
          />

          {/* Foreground Soft Billow */}
          <path
            d="M0 320 C180 260, 360 280, 540 240 C720 200, 900 260, 1080 220 C1260 180, 1380 230, 1440 240 L1440 400 L0 400 Z"
            fill="#FFFFFF"
            opacity="0.97"
          />
        </svg>
      </div>

      {/* Gentle Sunlight Rays & Atmospheric Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};
