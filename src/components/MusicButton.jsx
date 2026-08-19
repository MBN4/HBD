import React, { useState, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3"
      />
      <button
        onClick={toggleMusic}
        className="fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFAEC0] hover:bg-[#FF94AB] text-white text-xs font-bold shadow-md hover:scale-105 transition-transform cursor-pointer"
      >
        <Music className="w-3.5 h-3.5" />
        <span>{playing ? "Playing Birthday Song" : "Play Birthday Song 🎵"}</span>
        {playing ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 opacity-70" />}
      </button>
    </>
  );
}