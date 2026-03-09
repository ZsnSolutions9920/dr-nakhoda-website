"use client";

import { useRef, useState, useCallback } from "react";

interface VideoTestimonial {
  name: string;
  title: string;
  /** Path to video file (local import or URL) */
  videoSrc: string;
}

/**
 * To add more videos:
 * 1. Place .mp4 files in src/assets/
 * 2. Import them at the top of this file
 * 3. Add entries to the videos array below
 */
const videos: VideoTestimonial[] = [
  {
    name: "Mahira Khan",
    title: "TV & Film Artist",
    videoSrc: "/videos/video1.mp4",
  },
  {
    name: "Hummairah Shah",
    title: "Renowned Anchor",
    videoSrc: "/videos/video2.mp4",
  },
];

function VideoCard({ video }: { video: VideoTestimonial }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
      setPlaying(true);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setPlaying(false);
    }
  }, []);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setMuted((prev) => {
      if (videoRef.current) videoRef.current.muted = !prev;
      return !prev;
    });
  }, []);

  return (
    <div
      className="flex-none w-[260px] sm:w-[280px] relative rounded-3xl overflow-hidden bg-gray-900 shadow-lg cursor-pointer"
      style={{ aspectRatio: "9/16" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video element — always rendered, plays on hover */}
      <video
        ref={videoRef}
        src={video.videoSrc}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

      {/* Play/Pause button (top-left) */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
          {playing ? (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </div>
      </div>

      {/* Mute button (top-right) */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted ? (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* Name & title (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
        <p className="text-white font-semibold text-lg leading-tight">{video.name}</p>
        <p className="text-white/60 text-sm mt-0.5 uppercase tracking-wide">{video.title}</p>
      </div>
    </div>
  );
}

export function VideoTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  // Don't render the section if there are no videos
  if (videos.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-12">
          <p className="text-gold font-medium text-sm uppercase tracking-wide mb-2">
            Video Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-text mb-4">
            Hear From Our Patients
          </h2>
          <p className="text-text-light max-w-2xl mx-auto">
            Watch real experiences from our patients and see why they trust
            Dr. Nakhoda&apos;s Skin Institute.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {videos.length > 1 && (
            <>
              <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-cream transition-colors hidden md:flex"
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-cream transition-colors hidden md:flex"
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-8 py-2 snap-x snap-mandatory justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video, i) => (
              <div key={i} className="snap-start">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
