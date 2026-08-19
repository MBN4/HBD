import React from 'react';
import { Sparkles, MailOpen, Crown, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ onOpenLetter }) {
  const triggerSparkles = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F7E7CE', '#B76E79', '#D4AF37', '#ffffff']
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-rose-gold/30 mb-8 animate-float">
        <Crown className="w-4 h-4 text-gold-champagne" />
        <span className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-medium">
          Exclusively Crafted For Esha
        </span>
      </div>

      <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold tracking-tight mb-6 max-w-4xl leading-[1.1]">
        Radiance in <br />
        <span className="rose-gradient-text italic font-serif">Every Chapter</span>
      </h1>

      <p className="text-slate-300 max-w-xl text-base sm:text-lg font-light leading-relaxed mb-10">
        A dedicated digital sanctuary celebrating your unmatched charm, gentle heart, 
        and the luminous energy you bring into every room you grace.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={() => {
            triggerSparkles();
            onOpenLetter();
          }}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-rose-gold via-[#96545F] to-gold-500 text-white font-medium text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(183,110,121,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <MailOpen className="w-4 h-4" />
          <span>Read Your Letter</span>
        </button>

        <a
          href="#memories"
          className="w-full sm:w-auto px-8 py-4 rounded-full glass-card hover:bg-white/10 text-slate-200 font-medium text-sm uppercase tracking-widest transition-all duration-300"
        >
          Explore Moments
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <ChevronDown className="w-5 h-5 text-gold-champagne" />
      </div>
    </section>
  );
}