import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { TelegramBot } from "./components/TelegramBot";
import { Contacts } from "./components/Contacts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Team />
      <TelegramBot />
      <Contacts />
    </main>
  );
}
