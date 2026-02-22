export const COMPANY_NAME = "Barberry Barbers";

export const BOOKING_URL = "https://n776626.alteg.io/";
export const TELEGRAM_BOT_URL = "https://t.me/BarberryBarbersBot";

export const PHONE = "(067) 455-22-45";
export const PHONE_HREF = "tel:+380674552245";

export const WEBSITE_URL = "https://barberry-barbers.com.ua";
export const SHOP_URL = "https://barberry-barbers.store";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/barberry_barbers_cafe/",
  facebook:
    "https://www.facebook.com/profile.php?id=61554308320520&locale=cy_GB#",
};

export interface Location {
  id: number;
  name: string;
  address: string;
  mapUrl: string;
  mapEmbed: string;
  comingSoon?: boolean;
}

export const locations: Location[] = [
  {
    id: 1,
    name: 'Barberry Barbers — ЖК "Місто трав"',
    address: "Львів, вул. Кульпарківська 226з, ЖК «Місто трав», навпроти Victoria Gardens",
    mapUrl: "https://maps.app.goo.gl/Nx45UBMj74xrPVMC7",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1057.5097040714013!2d23.977974053968683!3d49.80439216337912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae717d037994b%3A0x7597a38b0e10a40a!2sBarberry%20Barbers!5e1!3m2!1sen!2sua!4v1771600391316!5m2!1sen!2sua"
  },
  {
    id: 2,
    name: 'Barberry Barbers — ТЦ "Galas"',
    address: 'Львів, ТЦ "Galas", вул. Кульпарківська 96',
    mapUrl: "",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d739.799034688405!2d23.98769504684498!3d49.82164160343629!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sua!4v1771785156287!5m2!1sen!2sua",
    comingSoon: true,
  },
];

export const WORKING_HOURS = "Пн - Нд: 10:00 – 20:00";
export const WORKING_HOURS_NOTE = "Працюємо без вихідних";
