import React, { useState } from 'react';
import { Home, X, Maximize2, Sparkles, Heart } from 'lucide-react';
import { photostripImages, polaroidImages } from '../../data/galleryData';

export default function ScreenMemories({ onBack }) {
  const fallbackImg = "/images/memory1.jpeg";
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center w-full px-3 sm:px-6 py-4 sm:py-8 text-center max-w-5xl mx-auto animate-screen-in select-none">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#FFCCD8] text-[11px] uppercase tracking-widest text-[#B3526D] font-bold mb-2 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7597]" />
          <span>Esha's Photo Gallery</span>
        </div>
        <h2 className="font-cursive text-4xl sm:text-6xl font-bold text-[#8A2846] leading-tight">
          Captured Memories
        </h2>
        <p className="text-xs sm:text-sm text-[#B3526D] mt-1 font-cute font-medium">
          Moments painted with your radiant smile (Tap any photo to view full size)
        </p>
      </div>

      {/* Main Gallery Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 w-full my-2 sm:my-4">
        
        {/* Left Polaroid - Birthday Queen */}
        <div 
          onClick={() => setSelectedPhoto(polaroidImages[0])}
          className="group relative bg-white p-4 pb-6 rounded-3xl shadow-xl border-2 border-[#FFCCD8] -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-[1.03] cursor-pointer w-full max-w-[280px] sm:max-w-[300px]"
        >
          <div className="polaroid-tape" />
          
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-[#FFEBF0] border border-[#FFCCD8]/50 shadow-inner">
            <img
              src={polaroidImages[0].url}
              alt={polaroidImages[0].caption}
              onError={(e) => { e.target.src = fallbackImg; }}
              style={{ objectPosition: polaroidImages[0].objectPosition || 'center 20%' }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-[#8A2846] p-2.5 rounded-full shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          <p className="font-cursive text-2xl sm:text-3xl text-[#8A2846] font-bold mt-3.5">
            {polaroidImages[0].caption}
          </p>
          <p className="text-[11px] text-[#B3526D] font-medium mt-0.5">
            {polaroidImages[0].subCaption}
          </p>
        </div>

        {/* Middle Photostrip */}
        <div className="bg-white p-3.5 sm:p-4 rounded-3xl shadow-2xl border-2 border-[#FFAEC0] rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-[1.02] w-full max-w-[260px] sm:max-w-[280px]">
          <div className="flex flex-col gap-3">
            {photostripImages.map((item, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedPhoto(item)}
                className="group relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl bg-[#FFEBF0] border border-[#FFCCD8]/50 cursor-pointer shadow-sm"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  onError={(e) => { e.target.src = fallbackImg; }}
                  style={{ objectPosition: item.objectPosition || 'center center' }}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                  <span className="text-[11px] font-bold text-white tracking-wide font-cute">
                    {item.title} 🔍
                  </span>
                </div>
              </div>
            ))}

            <div className="text-center pt-2 border-t border-[#FFCCD8] flex items-center justify-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-[#FF7597] fill-[#FF7597]" />
              <span className="font-cursive text-xl text-[#FF7597] font-bold">Esha's Special Day</span>
              <Heart className="w-3.5 h-3.5 text-[#FF7597] fill-[#FF7597]" />
            </div>
          </div>
        </div>

        {/* Right Polaroid - Another Year Fabulous */}
        <div 
          onClick={() => setSelectedPhoto(polaroidImages[1])}
          className="group relative bg-white p-4 pb-6 rounded-3xl shadow-xl border-2 border-[#FFCCD8] rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-[1.03] cursor-pointer w-full max-w-[280px] sm:max-w-[300px]"
        >
          <div className="polaroid-tape" />
          
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-[#FFEBF0] border border-[#FFCCD8]/50 shadow-inner">
            <img
              src={polaroidImages[1].url}
              alt={polaroidImages[1].caption}
              onError={(e) => { e.target.src = fallbackImg; }}
              style={{ objectPosition: polaroidImages[1].objectPosition || 'center center' }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-[#8A2846] p-2.5 rounded-full shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          <p className="font-cursive text-2xl sm:text-3xl text-[#8A2846] font-bold mt-3.5">
            {polaroidImages[1].caption}
          </p>
          <p className="text-[11px] text-[#B3526D] font-medium mt-0.5">
            {polaroidImages[1].subCaption}
          </p>
        </div>

      </div>

      {/* Return to Menu Button */}
      <button
        onClick={onBack}
        className="mt-6 flex items-center gap-2 btn-pink px-8 py-3 text-sm z-20 cursor-pointer shadow-lg hover:scale-105 transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Return to Menu</span>
      </button>

      {/* Lightbox Photo Preview Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-screen-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative bg-white rounded-3xl p-4 sm:p-6 max-w-lg w-full shadow-2xl border-4 border-[#FFCCD8] flex flex-col items-center max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 p-2 rounded-full bg-[#FFEBF0] text-[#8A2846] hover:bg-[#FF7597] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full max-h-[60vh] overflow-hidden rounded-2xl bg-[#FFEBF0] flex items-center justify-center border border-[#FFCCD8] my-2">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption || selectedPhoto.title}
                className="max-h-[60vh] w-auto object-contain rounded-2xl"
              />
            </div>

            <h3 className="font-cursive text-3xl text-[#8A2846] font-bold mt-2">
              {selectedPhoto.caption || selectedPhoto.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#B3526D] font-cute font-semibold mt-1 text-center">
              {selectedPhoto.subCaption || selectedPhoto.caption || "A beautiful memory captured forever 💖"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}