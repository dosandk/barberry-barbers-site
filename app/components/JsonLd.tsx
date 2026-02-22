export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    name: "Barberry Barbers",
    description:
      "Преміальний чоловічий барбершоп у Львові. Стрижки, бороди, укладки від найкращих майстрів.",
    url: "https://barberry-barbers.com.ua",
    telephone: "+380674552245",
    email: "",
    image: "https://barberry-barbers.com.ua/images/logos/logo 1.png",
    priceRange: "₴₴",
    currenciesAccepted: "UAH",
    paymentAccepted: "Cash, Credit Card",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "вул. Кульпарківська 226з, ЖК «Місто трав»",
        addressLocality: "Львів",
        addressRegion: "Львівська область",
        addressCountry: "UA",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "вул. Кульпарківська 96",
        addressLocality: "Львів",
        addressRegion: "Львівська область",
        addressCountry: "UA",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.82,
      longitude: 24.0,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
    sameAs: [
      "https://www.instagram.com/barberry_barbers_cafe/",
      "https://www.facebook.com/profile.php?id=61554308320520",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Послуги барбершопу",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Чоловіча стрижка",
            description: "Індивідуальна чоловіча стрижка від професійних барберів",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "UAH",
            minPrice: "550",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Стрижка бороди та вус",
            description: "Моделювання бороди небезпечною бритвою або тримером",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "UAH",
            minPrice: "500",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Чоловіча стрижка + стрижка бороди",
            description: "Комбінована послуга стрижки та моделювання бороди",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "UAH",
            minPrice: "850",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "350",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
