import React, { useEffect, useState } from 'react';

export const GlowingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 35 particles with randomized parameters
    const generated = Array.from({ length: 35 }).map((_, i) => {
      const size = Math.random() * 4 + 2; // 2px to 6px
      return {
        id: i,
        left: Math.random() * 100, // percentage
        top: Math.random() * 100, // starting height offset
        size,
        delay: Math.random() * -20, // negative delay so particles start immediately at different phases
        duration: Math.random() * 15 + 15, // 15s to 30s
        opacity: Math.random() * 0.5 + 0.3,
        color: Math.random() > 0.4 ? '#d4af37' : '#ff8c00', // gold or amber
      };
    });
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.left}%`,
            top: '100%',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2.5}px ${p.color}, 0 0 ${p.size * 5}px ${p.color}`,
            opacity: p.opacity,
            animation: `drift-particles ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes drift-particles {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-110vh) translateX(60px) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
export default GlowingParticles;
