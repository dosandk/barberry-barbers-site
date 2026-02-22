"use client";

import { Box, Typography, Stack } from "@eleks-ui/components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { TgCtaButton } from "./TgCtaButton";

const BULLETS = [
  "Перевір доступні години",
  "Запишись до свого майстра",
  "Отримай маршрут до Barberry",
];

export function TgHero() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "var(--barberry-green)",
        color: "var(--barberry-white)",
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          maxWidth: 960,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "center" },
          gap: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              mb: 2,
            }}
          >
            Онлайн запис у Barberry
            <br />
            через Telegram
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", sm: "1.15rem" },
              opacity: 0.85,
              lineHeight: 1.6,
              mb: 3,
              maxWidth: 500,
            }}
          >
            Знайди вільний час у свого майстра за 30 секунд — без дзвінків і очікування.
          </Typography>

          <Stack spacing={1.5} sx={{ mb: 3 }}>
            {BULLETS.map((text) => (
              <Box key={text} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <CheckCircleOutlineIcon sx={{ fontSize: 20, color: "var(--barberry-sage)" }} />
                <Typography sx={{ fontSize: "0.95rem" }}>{text}</Typography>
              </Box>
            ))}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <CardGiftcardIcon sx={{ fontSize: 20, color: "var(--barberry-gold)" }} />
              <Typography sx={{ fontSize: "0.95rem", fontWeight: 600 }}>
                Забери 100 грн бонус на першу послугу
              </Typography>
            </Box>
          </Stack>

          <Box sx={{ mb: 2.5 }}>
            <TgCtaButton />
          </Box>

          <Typography sx={{ fontSize: "0.8rem", opacity: 0.5 }}>
            Без реєстрації на сайті. Працює на телефоні та ПК.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
