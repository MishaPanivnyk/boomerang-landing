"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Про нас", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Як замовити", href: "#process" },
  { label: "Портфоліо", href: "#portfolio" },
  { label: "Відгуки", href: "#testimonials" },
  { label: "Контакти", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── Track scroll position to toggle glass header background ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* ── Logo ── */}
        <a href="#" className="flex items-center gap-2 group" aria-label="BooMeraNG — Головна">
          <motion.span
            className="text-2xl font-extrabold tracking-tight font-[var(--font-heading)]"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-foreground">Boo</span>
            <span className="text-gradient">MeraNG</span>
          </motion.span>
        </a>

        {/* ── Desktop nav links (center) ── */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground group"
              >
                {link.label}
                {/* Animated underline on hover */}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-3/4" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA button (desktop) with glow ── */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+380664679995"
            className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Зателефонувати"
          >
            <Phone className="h-4 w-4" />
            <span>(066) 46-799-95</span>
          </a>
          <motion.a
            href="#contact"
            className="animate-glow rounded-full bg-gradient-to-r from-primary to-primary-light px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Замовити прорахунок
          </motion.a>
        </div>

        {/* ── Mobile menu toggle ── */}
        <button
          className="lg:hidden relative z-50 p-2 text-foreground"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Закрити меню" : "Відкрити меню"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* ── Mobile nav overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-foreground/80 hover:text-foreground transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 animate-glow rounded-full bg-gradient-to-r from-primary to-primary-light px-8 py-3 text-lg font-semibold text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Замовити прорахунок
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
