import type { Metadata } from "next";
import { Box, Typography } from "@eleks-ui/components";

export const metadata: Metadata = {
  title: "Кафе — Barberry Barbers",
  description:
    "Кафе Barberry Barbers у Львові. Кава та затишна атмосфера під час візиту до барбера.",
  alternates: {
    canonical: "/cafe",
  },
  openGraph: {
    title: "Кафе — Barberry Barbers",
    description: "Кафе Barberry Barbers. Кава та затишок під час візиту.",
    url: "https://barberry-barbers.com.ua/cafe",
    siteName: "Barberry Barbers",
    locale: "uk_UA",
    type: "website",
  },
};

export default function CafePage() {
  return (
    <main>
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 3 },
          bgcolor: "var(--barberry-cream)",
          minHeight: "60vh",
        }}
      >
        <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
              fontWeight: 800,
              color: "var(--barberry-green)",
              mb: 2,
            }}
          >
            Кафе
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              color: "rgba(83, 34, 0, 0.7)",
              lineHeight: 1.7,
            }}
          >
            Сторінка в розробці. Незабаром тут з&apos;явиться інформація про кафе Barberry Barbers.
          </Typography>
        </Box>
      </Box>
    </main>
  );
}
