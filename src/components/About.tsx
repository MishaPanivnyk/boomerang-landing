"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Factory, Globe, Clock } from "lucide-react";

/* ── Animated counter that counts up when in viewport ── */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  return (
    <span>
      <CountUp target={value} />
      {suffix}
    </span>
  );
}

/* ── Simple count-up component using framer-motion ── */
function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref}>
      {isInView ? <CountUpValue target={target} /> : <span>0</span>}
    </span>
  );
}

/* ── Incremental counter with requestAnimationFrame ── */
function CountUpValue({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  const startCounting = (el: HTMLSpanElement | null) => {
    if (!el || counted.current) return;
    counted.current = true;
    ref.current = el;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      if (ref.current) ref.current.textContent = String(start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return <span ref={startCounting}>0</span>;
}

const stats = [
  {
    icon: Clock,
    value: 10,
    suffix: "+",
    label: "Років досвіду",
    description: "Відповідальний підхід з 2014 року",
  },
  {
    icon: Factory,
    value: 100,
    suffix: "%",
    label: "Власне виробництво",
    description: "Повний цикл — від макету до монтажу",
  },
  {
    icon: Award,
    value: 2000,
    suffix: "+",
    label: "Реалізованих проєктів",
    description: "Вивіски, сітілайти, брендинг",
  },
  {
    icon: Globe,
    value: 15,
    suffix: "+",
    label: "Міст України",
    description: "Працюємо по всій Україні та закордоном",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32" aria-label="Про нас">
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
            Чому обирають нас
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
            BooMeraNG у <span className="text-gradient">цифрах</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/50">
            Ми — рекламне агентство повного циклу з власним виробництвом. Робимо все під ключ: від ідеї до встановлення.
          </p>
        </motion.div>

        {/* ── Stats grid with animated counters ── */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 text-center transition-all duration-500 hover:bg-surface-hover hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <stat.icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                <div className="text-4xl font-extrabold text-foreground font-[var(--font-heading)]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-base font-semibold text-foreground/80">
                  {stat.label}
                </div>
                <p className="mt-1 text-sm text-foreground/40">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
