import React, { useState } from 'react';
import { Sparkles, Home } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScreenUnlock({ onUnlocked, onBack }) {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (name.trim().toLowerCase() === 'esha' || name.trim().length > 0) {
      confetti({
        particleCount: 140,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#FF7597', '#FFD700', '#FFD5DF', '#FFFFFF']
      });
      onUnlocked();
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 text-center max-w-md mx-auto animate-screen-in">
      <div className="w-28 h-28 sm:w-36 sm:h-36 mb-4 animate-float-slow flex items-center justify-center">
        <img
          src="https://media.tenor.com/eBwP6q3bZg4AAAAi/hello-kitty.gif"
          alt="Hello Kitty"
          className="w-full h-full object-contain drop-shadow-md"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="text-7xl hidden">🎂🎀</div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-[#8A2846] mb-1 font-cute">
        One last birthday surprise...
      </h2>
      <p className="text-xs sm:text-sm text-[#B3526D] mb-6">
        Type your name to unlock the final birthday blessings
      </p>

      <form onSubmit={handleUnlock} className="w-full space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError(false);
          }}
          placeholder="Enter your name (e.g. ESHA)"
          className="w-full px-6 py-3.5 rounded-full border-2 border-[#FFCCD8] bg-white text-center font-bold text-[#8A2846] placeholder-[#DF9AA9] focus:outline-none focus:border-[#FF7597] shadow-inner text-base tracking-widest uppercase transition-all"
        />

        {error && (
          <p className="text-xs text-red-500 font-bold">
            Please enter your name to unlock! 🎂
          </p>
        )}

        <button
          type="submit"
          className="w-full btn-pink py-3.5 text-base uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>UNLOCK BIRTHDAY BLESSINGS</span>
        </button>
      </form>

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