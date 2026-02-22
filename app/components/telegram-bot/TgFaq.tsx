"use client";

import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@eleks-ui/components";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ_ITEMS = [
  {
    q: "Це безкоштовно?",
    a: "Так, бот безкоштовний. Ви сплачуєте тільки за послуги.",
  },
  {
    q: "Чи треба дзвонити?",
    a: "Ні, запис повністю в Telegram. Без дзвінків.",
  },
  {
    q: "Куди можна витратити бонуси?",
    a: "На послуги або косметику в barberry-barbers.store.",
  },
];

export function TgFaq() {
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
          Часті запитання
        </Typography>

        {FAQ_ITEMS.map((item, i) => (
          <Accordion
            key={i}
            disableGutters
            elevation={0}
            sx={{
              border: "1px solid rgba(22,65,40,0.08)",
              borderRadius: "12px !important",
              mb: 2,
              "&:before": { display: "none" },
              overflow: "hidden",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "var(--barberry-green)" }} />}
              sx={{
                px: 3,
                py: 1,
                "& .MuiAccordionSummary-content": { my: 1.5 },
              }}
            >
              <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "var(--barberry-green)" }}>
                {item.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
              <Typography sx={{ fontSize: "0.95rem", color: "rgba(83,34,0,0.7)", lineHeight: 1.6 }}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
