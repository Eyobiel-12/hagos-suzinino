"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section
      id="quote"
      className="py-16 sm:py-20 px-4 sm:px-6 bg-background border-t border-white/5"
      aria-label="Quote"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.blockquote
          className="font-serif text-xl sm:text-2xl md:text-3xl text-white/95 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          &ldquo;Laughter is the universal language that connects all
          cultures.&rdquo;
        </motion.blockquote>
        <motion.p
          className="font-sans text-accent-gold text-sm uppercase tracking-[0.2em] mt-6"
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
