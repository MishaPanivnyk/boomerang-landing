import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

/* ── Google Fonts: Inter for body, Syne for bold headings ── */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

/* ── SEO Metadata: title, description, Open Graph, Twitter Cards ── */
export const metadata: Metadata = {
  title: "BooMeraNG — Рекламне агентство в Івано-Франківську | Вивіски, Сітілайти, Брендинг",
  description:
    "BooMeraNG — рекламне агентство повного циклу. Власне виробництво вивісок, сітілайти, брендинг, макетування. 10+ років досвіду. Від макету до монтажу. Івано-Франківськ, Україна.",
  keywords: [
    "рекламне агентство",
    "вивіски Івано-Франківськ",
    "сітілайти",
    "брендинг",
    "зовнішня реклама",
    "BooMeraNG",
    "рекламна агенція",
    "виробництво вивісок",
  ],
  authors: [{ name: "BooMeraNG" }],
  openGraph: {
    title: "BooMeraNG — Рекламне агентство в Івано-Франківську",
    description:
      "Власне виробництво всіх видів реклами. 10+ років досвіду. Від макету до монтажу.",
    url: "https://boomerang-reklama.com.ua",
    siteName: "BooMeraNG",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BooMeraNG — Рекламне агентство",
    description:
      "Власне виробництво всіх видів реклами. 10+ років досвіду.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
