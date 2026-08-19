import React from 'react';

export default function ScreenHub({ onNavigate }) {
  const cards = [
    {
      id: 'memories',
      title: 'Photo Album',
      sub: 'Captured birthday moments',
      tag: 'MEMORIES',
      delay: '0.1s',
      renderIcon: () => (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <div className="w-14 h-12 sm:w-16 sm:h-14 bg-gradient-to-tr from-[#FF94AB] to-[#FFB8C7] rounded-2xl shadow-md flex items-center justify-center relative border-2 border-white">
            <div className="absolute -top-1.5 left-3 w-4 h-1.5 bg-[#FF7597] rounded-t-md" />
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-inner">
              <div className="w-4 h-4 rounded-full bg-[#FF7597] flex items-center justify-center">
                <span className="text-[10px] text-white">❤️</span>
              </div>
            </div>
            <div className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-[#FFF0F4]" />
          </div>
        </div>
      )
    },
    {
      id: 'letter',
      title: 'Birthday Letter',
      sub: 'A special note for you',
      tag: 'WORDS',
      delay: '0.2s',
      renderIcon: () => (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <div className="w-14 h-11 sm:w-16 sm:h-12 bg-gradient-to-br from-[#FFF5F7] to-[#FFE1E8] rounded-xl shadow-md border-2 border-[#FFB8C7] flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-5 border-b border-[#FFCCD8] bg-[#FFF0F3]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
            <div className="w-5 h-5 rounded-full bg-[#FF7597] flex items-center justify-center shadow-sm z-10 -mt-1">
              <span className="text-[9px] text-white">💌</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'bouquet',
      title: 'Birthday Flowers',
      sub: 'Bouquet just for you',
      tag: 'FLOWERS',
      delay: '0.3s',
      renderIcon: () => (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#FFE5EC] to-[#FFF0F5] border-2 border-white shadow-md flex items-center justify-center text-3xl sm:text-4xl">
            💐
          </div>
        </div>
      )
    },
    {
      id: 'quiz',
      title: 'Birthday Trivia',
      sub: 'The Esha challenge',
      tag: 'FUN QUIZ',
      delay: '0.4s',
      renderIcon: () => (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#FFF0F4] to-[#FFE5ED] border-2 border-[#FFAEC0] shadow-md flex items-center justify-center text-3xl sm:text-4xl">
            🎀
          </div>
        </div>
      )
    },
    {
      id: 'memory-game',
      title: 'Party Match Game',
      sub: 'Match the cute treats',
      tag: 'MINI GAME',
      delay: '0.5s',
      renderIcon: () => (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <div className="w-14 h-11 sm:w-16 sm:h-12 bg-gradient-to-tr from-[#FF8EA8] to-[#FFAEC0] rounded-2xl shadow-md border-2 border-white flex items-center justify-center text-2xl sm:text-3xl">
            🎮
          </div>
        </div>
      )
    },
    {
      id: 'unlock',
      title: 'Birthday Wishes',
      sub: 'Unlock your year ahead',
      tag: 'SURPRISE',
      delay: '0.6s',
      renderIcon: () => (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#FFE1E8] to-[#FFC5D3] border-2 border-white shadow-md flex items-center justify-center text-3xl sm:text-4xl">
            🎁
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-6 text-center max-w-5xl mx-auto animate-screen-in select-none">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/70 border border-[#FFCCD8] text-[11px] uppercase tracking-widest text-[#B3526D] font-bold mb-2 shadow-sm">
          <span>✨ Made Just For You ✨</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-[#8A2846] font-cute tracking-tight">
          Esha's Birthday Surprises 🎂
        </h2>
        <p className="text-[#B3526D] text-xs sm:text-sm mt-1 font-medium">
          Tap a card to open your surprise
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl">
        {cards.map((c) => (
          <button
            key={c.id}
            onClick={() => onNavigate(c.id)}
            style={{ animationDelay: c.delay }}
            className="group relative bg-gradient-to-b from-white/95 via-[#FFF6F8]/95 to-[#FFEBF0]/95 border-2 border-[#FFD3DE] rounded-3xl p-5 sm:p-6 flex flex-col items-center justify-between min-h-[170px] sm:min-h-[195px] shadow-[0_12px_30px_rgba(255,142,168,0.18)] hover:shadow-[0_20px_45px_rgba(255,117,151,0.32)] hover:border-[#FF94AB] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute top-3 right-3 text-[9px] font-bold tracking-widest uppercase text-[#FF7597] bg-white/80 px-2 py-0.5 rounded-full border border-[#FFCCD8] opacity-80 group-hover:opacity-100 transition-opacity">
              {c.tag}
            </div>

            <div className="w-full flex items-center justify-center my-auto pt-2 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
              {c.renderIcon()}
            </div>

            <div className="w-full mt-2">
              <p className="font-bold text-[#8A2846] text-sm sm:text-base font-cute leading-snug">
                {c.title}
              </p>
              <p className="text-[11px] text-[#B3526D] font-medium mt-0.5 line-clamp-1">
                {c.sub}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}