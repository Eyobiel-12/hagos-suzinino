"use client";

import { motion } from "framer-motion";

const SPOTIFY_ARTIST_ID = "7LNeYNxABCWj8hiu3BuO2A";
const SPOTIFY_EMBED = `https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}`;
const SPOTIFY_LINK =
  "https://open.spotify.com/artist/7LNeYNxABCWj8hiu3BuO2A?si=VsXKRy77QRm8GOT3oSggtQ";

export default function SpotifySection() {
  return (
    <section
      id="listen"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-background border-t border-white/5"
      aria-label="Suzinino on Spotify"
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
            On Spotify
          </h2>
          <p className="text-text-muted text-sm mt-2 max-w-md mx-auto">
            Stream Suzinino — Mahlaki, Mfllay & more
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

          <div className="relative bg-[#1a1a1a] p-4 sm:p-6">
            <iframe
              src={SPOTIFY_EMBED}
              title="Hagos Weledegebriel (Suzinino) on Spotify"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full h-[352px] sm:h-[380px] rounded-xl"
            />
          </div>

          <a
            href={SPOTIFY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 text-text-muted hover:text-accent-gold text-xs uppercase tracking-wider transition-colors"
          >
            Open in Spotify
          </a>
        </motion.div>
      </div>
    </section>
  );
}
