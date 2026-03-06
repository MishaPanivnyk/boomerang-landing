"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Sparkles } from "lucide-react";

/**
 * WebCTA — Standalone "wow-section" that showcases the site itself
 * as proof of BooMeraNG's web dev capability and drives web orders.
 */
export default function WebCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      aria-label="Розробка сайтів"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-surface via-background to-primary/5 p-10 text-center lg:p-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Icon */}
          <motion.div
            className="mx-auto mb-6 inline-flex items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 p-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Monitor className="h-10 w-10 text-primary" />
          </motion.div>

          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Цей сайт — наша робота
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
            Враже дизайн?{" "}
            <span className="text-gradient">Замовте такий же!</span>
          </h2>

          {/* Body */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/50">
            Ми не лише робимо вивіски — ми створюємо{" "}
            <span className="text-foreground/80 font-medium">сучасні, швидкі та красиві сайти</span>{" "}
            для бізнесу. Лендінги, корпоративні сайти, інтернет-магазини — все під ключ.
            <br className="hidden sm:block" />
            Ваші клієнти будуть так само вражені, як зараз ви.
          </p>

          {/* Feature pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              "Next.js / React",
              "SEO-оптимізація",
              "Адаптивний дизайн",
              "Анімації Framer Motion",
              "Швидке завантаження",
              "Підтримка та хостинг",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              href="#contact"
              className="animate-glow group flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:brightness-110"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Замовити сайт
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <p className="text-sm text-foreground/40">
              Безкоштовна консультація · Прорахунок за 30 хвилин
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
