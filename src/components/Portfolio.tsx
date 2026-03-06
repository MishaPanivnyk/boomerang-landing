"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

/* ── Portfolio items — replace src with real images later ── */
const portfolioItems = [
  { id: 1, title: "Світловий короб «Кавʼярня»", category: "Вивіски", aspect: "aspect-[4/3]" },
  { id: 2, title: "Обʼємні літери «Ресторан»", category: "Обʼємні літери", aspect: "aspect-[3/4]" },
  { id: 3, title: "LED-вивіска «Магазин»", category: "LED", aspect: "aspect-[4/3]" },
  { id: 4, title: "Брендинг «Салон краси»", category: "Брендинг", aspect: "aspect-[3/4]" },
  { id: 5, title: "Сітілайт «Акція»", category: "Сітілайти", aspect: "aspect-[4/5]" },
  { id: 6, title: "Фасадна вивіска «Аптека»", category: "Вивіски", aspect: "aspect-[4/3]" },
];

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32" aria-label="Портфоліо">
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
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Наші роботи
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
            <span className="text-gradient">Портфоліо</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/50">
            Кожен проєкт — це унікальне рішення для бізнесу наших клієнтів.
          </p>
        </motion.div>

        {/* ── Masonry grid ── */}
        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {portfolioItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layoutId={`portfolio-${item.id}`}
              className="group relative mb-6 cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface break-inside-avoid"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedId(item.id)}
              whileHover={{ y: -4 }}
            >
              {/* Portfolio image */}
              <div className={`${item.aspect} w-full relative transition-transform duration-700 group-hover:scale-105`}>
                <Image
                  src="/portfolio-1.jpg"
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx === 0}
                />
              </div>

              {/* Overlay appears on hover */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox modal ── */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-lg p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`portfolio-${selectedId}`}
              className="relative max-h-[80vh] max-w-3xl w-full overflow-hidden rounded-2xl border border-border bg-surface"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full relative flex items-center justify-center">
                <Image
                  src="/portfolio-1.jpg"
                  alt={portfolioItems.find((p) => p.id === selectedId)?.title || ''}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {portfolioItems.find((p) => p.id === selectedId)?.title}
                </h3>
                <p className="mt-2 text-foreground/50">
                  {portfolioItems.find((p) => p.id === selectedId)?.category}
                </p>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 rounded-full bg-background/50 p-2 text-foreground/60 hover:text-foreground transition-colors"
                aria-label="Закрити"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
