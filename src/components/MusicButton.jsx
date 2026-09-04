import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const playingRef = useRef(playing);
  playingRef.current = playing;

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    const startForFinale = () => {
      if (playingRef.current || !audioRef.current) return;
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    };
    window.addEventListener('birthday-music-cue', startForFinale);
    return () => window.removeEventListener('birthday-music-cue', startForFinale);
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3"
      />
      <button
        onClick={toggleMusic}
        className="fixed top-3 right-3 sm:top-5 sm:right-5 z-50 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#FFAEC0] hover:bg-[#FF94AB] text-white text-[11px] sm:text-xs font-bold shadow-md hover:scale-105 transition-transform cursor-pointer"
      >
        <Music className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{playing ? "Playing Birthday Song" : "Play Birthday Song 🎵"}</span>
        <span className="sm:hidden">{playing ? "Playing 🎵" : "Play 🎵"}</span>
        {playing ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 opacity-70" />}
      </button>
    </>
  );
}