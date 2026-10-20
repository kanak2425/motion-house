import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, FastForward, Film, Sparkles, ArrowDown } from 'lucide-react';
import { studioBeat } from '../utils/audioBeat';

interface CinematicHeroProps {
  onExploreClasses: () => void;
  onBookClass: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onExploreClasses, onBookClass }) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [hasCompletedOpening, setHasCompletedOpening] = useState<boolean>(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [cinemaBars, setCinemaBars] = useState<boolean>(true);
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const DURATION = 10.0;

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null && isPlaying) {
        const delta = (time - lastTimeRef.current) / 1000;
        setCurrentTime((prev) => {
          const next = prev + delta;
          if (next >= DURATION) {
            setIsPlaying(false);
            setHasCompletedOpening(true);
            return DURATION;
          }
          return next;
        });
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying]);

  const handleTogglePlay = () => {
    if (currentTime >= DURATION) {
      setCurrentTime(0);
      setIsPlaying(true);
      setHasCompletedOpening(false);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
    setHasCompletedOpening(false);
  };

  const handleSkipToEnd = () => {
    setCurrentTime(DURATION);
    setIsPlaying(false);
    setHasCompletedOpening(true);
  };

  const handleToggleBeat = () => {
    const active = studioBeat.toggle();
    setIsPlayingAudio(active);
  };

  const phase1Weight = Math.max(0, Math.min(1, (3.2 - currentTime) / 1.0));
  const phase2Weight =
    currentTime >= 2.0 && currentTime <= 7.0
      ? currentTime < 3.2
        ? (currentTime - 2.0) / 1.2
        : currentTime > 6.0
        ? (7.0 - currentTime) / 1.0
        : 1
      : 0;
  const phase3Weight = Math.max(0, Math.min(1, (currentTime - 5.8) / 1.5));

  const getCurrentStageLabel = () => {
    if (currentTime < 3.0) return '01 · Entrance through Glass Doors';
    if (currentTime < 6.5) return '02 · Push-In & Synchronized Footwork';
    if (currentTime < 8.8) return '03 · Full Master Floor Reveal';
    return '04 · Motion House Academy';
  };

  return (
    <section id="opening-cinematic" className="relative h-screen w-full bg-[#1E110B] text-[#FAF6F0] overflow-hidden select-none">
      {/* Cinematic Anamorphic Letterbox Bars */}
      <div
        className={`pointer-events-none absolute top-0 inset-x-0 z-30 bg-[#140A06] transition-all duration-700 ease-out ${
          cinemaBars ? 'h-6 sm:h-10' : 'h-0'
        }`}
      />
      <div
        className={`pointer-events-none absolute bottom-0 inset-x-0 z-30 bg-[#140A06] transition-all duration-700 ease-out ${
          cinemaBars ? 'h-6 sm:h-10' : 'h-0'
        }`}
      />

      {/* CONTINUOUS CAMERA VIEWPORT */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Layer 1: Entrance Looking Through Glass Doors (0.0s - 3.5s) */}
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out will-change-transform"
          style={{
            opacity: phase1Weight,
            transform: `scale(${1.0 + currentTime * 0.06}) translate3d(0, ${-currentTime * 4}px, 0)`,
          }}
        >
          <img
            src="/src/assets/images/studio_glass_doors_1792513153794.jpg"
            alt="Outside corridor looking through glass doors into dance studio"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-95 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E110B]/90 via-[#1E110B]/30 to-black/60 pointer-events-none" />
        </div>

        {/* Layer 2: Push In Past Dancers performing footwork (2.5s - 7.0s) */}
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out will-change-transform"
          style={{
            opacity: phase2Weight,
            transform: `scale(${1.08 + (currentTime - 2.5) * 0.04}) translate3d(${(currentTime - 3.5) * -6}px, ${(currentTime - 3.5) * -3}px, 0)`,
          }}
        >
          <img
            src="/src/assets/images/dancers_glide_past_1792513154361.jpg"
            alt="Camera gliding past dancers performing synchronized footwork"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-90 contrast-115"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E110B]/90 via-transparent to-black/50 pointer-events-none" />
        </div>

        {/* Layer 3: Wide Master Shot of Full Group (6.0s - 10.0s) */}
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-out will-change-transform"
          style={{
            opacity: phase3Weight,
            transform: `scale(${1.05 - Math.min(1, (currentTime - 6.0) / 4.0) * 0.05}) translate3d(0, 0, 0)`,
          }}
        >
          <img
            src="/src/assets/images/hero_dance_studio_1792512583638.jpg"
            alt="Wide cinematic master shot of 8-10 dancers synchronized in studio"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-85 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E110B] via-[#1E110B]/60 to-black/65 pointer-events-none" />
        </div>

        {/* Warm Studio Amber and Mocha Overhead Beams */}
        <div className="absolute top-0 inset-x-0 h-80 bg-gradient-to-b from-[#8C5535]/30 via-[#D8C7B3]/10 to-transparent pointer-events-none" />

        {/* Floor Reflection Transition to Ivory Section */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#1E110B] via-[#1E110B]/80 to-transparent pointer-events-none" />
      </div>

      {/* TOP STATUS BAR: Director HUD & Skip */}
      <div className="relative z-30 pt-14 sm:pt-16 px-6 sm:px-12 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-[#140A06]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D8C7B3]/25 text-xs font-mono">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-[#FAF6F0] shadow-sm animate-pulse' : 'bg-neutral-500'}`} />
            <span className="text-[#FAF6F0] font-medium tracking-wide">
              {getCurrentStageLabel()}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-[#FAF6F0]/80 bg-[#26160F]/60 px-3 py-1.5 rounded-full border border-[#D8C7B3]/20">
            <span>4K CINEMA</span>
            <span>·</span>
            <span>24 FPS</span>
            <span>·</span>
            <span>ANAMORPHIC</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleToggleBeat}
            type="button"
            className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md border transition-colors ${
              isPlayingAudio
                ? 'bg-[#FAF6F0] text-[#26160F] border-[#FAF6F0] shadow-sm'
                : 'bg-[#140A06]/75 text-[#FAF6F0]/80 border-[#FAF6F0]/15 hover:text-[#FAF6F0]'
            }`}
            title="Toggle synthesized studio beat"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isPlayingAudio ? 'Beat Mute' : 'Play Beat'}</span>
          </button>

          <button
            onClick={() => setCinemaBars(!cinemaBars)}
            type="button"
            className="hidden sm:flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded-md bg-[#140A06]/75 text-[#FAF6F0]/80 border border-[#FAF6F0]/15 hover:text-[#FAF6F0] transition-colors"
            title="Toggle anamorphic letterbox bars"
          >
            <Film className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleSkipToEnd}
            type="button"
            className="flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1.5 rounded-md bg-[#140A06]/85 text-[#FAF6F0] hover:text-[#FAF6F0] border border-[#FAF6F0]/20 hover:border-[#FAF6F0]/50 transition-colors"
          >
            <span>Skip Intro</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* CENTER FOREGROUND CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 h-[calc(100vh-140px)] flex flex-col justify-center">
        {currentTime < 7.0 && (
          <div className="max-w-xl animate-in fade-in duration-500">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FAF6F0]/80 font-semibold">
              Opening Cinematic · Push-In Sequence
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-[#FAF6F0] leading-tight">
              {currentTime < 3.2
                ? 'Entering the Studio Floor...'
                : 'Synchronized Hip-Hop Choreography'}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#FAF6F0]/85 font-light leading-relaxed">
              {currentTime < 3.2
                ? 'Camera glides through the glass entrance into the warm ambient studio where 8 dancers align their rhythm.'
                : 'Gliding past coordinated footwork, sharp body wave isolations, and floor reflections under dramatic spotlights.'}
            </p>
          </div>
        )}

        {currentTime >= 6.8 && (
          <div className="max-w-3xl animate-in fade-in zoom-in-95 duration-700">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FAF6F0] uppercase font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FAF6F0]" />
              <span>Motion House Dance Academy</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight text-[#FAF6F0] leading-[0.9]">
              FIND YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0] to-[#D8C7B3]">RHYTHM.</span>
            </h1>

            <p className="mt-5 text-lg sm:text-2xl text-[#FAF6F0]/90 font-light max-w-2xl leading-relaxed">
              From your first step to your next breakthrough, find your people, your style, and your movement.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreClasses}
                type="button"
                className="px-8 py-4 bg-[#FAF6F0] hover:bg-[#F3ECE2] text-[#26160F] text-sm font-bold uppercase tracking-widest rounded-md shadow-2xl shadow-black/60 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                EXPLORE CLASSES
              </button>
              <button
                onClick={onBookClass}
                type="button"
                className="px-8 py-4 bg-[#26160F]/70 hover:bg-[#26160F] text-[#FAF6F0] border border-[#FAF6F0]/40 text-sm font-bold uppercase tracking-widest rounded-md backdrop-blur-md transition-all text-center"
              >
                BOOK YOUR FIRST CLASS
              </button>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-[#FAF6F0]/80">
              <span>₹399 Trial Pass</span>
              <span>·</span>
              <span>Sprung Maple Floors</span>
              <span>·</span>
              <span>All Levels Welcome</span>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM TIMELINE SCRUBBER & PLAYBACK CONTROLS */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-6 sm:inset-x-12 z-30 pointer-events-auto">
        <div className="max-w-7xl mx-auto bg-[#140A06]/90 backdrop-blur-xl border border-[#FAF6F0]/20 rounded-xl p-3 sm:px-5 sm:py-3.5 flex flex-col gap-2.5 shadow-2xl shadow-black/80">
          <div className="flex items-center gap-4">
            <button
              onClick={handleTogglePlay}
              type="button"
              className="p-2 rounded-lg bg-[#FAF6F0]/15 hover:bg-[#FAF6F0] hover:text-[#26160F] text-[#FAF6F0] transition-colors shrink-0"
              aria-label={isPlaying ? 'Pause opening' : 'Play opening'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              onClick={handleRestart}
              type="button"
              className="p-2 rounded-lg bg-[#FAF6F0]/5 hover:bg-[#FAF6F0]/15 text-[#FAF6F0]/70 hover:text-[#FAF6F0] transition-colors shrink-0 hidden sm:block"
              title="Replay from entrance"
              aria-label="Replay opening sequence"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <div className="flex-1 relative flex items-center group cursor-pointer">
              <input
                type="range"
                min="0"
                max={DURATION}
                step="0.05"
                value={currentTime}
                onChange={(e) => {
                  setCurrentTime(parseFloat(e.target.value));
                  if (parseFloat(e.target.value) >= DURATION) {
                    setIsPlaying(false);
                    setHasCompletedOpening(true);
                  }
                }}
                className="w-full h-1.5 bg-[#26160F] rounded-lg appearance-none cursor-pointer accent-[#FAF6F0] focus:outline-none"
                aria-label="Video scrubber"
              />

              <div
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-3 bg-[#FAF6F0]/50 pointer-events-none rounded"
                style={{ left: '0%' }}
                title="Glass Doors Entrance"
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-3 bg-[#FAF6F0]/50 pointer-events-none rounded"
                style={{ left: '32%' }}
                title="Dancers Push-in"
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-3 bg-[#FAF6F0]/50 pointer-events-none rounded"
                style={{ left: '68%' }}
                title="Wide Floor Master"
              />
            </div>

            <div className="font-mono text-xs tabular-nums text-[#FAF6F0] shrink-0">
              <span className="text-[#FAF6F0] font-bold">
                00:0{Math.floor(currentTime)}.{Math.floor((currentTime % 1) * 10)}
              </span>
              <span className="text-[#FAF6F0]/50"> / 00:10.0</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-[#FAF6F0]/80 pl-2 border-l border-[#FAF6F0]/20">
              <span>Scroll down</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#FAF6F0] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
