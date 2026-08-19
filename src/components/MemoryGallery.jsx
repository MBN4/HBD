import React from 'react';
import { galleryItems } from '../data/galleryData';
import { Sparkles, HeartHandshake } from 'lucide-react';

export default function MemoryGallery() {
  return (
    <section id="memories" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card border-rose-gold/20 mb-3">
          <HeartHandshake className="w-4 h-4 text-rose-gold" />
          <span className="text-xs uppercase tracking-widest text-gold-champagne">
            Cherished Gallery
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif gold-gradient-text font-bold mb-4">
          Portraits of Perfection
        </h2>
        <p className="text-slate-400 max-w-md mx-auto text-sm">
          Snapshots of joy, poise, and timeless aesthetics dedicated to Esha.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover border border-rose-gold/20 flex flex-col"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
              <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-gold-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-rose-gold font-medium">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-serif text-white font-semibold mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-light italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}