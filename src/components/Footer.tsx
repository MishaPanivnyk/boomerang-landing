import { Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/50 py-12" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Brand ── */}
          <div>
            <span className="text-2xl font-extrabold font-[var(--font-heading)]">
              <span className="text-foreground">Boo</span>
              <span className="text-gradient">MeraNG</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-foreground/40">
              Рекламне агентство повного циклу. Власне виробництво всіх видів реклами.
            </p>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
              Навігація
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Про нас", href: "#about" },
                { label: "Послуги", href: "#services" },
                { label: "Портфоліо", href: "#portfolio" },
                { label: "Контакти", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/40 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
              Послуги
            </h4>
            <ul className="space-y-2 text-sm text-foreground/40">
              <li>Світлові вивіски</li>
              <li>Об&apos;ємні літери</li>
              <li>Сітілайти</li>
              <li>Брендинг</li>
            </ul>
          </div>

          {/* ── Contact info ── */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/60">
              Контакти
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+380664679995"
                className="flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                (066) 46-799-95
              </a>
              <a
                href="tel:+380682810214"
                className="flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                (068) 28-102-14
              </a>
              <div className="flex items-center gap-2 text-sm text-foreground/40">
                <MapPin className="h-4 w-4" />
                м. Івано-Франківськ
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-foreground/30">
            &copy; {currentYear} BooMeraNG. Всі права захищені.
          </p>
          <p className="flex items-center gap-1 text-xs text-foreground/30">
            Зроблено з <Heart className="h-3 w-3 fill-primary text-primary" /> в Івано-Франківську
          </p>
        </div>
      </div>
    </footer>
  );
}
