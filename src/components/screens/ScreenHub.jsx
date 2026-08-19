import React from 'react';
import { Camera, Mail, Flower2, HelpCircle, Gamepad2, Gift } from 'lucide-react';

export default function ScreenHub({ onNavigate }) {
  const cards = [
    {
      id: 'memories',
      title: 'Photo Album',
      sub: 'Captured birthday moments',
      icon: <Camera className="w-9 h-9 text-[#FF6B8B]" />,
      emoji: '📸',
      delay: '0.1s'
    },
    {
      id: 'letter',
      title: 'Birthday Letter',
      sub: 'A special note for you',
      icon: <Mail className="w-9 h-9 text-[#FF6B8B]" />,
      emoji: '💌',
      delay: '0.2s'
    },
    {
      id: 'bouquet',
      title: 'Birthday Flowers',
      sub: 'Bouquet just for you',
      icon: <Flower2 className="w-9 h-9 text-[#FF6B8B]" />,
      emoji: '💐',
      delay: '0.3s'
    },
    {
      id: 'quiz',
      title: 'Birthday Trivia',
      sub: 'The Esha challenge',
      icon: <HelpCircle className="w-9 h-9 text-[#FF6B8B]" />,
      emoji: '🎀',
      delay: '0.4s'
    },
    {
      id: 'memory-game',
      title: 'Party Match Game',
      sub: 'Match the cute treats',
      icon: <Gamepad2 className="w-9 h-9 text-[#FF6B8B]" />,
      emoji: '🎮',
      delay: '0.5s'
    },
    {
      id: 'unlock',
      title: 'Birthday Wishes',
      sub: 'Unlock your year ahead',
      icon: <Gift className="w-9 h-9 text-[#FF6B8B]" />,
      emoji: '🎁',
      delay: '0.6s'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-6 text-center max-w-4xl mx-auto animate-screen-in">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8A2846] mb-1 font-cute">
          Esha's Birthday Surprises 🎂
        </h2>
        <p className="text-[#B3526D] text-sm sm:text-base font-medium">
          Tap a card to open your birthday gift ✨
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl">
        {cards.map((c) => (
          <button
            key={c.id}
            onClick={() => onNavigate(c.id)}
            style={{ animationDelay: c.delay }}
            className="group screen-card p-5 sm:p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 hover:bg-[#FFEBF0] transition-all duration-300"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center shadow-inner group-hover:rotate-6 transition-transform">
              <span className="text-3xl sm:text-4xl">{c.emoji}</span>
            </div>
            <div>
              <p className="font-bold text-[#8A2846] text-sm sm:text-base leading-tight">
                {c.title}
              </p>
              <p className="text-[11px] text-[#C26B84] mt-0.5 font-medium">
                {c.sub}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}