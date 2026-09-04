import React, { useEffect, useMemo, useState } from 'react';
import { Home, Sparkles, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

const EXCESS_COUNT = 11;
const FALL_STAGGER = 70;
const FALL_DURATION = 550;
const LEAVE_STAGGER = 70;
const LEAVE_DURATION = 600;
const SPECIAL_STAGGER = 260;
const SPECIAL_DURATION = 550;

const BUILD_TOTAL = 2550;
const FALLING_TOTAL = EXCESS_COUNT * FALL_STAGGER + FALL_DURATION;
const JOKE_DURATION = 10000;
const LEAVING_TOTAL = EXCESS_COUNT * LEAVE_STAGGER + LEAVE_DURATION;
const SPECIAL_TOTAL = SPECIAL_STAGGER + SPECIAL_DURATION;

const CANDLE_COLORS = ['#FF7597', '#6EC1E4', '#FFD166', '#B892FF', '#7BE0AD'];
const CONFETTI_COLORS = ['#FFD700', '#FF7597', '#FFAEC0', '#FFFFFF', '#6EC1E4', '#FF4D73'];

export default function ScreenCakeFinale({ onBack }) {
  const [stage, setStage] = useState('building');

  const excessCandles = useMemo(() => {
    const mid = (EXCESS_COUNT - 1) / 2;
    return Array.from({ length: EXCESS_COUNT }).map((_, i) => {
      const offset = i - mid;
      return {
        id: i,
        color: CANDLE_COLORS[i % CANDLE_COLORS.length],
        height: 44 + ((i % 3) - 1) * 6,
        driftX: offset * 3 + (Math.random() * 6 - 3),
        startRot: offset * 2.2 + (Math.random() * 6 - 3),
        endRot: -(offset * 2.2) + (Math.random() * 10 - 5),
        fallFrom: -(560 + Math.random() * 140),
        fallDelay: i * FALL_STAGGER,
        leaveDelay: (EXCESS_COUNT - 1 - i) * LEAVE_STAGGER
      };
    });
  }, []);

  useEffect(() => {
    let delay = null;
    if (stage === 'building') delay = BUILD_TOTAL + 250;
    else if (stage === 'falling') delay = FALLING_TOTAL + 300;
    else if (stage === 'joke') delay = JOKE_DURATION;
    else if (stage === 'leaving') delay = LEAVING_TOTAL + 300;
    else if (stage === 'special') delay = SPECIAL_TOTAL + 400;

    if (delay === null) return undefined;

    const next = {
      building: 'falling',
      falling: 'joke',
      joke: 'leaving',
      leaving: 'special',
      special: 'lit'
    }[stage];

    const timer = setTimeout(() => setStage(next), delay);
    return () => clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'lit') return undefined;
    window.dispatchEvent(new Event('birthday-music-cue'));
    confetti({ particleCount: 140, spread: 100, origin: { y: 0.5 }, colors: CONFETTI_COLORS });
    const t = setTimeout(() => {
      confetti({ particleCount: 70, angle: 60, spread: 55, origin: { x: 0, y: 0.6 }, colors: CONFETTI_COLORS });
      confetti({ particleCount: 70, angle: 120, spread: 55, origin: { x: 1, y: 0.6 }, colors: CONFETTI_COLORS });
    }, 300);
    return () => clearTimeout(t);
  }, [stage]);

  const dismissJoke = () => {
    if (stage === 'joke') setStage('leaving');
  };

  const showExcess = stage === 'falling' || stage === 'joke' || stage === 'leaving';
  const showJoke = stage === 'joke' || stage === 'leaving';
  const showSpecial = stage === 'special' || stage === 'lit';
  const lit = stage === 'lit';

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-3 sm:px-6 py-6 text-center select-none overflow-x-hidden overflow-y-auto">
      {lit && (
        <div className="fixed inset-0 z-0 bg-black/60 pointer-events-none animate-dim-lights" />
      )}

      <div className="relative z-10 flex flex-col items-center w-full max-w-xl mx-auto">
        {showJoke && (
          <div className="absolute -top-4 sm:top-0 inset-x-0 z-30 flex justify-center px-4">
            <div
              onClick={dismissJoke}
              className={`relative max-w-[16rem] sm:max-w-sm p-3.5 sm:p-4 bg-[#FFF0F3] border-[3px] border-[#FF7597] rounded-3xl shadow-[0_15px_40px_rgba(255,117,151,0.4)] text-[#8A2846] font-bold text-xs sm:text-base cursor-pointer ${
                stage === 'joke' ? 'animate-bubble-in' : 'animate-bubble-out'
              }`}
            >
              😂 Damn Esh, getting old! Even the cake doesn't have enough space for all these candles! 👵🎂
              {stage === 'joke' && (
                <p className="mt-1.5 text-[9px] sm:text-[10px] font-medium text-[#B3526D]/80 normal-case tracking-normal">
                  (tap to continue)
                </p>
              )}
              <div className="absolute left-1/2 -bottom-[9px] -translate-x-1/2 w-4 h-4 bg-[#FFF0F3] border-b-[3px] border-r-[3px] border-[#FF7597] rotate-45" />
            </div>
          </div>
        )}

        <div
          className={`relative flex flex-col items-center justify-end h-[360px] sm:h-[420px] w-full max-w-md mt-16 sm:mt-16 mb-4 transition-transform duration-700 ${
            lit ? 'animate-cake-glow scale-[1.02]' : ''
          }`}
        >
          <div
            className="relative w-[160px] sm:w-[180px] h-16 bg-gradient-to-br from-[#FFF6F8] via-[#FFE1E8] to-[#FFD9E4] rounded-t-3xl border-[3px] border-white shadow-md z-10 flex items-center justify-center animate-cake-top"
            style={{ '--scallop-color': '#FFE1E8' }}
          >
            {showExcess && (
              <div
                className="absolute inset-x-0 flex justify-center items-end gap-[3px] z-20"
                style={{ bottom: 'calc(100% - 7px)' }}
              >
                {excessCandles.map((c) => (
                  <div
                    key={c.id}
                    style={{
                      height: `${c.height}px`,
                      '--fall-from': `${c.fallFrom}px`,
                      '--drift-x': `${c.driftX}px`,
                      '--start-rot': `${c.startRot}deg`,
                      '--end-rot': `${c.endRot}deg`,
                      '--delay': `${stage === 'leaving' ? c.leaveDelay : c.fallDelay}ms`,
                      background: `linear-gradient(to top, ${c.color}, #FFE8A3)`
                    }}
                    className={`w-[10px] rounded-t-[3px] border border-white/80 shadow-sm candle-stripe flex flex-col items-center ${
                      stage === 'leaving' ? 'animate-candle-fly' : 'animate-candle-fall'
                    }`}
                  >
                    <div className="w-[1.5px] h-2 bg-slate-700/80 -mt-2" />
                  </div>
                ))}
              </div>
            )}

            {showSpecial && (
              <div
                className="absolute inset-x-0 flex justify-center items-end gap-6 z-20"
                style={{ bottom: 'calc(100% - 11px)' }}
              >
                {['2', '5'].map((digit, i) => (
                  <div
                    key={digit}
                    style={{ '--delay': `${i * SPECIAL_STAGGER}ms` }}
                    className="relative flex flex-col items-center animate-candle-fall"
                  >
                    {lit && (
                      <div className="absolute -top-7 animate-flame-lit">
                        <Flame className="w-7 h-7 fill-[#FFD700] text-[#FF4D00]" />
                      </div>
                    )}
                    <div className="w-10 h-16 bg-gradient-to-b from-[#FFE58F] to-[#FAAD14] rounded-2xl border-2 border-white shadow-xl flex items-center justify-center font-bold text-2xl text-[#8A2846] font-cute">
                      {digit}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="tier-shine" />
            <div className="frosting-scallop" />
            <div className="absolute -top-2 flex gap-3 text-sm">
              <span>🍓</span><span>🍒</span><span>🍓</span>
            </div>
            <span className="text-[10px] font-bold text-[#B3526D] tracking-widest uppercase">ESHA</span>
          </div>

          <div
            className="relative w-[210px] sm:w-[240px] h-20 bg-gradient-to-br from-[#FFD3DE] via-[#FFB3C6] to-[#FFA5BC] rounded-t-3xl border-[3px] border-white shadow-lg z-0 -mt-2 animate-cake-middle flex items-center justify-center"
            style={{ '--scallop-color': '#FFB3C6' }}
          >
            <div className="tier-shine" />
            <div className="frosting-scallop" />
            <div className="w-full h-3 border-b-2 border-dashed border-white/60" />
          </div>

          <div
            className="relative w-[270px] sm:w-[320px] h-24 bg-gradient-to-br from-[#FF87A3] via-[#FF5C84] to-[#F03A69] rounded-t-3xl border-4 border-white shadow-2xl -mt-2 animate-cake-bottom flex items-center justify-center"
            style={{ '--scallop-color': '#FF5C84' }}
          >
            <div className="tier-shine" />
            <div className="frosting-scallop" />
            <span className="text-white font-cute font-bold text-xs sm:text-sm tracking-wider px-4 drop-shadow-[0_2px_3px_rgba(138,40,70,0.4)]">
              HAPPY 25TH BIRTHDAY
            </span>
          </div>

          <div className="relative w-[295px] sm:w-[360px] h-5 bg-gradient-to-b from-white via-[#F5F5F5] to-[#DCDCDC] rounded-full shadow-2xl -mt-1 border border-white animate-cake-board" />
          <div className="w-[270px] sm:w-[320px] h-3 rounded-full bg-black/20 blur-md -mt-1 animate-cake-board" />
        </div>

        {lit && (
          <div className="z-30 text-center max-w-lg mt-2 animate-final-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/20 border border-[#FFD700] text-xs font-bold text-[#FFE066] mb-2 tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>OFFICIALLY 25 YEARS ICONIC</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-cute drop-shadow-[0_4px_12px_rgba(255,117,151,0.8)]">
              Happy 25th Birthday, Esha! ✨👑
            </h2>
            <p className="text-xs sm:text-sm text-pink-100 mt-2 font-medium leading-relaxed max-w-md mx-auto">
              Wishing you boundless smiles, great health, unmatched success, and the most unforgettable celebration ever!
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={() => {
                  confetti({
                    particleCount: 140,
                    spread: 80,
                    origin: { y: 0.5 },
                    colors: ['#FFD700', '#FF7597', '#FFFFFF']
                  });
                }}
                className="btn-pink px-6 py-3 text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <Sparkles className="w-4 h-4" />
                <span>More Confetti!</span>
              </button>

              <button
                onClick={onBack}
                className="btn-light-pink px-6 py-3 text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Home className="w-4 h-4" />
                <span>Back To Hub</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
