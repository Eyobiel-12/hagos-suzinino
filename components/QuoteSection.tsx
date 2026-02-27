"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-background border-t border-white/5"
      aria-label="About Hagos"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="font-sans text-accent-gold text-xs uppercase tracking-[0.25em] mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Hagos
        </motion.h2>
        <motion.p
          className="font-sans text-white/90 text-base sm:text-lg leading-relaxed text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Hagos is an author, comedian, director, singer, filmmaker, and actor,
          and is regarded as one of the most influential artists of the past 20
          years in Eritrea and parts of Ethiopia. His comedy programs and films
          have shaped an entire generation and made him one of the most
          recognized voices in East African entertainment.
        </motion.p>
        <motion.blockquote
          className="font-serif text-lg sm:text-xl text-white/80 leading-relaxed mt-10 text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          &ldquo;Laughter is the universal language that connects all
          cultures.&rdquo;
        </motion.blockquote>
        <motion.p
          className="font-sans text-accent-gold text-sm uppercase tracking-[0.2em] mt-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Suzinino
        </motion.p>
      </div>
    </section>
  );
}
