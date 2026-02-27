"use client";

import { motion } from "framer-motion";

const YOUTUBE_EMBED =
  "https://www.youtube.com/embed/drN5YsJs1UU?si=8Wq0A1YSiiCYSFZ2&start=71";

export default function VideoSection() {
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
          {/* Gold accent corners */}
          <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-accent-gold/50 rounded-tl-2xl z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-accent-gold/50 rounded-tr-2xl z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-accent-gold/50 rounded-bl-2xl z-10 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-accent-gold/50 rounded-br-2xl z-10 pointer-events-none" />

          <div className="relative aspect-video bg-black">
            <iframe
              src={YOUTUBE_EMBED}
              title="Suzinino — Nostalgic"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
