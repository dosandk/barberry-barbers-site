"use client";

import { Box, Typography, Stack } from "@eleks-ui/components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { TgCtaButton } from "./TgCtaButton";

const RECAP = [
  "Запис за 30 секунд",
  "Нагадування про візит",
  "100 грн бонус на першу послугу",
];

export function TgFinalCta() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3 },
        bgcolor: "var(--barberry-green)",
        color: "var(--barberry-white)",
      }}
    >
      <Box
        sx={{
          maxWidth: 760,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
              fontWeight: 800,
              mb: 3,
            }}
          >
            Запишись за 30 секунд
          </Typography>

          <Stack spacing={1.5} sx={{ mb: 3 }}>
            {RECAP.map((text) => (
              <Box
                key={text}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <CheckCircleOutlineIcon sx={{ fontSize: 20, color: "var(--barberry-sage)" }} />
                <Typography sx={{ fontSize: "0.95rem" }}>{text}</Typography>
              </Box>
            ))}
          </Stack>

          <TgCtaButton />
        </Box>
      </Box>
    </Box>
  );
}
