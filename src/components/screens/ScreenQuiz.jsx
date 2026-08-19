import React, { useState } from 'react';
import { Home, RotateCcw, CheckCircle, Gift, Sparkles, Trophy, Star } from 'lucide-react';
import { quizQuestions } from '../../data/quizData';
import confetti from 'canvas-confetti';

export default function ScreenQuiz({ onBack }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [points, setPoints] = useState(0);
  const [giftClaimed, setGiftClaimed] = useState(false);

  const maxPoints = quizQuestions.length * 100;

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);

    if (idx === quizQuestions[current].correct) {
      setPoints((p) => p + 100);
      confetti({
        particleCount: 60,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#FF7597', '#FFD700', '#FFAEC0']
      });
    }
  };

  const handleNext = () => {
    if (current < quizQuestions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setCompleted(true);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#FF7597', '#FFD700', '#FFD5DF', '#FFFFFF']
      });
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered(false);
    setCompleted(false);
    setPoints(0);
    setGiftClaimed(false);
  };

  const getGiftTier = () => {
    if (points >= 400) {
      return {
        badge: "👑 GOLD TIER REWARD",
        title: "VIP Birthday Queen Basket",
        desc: "A special birthday dinner on me, unlimited dessert cravings, and an all-day VIP pampering pass!",
        icon: "🎁",
        coupon: "VIP-ESHA-QUEEN-500"
      };
    } else if (points >= 300) {
      return {
        badge: "✨ SILVER TIER REWARD",
        title: "Sweet Treat & Movie Pass",
        desc: "A giant slice of your favorite cake plus a cozy birthday movie night on demand!",
        icon: "🍰",
        coupon: "SWEET-TREAT-300"
      };
    } else {
      return {
        badge: "🌸 BRONZE TIER REWARD",
        title: "Celebration Drink & Hug Voucher",
        desc: "Your favorite iced drink or boba tea delivered directly to you with unlimited birthday wishes!",
        icon: "🧋",
        coupon: "COFFEE-HUG-100"
      };
    }
  };

  const q = quizQuestions[current];
  const gift = getGiftTier();

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-6 text-center max-w-xl mx-auto animate-screen-in select-none">
      <div className="mb-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8A2846] font-cute">
          Esha's Birthday Quiz 🎀
        </h2>
        <p className="text-xs sm:text-sm text-[#B3526D] mt-1 font-medium">
          Answer all 5 questions correctly to earn points and unlock your Birthday Gift!
        </p>
      </div>

      <div className="screen-card w-full p-6 sm:p-8 relative">
        {!completed ? (
          <div>
            <div className="flex justify-between items-center text-xs font-bold text-[#C26B84] mb-4 pb-2 border-b border-[#FFCCD8]">
              <span>QUESTION {current + 1} OF {quizQuestions.length}</span>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-[#FFAEC0] shadow-sm">
                <Star className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                <span className="text-[#8A2846] font-bold">{points} PTS</span>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#8A2846] mb-6 font-cute">
              {q.question}
            </h3>

            <div className="space-y-3 mb-6">
              {q.options.map((opt, idx) => {
                let style = "bg-white border-2 border-[#FFCCD8] text-[#8A2846] hover:bg-[#FFEBF0]";

                if (answered) {
                  if (idx === q.correct) {
                    style = "bg-[#D4EDDA] border-[#28A745] text-[#155724]";
                  } else if (idx === selected) {
                    style = "bg-[#F8D7DA] border-[#DC3545] text-[#721C24]";
                  } else {
                    style = "opacity-40 bg-white border-[#FFCCD8]";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={answered}
                    onClick={() => handleSelect(idx)}
                    className={`w-full p-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 flex items-center justify-between cursor-pointer ${style}`}
                  >
                    <span>{opt}</span>
                    {answered && idx === q.correct && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="p-3 bg-[#FFEBF0] rounded-xl text-xs text-[#8A2846] font-bold mb-4 animate-screen-in">
                ✨ {q.reaction}
              </div>
            )}

            {answered && (
              <button
                onClick={handleNext}
                className="w-full btn-pink py-3 text-sm uppercase tracking-wider cursor-pointer"
              >
                {current < quizQuestions.length - 1 ? "Next Question" : "Unlock Birthday Gift 🎁"}
              </button>
            )}
          </div>
        ) : (
          <div className="py-2">
            <div className="w-16 h-16 bg-[#FFEBF0] rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-[#FFAEC0]">
              <Trophy className="w-8 h-8 text-[#FF7597]" />
            </div>

            <h3 className="text-2xl font-bold text-[#8A2846] font-cute">
              Quiz Completed!
            </h3>

            <div className="inline-flex items-center gap-2 bg-[#FFF0F4] border border-[#FFCCD8] px-4 py-1.5 rounded-full my-3">
              <Sparkles className="w-4 h-4 text-[#FFD700]" />
              <span className="text-sm font-bold text-[#8A2846]">Total Score: {points} / {maxPoints} PTS</span>
            </div>

            <div className="mt-4 p-5 rounded-2xl bg-white border-2 border-[#FFCCD8] shadow-md text-left relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#FF7597] bg-[#FFEBF0] px-2.5 py-1 rounded-full">
                  {gift.badge}
                </span>
                <span className="text-2xl">{gift.icon}</span>
              </div>

              <h4 className="text-base font-bold text-[#8A2846] mt-1 font-cute">
                {gift.title}
              </h4>
              <p className="text-xs text-[#6B283A] mt-1 leading-relaxed">
                {gift.desc}
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
                  <span>Claim This Gift Voucher</span>
                </button>
              ) : (
                <div className="mt-4 p-3 bg-[#E8F8F0] border border-[#A3E5C1] rounded-xl text-center">
                  <p className="text-[11px] text-[#1E7245] font-bold">
                    🎉 Voucher Code: <span className="font-mono bg-white px-2 py-0.5 rounded border border-[#A3E5C1]">{gift.coupon}</span>
                  </p>
                  <p className="text-[10px] text-[#2F8E5A] mt-0.5">
                    Screenshot this to redeem your birthday gift anytime!
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={restart}
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
        className="mt-6 flex items-center gap-2 btn-pink px-7 py-3 text-sm z-20 cursor-pointer"
      >
        <Home className="w-4 h-4" />
        <span>Return to Menu</span>
      </button>
    </div>
  );
}