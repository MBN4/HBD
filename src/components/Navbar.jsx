import React, { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Navbar({ onOpenLetter }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-obsidian/85 backdrop-blur-xl border-b border-rose-gold/20 shadow-2xl shadow-black/60' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-gold-champagne group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-serif text-2xl tracking-wider gold-gradient-text font-bold">
            ESHA
          </span>
        </a>

        <div className="flex items-center gap-8">
          <a href="#memories" className="text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-gold-champagne transition-colors duration-200 hidden md:block">
            Memories
          </a>
          <a href="#quiz" className="text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-gold-champagne transition-colors duration-200 hidden md:block">
            Quiz
          </a>
          <a href="#game" className="text-xs uppercase tracking-[0.2em] text-slate-300 hover:text-gold-champagne transition-colors duration-200 hidden md:block">
            Mini-Game
          </a>
          <button 
            onClick={onOpenLetter}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium bg-gradient-to-r from-rose-gold/20 to-gold-500/20 border border-rose-gold/40 hover:border-gold-champagne hover:scale-105 transition-all duration-300 text-gold-champagne shadow-lg shadow-rose-gold/10"
          >
            <Heart className="w-3.5 h-3.5 fill-rose-gold text-rose-gold" />
            <span>Open Note</span>
          </button>
        </div>
      </div>
    </nav>
  );
}