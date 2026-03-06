"use client";

import { motion } from "framer-motion";
import { Camera, Ruler, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Camera,
    number: "01",
    title: "Фото фасаду",
    description:
      "Надішліть нам фото фасаду вашого закладу. Ми оцінимо розташування та підберемо оптимальний тип вивіски.",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Розміри",
    description:
      "Вкажіть бажані розміри або ми приїдемо на замір. Точні розміри — запорука ідеального результату.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Ваше уявлення",
    description:
      "Розкажіть про свою ідею: кольори, стиль, матеріали. Ми створимо 3D-макет і безкоштовний прорахунок.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 lg:py-32"
      aria-label="Як замовити"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Section heading ── */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Простий процес
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
            Як <span className="text-gradient">замовити?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/50">
            Три простих кроки — і ваша вивіска вже у виробництві.
          </p>
        </motion.div>

        {/* ── Steps timeline ── */}
        <div className="relative mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {/* Connecting line (desktop) */}
          <div className="absolute top-1/2 left-0 right-0 hidden h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 -translate-y-1/2 lg:block" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              className="group relative flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Step card */}
              <div className="relative rounded-2xl border border-border bg-surface p-8 transition-all duration-500 hover:border-primary/30 hover:bg-surface-hover hover:shadow-lg hover:shadow-primary/5 w-full">
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-sm font-bold text-white">
                  {step.number}
                </div>

                <div className="mt-4 mb-4 inline-flex rounded-xl border border-border bg-background/50 p-3 text-primary">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/50">
                  {step.description}
                </p>
              </div>

              {/* Arrow between steps (desktop only) */}
              {idx < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary/40 lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* ── CTA under steps ── */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="#contact"
            className="animate-glow inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:brightness-110"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Надіслати запит
            <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
