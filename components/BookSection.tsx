"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BOOK_COVER = "/images/suzinino-book-cover.png";
const AMAZON_LINK =
  "https://www.amazon.com/dp/B0GCKV2S1S?ref=cm_sw_r_ffobk_cso_cp_apin_dp_1Z0NW9ZP1W63BTMYE267_1";

export default function BookSection() {
  return (
    <section
      id="book"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-background border-t border-white/5"
      aria-label="Book by Hagos Weldegebriel Debesay"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="font-sans text-center text-text-muted text-xs uppercase tracking-[0.3em] mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Also by Hagos
        </motion.h2>
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={AMAZON_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-40 sm:w-48 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 hover:ring-accent-gold/50 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background"
          >
            <Image
              src={BOOK_COVER}
              alt="Love Against The Wall by Hagos Weldegebriel Debesay — Buy on Amazon"
              width={192}
              height={288}
              className="w-full h-auto object-cover"
              sizes="(max-width: 640px) 160px, 192px"
            />
          </a>
          <div className="text-center sm:text-left">
            <p className="font-serif text-2xl sm:text-3xl text-white">
              Love Against The Wall
            </p>
            <p className="text-text-muted text-sm mt-1">
              Hagos Weldegebriel Debesay
            </p>
            <p className="text-white/80 text-sm mt-4 max-w-md">
              A powerful story of resistance and humanity. Discover the book
              behind the voice.
            </p>
            <a
              href={AMAZON_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-accent-gold text-sm font-sans uppercase tracking-wider hover:text-accent-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background rounded"
            >
              Get it on Amazon
              <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
