import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import { HelpCircle, CheckCircle2, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleOptionClick = (index) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    if (index === quizQuestions[currentQuestion].correct) {
      setScore(prev => prev + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F7E7CE', '#B76E79']
      });
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#F7E7CE', '#B76E79', '#D4AF37', '#ffffff']
      });
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  const q = quizQuestions[currentQuestion];

  return (
    <section id="quiz" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card border-rose-gold/20 mb-3">
          <HelpCircle className="w-4 h-4 text-gold-champagne" />
          <span className="text-xs uppercase tracking-widest text-gold-champagne">
            The Esha Trivia
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif gold-gradient-text font-bold mb-2">
          How Well Do You Know Your Magic?
        </h2>
        <p className="text-slate-400 text-sm">
          A playful quiz honoring everything that makes Esha uniquely fabulous.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-rose-gold/30 shadow-2xl relative overflow-hidden">
        {!isCompleted ? (
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6 pb-4 border-b border-white/10">
              <span>QUESTION {currentQuestion + 1} OF {quizQuestions.length}</span>
              <span className="text-rose-gold">SCORE: {score}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif text-white font-medium mb-8 leading-snug">
              {q.question}
            </h3>

            <div className="space-y-3 mb-8">
              {q.options.map((option, idx) => {
                let btnStyle = "glass-card border-white/10 text-slate-200 hover:border-rose-gold/40 hover:bg-white/5";

                if (isAnswered) {
                  if (idx === q.correct) {
                    btnStyle = "bg-emerald-950/60 border-emerald-500/80 text-emerald-200";
                  } else if (idx === selectedOption) {
                    btnStyle = "bg-rose-deep/60 border-rose-gold text-rose-soft";
                  } else {
                    btnStyle = "opacity-40 border-white/5 text-slate-500";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleOptionClick(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between text-sm sm:text-base ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswered && idx === q.correct && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 text-sm text-gold-champagne italic animate-fadeIn">
                ✨ {q.reaction}
              </div>
            )}

            {isAnswered && (
              <button
                onClick={handleNext}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-gold to-gold-500 text-white font-medium text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'View Royal Verdict'}
              </button>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gold-500/20 border border-gold-400/40 mx-auto flex items-center justify-center mb-6 text-gold-champagne">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-3xl font-serif gold-gradient-text font-bold mb-2">
              Crown Conferred!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
              You scored {score} out of {quizQuestions.length}. Result: Certified 100% Grace, Elegance & Brilliance!
            </p>

            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:border-rose-gold text-xs uppercase tracking-widest text-gold-champagne transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Play Again</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}