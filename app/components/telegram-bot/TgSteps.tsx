"use client";

import { Box, Typography, Card, CardContent } from "@eleks-ui/components";
import TelegramIcon from "@mui/icons-material/Telegram";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const STEPS = [
  {
    num: 1,
    icon: <TelegramIcon sx={{ fontSize: 32, color: "var(--barberry-green)" }} />,
    title: "Відкрий Telegram-бота",
    note: "Не потрібно встановлювати додатки",
  },
  {
    num: 2,
    icon: <TouchAppIcon sx={{ fontSize: 32, color: "var(--barberry-green)" }} />,
    title: "Обери майстра та час",
    note: "Бот покаже всі вільні години, можна хоч на сьогодні",
  },
  {
    num: 3,
    icon: <CheckCircleIcon sx={{ fontSize: 32, color: "var(--barberry-green)" }} />,
    title: "Підтвердь запис",
    note: "Нагадування + маршрут до Barberry",
  },
];

export function TgSteps() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 3 },
        bgcolor: "var(--barberry-white)",
      }}
    >
      <Box sx={{ maxWidth: 960, mx: "auto" }}>
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
          Як записатись через бота
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 3,
          }}
        >
          {STEPS.map((step) => (
            <Card
              key={step.num}
              sx={{
                border: "1px solid rgba(22,65,40,0.08)",
                borderRadius: 3,
                textAlign: "center",
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    bgcolor: "var(--barberry-sage)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2.5,
                  }}
                >
                  <Typography sx={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--barberry-green)" }}>
                    {step.num}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>{step.icon}</Box>

                <Typography
                  component="h3"
                  sx={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--barberry-green)", mb: 1 }}
                >
                  {step.title}
                </Typography>

                <Typography sx={{ fontSize: "0.85rem", color: "rgba(83,34,0,0.6)", lineHeight: 1.5 }}>
                  {step.note}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
