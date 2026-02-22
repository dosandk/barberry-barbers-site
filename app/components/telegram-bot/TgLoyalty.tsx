"use client";

import { Box, Typography, Button, Stack } from "@eleks-ui/components";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { SHOP_URL } from "../../data/contacts";
import { TgCtaButton } from "./TgCtaButton";

export function TgLoyalty() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 3 },
        bgcolor: "var(--barberry-cream)",
      }}
    >
      <Box
        sx={{
          maxWidth: 760,
          mx: "auto",
          bgcolor: "var(--barberry-white)",
          border: "2px solid var(--barberry-gold)",
          borderRadius: 4,
          p: { xs: 3, sm: 5 },
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            bgcolor: "rgba(225,161,64,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 3,
          }}
        >
          <CardGiftcardIcon sx={{ fontSize: 32, color: "var(--barberry-gold)" }} />
        </Box>

        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontWeight: 800,
            color: "var(--barberry-green)",
            mb: 2,
          }}
        >
          Карта лояльності одразу після реєстрації
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.95rem", sm: "1.1rem" },
            color: "rgba(83,34,0,0.7)",
            lineHeight: 1.7,
            maxWidth: 540,
            mx: "auto",
            mb: 1.5,
          }}
        >
          При першому запуску бота ви отримуєте персональну карту лояльності з{" "}
          <strong style={{ color: "var(--barberry-green)" }}>бонусом 100 грн</strong>,
          який можна витратити на послуги або косметику.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          <TgCtaButton />
          <a href={SHOP_URL} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              size="large"
              startIcon={<StorefrontIcon />}
              sx={{
                borderColor: "var(--barberry-green)",
                color: "var(--barberry-green)",
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 2,
                px: 3,
                py: 1.5,
                fontSize: { xs: "0.95rem", sm: "1rem" },
                minHeight: 52,
                "&:hover": {
                  bgcolor: "rgba(22,65,40,0.04)",
                  borderColor: "var(--barberry-green)",
                },
              }}
            >
              Магазин косметики
            </Button>
          </a>
        </Stack>

        <Typography sx={{ fontSize: "0.75rem", color: "rgba(83,34,0,0.4)" }}>
          Бонуси діють за правилами програми лояльності Barberry.
        </Typography>
      </Box>
    </Box>
  );
}
