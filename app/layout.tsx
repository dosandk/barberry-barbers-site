import type { Metadata, Viewport } from "next";
import { EleksUIThemeProvider } from "@eleks-ui/theme";
import { JsonLd } from "./components/JsonLd";
import { ThemeInit } from "./components/ThemeInit";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileBookingBar } from "./components/MobileBookingBar";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#164128",
};

export const metadata: Metadata = {
  title: "Barberry Barbers — Чоловічий барбершоп у Львові",
  description:
    "Barberry Barbers — преміальний чоловічий барбершоп у Львові. Стрижки, бороди, укладки від найкращих майстрів. Працюємо без вихідних 10:00 – 20:00. Запис онлайн.",
  keywords: [
    "барбершоп Львів",
    "чоловіча стрижка Львів",
    "стрижка бороди Львів",
    "barberry barbers",
    "барбер Львів",
    "чоловічий салон Львів",
    "стрижка Кульпарківська",
    "барбершоп біля Victoria Gardens",
  ],
  authors: [{ name: "Barberry Barbers" }],
  creator: "Barberry Barbers",
  publisher: "Barberry Barbers",
  formatDetection: {
    telephone: true,
    email: false,
  },
  metadataBase: new URL("https://barberry-barbers.com.ua"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Barberry Barbers — Чоловічий барбершоп у Львові",
    description:
      "Преміальний чоловічий барбершоп у Львові. Стрижки, бороди, укладки від найкращих майстрів. Працюємо без вихідних.",
    url: "https://barberry-barbers.com.ua",
    siteName: "Barberry Barbers",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/images/logos/logo 1.png",
        width: 1200,
        height: 630,
        alt: "Barberry Barbers — чоловічий барбершоп у Львові",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barberry Barbers — Чоловічий барбершоп у Львові",
    description:
      "Преміальний чоловічий барбершоп у Львові. Запис онлайн.",
    images: ["/images/logos/logo 1.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <EleksUIThemeProvider>
          <ThemeInit />
          <JsonLd />
          <Header />
          {children}
          <Footer />
          <MobileBookingBar />
        </EleksUIThemeProvider>
      </body>
    </html>
  );
}
