import React, { useState, useRef } from 'react';
import { Music, Play, Pause, Volume2, Sparkles } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3"
      />
      <div className="glass-card pl-3 pr-4 py-2 rounded-full border border-rose-gold/40 flex items-center gap-3 shadow-2xl backdrop-blur-xl hover:border-gold-champagne transition-all duration-300">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-gold to-gold-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <div className="text-left pr-1 hidden sm:block">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-serif gold-gradient-text font-bold">
              Aura of Esha
            </span>
            {isPlaying && <Sparkles className="w-3 h-3 text-gold-champagne animate-spin" />}
          </div>
          <p className="text-[9px] uppercase tracking-widest text-slate-400">
            {isPlaying ? 'Playing Melody' : 'Tap To Play Sound'}
          </p>
        </div>

        <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-gold-champagne' : 'text-slate-500'}`} />
      </div>
    </div>
  );
}