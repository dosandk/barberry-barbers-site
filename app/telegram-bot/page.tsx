import type { Metadata } from "next";
import { TgHero } from "../components/telegram-bot/TgHero";
import { TgProblem } from "../components/telegram-bot/TgProblem";
import { TgSteps } from "../components/telegram-bot/TgSteps";
import { TgLoyalty } from "../components/telegram-bot/TgLoyalty";
import { TgFeatures } from "../components/telegram-bot/TgFeatures";
import { TgLocation } from "../components/telegram-bot/TgLocation";
import { TgFinalCta } from "../components/telegram-bot/TgFinalCta";
import { TgFaq } from "../components/telegram-bot/TgFaq";

export const metadata: Metadata = {
  title: "Telegram-бот Barberry Barbers — Онлайн запис за 30 секунд",
  description:
    "Запишись до барбера Barberry Barbers у Львові через Telegram-бота за 30 секунд. Без дзвінків, без очікування. Отримай 100 грн бонус на першу послугу.",
  keywords: [
    "барбершоп Львів Telegram",
    "запис до барбера Telegram",
    "Barberry Barbers бот",
    "онлайн запис барбершоп",
    "telegram бот барбершоп",
  ],
  alternates: {
    canonical: "/telegram-bot",
  },
  openGraph: {
    title: "Telegram-бот Barberry Barbers — Запис за 30 секунд",
    description:
      "Запишись до барбера через Telegram без дзвінків. 100 грн бонус на першу послугу.",
    url: "https://barberry-barbers.com.ua/telegram-bot",
    siteName: "Barberry Barbers",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/images/logos/logo 1.png",
        width: 1200,
        height: 630,
        alt: "Barberry Barbers Telegram-бот",
      },
    ],
  },
};

export default function TelegramBotPage() {
  return (
    <main>
      <TgHero />
      <TgProblem />
      <TgSteps />
      <TgLoyalty />
      <TgFeatures />
      <TgLocation />
      <TgFinalCta />
      <TgFaq />
    </main>
  );
}
