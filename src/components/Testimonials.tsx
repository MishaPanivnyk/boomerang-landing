"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Олена К.",
    role: "Власниця кав'ярні",
    text: "Замовляли світловий короб для нашої кав'ярні. Результат перевершив очікування! Зроблено швидко, якісно і за розумну ціну. Рекомендую BooMeraNG!",
    rating: 5,
  },
  {
    name: "Андрій М.",
    role: "Директор мережі магазинів",
    text: "Співпрацюємо з BooMeraNG вже 5 років. Завжди вчасно, завжди якісно. Зробили нам вивіски для всіх 12 магазинів по Україні.",
    rating: 5,
  },
  {
    name: "Марія Д.",
    role: "Менеджер ресторану",
    text: "Об'ємні літери для нашого ресторану виглядають просто неймовірно! Дякую команді BooMeraNG за професійний підхід.",
    rating: 5,
  },
  {
    name: "Віталій П.",
    role: "Власник автосалону",
    text: "LED-вивіска привернула багато нових клієнтів! Якість виробництва на вищому рівні. BooMeraNG — це надійний партнер.",
    rating: 5,
  },
  {
    name: "Ірина В.",
    role: "Керівниця салону краси",
    text: "Фантастичний результат! Вивіска виглядає дорого та стильно. Залишилась дуже задоволена. Буду рекомендувати друзям.",
    rating: 5,
  },
  {
    name: "Юрій С.",
    role: "Підприємець",
    text: "Замовляв сітілайти для рекламної кампанії. Все зроблено оперативно та професійно. Ефективність реклами — вище очікувань!",
    rating: 5,
  },
];

/* ── Single testimonial card ── */
function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
  return (
    <div className="mx-3 w-80 flex-shrink-0 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:w-96">
      {/* Star rating */}
      <div className="mb-3 flex gap-1">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-foreground/70 italic">
        &ldquo;{item.text}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
          {item.name[0]}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{item.name}</div>
          <div className="text-xs text-foreground/40">{item.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  /* Duplicate array for seamless infinite scroll */
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden" aria-label="Відгуки">
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
            Відгуки клієнтів
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
            Нам <span className="text-gradient">довіряють</span>
          </h2>
        </motion.div>
      </div>

      {/* ── Infinite auto-scrolling marquee ── */}
      <div className="relative mt-16">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {doubled.map((item, idx) => (
            <TestimonialCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
