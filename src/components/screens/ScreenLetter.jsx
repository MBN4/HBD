import React, { useState, useEffect } from 'react';
import { Home, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScreenLetter({ onBack }) {
  const fullTitle = "My Love, Esha,";
  const fullP1 = "I feel so lucky to walk through life with you by my side. Even the smallest moments turn into sweet memories just because you are there.";
  const fullP2 = "You make ordinary days feel deeply meaningful and bright. Your laughter brings pure peace into my heart.";
  const fullP3 = "I hope this brings you all the warmth, joy, and smiles that your heart quietly wishes for. You deserve so much more than you realize.";

  const [title, setTitle] = useState('');
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [p3, setP3] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let timeout;
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;

    const typeTitle = () => {
      if (i < fullTitle.length) {
        setTitle(fullTitle.slice(0, i + 1));
        i++;
        timeout = setTimeout(typeTitle, 35);
      } else {
        timeout = setTimeout(typeP1, 150);
      }
    };

    const typeP1 = () => {
      if (j < fullP1.length) {
        setP1(fullP1.slice(0, j + 1));
        j++;
        timeout = setTimeout(typeP1, 20);
      } else {
        timeout = setTimeout(typeP2, 200);
      }
    };

    const typeP2 = () => {
      if (k < fullP2.length) {
        setP2(fullP2.slice(0, k + 1));
        k++;
        timeout = setTimeout(typeP2, 20);
      } else {
        timeout = setTimeout(typeP3, 200);
      }
    };

    const typeP3 = () => {
      if (l < fullP3.length) {
        setP3(fullP3.slice(0, l + 1));
        l++;
        timeout = setTimeout(typeP3, 20);
      } else {
        setIsDone(true);
      }
    };

    timeout = setTimeout(typeTitle, 300);

    return () => clearTimeout(timeout);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#FF7597', '#FFAEC0', '#FFE6EC']
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-6 text-center max-w-3xl mx-auto animate-screen-in select-none">
      <div className="relative w-full p-8 sm:p-12 rounded-[2.5rem] bg-[#FFFBF0] border-4 border-[#FFCCD8] shadow-[0_25px_60px_rgba(255,142,168,0.3)] text-left min-h-[460px] flex flex-col justify-between">
        <div className="absolute top-5 right-6 text-2xl animate-pulse">🌸</div>
        <div className="absolute top-5 left-6 text-2xl animate-pulse">🌿</div>

        <div>
          <h3 className="font-cursive text-4xl sm:text-5xl text-[#8A2846] font-bold mb-5 min-h-[48px]">
            {title}
            {!p1 && <span className="animate-pulse text-[#FF7597]">|</span>}
          </h3>

          <div className="space-y-4 font-cursive text-2xl sm:text-3xl text-[#5C2332] leading-relaxed">
            {p1 && (
              <p>
                {p1}
                {!p2 && title && <span className="animate-pulse text-[#FF7597]">|</span>}
              </p>
            )}
            {p2 && (
              <p>
                {p2}
                {!p3 && <span className="animate-pulse text-[#FF7597]">|</span>}
              </p>
            )}
            {p3 && (
              <p>
                {p3}
                {!isDone && <span className="animate-pulse text-[#FF7597]">|</span>}
              </p>
            )}
          </div>
        </div>

        <div className={`mt-8 pt-5 border-t border-[#FFCCD8] flex items-center justify-between transition-all duration-700 ${isDone ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <div>
            <p className="font-cursive text-3xl sm:text-4xl text-[#8A2846]">Happiest Birthday to you</p>
            <p className="font-cute text-xs sm:text-sm text-[#B3526D] font-bold mt-1">— Forever Yours 💖</p>
          </div>
          <button
            onClick={triggerConfetti}
            className="p-3.5 rounded-full bg-[#FF7597] text-white hover:scale-110 transition-transform shadow-lg active:scale-95 cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-white" />
          </button>
        </div>
      </div>

      <button
        onClick={onBack}
        className="mt-6 flex items-center gap-2 btn-pink px-8 py-3 text-sm z-20"
      >
        <Home className="w-4 h-4" />
        <span>Return to Menu</span>
      </button>
    </div>
  );
}