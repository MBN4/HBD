import React from 'react';
import { Home, Sparkles } from 'lucide-react';
import { bouquetQuotes } from '../../data/bouquetQuotes';

export default function ScreenBouquet({ onBack }) {
  return (
    <div className="flex flex-col items-center justify-between w-full px-3 sm:px-6 py-4 sm:py-8 text-center max-w-5xl mx-auto animate-screen-in select-none">
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#FFCCD8] text-[11px] uppercase tracking-widest text-[#B3526D] font-bold mb-2 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7597]" />
          <span>Fresh Blossoms & Wishes</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8A2846] font-cute tracking-tight">
          A Birthday Bouquet For Esha 🌸
        </h2>
        <p className="text-xs sm:text-sm text-[#B3526D] mt-1 font-medium max-w-md mx-auto">
          Each blossom carries a sweet birthday wish crafted just for you!
        </p>
      </div>

      {/* Main Content Area */}
      <div className="w-full my-6 flex flex-col md:block relative items-center">
        
        {/* Central Flower Image */}
        <div className="relative w-64 sm:w-80 md:w-[420px] aspect-square mx-auto flex items-center justify-center animate-bouquet my-2 md:my-6">
          <img
            src="/images/flower.png"
            alt="Birthday Bouquet For Esha"
            className="w-full h-full object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Floating Desktop Speech Bubbles (Visible on md and larger screens) */}
        <div className="hidden md:block">
          <div className="absolute top-[5%] left-[2%] lg:left-[4%] max-w-[210px] bg-white/95 border border-[#FFCCD8] rounded-2xl p-3.5 text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-1">
            🌸 {bouquetQuotes[0].text}
          </div>

          <div className="absolute top-[40%] left-[0%] lg:left-[2%] max-w-[220px] bg-white/95 border border-[#FFCCD8] rounded-2xl p-3.5 text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-2">
            ✨ {bouquetQuotes[1].text}
          </div>

          <div className="absolute bottom-[10%] left-[3%] lg:left-[5%] max-w-[210px] bg-white/95 border border-[#FFCCD8] rounded-2xl p-3.5 text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-3">
            💖 {bouquetQuotes[2].text}
          </div>

          <div className="absolute top-[8%] right-[2%] lg:right-[4%] max-w-[210px] bg-white/95 border border-[#FFCCD8] rounded-2xl p-3.5 text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-4">
            🥂 {bouquetQuotes[3].text}
          </div>

          <div className="absolute top-[42%] right-[0%] lg:right-[2%] max-w-[220px] bg-white/95 border border-[#FFCCD8] rounded-2xl p-3.5 text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-5">
            👑 {bouquetQuotes[4].text}
          </div>

          <div className="absolute bottom-[8%] right-[3%] lg:right-[5%] max-w-[210px] bg-white/95 border border-[#FFCCD8] rounded-2xl p-3.5 text-xs text-[#8A2846] font-semibold shadow-lg text-left animate-msg-6">
            🌷 {bouquetQuotes[5].text}
          </div>
        </div>

        {/* Mobile Speech Cards Grid (Visible on small screens < md) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mt-4 md:hidden">
          {bouquetQuotes.map((q, idx) => (
            <div 
              key={q.id}
              className="bg-white/95 border-2 border-[#FFCCD8] rounded-2xl p-3.5 text-xs text-[#8A2846] font-semibold shadow-md text-left flex items-start gap-2"
            >
              <span className="text-base shrink-0">
                {['🌸', '✨', '💖', '🥂', '👑', '🌷'][idx % 6]}
              </span>
              <span>{q.text}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onBack}
        className="mt-4 flex items-center gap-2 btn-pink px-8 py-3 text-sm z-20 cursor-pointer shadow-lg hover:scale-105 transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Return to Menu</span>
      </button>
    </div>
  );
}