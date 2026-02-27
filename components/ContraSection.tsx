"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EventCard from "./EventCard";
import { events } from "@/lib/events";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContraSection() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced) return;
      const el = sectionRef.current;
      if (!el) return;
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: "power2.out",
      });
    },
    { dependencies: [reduced] }
  );

  return (
    <section
      id="contra"
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-sans text-center text-text-muted text-xs uppercase tracking-[0.3em] mb-6">
          Upcoming Shows
        </h2>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="w-full rounded-2xl border border-white/15 bg-white/[0.04] py-6 px-6 sm:py-8 sm:px-8 text-left tap-target focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background transition-all hover:bg-white/[0.06] hover:border-accent-red/30"
          aria-expanded={expanded}
          aria-controls="contra-events"
          id="contra-trigger"
        >
          <span className="font-serif text-3xl sm:text-4xl text-white block">
            Contra
          </span>
          <p className="text-text-muted text-sm sm:text-base mt-2">
            Tap to view dates, venues & tickets
          </p>
          <span
            className="inline-flex items-center gap-2 mt-4 text-accent-gold text-sm font-sans uppercase tracking-wider"
            aria-hidden
          >
            {expanded ? "Close" : "View tour dates"}
            <span
              className={`inline-block transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            >
              ↓
            </span>
          </span>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              id="contra-events"
              role="region"
              aria-labelledby="contra-trigger"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              <div className="pt-8 sm:pt-10 grid gap-6 sm:grid-cols-2">
                {events.map((event, i) => (
                  <EventCard key={event.id} event={event} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
