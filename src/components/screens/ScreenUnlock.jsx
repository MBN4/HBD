import React, { useState } from 'react';
import { Sparkles, Home, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const ROAST_MESSAGES = [
  "Wrong! Really Esh? Think about the cute little creature I always call you...",
  "Nope! Are you seriously this bad at guessing your own nickname? 😭",
  "Incorrect! Hint: It lives in the snow, waddles around, and is 100% adorable 🐧",
  "Still wrong! Starts with 'P' and ends with 'enguin'... can it get any easier?",
  "Come on, Birthday Queen! It's literally your official spirit animal...",
  "Nice try, but nope! Think: cold ice, cute waddle, black & white cutie!"
];

export default function ScreenUnlock({ onUnlocked, onBack }) {
  const [input, setInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [shake, setShake] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleUnlock = (e) => {
    e.preventDefault();
    const cleaned = input.trim().toLowerCase();

    if (cleaned === 'penguin') {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#FF7597', '#FFD700', '#FFD5DF', '#FFFFFF', '#6EC1E4']
      });
      onUnlocked();
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      const nextRoast = ROAST_MESSAGES[attempts % ROAST_MESSAGES.length];
      setErrorMsg(nextRoast);
      setAttempts((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-3 sm:px-6 py-6 text-center max-w-lg mx-auto animate-screen-in select-none">
      <div className="w-28 h-28 sm:w-36 sm:h-36 mb-2 animate-float-slow flex items-center justify-center">
      </div>

      <h2 className="text-3xl sm:text-5xl font-bold text-[#8A2846] mb-1 font-cute tracking-tight">
        One Last Surprise...
      </h2>
      <p className="text-xs sm:text-sm text-[#B3526D] mb-6 font-medium">
        Enter the secret nickname to unlock your final birthday blessing!
      </p>

      <form onSubmit={handleUnlock} className={`w-full max-w-sm space-y-4 ${shake ? 'animate-bounce' : ''}`}>
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              if (errorMsg) setErrorMsg('');
            }}
            placeholder="TYPE SECRET PASSCODE..."
            className="w-full px-6 py-4 rounded-full border-2 border-[#FFCCD8] bg-white text-center font-bold text-[#8A2846] placeholder-[#DF9AA9] focus:outline-none focus:border-[#FF7597] shadow-inner text-sm sm:text-base tracking-widest uppercase transition-all"
          />
        </div>

        {errorMsg && (
          <div className="p-3.5 bg-[#FFF0F3] border-2 border-[#FFB8C7] rounded-2xl text-xs text-[#8A2846] font-bold leading-relaxed shadow-sm animate-screen-in">
            😂 {errorMsg}
          </div>
        )}

        <button
          type="submit"
          className="w-full btn-pink py-3.5 text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>UNLOCK BIRTHDAY SURPRISE</span>
        </button>
      </form>

      {attempts >= 2 && (
        <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-[#B3526D] bg-white/70 px-3.5 py-1.5 rounded-full border border-[#FFCCD8]">
          <HelpCircle className="w-3.5 h-3.5 text-[#FF7597]" />
          <span>Need a hint? What do I always call you, Esh? 🐧</span>
        </div>
      )}

      <button
        onClick={onBack}
        className="mt-6 flex items-center gap-1.5 text-xs text-[#B3526D] hover:text-[#8A2846] font-bold transition-colors cursor-pointer"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Return to Menu</span>
      </button>
    </div>
  );
}