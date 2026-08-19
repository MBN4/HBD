import React from 'react';
import { X, Heart, Sparkles, Feather } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LetterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleCelebrate = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#F7E7CE', '#B76E79', '#D4AF37', '#ffffff']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#140c14] border border-rose-gold/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(183,110,121,0.25)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-6">
          <Feather className="w-5 h-5 text-gold-champagne" />
          <span className="text-xs uppercase tracking-[0.3em] text-gold-champagne">
            A Note Just For You
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif gold-gradient-text font-bold mb-6">
          Dearest Esha,
        </h2>

        <div className="space-y-4 text-slate-300 font-light text-base sm:text-lg leading-relaxed font-sans">
          <p>
            Some people simply exist, and others effortlessly elevate the world just by being in it. You, without a doubt, are the latter.
          </p>
          <p>
            Whether it’s your subtle elegance, your unforgettable laughter, or the quiet warmth that comforts everyone around you, you leave a touch of magic everywhere you step.
          </p>
          <p>
            This small digital corner was designed to remind you of how deeply cherished, appreciated, and valued you truly are. May every day ahead be as stunning and radiant as your soul.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-rose-gold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-handwriting text-3xl sm:text-4xl text-rose-gold">
              Forever Adored,
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">
              With Pure Appreciation
            </p>
          </div>

          <button
            onClick={handleCelebrate}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-gold to-gold-500 text-white text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <Sparkles className="w-4 h-4" />
            <span>Send Sparkles</span>
          </button>
        </div>
      </div>
    </div>
  );
}