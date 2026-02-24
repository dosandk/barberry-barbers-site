"use client";

import Image from "next/image";
import { Box, Typography, Stack, Divider } from "@eleks-ui/components";
import {
  COMPANY_NAME,
  PHONE,
  PHONE_HREF,
  SOCIAL_LINKS,
  BOOKING_URL,
  WORKING_HOURS,
  locations,
} from "../data/contacts";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Послуги та ціни", href: "/#services" },
    { label: "Команда", href: "/#team" },
    { label: "Telegram-бот", href: "/#telegram-bot" },
    { label: "Контакти", href: "/#contacts" },
    { label: "Записатися", href: BOOKING_URL, external: true },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "var(--barberry-green)",
        color: "var(--barberry-white)",
        pt: { xs: 5, sm: 6 },
        pb: { xs: 10, sm: 6 },
        borderTop: "3px solid var(--barberry-gold)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Diagonal pinstripes */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.07) 10px,
            rgba(0,0,0,0.07) 11px
          )`,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" },
            gap: { xs: 4, md: 5 },
            mb: 4,
          }}
        >
          {/* Brand column */}
          <Box>
            <Image
              src="/images/logos/logo-light.webp"
              alt={COMPANY_NAME}
              width={220}
              height={62}
              style={{ height: "auto", maxHeight: 55, width: "auto", marginBottom: 16 }}
            />
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "var(--barberry-sage)",
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              Преміальний чоловічий барбершоп у Львові. Створюємо стильні образи з 2022 року.
            </Typography>
          </Box>

          {/* Navigation column */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--barberry-gold)",
                mb: 2.5,
              }}
            >
              Навігація
            </Typography>
            <Stack spacing={1.5}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(229,234,192,0.75)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#E1A140")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(229,234,192,0.75)")}
                >
                  {link.label}
                </a>
              ))}
            </Stack>
          </Box>

          {/* Addresses column */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--barberry-gold)",
                mb: 2.5,
              }}
            >
              Адреси
            </Typography>
            <Stack spacing={1.5}>
              {locations.map((loc) =>
                loc.mapUrl ? (
                  <a
                    key={loc.id}
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                      color: "rgba(229,234,192,0.75)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E1A140")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(229,234,192,0.75)")}
                  >
                    {loc.address}
                  </a>
                ) : (
                  <Box key={loc.id}>
                    <Typography
                      sx={{
                        fontSize: "0.85rem",
                        color: "rgba(229,234,192,0.75)",
                        lineHeight: 1.5,
                      }}
                    >
                      {loc.address}
                    </Typography>
                    {loc.comingSoon && (
                      <Typography
                        sx={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "var(--barberry-gold)",
                          letterSpacing: "0.04em",
                          mt: 0.5,
                        }}
                      >
                        Скоро відкриття
                      </Typography>
                    )}
                  </Box>
                )
              )}
            </Stack>
          </Box>

          {/* Contacts column */}
          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--barberry-gold)",
                mb: 2.5,
              }}
            >
              Контакти
            </Typography>
            <Stack spacing={1.5}>
              <a
                href={PHONE_HREF}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "var(--barberry-sand)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1A140")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {PHONE}
              </a>
              <Typography sx={{ fontSize: "0.9rem", color: "rgba(229,234,192,0.75)" }}>
                {WORKING_HOURS}
              </Typography>
              <Stack direction="row" spacing={1}>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(229,234,192,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--barberry-sage)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#E1A140";
                    e.currentTarget.style.color = "#E1A140";
                    e.currentTarget.style.backgroundColor = "rgba(225,161,64,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(229,234,192,0.2)";
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(229,234,192,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--barberry-sage)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#E1A140";
                    e.currentTarget.style.color = "#E1A140";
                    e.currentTarget.style.backgroundColor = "rgba(225,161,64,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(229,234,192,0.2)";
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Divider
          sx={{
            mb: 3,
            borderColor: "rgba(225,161,64,0.15)",
          }}
        />

        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "rgba(229,234,192,0.35)",
            textAlign: "center",
          }}
        >
          &copy; {currentYear} {COMPANY_NAME}. Всі права захищені.
        </Typography>
      </Box>
    </Box>
  );
}
