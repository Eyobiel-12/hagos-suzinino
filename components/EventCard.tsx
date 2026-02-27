"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { EventItem } from "@/lib/events";

const FLAGS: Record<string, string> = { ch: "🇨🇭", nl: "🇳🇱" };

export default function EventCard({
  event,
  index,
}: {
  event: EventItem;
  index: number;
}) {
  return (
    <motion.article
      className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden backdrop-blur-sm"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Performer image — full-width top */}
      <div className="relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden">
        <Image
          src={event.image}
          alt={`Suzinino — ${event.city}`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-lg" aria-hidden>
            {FLAGS[event.flag]}
          </span>
          <span className="font-sans text-sm font-semibold text-white">
            {event.city}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-serif text-2xl sm:text-3xl text-white drop-shadow-md">
            SUZININO
          </p>
          <p className="text-white/80 text-xs uppercase tracking-widest">
            Live Comedy Show
          </p>
        </div>
      </div>

      <div className="relative p-5 sm:p-6">
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-serif text-4xl sm:text-5xl text-white leading-none">
            {event.dayNumber}
          </span>
          <div className="flex flex-col">
            <span className="font-sans text-xs text-accent-gold uppercase tracking-widest">
              {event.month}
            </span>
            <span className="font-sans text-xs text-text-muted">
              {event.dayLabel}
            </span>
          </div>
        </div>

        <p className="text-white/90 font-sans text-sm">{event.venue}</p>
        <p className="text-text-muted text-xs mt-1">{event.address}</p>

        {/* Venue image strip — theater/venue */}
        {event.venueImage && (
          <div className="relative mt-4 h-16 rounded-lg overflow-hidden">
            <Image
              src={event.venueImage}
              alt={`${event.venue} — ${event.city}`}
              fill
              className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60" />
          </div>
        )}

        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 tap-target-lg inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-accent-gold text-background font-sans text-sm font-semibold uppercase tracking-wider rounded-full hover:bg-accent-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background"
        >
          Get Tickets
        </a>
      </div>
    </motion.article>
  );
}
