import React, { useState } from 'react';
import { Home, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScreenFuturePlans({ onNext, onBack }) {
  const [flipped, setFlipped] = useState({ 1: false, 2: false, 3: false });

  const plans = [
    {
      id: 1,
      frontPrompt: "One day...",
      backTitle: "The Birthday Festivities",
      backSub: "No stress. Just cake and laughs.",
      backDetail: "Unlimited desserts, music playing on repeat, and celebrating the wonderful person you are!",
      animClass: "animate-plan-1"
    },
    {
      id: 2,
      frontPrompt: "You'll see...",
      backTitle: "Our Cozy Corner",
      backSub: "Simple mornings. Late-night talks.",
      backDetail: "Making new milestones, checking off dreams from your bucket list, and non-stop happy memories.",
      animClass: "animate-plan-2"
    },
    {
      id: 3,
      frontPrompt: "Trust me...",
      backTitle: "Golden Year Ahead",
      backSub: "Endless peace and success.",
      backDetail: "May this year shower you with good health, boundless happiness, and massive success in everything, Esha!",
      animClass: "animate-plan-3"
    }
  ];

  const allFlipped = flipped[1] && flipped[2] && flipped[3];

  const handleCardClick = (id) => {
    setFlipped((prev) => {
      const nextState = !prev[id];
      if (nextState) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#FF7597', '#FFD700', '#FFCCD5', '#FFFFFF']
        });
      }
      return { ...prev, [id]: nextState };
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-6 text-center max-w-4xl mx-auto animate-screen-in select-none my-auto">
      <div className="relative w-full max-w-3xl bg-[#FFF5F7] border-4 border-[#FFD0DC] rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(255,142,168,0.25)] flex flex-col items-center">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-5xl font-cursive font-bold text-[#8A2846] leading-tight">
            Our Future Plans
          </h2>
          <p className="text-xs sm:text-sm text-[#B3526D] mt-1 font-cute italic">
            Tap all 3 cards to unlock the grand cake finale!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 w-full max-w-2xl mb-8">
          {plans.map((item) => {
            const isFlipped = flipped[item.id];

            return (
              <div
                key={item.id}
                className={`perspective-1000 w-full h-[250px] cursor-pointer ${item.animClass}`}
                onClick={() => handleCardClick(item.id)}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  <div className="absolute inset-0 w-full h-full bg-[#FFFBF0] border-2 border-[#FFE0E8] rounded-3xl p-5 shadow-[0_10px_25px_rgba(255,182,193,0.3)] backface-hidden flex flex-col items-center justify-between hover:scale-105 transition-transform">
                    <div className="w-2 h-2" />

                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FFE5EC] to-[#FFF0F4] border border-[#FFCCD8] flex items-center justify-center shadow-inner">
                      <span className="text-3xl filter drop-shadow-sm">💖</span>
                    </div>

                    <p className="font-cursive text-2xl text-[#8A2846] font-bold">
                      {item.frontPrompt}
                    </p>
                  </div>

                  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#FFF0F4] to-[#FFEBF0] border-2 border-[#FFAEC0] rounded-3xl p-5 shadow-lg rotate-y-180 backface-hidden flex flex-col items-center justify-center text-center">
                    <span className="text-xl mb-1">✨</span>
                    <h4 className="font-cursive text-2xl font-bold text-[#8A2846] leading-tight">
                      {item.backTitle}
                    </h4>
                    <p className="font-cursive text-base text-[#FF7597] font-bold mt-1">
                      {item.backSub}
                    </p>
                    <p className="font-cute text-[11px] text-[#6B283A] font-medium mt-2 leading-relaxed">
                      {item.backDetail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {allFlipped ? (
          <button
            onClick={onNext}
            className="btn-pink px-8 py-3.5 text-sm sm:text-base uppercase tracking-wider flex items-center gap-2 animate-bounce cursor-pointer shadow-[0_10px_30px_rgba(255,117,151,0.5)]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Light The Cake Candles 🎂</span>
          </button>
        ) : (
          <button
            onClick={onBack}
            className="w-12 h-12 rounded-full bg-[#FF7597] hover:bg-[#FF5C84] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(255,117,151,0.4)] hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            <Home className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}