import type { Metadata } from "next";
import { Contacts } from "../components/Contacts";

export const metadata: Metadata = {
  title: "Контакти — Barberry Barbers",
  description:
    "Адреса, телефон, графік роботи. Barberry Barbers — два салони у Львові.",
  alternates: {
    canonical: "/contacts",
  },
  openGraph: {
    title: "Контакти — Barberry Barbers",
    description: "Адреса, телефон, графік роботи. Два салони у Львові.",
    url: "https://barberry-barbers.com.ua/contacts",
    siteName: "Barberry Barbers",
    locale: "uk_UA",
    type: "website",
  },
};

export default function ContactsPage() {
  return (
    <main>
      <Contacts />
    </main>
  );
}
