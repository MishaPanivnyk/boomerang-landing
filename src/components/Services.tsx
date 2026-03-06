"use client";

import { motion } from "framer-motion";
import { Palette, Lightbulb, MonitorSmartphone, Truck } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Макетування та брендинг",
    description:
      "Створюємо унікальний візуальний стиль вашого бренду: логотипи, фірмовий стиль, макети вивісок та рекламних матеріалів.",
    gradient: "from-red-600/20 to-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: Lightbulb,
    title: "Власне виробництво вивісок",
    description:
      "Світлові короби, об'ємні літери, LED-вивіски, неонові вивіски — виготовляємо на власному виробництві з гарантією якості.",
    gradient: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: MonitorSmartphone,
    title: "Оренда сітілайтів",
    description:
      "Розміщення зовнішньої реклами на сітілайтах по всій Україні. Ефективний охват цільової аудиторії у вашому місті.",
    gradient: "from-red-500/20 to-orange-600/20",
    iconColor: "text-red-400",
  },
  {
    icon: Truck,
    title: "Доставка та монтаж",
    description:
      "Професійна доставка і монтаж рекламних конструкцій будь-якої складності. Працюємо по всій Україні та за кордоном.",
    gradient: "from-rose-600/20 to-red-400/20",
    iconColor: "text-red-300",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32" aria-label="Послуги">
      {/* Subtle top gradient divider */}
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
            Що ми робимо
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
            Наші <span className="text-gradient">послуги</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/50">
            Повний спектр рекламних послуг — від розробки концепції до встановлення готової продукції.
          </p>
        </motion.div>

        {/* ── Service cards grid ── */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, idx) => (
            <motion.article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 lg:p-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient background that appears on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Card content */}
              <div className="relative z-10">
                <div
                  className={`mb-6 inline-flex rounded-xl border border-border bg-background/50 p-3 ${service.iconColor}`}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground lg:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/50 group-hover:text-foreground/70 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Corner glow accent */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
