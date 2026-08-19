import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { futurePlansData } from '../../data/futurePlans';
import confetti from 'canvas-confetti';

export default function ScreenFuturePlans({ onBack }) {
  const [flipped, setFlipped] = useState({});

  const toggleCard = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
    confetti({
      particleCount: 50,
      spread: 55,
      origin: { y: 0.6 },
      colors: ['#FF7597', '#FFD700', '#FFCCD5']
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-6 text-center max-w-4xl mx-auto animate-screen-in">
      <div className="mb-8">
        <h2 className="text-4xl sm:text-6xl font-cursive font-bold text-[#8A2846]">
          Your Year Ahead ✨
        </h2>
        <p className="text-xs sm:text-sm text-[#B3526D] mt-1 font-cute">
          Tap each card to reveal your birthday blessings!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mb-8">
        {futurePlansData.map((plan) => {
          const isFlipped = flipped[plan.id];
          return (
            <button
              key={plan.id}
              onClick={() => toggleCard(plan.id)}
              className="screen-card p-6 min-h-[230px] flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 relative cursor-pointer bg-[#FFF8FA]"
            >
              {!isFlipped ? (
                <div className="flex flex-col items-center gap-3">
                  <span className="text-4xl">{plan.icon}</span>
                  <h3 className="font-cursive text-3xl font-bold text-[#8A2846]">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-[#B3526D] font-medium italic">
                    "{plan.tagline}"
                  </p>
                  <span className="text-[10px] uppercase tracking-wider text-[#FF7597] font-bold mt-2">
                    Tap to open 🎁
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <span className="text-2xl mb-2">🎉</span>
                  <p className="font-cute text-sm text-[#8A2846] font-semibold leading-relaxed">
                    {plan.detail}
                  </p>
                  <span className="text-[10px] text-[#C26B84] mt-3">Tap to flip back</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <button
        onClick={onBack}
        className="flex items-center gap-2 btn-pink px-7 py-3 text-sm"
      >
        <Home className="w-4 h-4" />
        <span>Return to Menu</span>
      </button>
    </div>
  );
}