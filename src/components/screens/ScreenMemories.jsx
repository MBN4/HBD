import React from 'react';
import { Home, Sparkles } from 'lucide-react';
import { photostripImages, polaroidImages } from '../../data/galleryData';

export default function ScreenMemories({ onBack }) {
  const fallbackImg = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-6 text-center max-w-5xl mx-auto animate-screen-in select-none">
      <div className="mb-6">
        <h2 className="font-cursive text-5xl sm:text-6xl font-bold text-[#8A2846]">
          Captured Memories
        </h2>
        <p className="text-xs sm:text-sm text-[#B3526D] mt-1 font-cute">
          Moments painted with your radiant smile
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full my-4">
        <div className="relative bg-white p-4 pb-6 rounded-3xl shadow-xl border-2 border-[#FFCCD8] -rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105">
          <div className="polaroid-tape" />
          <div className="w-56 h-64 overflow-hidden rounded-2xl bg-[#FFEBF0]">
            <img
              src={polaroidImages[0].url}
              alt="Memory 1"
              onError={(e) => { e.target.src = fallbackImg; }}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-cursive text-3xl text-[#8A2846] mt-3">
            {polaroidImages[0].caption}
          </p>
        </div>

        <div className="bg-white p-4 rounded-3xl shadow-2xl border-2 border-[#FFAEC0] rotate-1 hover:rotate-0 transition-transform duration-500 hover:scale-105">
          <div className="flex flex-col gap-3">
            {photostripImages.map((src, i) => (
              <div key={i} className="w-28 h-24 overflow-hidden rounded-xl bg-[#FFEBF0]">
                <img
                  src={src}
                  alt={`Strip ${i}`}
                  onError={(e) => { e.target.src = fallbackImg; }}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
            <div className="text-center pt-1 border-t border-[#FFCCD8]">
              <span className="font-cursive text-xl text-[#FF7597] font-bold">Esha's Special Day</span>
            </div>
          </div>
        </div>

        <div className="relative bg-white p-4 pb-6 rounded-3xl shadow-xl border-2 border-[#FFCCD8] rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105">
          <div className="polaroid-tape" />
          <div className="w-56 h-64 overflow-hidden rounded-2xl bg-[#FFEBF0]">
            <img
              src={polaroidImages[1].url}
              alt="Memory 2"
              onError={(e) => { e.target.src = fallbackImg; }}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-cursive text-3xl text-[#8A2846] mt-3">
            {polaroidImages[1].caption}
          </p>
        </div>
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