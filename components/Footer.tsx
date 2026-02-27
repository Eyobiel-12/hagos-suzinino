"use client";

import { motion } from "framer-motion";

const SPONSORS = [
  { name: "Bahlina", label: "Entertainment" },
  { name: "Glossy Habeshas", label: "Entertainment" },
  { name: "Victory Hair Style", label: "Lifestyle" },
  { name: "EG Web Solutions", label: "Software Company", url: "https://www.egwebsolutions.nl/" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      {/* Sponsors — inspired by reference */}
      <section
        className="py-12 sm:py-16 px-4 sm:px-6 border-b border-white/5"
        aria-label="Sponsors"
      >
        <motion.p
          className="text-center text-text-muted text-xs uppercase tracking-[0.3em] mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Proudly Sponsored By
        </motion.p>
        <motion.div
          className="max-w-3xl mx-auto flex flex-wrap justify-center items-center gap-8 sm:gap-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {SPONSORS.map((s) => {
            const content = (
              <>
                <span className="font-serif text-lg sm:text-xl text-white/90 block">
                  {s.name}
                </span>
                <span className="text-text-muted text-xs uppercase tracking-wider">
                  {s.label}
                </span>
              </>
            );
            return (
              <div key={s.name} className="text-center">
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-gold transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background rounded"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </motion.div>
      </section>

      <div className="py-8 px-4 sm:px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center text-text-muted text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            © {new Date().getFullYear()} Bahlina Entertainment. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
