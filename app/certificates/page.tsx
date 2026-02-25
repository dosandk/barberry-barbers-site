import type { Metadata } from "next";
import { Box, Typography } from "@eleks-ui/components";

export const metadata: Metadata = {
  title: "Сертифікати та абонементи — Barberry Barbers",
  description:
    "Подарункові сертифікати та абонементи Barberry Barbers. Ідеальний подарунок для чоловіків у Львові.",
  alternates: {
    canonical: "/certificates",
  },
  openGraph: {
    title: "Сертифікати та абонементи — Barberry Barbers",
    description: "Подарункові сертифікати та абонементи. Ідеальний подарунок для чоловіків.",
    url: "https://barberry-barbers.com.ua/certificates",
    siteName: "Barberry Barbers",
    locale: "uk_UA",
    type: "website",
  },
};

export default function CertificatesPage() {
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
            Сертифікати та абонементи
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              color: "rgba(83, 34, 0, 0.7)",
              lineHeight: 1.7,
            }}
          >
            Сторінка в розробці. Незабаром тут з&apos;явиться інформація про подарункові сертифікати та абонементи Barberry Barbers.
          </Typography>
        </Box>
      </Box>
    </main>
  );
}
