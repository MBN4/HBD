import React, { useState, useEffect } from 'react';
import { Sparkles, Gamepad2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

const ICONS = ['👑', '🌹', '✨', '💎', '🌙', '🥂'];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  const shuffleCards = () => {
    const duplicated = [...ICONS, ...ICONS];
    const shuffled = duplicated
      .sort(() => Math.random() - 0.5)
      .map((icon, index) => ({ id: index, icon }));
    
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      if (cards[first].icon === cards[second].icon) {
        setMatched(m => {
          const nextMatched = [...m, first, second];
          if (nextMatched.length === cards.length) {
            confetti({
              particleCount: 100,
              spread: 80,
              origin: { y: 0.6 },
              colors: ['#F7E7CE', '#B76E79', '#D4AF37']
            });
          }
          return nextMatched;
        });
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  return (
    <section id="game" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card border-rose-gold/20 mb-3">
          <Gamepad2 className="w-4 h-4 text-rose-gold" />
          <span className="text-xs uppercase tracking-widest text-gold-champagne">
            Match The Charms
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif gold-gradient-text font-bold mb-2">
          Esha's Memory Match
        </h2>
        <p className="text-slate-400 text-sm">
          Pair up the golden symbols to unlock a celebratory rain of sparkles!
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-xl mx-auto border border-rose-gold/20 shadow-2xl">
        <div className="flex justify-between items-center mb-6 text-xs uppercase tracking-widest text-slate-400">
          <span>Moves: <strong className="text-gold-champagne">{moves}</strong></span>
          <span>Matched: <strong className="text-rose-gold">{matched.length / 2} / {ICONS.length}</strong></span>
          <button 
            onClick={shuffleCards}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          {cards.map((card, idx) => {
            const isFlipped = flipped.includes(idx) || matched.includes(idx);
            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(idx)}
                className={`aspect-square rounded-2xl flex items-center justify-center text-2xl sm:text-3xl transition-all duration-500 border ${
                  isFlipped 
                    ? 'bg-rose-gold/20 border-gold-champagne/50 scale-100 rotate-0' 
                    : 'glass-card border-white/10 hover:border-rose-gold/40 hover:scale-105'
                }`}
              >
                {isFlipped ? card.icon : <Sparkles className="w-4 h-4 text-slate-600" />}
              </button>
            );
          })}
        </div>

        {matched.length === cards.length && cards.length > 0 && (
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-rose-gold/20 to-gold-500/20 border border-gold-champagne/40 animate-fadeIn">
            <p className="text-sm font-serif gold-gradient-text font-semibold">
              ✨ You found them all in {moves} moves! Simply marvelous.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}