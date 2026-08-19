import React from 'react';

export default function FloatingHearts() {
  const hearts = Array.from({ length: 18 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, i) => {
        const left = Math.random() * 100;
        const duration = 5 + Math.random() * 5;
        const delay = Math.random() * 5;
        const size = 16 + Math.random() * 22;

        return (
          <div
            key={i}
            className="absolute bottom-0 animate-heart-rise opacity-40 text-[#FF9EAF]"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              fontSize: `${size}px`
            }}
          >
            💖
          </div>
        );
      })}
    </div>
  );
}