import React from 'react';

export default function FloatingBalloons() {
  const balloons = [
    { left: '4%', size: 48, duration: 11, delay: 0, color: '#FFB3C6' },
    { left: '12%', size: 58, duration: 14, delay: 3, color: '#FFCAD4' },
    { left: '22%', size: 44, duration: 10, delay: 6, color: '#FFE5EC' },
    { left: '32%', size: 62, duration: 15, delay: 1.5, color: '#FFC6FF' },
    { left: '45%', size: 50, duration: 12, delay: 4.5, color: '#BDB2FF' },
    { left: '58%', size: 56, duration: 13, delay: 2, color: '#FFD6A5' },
    { left: '68%', size: 46, duration: 11, delay: 5.5, color: '#FFADAD' },
    { left: '78%', size: 60, duration: 14, delay: 0.5, color: '#FFB3C6' },
    { left: '88%', size: 52, duration: 12, delay: 3.5, color: '#CAFFBF' },
    { left: '94%', size: 46, duration: 10, delay: 7, color: '#FDFFB6' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {balloons.map((b, i) => (
        <div
          key={i}
          className="absolute animate-balloon flex flex-col items-center"
          style={{
            left: b.left,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            width: `${b.size}px`
          }}
        >
          <div
            className="w-full aspect-[1/1.2] rounded-[50%_50%_50%_50%/40%_40%_60%_60%] shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.06),0_8px_16px_rgba(255,142,168,0.15)] relative"
            style={{ backgroundColor: b.color }}
          >
            <div className="absolute top-2 left-2.5 w-2.5 h-4 bg-white/60 rounded-full rotate-[-25deg] filter blur-[0.5px]" />
            <div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1.5 rounded-b-sm"
              style={{ backgroundColor: b.color }}
            />
          </div>
          <div className="w-[1px] h-12 bg-[#FFCCD8]/80 origin-top" />
        </div>
      ))}
    </div>
  );
}