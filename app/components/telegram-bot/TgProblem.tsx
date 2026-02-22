"use client";

import { Box, Typography, Stack } from "@eleks-ui/components";
import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const PAINS = [
  { icon: <PhoneDisabledIcon />, text: "Не додзвонюєшся з першого разу" },
  { icon: <HourglassEmptyIcon />, text: "Чекаєш відповіді в месенджері" },
  { icon: <EventBusyIcon />, text: "Немає часу телефонувати на роботі" },
  { icon: <QuestionMarkIcon />, text: "Не знаєш, хто вільний сьогодні" },
];

export function TgProblem() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 3 },
        bgcolor: "var(--barberry-cream)",
      }}
    >
      <Box sx={{ maxWidth: 760, mx: "auto", textAlign: "center" }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontWeight: 800,
            color: "var(--barberry-green)",
            mb: 4,
          }}
        >
          Досі записуєшся через дзвінки?
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2.5,
            mb: 4,
          }}
        >
          {PAINS.map((item) => (
            <Box
              key={item.text}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                bgcolor: "var(--barberry-white)",
                border: "1px solid rgba(22,65,40,0.08)",
                borderRadius: 2.5,
                p: 2.5,
              }}
            >
              <Box sx={{ color: "rgba(83,34,0,0.35)", flexShrink: 0 }}>{item.icon}</Box>
              <Typography sx={{ fontSize: "0.95rem", color: "var(--barberry-dark)" }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "1.05rem", sm: "1.15rem" },
            fontWeight: 600,
            color: "var(--barberry-green)",
          }}
        >
          У Barberry це займає менше хвилини.
        </Typography>
      </Box>
    </Box>
  );
}
