import React from 'react';
import { Home } from 'lucide-react';
import { bouquetQuotes } from '../../data/bouquetQuotes';

export default function ScreenBouquet({ onBack }) {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-[88vh] px-2 sm:px-4 py-4 text-center max-w-6xl mx-auto animate-screen-in select-none">
      <div>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8A2846] font-cute tracking-tight">
          A Birthday Bouquet For Esha 🌸
        </h2>
        <p className="text-xs sm:text-sm text-[#B3526D] mt-1 font-medium">
          Each blossom carries a sweet birthday wish just for you!
        </p>
      </div>

      <div className="relative w-full max-w-4xl h-[480px] sm:h-[540px] my-auto flex items-center justify-center">
        <div className="relative w-80 sm:w-[440px] md:w-[500px] h-[440px] sm:h-[500px] flex items-center justify-center animate-bouquet">
          <img
            src="/images/flower.png"
            alt="Birthday Bouquet For Esha"
            className="w-full h-full object-contain filter drop-shadow-xl hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="absolute top-[8%] left-[2%] sm:left-[6%] md:left-[8%] max-w-[200px] sm:max-w-[230px] bg-white/95 border border-[#FFCCD8] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-1">
          {bouquetQuotes[0].text}
        </div>

        <div className="absolute top-[42%] -left-[1%] sm:left-[1%] md:left-[2%] max-w-[200px] sm:max-w-[240px] bg-white/95 border border-[#FFCCD8] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-2">
          {bouquetQuotes[1].text}
        </div>

        <div className="absolute bottom-[10%] left-[3%] sm:left-[7%] md:left-[9%] max-w-[200px] sm:max-w-[230px] bg-white/95 border border-[#FFCCD8] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-3">
          {bouquetQuotes[2].text}
        </div>

        <div className="absolute top-[12%] right-[2%] sm:right-[6%] md:right-[8%] max-w-[190px] sm:max-w-[220px] bg-white/95 border border-[#FFCCD8] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-4">
          {bouquetQuotes[3].text}
        </div>

        <div className="absolute top-[40%] -right-[1%] sm:right-[1%] md:right-[2%] max-w-[200px] sm:max-w-[240px] bg-white/95 border border-[#FFCCD8] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-5">
          {bouquetQuotes[4].text}
        </div>

        <div className="absolute bottom-[8%] right-[3%] sm:right-[7%] md:right-[9%] max-w-[190px] sm:max-w-[220px] bg-white/95 border border-[#FFCCD8] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-[11px] sm:text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-6">
          {bouquetQuotes[5].text}
        </div>
      </div>

      <button
        onClick={onBack}
        className="mt-2 flex items-center gap-2 btn-pink px-8 py-3 text-sm z-20"
      >
        <Home className="w-4 h-4" />
        <span>Return to Menu</span>
      </button>
    </div>
  );
}