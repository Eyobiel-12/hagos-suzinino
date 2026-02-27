"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { EventItem } from "@/lib/events";

const FLAGS: Record<string, string> = {
  ch: "🇨🇭",
  nl: "🇳🇱",
  gb: "🇬🇧",
  de: "🇩🇪",
  no: "🇳🇴",
  se: "🇸🇪",
};

export default function EventCard({
  event,
  index,
}: {
  event: EventItem;
  index: number;
}) {
  return (
    <motion.article
      className="group relative flex flex-row rounded-2xl border border-accent-gold/30 bg-white/[0.03] overflow-hidden backdrop-blur-sm min-h-[140px] sm:min-h-[160px]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
    >
      {/* Image — left side, horizontal card; larger for flyer visibility */}
      <div className="relative w-36 sm:w-44 flex-shrink-0 aspect-[3/4] overflow-hidden">
        <Image
          src={event.image}
          alt={`Suzinino — ${event.city}`}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${event.comingSoon ? "blur-md object-top" : "object-center"}`}
          sizes="(max-width: 640px) 144px, 176px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/25 via-transparent to-transparent" />
        <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-full bg-background/80 px-2 py-1 backdrop-blur-sm">
          <span className="text-sm" aria-hidden>
            {FLAGS[event.flag]}
          </span>
          <span className="font-sans text-xs font-semibold text-white">
            {event.city}
          </span>
        </div>
      </div>

      {/* Content — right side */}
      <div className="relative flex flex-1 flex-col justify-between p-4 sm:p-5 min-w-0">
        <div>
          <p className="font-serif text-lg sm:text-xl text-white truncate">
            SUZININO
          </p>
          <p className="text-text-muted text-[10px] sm:text-xs uppercase tracking-widest">
            Live Comedy Show
          </p>
        </div>

        {event.comingSoon ? (
          <div className="mt-2">
            <p className="text-text-muted text-xs">Dates to be announced</p>
            <span className="mt-2 inline-flex items-center px-3 py-1.5 border border-accent-gold/50 text-accent-gold font-sans text-xs font-semibold uppercase tracking-wider rounded-full">
              Coming Soon
            </span>
          </div>
        ) : (
          <div className="mt-2 space-y-0.5">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl text-white leading-none">
                {event.dayNumber}
              </span>
              <div className="flex flex-col">
                <span className="font-sans text-[10px] text-accent-gold uppercase tracking-widest">
                  {event.month}
                </span>
                <span className="font-sans text-[10px] text-text-muted">
                  {event.dayLabel}
                </span>
              </div>
            </div>
            <p className="text-white/90 font-sans text-xs truncate">
              {event.venue}
            </p>
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-accent-gold text-background font-sans text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-accent-gold-light transition-colors tap-target focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background"
            >
              Get Tickets
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}
