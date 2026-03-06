"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

/* ── Floating orb component for ambient background glow ── */
function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      animate={{
        y: [0, -40, 0],
        x: [0, 20, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden w-full"
      aria-label="Головна секція"
    >
      {/* ── Ambient floating orbs — clipped to prevent horizontal overflow ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb className="top-1/4 -left-32 h-96 w-96 bg-primary" delay={0} />
        <FloatingOrb className="bottom-1/4 -right-32 h-80 w-80 bg-accent" delay={2} />
        <FloatingOrb className="top-1/2 left-1/2 h-64 w-64 bg-primary-light" delay={4} />
      </div>

      {/* ── Grid pattern overlay ── */}
      <div className="absolute inset-0 bg-grid" />

      {/* ── Radial gradient vignette ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-background)_80%)]" />

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-8">
        {/* Badge / eyebrow text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2 text-sm text-foreground/60"
        >
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Реклама · Вивіски · Веб-сайти
        </motion.div>

        {/* ── Main heading with staggered word animation ── */}
        <motion.h1
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-[var(--font-heading)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <span className="text-foreground">Вивіска — це </span>
          <span className="text-gradient">просто!</span>
          <br />
          <motion.span
            className="mt-2 inline-block text-foreground/50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Швидко{" "}
            <span className="mx-2 text-primary">│</span> Якісно{" "}
            <span className="mx-2 text-primary">│</span> Доступно
          </motion.span>
        </motion.h1>

        {/* ── Subheading ── */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/50 sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Власне виробництво всіх видів реклами. 10 років досвіду.
          <br className="hidden sm:block" />
          Від макета до монтажу — і навіть ваш сайт.
        </motion.p>

        {/* ── CTA buttons ── */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {/* Primary CTA */}
          <motion.a
            href="#contact"
            className="animate-glow group flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:brightness-110 sm:text-lg"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Замовити рекламу
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#portfolio"
            className="group flex items-center gap-3 rounded-full border border-border bg-surface px-8 py-4 text-base font-semibold text-foreground/80 transition-all hover:bg-surface-hover hover:text-foreground sm:text-lg"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="h-5 w-5 text-primary" />
            Наші роботи
          </motion.a>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-xs uppercase tracking-widest text-foreground/30">
            Scroll
          </span>
          <motion.div
            className="h-10 w-5 rounded-full border border-foreground/20 p-1"
            animate={{}}
          >
            <motion.div
              className="h-2 w-full rounded-full bg-primary"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
