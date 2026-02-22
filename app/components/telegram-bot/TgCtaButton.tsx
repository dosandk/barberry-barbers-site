"use client";

import { Button } from "@eleks-ui/components";
import TelegramIcon from "@mui/icons-material/Telegram";
import { TELEGRAM_BOT_URL } from "../../data/contacts";

export function TgCtaButton({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <a
      href={TELEGRAM_BOT_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: fullWidth ? "block" : "inline-block" }}
    >
      <Button
        variant="contained"
        size="large"
        startIcon={<TelegramIcon />}
        fullWidth={fullWidth}
        sx={{
          bgcolor: "var(--barberry-green)",
          color: "var(--barberry-white)",
          fontWeight: 700,
          borderRadius: 2,
          px: { xs: 3, sm: 4 },
          py: 1.5,
          fontSize: { xs: "0.95rem", sm: "1.1rem" },
          textTransform: "none",
          minHeight: 52,
          "&:hover": { bgcolor: "var(--barberry-green-light)" },
        }}
      >
        Відкрити Telegram-бота
      </Button>
    </a>
  );
}
