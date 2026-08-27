
import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Using a royalty-free romantic piano track
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Placeholder romantic-vibe track

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Autoplay prevented or audio error:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[60] flex items-center gap-4 group">
      <audio ref={audioRef} src={audioUrl} loop />
      
      <button
        onClick={togglePlay}
        className={`relative w-14 h-14 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-xl border border-rose-100 transition-all duration-500 transform hover:scale-110 active:scale-95 ${isPlaying ? 'ring-2 ring-rose-400' : ''}`}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {/* Vinyl spinning effect when playing */}
        <div className={`absolute inset-1 rounded-full border border-gray-100 transition-transform duration-[3s] linear infinite ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-400 rounded-full" />
        </div>
        
        {isPlaying ? (
          <svg className="w-6 h-6 text-rose-600 z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-rose-600 z-10 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Track info tooltip/label */}
      <div className={`overflow-hidden transition-all duration-500 max-w-0 group-hover:max-w-xs ${isPlaying ? 'max-w-xs' : ''}`}>
        <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-rose-50 shadow-lg ml-2 whitespace-nowrap">
          <p className="text-xs font-bold text-rose-600 uppercase tracking-tighter">Now Playing</p>
          <p className="text-sm font-medium text-gray-700">Melody of Onyi</p>
        </div>
      </div>

      {/* Visualizer bars when playing */}
      {isPlaying && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-end gap-0.5 h-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-1 bg-rose-400 rounded-full animate-bounce"
              style={{
                height: `${Math.random() * 100}%`,
                animationDuration: `${0.5 + Math.random()}s`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
