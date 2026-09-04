import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function ScreenIntro({ onAccept }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const handleYes = () => {
    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#FF7597', '#FFCCD5', '#FFF0F3', '#FFD700', '#FF4D73']
    });
    onAccept();
  };

  const dodgeNo = () => {
    const randomX = (Math.random() - 0.5) * 220;
    const randomY = (Math.random() - 0.5) * 140;
    setNoPos({ x: randomX, y: randomY });
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-3 sm:px-6 py-6 text-center select-none animate-screen-in">
      <div className="w-72 sm:w-96 md:w-[420px] aspect-[4/3] mb-2 animate-float-slow flex items-center justify-center relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)]"
          src="/intro-bg.mp4"
        />
      </div>

      <p className="text-base sm:text-lg text-[#B3526D] font-semibold tracking-wide mb-1">
        Happy Birthday, Esha! 🎂✨
      </p>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#8A2846] mb-8 max-w-xl leading-tight font-cute">
        Do you want to see your birthday surprise?
      </h1>

      <div className="relative flex items-center justify-center gap-4 sm:gap-6 w-full max-w-sm">
        <button
          onClick={handleYes}
          className="btn-pink px-8 py-3.5 text-base sm:text-lg cursor-pointer"
        >
          YES PLEASE 🎁
        </button>

        <button
          onMouseEnter={dodgeNo}
          onClick={dodgeNo}
          style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
          className="btn-light-pink px-6 py-3.5 text-sm sm:text-base transition-transform duration-200 cursor-pointer shadow-sm"
        >
          NO THANKS
        </button>
      </div>
    </div>
  );
}