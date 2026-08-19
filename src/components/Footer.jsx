import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 text-center text-slate-500 text-xs">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-gold-champagne" />
        <span className="font-serif gold-gradient-text text-sm font-semibold tracking-wider">
          FOR ESHA
        </span>
        <Sparkles className="w-4 h-4 text-gold-champagne" />
      </div>
      <p className="flex items-center justify-center gap-1 text-slate-400 font-light">
        Designed with endless adoration & appreciation <Heart className="w-3.5 h-3.5 fill-rose-gold text-rose-gold inline" />
      </p>
      <p className="text-[10px] text-slate-600 mt-2">
        © {new Date().getFullYear()} All Rights Reserved. Stay Brilliant.
      </p>
    </footer>
  );
}