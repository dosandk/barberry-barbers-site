import { Box, Typography, Button, Stack, Chip } from "@eleks-ui/components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { BOOKING_URL, WORKING_HOURS, WORKING_HOURS_NOTE } from "../data/contacts";

export function Hero() {
  return (
    <Box
      component="section"
      aria-label="Головний банер"
      sx={{
        bgcolor: "var(--barberry-green)",
        color: "var(--barberry-white)",
        minHeight: { xs: "calc(100svh - 64px)", sm: "calc(100svh - 72px)" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4 },
        py: { xs: 6, sm: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Diagonal pinstripes */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.07) 10px,
            rgba(0,0,0,0.07) 11px
          )`,
        }}
      />

      {/* Content */}
      <Stack
        alignItems="center"
        spacing={3}
        sx={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 720 }}
      >
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          Чоловічий барбершоп
          <br />
          у Львові
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem" },
            opacity: 0.85,
            maxWidth: 520,
            lineHeight: 1.6,
          }}
        >
          Створюємо стильні чоловічі образи. Професійні стрижки, моделювання
          бороди та догляд від найкращих барберів міста.
        </Typography>

        <Chip
          icon={<AccessTimeIcon sx={{ color: "var(--barberry-sage) !important" }} />}
          label={`${WORKING_HOURS} · ${WORKING_HOURS_NOTE}`}
          sx={{
            bgcolor: "rgba(255,255,255,0.1)",
            color: "var(--barberry-white)",
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            height: 36,
            "& .MuiChip-icon": { color: "var(--barberry-sage)" },
          }}
        />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ width: { xs: "100%", sm: "auto" }, mt: 1 }}
        >
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ display: "contents" }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "var(--barberry-gold)",
                color: "var(--barberry-green)",
                fontWeight: 700,
                borderRadius: 2,
                px: { xs: 4, sm: 5 },
                py: 1.5,
                fontSize: { xs: "1rem", sm: "1.1rem" },
                textTransform: "none",
                minHeight: 52,
                width: { xs: "100%", sm: "auto" },
                "&:hover": { bgcolor: "#EABB6A" },
              }}
            >
              Записатися онлайн
            </Button>
          </a>
          <Button
            variant="outlined"
            href="#services"
            size="large"
            sx={{
              borderColor: "rgba(255,255,255,0.4)",
              color: "var(--barberry-white)",
              fontWeight: 600,
              borderRadius: 2,
              px: { xs: 4, sm: 5 },
              py: 1.5,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              textTransform: "none",
              minHeight: 52,
              "&:hover": {
                borderColor: "var(--barberry-white)",
                bgcolor: "rgba(255,255,255,0.08)",
              },
            }}
          >
            Наші послуги
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
