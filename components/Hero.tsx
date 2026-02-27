"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MARQUEE_ITEMS = [
  "🇬🇧 England",
  "🇩🇪 Germany",
  "🇳🇱 Netherlands",
  "🇳🇴 Norway",
  "🇸🇪 Sweden",
  "🇨🇭 Switzerland",
];
const HERO_FLYER = "/images/suzinino-euto-tour-flyer.png";

// First show: Zurich, 06 June 2026
const FIRST_SHOW_DATE = new Date("2026-06-06T20:00:00");

function useCountdown(targetDate: Date) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const d = Math.max(0, Math.floor((targetDate.getTime() - now.getTime()) / 1000));
      setDiff({
        days: Math.floor(d / 86400),
        hours: Math.floor((d % 86400) / 3600),
        minutes: Math.floor((d % 3600) / 60),
        seconds: d % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return diff;
}

const SUZININO_LETTERS = "SUZININO".split("");

export default function Hero() {
  const countdown = useCountdown(FIRST_SHOW_DATE);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center items-center px-4 bg-background overflow-hidden"
    >
      {/* Noise overlay — premium film grain */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Full-bleed Europe tour flyer as background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_FLYER}
          alt=""
          fill
          className="object-cover object-center scale-105"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Flag marquee — bottom of hero */}
      <div className="absolute bottom-20 left-0 right-0 overflow-hidden py-3 border-y border-white/10 z-10">
        <motion.div
          className="flex gap-8 whitespace-nowrap text-white/70 text-sm font-sans uppercase tracking-[0.25em]"
          animate={{ x: [0, -640] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          aria-hidden
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {item}
              <span className="text-white/30">|</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.p
          className="font-sans text-accent-gold text-xs sm:text-sm uppercase tracking-[0.35em] mb-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Bahlina Presents
        </motion.p>

        {/* Letter-by-letter stagger for SUZININO */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight drop-shadow-lg flex justify-center flex-wrap gap-0.5 sm:gap-1">
          {SUZININO_LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="font-sans text-lg sm:text-xl md:text-2xl text-white/90 uppercase tracking-[0.2em] mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Live Comedy Show
        </motion.p>

        {/* Countdown — First show starts in */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <p className="font-sans text-text-muted text-xs uppercase tracking-[0.2em] mb-3">
            First show starts in
          </p>
          <div className="flex justify-center gap-3 sm:gap-4">
            {[
              { value: countdown.days, label: "Days" },
              { value: countdown.hours, label: "Hours" },
              { value: countdown.minutes, label: "Min" },
              { value: countdown.seconds, label: "Sec" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <span className="font-serif text-2xl sm:text-3xl text-white block tabular-nums min-w-[2ch]">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="text-text-muted text-[10px] uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-xs mt-2">06 June — Zurich</p>
        </motion.div>

        <motion.p
          className="font-sans text-white/70 text-sm mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Zurich · Utrecht
        </motion.p>
        <motion.a
          href="#contra"
          className="mt-8 tap-target-lg inline-flex items-center justify-center px-8 py-4 bg-accent-gold text-background font-sans text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-accent-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          aria-label="Get tickets — view dates and venues"
        >
          Get Tickets
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
