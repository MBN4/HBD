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
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 text-center animate-screen-in">
      <div className="w-36 h-36 sm:w-44 sm:h-44 mb-4 animate-float-slow flex items-center justify-center">
        <img
          src="https://media.tenor.com/79uV7l_w_OIAAAAi/cute-cat.gif"
          alt="Cute cat blush"
          className="w-full h-full object-contain drop-shadow-md"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="text-8xl hidden">🎂🎉</div>
      </div>

      <p className="text-base sm:text-lg text-[#B3526D] font-medium tracking-wide mb-1">
        Happy Birthday, Esha! 🎂✨
      </p>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#8A2846] mb-8 max-w-xl leading-tight font-cute">
        Do you want to see your birthday surprise?
      </h1>

      <div className="relative flex items-center justify-center gap-4 sm:gap-6 w-full max-w-sm">
        <button
          onClick={handleYes}
          className="btn-pink px-8 py-3.5 text-base sm:text-lg"
        >
          YES PLEASE 🎁
        </button>

        <button
          onMouseEnter={dodgeNo}
          onClick={dodgeNo}
          style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
          className="btn-light-pink px-6 py-3.5 text-sm sm:text-base transition-transform duration-200"
        >
          NO THANKS
        </button>
      </div>
    </div>
  );
}