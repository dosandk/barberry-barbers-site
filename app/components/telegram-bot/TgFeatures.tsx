"use client";

import { Box, Typography } from "@eleks-ui/components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MapIcon from "@mui/icons-material/Map";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

const FEATURES = [
  { icon: <AccessTimeIcon />, text: "Показує всі вільні години" },
  { icon: <NotificationsActiveIcon />, text: "Нагадує про запис" },
  { icon: <MapIcon />, text: "Підказує маршрут до барбершопу" },
  { icon: <LocationOnIcon />, text: "Допомагає знайти потрібну локацію" },
  { icon: <LoyaltyIcon />, text: "Дає доступ до бонусів" },
];

export function TgFeatures() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 3 },
        bgcolor: "var(--barberry-white)",
      }}
    >
      <Box sx={{ maxWidth: 760, mx: "auto" }}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontWeight: 800,
            color: "var(--barberry-green)",
            textAlign: "center",
            mb: { xs: 4, sm: 5 },
          }}
        >
          Що ще вміє Telegram-бот Barberry
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          {FEATURES.map((item) => (
            <Box
              key={item.text}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                bgcolor: "var(--barberry-cream)",
                border: "1px solid rgba(22,65,40,0.06)",
                borderRadius: 2.5,
                p: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  bgcolor: "var(--barberry-sage)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--barberry-green)",
                }}
              >
                {item.icon}
              </Box>
              <Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
