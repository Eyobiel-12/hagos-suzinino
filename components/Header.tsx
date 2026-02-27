"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#contra", label: "Tour" },
  { href: "#quote", label: "About" },
  { href: "#listen", label: "Listen" },
  { href: "#book", label: "Book" },
];

const SOCIAL_LINKS = [
  { href: "https://www.tiktok.com/@bahlina_eu", icon: "fa-brands fa-tiktok", label: "TikTok" },
  { href: "https://www.instagram.com/bahlina_", icon: "fa-brands fa-instagram", label: "Instagram" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on link click (smooth scroll happens)
  const handleNavClick = () => setMobileOpen(false);

  // Close on escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 pt-[var(--safe-top)]"
      role="banner"
    >
      {/* Logo outside the nav — no box */}
      <div className="mx-3 sm:mx-4 mt-3 sm:mt-4 flex items-center justify-between gap-3">
        <a
          href="#hero"
          className="flex items-center shrink-0 tap-target focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Bahlina — Home"
        >
          <Image
            src="/images/logo.png"
            alt="Bahlina"
            width={140}
            height={50}
            className="h-14 w-auto sm:h-20 rounded-none object-contain"
            priority
          />
        </a>

        {/* Nav bar — pill only around links + CTA */}
        <nav
          className={`flex items-center justify-between rounded-full px-4 py-3 transition-all duration-300 ${
            scrolled
              ? "bg-background/90 backdrop-blur-md border border-white/10 shadow-lg"
              : "bg-transparent"
          }`}
        >
          {/* Desktop nav — hidden on mobile */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-white/80 hover:text-accent-gold transition-colors rounded-full tap-target focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background"
              >
                {link.label}
              </a>
            ))}
            <span className="w-px h-4 bg-white/20 mx-1" aria-hidden />
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/70 hover:text-accent-gold transition-colors rounded-full tap-target focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background"
                aria-label={`Bahlina on ${s.label}`}
              >
                <i className={`${s.icon} text-lg`} aria-hidden />
              </a>
            ))}
          </div>

        {/* CTA + Hamburger (mobile) */}
        <div className="flex items-center gap-2">
          <a
            href="#contra"
            className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-background bg-accent-gold hover:bg-accent-gold-light shadow-[0_0_20px_rgba(201,162,39,0.4)] hover:shadow-[0_0_24px_rgba(201,162,39,0.5)] rounded-full px-5 py-3 transition-all tap-target focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98]"
          >
            Get Tickets
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 tap-target text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 focus:ring-offset-background rounded-full"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-label="Navigation menu"
              className="fixed top-[calc(var(--safe-top)+60px)] left-4 right-4 z-50 md:hidden rounded-2xl border border-white/10 bg-background/95 backdrop-blur-md shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="py-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="block px-6 py-4 text-white/90 hover:text-accent-gold hover:bg-white/5 transition-colors tap-target focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-inset"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex justify-center gap-4 px-6 py-4 border-t border-white/10">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleNavClick}
                      className="text-white/70 hover:text-accent-gold transition-colors p-2 tap-target focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-inset rounded-full"
                      aria-label={`Bahlina on ${s.label}`}
                    >
                      <i className={`${s.icon} text-2xl`} aria-hidden />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
