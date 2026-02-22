"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button, Stack } from "@eleks-ui/components";
import TelegramIcon from "@mui/icons-material/Telegram";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TELEGRAM_BOT_URL } from "../data/contacts";

const FEATURES = [
  { icon: <AccessTimeIcon sx={{ fontSize: 20 }} />, text: "Запис за 30 секунд" },
  { icon: <CardGiftcardIcon sx={{ fontSize: 20 }} />, text: "100 грн бонус новим клієнтам" },
  { icon: <NotificationsActiveIcon sx={{ fontSize: 20 }} />, text: "Нагадування про візит" },
];

export function TelegramBot() {
  return (
    <Box
      component="section"
      id="telegram-bot"
      sx={{
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 3 },
        bgcolor: "var(--barberry-green)",
        color: "var(--barberry-white)",
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Text content */}
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 5,
                px: 2,
                py: 0.75,
                mb: 2.5,
              }}
            >
              <TelegramIcon sx={{ fontSize: 18 }} />
              <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.04em" }}>
                TELEGRAM-БОТ
              </Typography>
            </Box>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Онлайн запис через Telegram
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                opacity: 0.8,
                lineHeight: 1.6,
                mb: 3,
                maxWidth: 460,
              }}
            >
              Знайди вільний час у свого майстра за 30 секунд — без дзвінків і очікування.
            </Typography>

            <Stack spacing={1.5} sx={{ mb: 4 }}>
              {FEATURES.map((item) => (
                <Box key={item.text} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: "rgba(229,234,192,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--barberry-sage)",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontSize: "0.95rem" }}>{item.text}</Typography>
                </Box>
              ))}
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<TelegramIcon />}
                  fullWidth
                  sx={{
                    bgcolor: "var(--barberry-gold)",
                    color: "var(--barberry-dark)",
                    fontWeight: 700,
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    fontSize: { xs: "0.9rem", sm: "0.95rem" },
                    textTransform: "none",
                    minHeight: 48,
                    "&:hover": { bgcolor: "#EABB6A" },
                  }}
                >
                  Відкрити бота
                </Button>
              </a>
              <Link href="/telegram-bot">
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  fullWidth
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "var(--barberry-white)",
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    fontSize: { xs: "0.9rem", sm: "0.95rem" },
                    textTransform: "none",
                    minHeight: 48,
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.6)",
                      bgcolor: "rgba(255,255,255,0.06)",
                    },
                  }}
                >
                  Дізнатись більше
                </Button>
              </Link>
            </Stack>
          </Box>

          {/* Bot screenshots */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1.5, sm: 2 },
              flexShrink: 0,
              maxWidth: { xs: "100%", md: 420 },
              width: "100%",
              justifyContent: "center",
            }}
          >
            {/* <Box */}
            {/*   sx={{ */}
            {/*     flex: 1, */}
            {/*     maxWidth: 200, */}
            {/*     borderRadius: 3, */}
            {/*     overflow: "hidden", */}
            {/*     boxShadow: "0 8px 32px rgba(0,0,0,0.3)", */}
            {/*     border: "1px solid rgba(255,255,255,0.08)", */}
            {/*   }} */}
            {/* > */}
            {/*   <Image */}
            {/*     src="/images/telegram-bot/menu.png" */}
            {/*     alt="Головне меню Telegram-бота Barberry Barbers" */}
            {/*     width={400} */}
            {/*     height={160} */}
            {/*     style={{ width: "100%", height: "auto", display: "block" }} */}
            {/*   /> */}
            {/* </Box> */}
            <Box
              sx={{
                flex: 1,
                maxWidth: 600,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Image
                src="/images/telegram-bot/book.png"
                alt="Вибір дати запису у Telegram-боті Barberry Barbers"
                width={400}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
