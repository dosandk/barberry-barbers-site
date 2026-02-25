const BASE_URL = "https://barberry-barbers.com.ua";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "HairSalon",
    "@id": "https://www.google.com/maps?cid=8473421041552630794",
    name: "Barberry Barbers",
    description:
      "Барбершоп Barberry Barbers - чоловіча перукарня у Залізничному районі Львова навпроти ТЦ \"Victoria Gardens\", яка надає послуги з чоловічих стрижок, стрижок бороди та вус, камуфлювання тощо.",
    url: `${BASE_URL}/contacts`,
    telephone: "+380674552245",
    logo: `${BASE_URL}/images/logos/logo-light.webp`,
    priceRange: "200-6000",
    image: [
      `${BASE_URL}/images/logos/logo-light.webp`,
      `${BASE_URL}/images/employees/Марян%20Гринишин%201.jpeg`,
      `${BASE_URL}/images/employees/Роман%20Макушак%201.jpeg`,
    ],
    photo: [
      `${BASE_URL}/images/logos/logo-light.webp`,
      `${BASE_URL}/images/employees/Марян%20Гринишин%201.jpeg`,
      `${BASE_URL}/images/employees/Роман%20Макушак%201.jpeg`,
    ],
    areaServed: {
      "@type": "Place",
      name: "Львів",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "вул. Кульпарківська, 226з",
      addressLocality: "Львів",
      addressRegion: "Львівська область",
      postalCode: "79000",
      addressCountry: "UA",
    },
    openingHours: "Mo-Su 10:00-20:00",
    sameAs: [
      "https://www.instagram.com/barberry_barbers_cafe/",
      "https://www.facebook.com/profile.php?id=61554308320520#",
      "https://www.tiktok.com/@barberry_barbers",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        price: "550",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Чоловіча стрижка",
          description:
            "Індивідуальна стрижка для кожного клієнта Barberry Barbers. Майстер виконує послугу відповідно до форми обличчя, стилю життя та особистих побажань. Використовуються лише професійні засоби для догляду та стайлінгу.",
          serviceType: "Haircut",
        },
      },
      {
        "@type": "Offer",
        price: "500",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Стрижка бороди та вус",
          description:
            "Майстер Barberry Barbers зробить ідеальну форму Вашої бороди. Барбер використовує у процесі небезпечну бритву або тример з шейвером. Для укладки використовуємо бальзами та олії від найкращих виробників чоловічої косметики.",
          serviceType: "Beard trimming",
        },
      },
      {
        "@type": "Offer",
        price: "850",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Чоловіча стрижка + стрижка бороди",
          description:
            "Майстер створить індивідуальну стрижку відповідно до вашої форми обличчя та стилю життя, використовуючи лише професійні засоби. А також нададуть ідеальну форму вашій бороді та вусам, використовуючи небезпечну бритву або тример з шейвером. Використовуються лише професійні засоби для догляду та стайлінгу.",
          serviceType: "Haircut and Beard trimming",
        },
      },
      {
        "@type": "Offer",
        price: "850",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Стрижка ножицями (подовжена форма)",
          description:
            "Ідеально підходить для подовженого волосся. Виконана виключно ножицями, ця стрижка займає більше часу, ніж стандартна, що дозволяє майстру досягти високої точності та забезпечити природній, стильний вигляд.",
          serviceType: "Scissor haircut",
        },
      },
      {
        "@type": "Offer",
        price: "450",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Стрижка під насадку",
          description:
            "Стрижка виконується під одну чи дві насадки + окантовка. Не включає в себе застосування техніки \"Fade\". Якісно, зручно та охайно - те як можна охарактеризувати послугу.",
          serviceType: "Clipper haircut",
        },
      },
      {
        "@type": "Offer",
        price: "750",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Стрижка під насадку + стрижка бороди",
          description:
            "Майстер виконають стрижку вашого волосся під одну чи дві насадки + окантовка з урахуванням вашого стилю та побажань, а також надасть вашій бороді бажаний вигляд.",
          serviceType: "Clipper haircut",
        },
      },
      {
        "@type": "Offer",
        price: "500",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Дитяча стрижка",
          description:
            "Стрижка маленьких джентельменів з 5-ти до 11-ти років. Для укладки майстер використовує професійну косметику.",
          serviceType: "Children's haircut",
        },
      },
      {
        "@type": "Offer",
        price: "200",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Укладка",
          description:
            "Чудовий варіант для чоловіків, які хочуть швидко та професійно привести себе у порядок перед важливою подією, або просто щоб почувати себе максимально впевнено та зручно протягом протязі дня. Майстер використовує професійні засоби для стайлінгу.",
          serviceType: "Hair styling",
        },
      },
      {
        "@type": "Offer",
        price: "650",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Королівське гоління",
          description:
            "Гоління, яке майстер виконує небезпечною бритвою, перед тим розпаривши бороду, щоб забезпечити максимальний комфорт та гладкість.",
          serviceType: "Royal shave",
        },
      },
      {
        "@type": "Offer",
        price: "200",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Воскове видалення волосся",
          description:
            "Послуга передбачає видалення волосся у зоні брів, вух та носа воском.",
          serviceType: "Waxing",
        },
      },
      {
        "@type": "Offer",
        price: "550",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Камуфлювання сивини",
          description:
            "Камуфлювання сивини - це процедура насичення волосся натуральними пігментами, для відновлення природного тону волосся. Використовується тільки якісна косметика відомого бренду American Crew",
          serviceType: "Hair gray blending",
        },
      },
      {
        "@type": "Offer",
        price: "450",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Камуфлювання бороди",
          description:
            "Камуфлювання бороди - це процедура насичення волосся бороди натуральними пігментами, для відновлення природного тону волосся. Використовується тільки якісна косметика відомого бренду American Crew.",
          serviceType: "Beard gray blending",
        },
      },
      {
        "@type": "Offer",
        price: "4000",
        priceCurrency: "UAH",
        itemOffered: {
          "@type": "Service",
          name: "Біо-завивка волосся",
          description:
            "Вартість послуги залежить від довжини волосся. Біологічна завивка нового покоління! Різна структура волосся, різна довжина, але який же розкішний результат! Twist & Twist створює потужний ефект кондиціювання, забезпечує максимально натуральні мʼякі локони на довготривалий час, не пошкоджуючи структури волосся! Вільна від тиогліколевої кислоти та від інших похідних кислот, а також не містить аміаку інноваційний нейтралізатор (натуральний РН). Не містить кисневої води. І це гарантує хороший результат навіть на фарбованому волоссі, залишаючи незмінним колір та його яскравість",
          serviceType: "Bio perm",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
