"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EventCard from "./EventCard";
import { events } from "@/lib/events";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const upcomingEvents = events.filter((e) => !e.comingSoon);
const comingSoonEvents = events.filter((e) => e.comingSoon);

export default function ContraSection() {
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
      <div className="max-w-5xl mx-auto">
        <h2 className="font-sans text-center text-text-muted text-xs uppercase tracking-[0.3em] mb-10">
          Tour Dates
        </h2>

        {/* Upcoming — tickets available */}
        <div role="region" aria-label="Upcoming shows with tickets">
          <h3 className="font-sans text-accent-gold text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
            <span className="flex-1 h-px bg-accent-gold/30" aria-hidden />
            Upcoming
            <span className="flex-1 h-px bg-accent-gold/30" aria-hidden />
          </h3>
          <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
            {upcomingEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="my-12 sm:my-16 flex items-center gap-4">
          <span className="flex-1 h-px bg-white/10" aria-hidden />
          <span className="text-text-muted text-[10px] uppercase tracking-[0.3em]">
            More cities
          </span>
          <span className="flex-1 h-px bg-white/10" aria-hidden />
        </div>

        {/* Coming Soon — horizontal slideshow */}
        <div role="region" aria-label="Coming soon">
          <h3 className="font-sans text-text-muted text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
            <span className="flex-1 h-px bg-white/10" aria-hidden />
            Coming Soon
            <span className="flex-1 h-px bg-white/10" aria-hidden />
          </h3>
          <div className="overflow-x-auto overflow-y-hidden -mx-4 px-4 sm:-mx-6 sm:px-6 pb-2 scrollbar-hide">
            <div className="flex gap-4 sm:gap-5 min-w-max">
              {comingSoonEvents.map((event, i) => (
                <div key={event.id} className="w-[280px] sm:w-[300px] flex-shrink-0">
                  <EventCard
                    event={event}
                    index={upcomingEvents.length + i}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
