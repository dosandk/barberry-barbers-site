import type { Metadata } from "next";
import { Team } from "../components/Team";
import { Contacts } from "../components/Contacts";

export const metadata: Metadata = {
  title: "Контакти барбершоп Barberry Barbers, чоловіча перукарня у Залізничному районі Львова, навпроти ТЦ Victoria Gardens",
  description:
    "Барбершоп Barberry Barbers - чоловіча перукарня у Залізничному районі Львова біля ТЦ Victoria Gardens, яка надає послуги з чоловічих стрижок, стрижок бороди та вус, камуфлювання тощо",
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
      <Team />
    </main>
  );
}
