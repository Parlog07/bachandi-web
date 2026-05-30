import React, { useEffect, useState } from 'react';

// Ornate SVG Arabic Fanous Lantern
export const FanousSVG = ({ style, className, glowColor = '#ff8c00' }) => {
  return (
    <svg 
      viewBox="0 0 100 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ 
        display: 'block',
        width: '100%',
        height: '100%',
        filter: `drop-shadow(0 0 12px ${glowColor}55)`,
        ...style
      }}
    >
      {/* Decorative Top Loop */}
      <circle cx="50" cy="18" r="8" stroke="url(#gold-gradient-fanous-overlay)" strokeWidth="2.5" fill="none"/>
      
      {/* Dome Top Cap */}
      <path d="M32 38 C32 38 35 24 50 24 C65 24 68 38 68 38 L72 45 H28 L32 38 Z" fill="url(#gold-gradient-fanous-overlay)" />
      
      {/* Upper collar */}
      <rect x="25" y="45" width="50" height="5" fill="url(#gold-gradient-fanous-overlay)" rx="1.5"/>
      
      {/* Lantern Main Body Glass (Glassmorphic Glow Backing) */}
      <path d="M22 50 L30 105 H70 L78 50 Z" fill="rgba(255, 140, 0, 0.08)" stroke="url(#gold-gradient-fanous-overlay)" strokeWidth="2.5"/>
      
      {/* Arch Overlay Inside Glass */}
      <path d="M30 105 C30 105 32 75 50 75 C68 75 70 105 70 105" stroke="url(#gold-gradient-fanous-overlay)" strokeWidth="1.5" fill="none"/>
      <path d="M22 50 C22 50 35 70 50 70 C65 70 78 50 78 50" stroke="url(#gold-gradient-fanous-overlay)" strokeWidth="1.5" fill="none"/>
      <line x1="50" y1="24" x2="50" y2="45" stroke="url(#gold-gradient-fanous-overlay)" strokeWidth="2"/>
      <line x1="50" y1="50" x2="50" y2="105" stroke="url(#gold-gradient-fanous-overlay)" strokeWidth="1.5" strokeDasharray="3 3"/>
      
      {/* Flickering Flame / Glow Core */}
      <circle cx="50" cy="78" r="14" fill="url(#lantern-glow-radial-overlay)" className="animate-flicker" style={{ transformOrigin: '50px 78px' }}/>
      <path d="M50 68 C47 75 45 79 45 82 C45 85 47 87 50 87 C53 87 55 85 55 82 C55 79 53 75 50 68 Z" fill="#fff" className="animate-flicker" style={{ transformOrigin: '50px 78px', filter: 'blur(1px)' }}/>

      {/* Lower collar */}
      <rect x="27" y="105" width="46" height="5" fill="url(#gold-gradient-fanous-overlay)" rx="1.5"/>
      
      {/* Bottom Pedestal Base */}
      <path d="M22 110 L28 126 C28 129 32 132 50 132 C68 132 72 129 72 126 L78 110 Z" fill="url(#gold-gradient-fanous-overlay)"/>
      <rect x="35" y="132" width="30" height="4" fill="url(#gold-gradient-fanous-overlay)" rx="1"/>

      {/* Gradients */}
      <defs>
        <linearGradient id="gold-gradient-fanous-overlay" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3c556" />
          <stop offset="35%" stopColor="#d4af37" />
          <stop offset="70%" stopColor="#aa841f" />
          <stop offset="100%" stopColor="#f3c556" />
        </linearGradient>
        <radialGradient id="lantern-glow-radial-overlay" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF" stopOpacity="1"/>
          <stop offset="25%" stopColor="#FFD700" stopOpacity="0.95"/>
          <stop offset="60%" stopColor="#FF8C00" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#FF3300" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
};

export const LanternOverlay = () => {
  const [floatingLanterns, setFloatingLanterns] = useState([]);

  // Generate floating lanterns with random positions, delays, and speeds
  useEffect(() => {
    const lanterns = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 90 + 5, // Avoid exact edge of screen
      size: Math.random() * 40 + 35, // 35px to 75px
      delay: Math.random() * 20, // offset start times
      duration: Math.random() * 15 + 20, // 20s to 35s to float to top
      glowColor: Math.random() > 0.4 ? '#ff8c00' : '#ffc04d'
    }));
    setFloatingLanterns(lanterns);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* 1. Hanging Lanterns (Fixed static sway at the top) */}
      <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '192px',
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: '8%',
          paddingRight: '8%',
          pointerEvents: 'none'
        }}
      >
        {/* Left Hanging Lantern */}
        <div 
          className="animate-sway" 
          style={{ 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animationDuration: '6s', 
            height: 'fit-content',
            transformOrigin: 'top center' 
          }}
        >
          {/* Chain */}
          <div style={{ width: '2px', height: '64px', background: 'linear-gradient(to bottom, transparent, #d4af37)', opacity: 0.6 }}></div>
          {/* Lantern Box */}
          <div style={{ width: '48px', height: '72px' }}>
            <FanousSVG glowColor="#ff8c00" />
          </div>
        </div>

        {/* Center Hanging Lantern (Slightly smaller, higher up) */}
        <div 
          className="animate-sway hanging-lantern-center-box" 
          style={{ 
            position: 'relative',
            flexDirection: 'column',
            alignItems: 'center',
            animationDuration: '8s', 
            height: 'fit-content', 
            animationDelay: '1.5s',
            transformOrigin: 'top center' 
          }}
        >
          <div style={{ width: '2px', height: '40px', backgroundColor: '#d4af37', opacity: 0.5 }}></div>
          <div style={{ width: '40px', height: '60px' }}>
            <FanousSVG glowColor="#f3c556" />
          </div>
        </div>

        {/* Right Hanging Lantern */}
        <div 
          className="animate-sway" 
          style={{ 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animationDuration: '7s', 
            height: 'fit-content', 
            animationDelay: '0.8s',
            transformOrigin: 'top center' 
          }}
        >
          <div style={{ width: '2px', height: '96px', background: 'linear-gradient(to bottom, transparent, #d4af37)', opacity: 0.6 }}></div>
          <div style={{ width: '56px', height: '84px' }}>
            <FanousSVG glowColor="#ffaa00" />
          </div>
        </div>
      </div>

      {/* 2. Floating Lanterns (Rising up through the background) */}
      {floatingLanterns.map((lantern) => (
        <div
          key={lantern.id}
          className="absolute pointer-events-none"
          style={{
            left: `${lantern.left}%`,
            width: `${lantern.size}px`,
            height: `${lantern.size * 1.5}px`,
            bottom: '-150px',
            opacity: 0,
            animation: `float-lantern ${lantern.duration}s linear infinite`,
            animationDelay: `${lantern.delay}s`,
          }}
        >
          <div className="animate-sway w-full h-full" style={{ animationDuration: `${lantern.duration / 4}s` }}>
            <FanousSVG glowColor={lantern.glowColor} />
          </div>
        </div>
      ))}
      
      {/* Lantern custom floating keyframe stylesheet */}
      <style>{`
        .hanging-lantern-center-box {
          display: flex;
        }
        @media (max-width: 768px) {
          .hanging-lantern-center-box {
            display: none !important;
          }
        }
        @keyframes float-lantern {
          0% {
            transform: translateY(0) scale(0.85);
            opacity: 0;
          }
          10% {
            opacity: 0.65;
          }
          85% {
            opacity: 0.65;
          }
          100% {
            transform: translateY(-120vh) translateX(40px) scale(1.05);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
export default LanternOverlay;
