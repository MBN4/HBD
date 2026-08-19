import React from 'react';
import { Home } from 'lucide-react';
import { photostripImages, polaroidImages } from '../../data/galleryData';

export default function ScreenMemories({ onBack }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] px-4 py-6 text-center max-w-5xl mx-auto animate-screen-in">
      <div className="mb-6">
        <h2 className="font-cursive text-5xl sm:text-6xl font-bold text-[#8A2846]">
          Captured Memories
        </h2>
        <p className="text-xs sm:text-sm text-[#B3526D] mt-1 font-cute">
          Moments painted with your radiant smile
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full my-4">
        <div className="relative bg-white p-4 pb-6 rounded-2xl shadow-xl border border-[#FFCCD8] -rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105">
          <div className="polaroid-tape" />
          <div className="w-52 h-64 overflow-hidden rounded-xl bg-pastel-bg">
            <img
              src={polaroidImages[0].url}
              alt="Memory 1"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-cursive text-2xl text-[#8A2846] mt-3">
            {polaroidImages[0].caption}
          </p>
        </div>

        <div className="flex gap-3 bg-white p-3.5 rounded-2xl shadow-2xl border-2 border-[#FFAEC0] rotate-1 hover:rotate-0 transition-transform duration-500 hover:scale-105">
          <div className="flex flex-col gap-2.5">
            {photostripImages.map((src, i) => (
              <div key={i} className="w-24 sm:w-28 h-24 sm:h-28 overflow-hidden rounded-lg bg-pink-100">
                <img src={src} alt="strip" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
            <div className="text-center pt-1">
              <span className="font-cursive text-lg text-[#FF7597]">Esha & Co. 💕</span>
            </div>
          </div>
        </div>

        <div className="relative bg-white p-4 pb-6 rounded-2xl shadow-xl border border-[#FFCCD8] rotate-4 hover:rotate-0 transition-transform duration-500 hover:scale-105">
          <div className="polaroid-tape" />
          <div className="w-52 h-64 overflow-hidden rounded-xl bg-pastel-bg">
            <img
              src={polaroidImages[1].url}
              alt="Memory 2"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-cursive text-2xl text-[#8A2846] mt-3">
            {polaroidImages[1].caption}
          </p>
        </div>
      </div>

      <button
        onClick={onBack}
        className="mt-6 flex items-center gap-2 btn-pink px-7 py-3 text-sm"
      >
        <Home className="w-4 h-4" />
        <span>Return to Menu</span>
      </button>
    </div>
  );
}