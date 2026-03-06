"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ── Fake browser window that shows a snippet of "real" code ── */
function BrowserMockup() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d14] shadow-2xl shadow-black/50">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#111118] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-white/30">
          boomerang-reklama.com.ua
        </div>
      </div>

      {/* Code preview */}
      <div className="p-5 font-mono text-xs leading-6 sm:text-sm">
        <div>
          <span className="text-[#ff6b6b]">export default </span>
          <span className="text-[#ffa07a]">function </span>
          <span className="text-[#ffe66d]">Page</span>
          <span className="text-white/60">() {"{"}</span>
        </div>
        <div className="pl-4">
          <span className="text-[#ff6b6b]">return </span>
          <span className="text-white/60">{"("}</span>
        </div>
        <div className="pl-8">
          <span className="text-[#6bcb77]">{"<"}</span>
          <span className="text-[#ffa07a]">Hero </span>
          <span className="text-[#ffe66d]">title</span>
          <span className="text-white/60">{"="}</span>
          <span className="text-[#6bcb77]">&quot;Ваш бренд&quot;</span>
          <span className="text-[#6bcb77]">{" />"}</span>
        </div>
        <div className="pl-8">
          <span className="text-[#6bcb77]">{"<"}</span>
          <span className="text-[#ffa07a]">Services </span>
          <span className="text-[#ffe66d]">animated</span>
          <span className="text-[#6bcb77]">{" />"}</span>
        </div>
        <div className="pl-8">
          <span className="text-[#6bcb77]">{"<"}</span>
          <span className="text-[#ffa07a]">Contact </span>
          <span className="text-[#ffe66d]">telegram</span>
          <span className="text-white/60">{"="}</span>
          <span className="text-[#6bcb77]">&quot;@boomerang&quot;</span>
          <span className="text-[#6bcb77]">{" />"}</span>
        </div>
        <div className="pl-4">
          <span className="text-white/60">{")"}</span>
        </div>
        <div>
          <span className="text-white/60">{"}"}</span>
        </div>

        {/* Blinking cursor */}
        <motion.div
          className="mt-2 inline-block h-4 w-2 bg-primary"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between border-t border-white/5 bg-[#0a0a10] px-4 py-2 text-xs text-white/20">
        <span>Next.js · Tailwind · Framer Motion</span>
        <span className="text-green-500/60">✓ Lighthouse 100</span>
      </div>
    </div>
  );
}

export default function WebCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      aria-label="Розробка сайтів"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow — просто і без пафосу */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              До речі
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
              Цей сайт — теж{" "}
              <span className="text-gradient">наша робота.</span>
              <br />
              Хочете такий?
            </h2>

            <p className="mt-6 text-lg text-foreground/50">
              Робимо сайти для бізнесу — лендінги, корпоративні, інтернет&#8209;магазини.
              Швидко, з анімаціями, з SEO.
            </p>

            {/* Proof points — без кульок і гріда, просто 3 рядки */}
            <ul className="mt-8 space-y-3 text-base text-foreground/60">
              <li>— Готово за 7–14 днів</li>
              <li>— Адаптив під мобільний з першого дня</li>
              <li>— Видно в Google з першого тижня</li>
            </ul>

            <motion.a
              href="#contact"
              className="animate-glow mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:brightness-110"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Обговорити проєкт
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* ── Right: browser mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <BrowserMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

