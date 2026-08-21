import React, { useState, useEffect } from 'react';
import { Home, RotateCcw, Trophy, Gift, Star, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const GAME_IMAGES = [
  { id: 1, emoji: '🎂' },
  { id: 2, emoji: '🎈' },
  { id: 3, emoji: '🎁' },
  { id: 4, emoji: '🎉' },
  { id: 5, emoji: '🥳' },
  { id: 6, emoji: '🐧' },
];

export default function ScreenMemoryGame({ onBack }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [points, setPoints] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [giftClaimed, setGiftClaimed] = useState(false);

  const initGame = () => {
    const duplicated = [...GAME_IMAGES, ...GAME_IMAGES];
    const shuffled = duplicated
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        instanceId: index,
        imageId: item.id,
        emoji: item.emoji
      }));
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setPoints(0);
    setIsCompleted(false);
    setGiftClaimed(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleClick = (idx) => {
    if (flipped.length === 2 || flipped.includes(idx) || matched.includes(idx)) return;

    const next = [...flipped, idx];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = next;

      if (cards[first].imageId === cards[second].imageId) {
        setPoints((p) => p + 50);
        setMatched((prev) => {
          const updated = [...prev, first, second];
          if (updated.length === cards.length) {
            const bonus = Math.max(0, 100 - moves * 5);
            setPoints((p) => p + 50 + bonus);
            setIsCompleted(true);
            confetti({
              particleCount: 140,
              spread: 85,
              origin: { y: 0.5 },
              colors: ['#FF7597', '#FFD700', '#FFAEC0', '#FFFFFF']
            });
          }
          return updated;
        });
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 800);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-6 text-center max-w-2xl mx-auto animate-screen-in select-none">
      <div className="mb-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8A2846] font-cute">
          Esha's Birthday Match Game
        </h2>
        <p className="text-xs sm:text-sm text-[#B3526D] mt-1 font-medium">
          Pair all matching emojis to earn points and unlock your surprise!
        </p>
      </div>

      <div className="screen-card w-full p-5 sm:p-7 relative bg-gradient-to-b from-white/95 to-[#FFF3F6]">
        <div className="flex justify-between items-center text-xs font-bold text-[#C26B84] mb-4 pb-3 border-b border-[#FFCCD8]">
          <div className="flex items-center gap-4">
            <span className="bg-[#FFEBF0] px-3 py-1 rounded-full">MOVES: <strong className="text-[#8A2846]">{moves}</strong></span>
            <span className="bg-[#FFEBF0] px-3 py-1 rounded-full">PAIRS: <strong className="text-[#FF7597]">{matched.length / 2}/{GAME_IMAGES.length}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 bg-[#FFF0F4] px-3.5 py-1.5 rounded-full border border-[#FFAEC0] shadow-sm">
            <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
            <span className="text-[#8A2846] font-bold text-sm">{points} PTS</span>
          </div>
        </div>

        {!isCompleted ? (
          <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 max-w-lg mx-auto">
            {cards.map((card, idx) => {
              const isShown = flipped.includes(idx) || matched.includes(idx);
              return (
                <button
                  key={card.instanceId}
                  onClick={() => handleClick(idx)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 relative cursor-pointer ${
                    isShown
                      ? 'border-[#FF7597] scale-100 shadow-md ring-2 ring-[#FFCCD8]'
                      : 'border-[#FFCCD8] bg-gradient-to-br from-[#FFE5EC] to-[#FFC5D3] hover:scale-105 shadow-sm hover:border-[#FF7597]'
                  }`}
                >
                  {isShown ? (
                    <div className="w-full h-full flex items-center justify-center text-3xl sm:text-4xl">
                      {card.emoji}
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#FFEBF0] via-[#FFDCE5] to-[#FFCCD8]">
                      <Sparkles className="w-5 h-5 text-[#FF7597]" />
                      <span className="text-[10px] font-bold text-[#8A2846] mt-1 font-cute tracking-widest">ESHA</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="py-3">
            <div className="w-16 h-16 bg-[#FFEBF0] rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-[#FFAEC0]">
              <Trophy className="w-8 h-8 text-[#FF7597]" />
            </div>

            <h3 className="text-2xl font-bold text-[#8A2846] font-cute">
              All Pairs Matched!
            </h3>

            <div className="inline-flex items-center gap-2 bg-[#FFF0F4] border border-[#FFCCD8] px-4 py-1.5 rounded-full my-3">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-bold text-[#8A2846]">Final Score: {points} PTS in {moves} Moves</span>
            </div>

            <div className="mt-4 p-5 rounded-2xl bg-white border-2 border-[#FFCCD8] shadow-md text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF7597] bg-[#FFEBF0] px-2.5 py-1 rounded-full">
                  MATCH MASTER REWARD
                </span>
                <span className="text-2xl">🍰</span>
              </div>

              <h4 className="text-base font-bold text-[#8A2846] mt-1 font-cute">
                Exclusive Birthday Treat Pass
              </h4>
              <p className="text-xs text-[#6B283A] mt-1 leading-relaxed">
                Redeemable for waffles, boba, and ice cream on demand anytime you want!
              </p>

              {!giftClaimed ? (
                <button
                  onClick={() => {
                    setGiftClaimed(true);
                    confetti({
                      particleCount: 90,
                      spread: 70,
                      origin: { y: 0.6 },
                      colors: ['#FF7597', '#FFD700', '#FFFFFF']
                    });
                  }}
                  className="mt-4 w-full btn-pink py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Gift className="w-4 h-4" />
                  <span>Claim This Birthday Reward</span>
                </button>
              ) : (
                <div className="mt-4 p-3 bg-[#E8F8F0] border border-[#A3E5C1] rounded-xl text-center">
                  <p className="text-[11px] text-[#1E7245] font-bold">
                    Voucher Code: <span className="font-mono bg-white px-2 py-0.5 rounded border border-[#A3E5C1]">ESHA-MEMORIES-500</span>
                  </p>
                  <p className="text-[10px] text-[#2F8E5A] mt-0.5">
                    Save or screenshot this voucher to claim your treat!
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center">
              <button
                onClick={initGame}
                className="btn-light-pink px-5 py-2.5 text-xs inline-flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Play Again</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <button
        onClick={onBack}
        className="mt-6 flex items-center gap-2 btn-pink px-8 py-3 text-sm z-20 cursor-pointer"
      >
        <Home className="w-4 h-4" />
        <span>Return to Menu</span>
      </button>
    </div>
  );
}