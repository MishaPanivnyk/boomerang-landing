/**
 * Schema.org JSON-LD structured data component for SEO.
 * Renders multiple schema types in a single @graph for rich
 * Google results: LocalBusiness, ProfessionalService, WebSite,
 * Organization, and individual Service offers.
 */

const SITE_URL = "https://boomerang-reklama.com.ua";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── WebSite — enables Google Sitelinks search box ── */
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "BooMeraNG",
      description:
        "Рекламне агентство повного циклу в Івано-Франківську. Вивіски, сітілайти, брендинг.",
      inLanguage: "uk-UA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },

    /* ── Organization — brand entity ── */
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "BooMeraNG",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+380664679995",
          contactType: "customer service",
          availableLanguage: ["Ukrainian", "Russian"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+380682810214",
          contactType: "customer service",
          availableLanguage: ["Ukrainian", "Russian"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/boomerang.reklama",
        "https://www.instagram.com/boomerang.reklama",
      ],
    },

    /* ── LocalBusiness — local SEO & Google Maps ── */
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "BooMeraNG",
      description:
        "Рекламне агентство повного циклу. Власне виробництво вивісок, сітілайти, брендинг, макетування. 10+ років досвіду. Від макету до монтажу.",
      url: SITE_URL,
      telephone: "+380664679995",
      email: "info@boomerang-reklama.com.ua",
      image: `${SITE_URL}/og-image.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "вул. Г. Тарнавського, 1",
        addressLocality: "Івано-Франківськ",
        addressRegion: "Івано-Франківська область",
        postalCode: "76000",
        addressCountry: "UA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.9226,
        longitude: 24.7111,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "87",
        bestRating: "5",
      },
    },

    /* ── ProfessionalService — service classification ── */
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "BooMeraNG — Рекламні послуги",
      serviceType: "Advertising Agency",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: [
        { "@type": "Country", name: "Ukraine" },
        { "@type": "City", name: "Івано-Франківськ" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Рекламні послуги",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Макетування та брендинг",
              description:
                "Розробка логотипів, фірмового стилю, макетів вивісок та рекламних матеріалів.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Виробництво вивісок",
              description:
                "Світлові короби, об'ємні літери, LED-вивіски, неонові вивіски — власне виробництво.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Оренда сітілайтів",
              description:
                "Розміщення зовнішньої реклами на сітілайтах по всій Україні.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Доставка та монтаж",
              description:
                "Професійна доставка та монтаж рекламних конструкцій будь-якої складності.",
            },
          },
        ],
      },
    },

    /* ── FAQPage — boosts chances of FAQ rich snippets ── */
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Як замовити вивіску в BooMeraNG?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Надішліть нам фото фасаду, вкажіть розміри та опишіть своє бачення. Ми підготуємо 3D-макет і безкоштовний прорахунок.",
          },
        },
        {
          "@type": "Question",
          name: "Скільки часу займає виготовлення вивіски?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Стандартний термін виготовлення — від 5 до 14 робочих днів залежно від складності проєкту.",
          },
        },
        {
          "@type": "Question",
          name: "Чи працюєте ви за межами Івано-Франківська?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Так, ми працюємо по всій Україні та за кордоном. Здійснюємо доставку та монтаж у будь-яке місто.",
          },
        },
      ],
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
