"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const YOUTUBE_EMBED =
  "https://www.youtube.com/embed/drN5YsJs1UU?si=8Wq0A1YSiiCYSFZ2&start=71";
const YOUTUBE_WATCH = "https://www.youtube.com/watch?v=drN5YsJs1UU&t=71";

export default function VideoSection() {
  const [loaded, setLoaded] = useState(false);

  const handlePlay = () => {
    setLoaded(true);
  };

  return (
    <section
      id="watch"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-background border-t border-white/5"
      aria-label="Suzinino — Nostalgic"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-accent-gold text-xs uppercase tracking-[0.3em] mb-2">
            Listen
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
            Nostalgic
          </h2>
          <p className="text-text-muted text-sm mt-2 max-w-md mx-auto">
            A taste of Suzinino — his amazing song for the nostalgic soul
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-accent-red/10 ring-1 ring-white/5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-accent-gold/50 rounded-tl-2xl z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-accent-gold/50 rounded-tr-2xl z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-accent-gold/50 rounded-bl-2xl z-10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-accent-gold/50 rounded-br-2xl z-10 pointer-events-none" />

          <div className="relative aspect-video bg-black">
            {loaded ? (
              <iframe
                src={YOUTUBE_EMBED}
                title="Suzinino — Nostalgic"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <button
                type="button"
                onClick={handlePlay}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 bg-black/90 tap-target focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-inset"
                aria-label="Tap to play video with sound"
              >
                <div className="w-20 h-20 rounded-full bg-accent-gold/90 flex items-center justify-center shadow-[0_0_40px_rgba(201,162,39,0.5)]">
                  <svg
                    className="w-10 h-10 text-background ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white font-sans text-sm uppercase tracking-wider">
                  Tap to play with sound
                </span>
                <p className="text-text-muted text-xs max-w-[240px] text-center">
                  Tap here first so audio works on mobile
                </p>
              </button>
            )}
          </div>

          {/* Fallback link for when audio still doesn't work */}
          <a
            href={YOUTUBE_WATCH}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 text-text-muted hover:text-accent-gold text-xs uppercase tracking-wider transition-colors"
          >
            Open in YouTube for best audio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
