"use client";

import { Box, Typography, Button } from "@eleks-ui/components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsIcon from "@mui/icons-material/Directions";
import { locations } from "../../data/contacts";

export function TgLocation() {
  const loc = locations[0];

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
        <LocationOnIcon sx={{ fontSize: 40, color: "var(--barberry-green)", mb: 2 }} />

        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontWeight: 800,
            color: "var(--barberry-green)",
            mb: 2,
          }}
        >
          Не знаєш як нас знайти?
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.95rem", sm: "1.1rem" },
            color: "rgba(83,34,0,0.7)",
            lineHeight: 1.7,
            maxWidth: 520,
            mx: "auto",
            mb: 1.5,
          }}
        >
          Бот відкриє маршрут у Google Maps, покаже адресу та допоможе швидко дістатись.
        </Typography>

        <Typography
          sx={{
            fontSize: "0.9rem",
            color: "rgba(83,34,0,0.5)",
            mb: 3,
          }}
        >
          {loc.address}
        </Typography>

        {loc.mapUrl && (
          <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              size="large"
              startIcon={<DirectionsIcon />}
              sx={{
                borderColor: "var(--barberry-green)",
                color: "var(--barberry-green)",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                minHeight: 52,
                "&:hover": {
                  bgcolor: "rgba(22,65,40,0.04)",
                  borderColor: "var(--barberry-green)",
                },
              }}
            >
              Прокласти маршрут
            </Button>
          </a>
        )}
      </Box>
    </Box>
  );
}
