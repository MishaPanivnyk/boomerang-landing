"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32"
      aria-label="Контакти"
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
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            Зв&apos;яжіться з нами
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-[var(--font-heading)]">
            Готові <span className="text-gradient">розпочати?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/50">
            Надішліть нам запит або зателефонуйте. Ми відповімо протягом 30
            хвилин.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* ── Contact form ── */}
          <motion.form
            className="space-y-6 rounded-2xl border border-border bg-surface p-8 lg:p-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground/70"
                >
                  Ваше ім&apos;я
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Іван"
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/30 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-foreground/70"
                >
                  Телефон
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+380..."
                  className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/30 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground/70"
              >
                Повідомлення
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Опишіть ваш проєкт..."
                className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-foreground/30 outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <motion.button
              type="submit"
              className="animate-glow flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white transition-all hover:brightness-110"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="h-5 w-5" />
              Надіслати запит
            </motion.button>
          </motion.form>

          {/* ── Contact info ── */}
          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Phone numbers */}
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-border bg-surface p-3 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Телефони
                </h3>
                <a
                  href="tel:+380664679995"
                  className="mt-1 block text-foreground/60 hover:text-foreground transition-colors"
                >
                  (066) 46-799-95
                </a>
                <a
                  href="tel:+380682810214"
                  className="mt-1 block text-foreground/60 hover:text-foreground transition-colors"
                >
                  (068) 28-102-14
                </a>
              </div>
            </div>

            {/* Messengers */}
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-border bg-surface p-3 text-accent">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Месенджери
                </h3>
                <p className="mt-1 text-foreground/60">
                  Viber, Telegram — напишіть нам у зручний спосіб
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-border bg-surface p-3 text-red-400">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Адреса
                </h3>
                <p className="mt-1 text-foreground/60">
                  м. Івано-Франківськ,
                  <br />
                  вул. Г. Тарнавського, 1
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-border bg-surface p-3 text-orange-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  Email
                </h3>
                <a
                  href="mailto:reklama.bmng@gmail.com"
                  className="mt-1 block text-foreground/60 hover:text-foreground transition-colors"
                >
                  reklama.bmng@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Google Maps embed ── */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl border border-border">
            {/* Map label bar */}
            <div className="flex items-center gap-3 border-b border-border bg-surface px-6 py-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                м. Івано-Франківськ, вул. Г. Тарнавського, 1
              </span>
              <a
                href="https://maps.app.goo.gl/ho8xduN6zLH8SJkR6"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs text-foreground/40 hover:text-primary transition-colors"
              >
                Відкрити в Google Maps →
              </a>
            </div>
            {/* Map iframe — grayscale + hue-rotate for dark themed look */}
            <div className="relative h-80 w-full lg:h-96">
              <iframe
                title="BooMeraNG на карті — вул. Г. Тарнавського, 1, Івано-Франківськ"
                src="https://maps.google.com/maps?q=вул.+Г.+Тарнавського+1+Івано-Франківськ&z=16&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
