import Image from "next/image";
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
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.04,
          width: { xs: 300, sm: 500 },
          height: { xs: 300, sm: 500 },
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/logos/logo 3.png"
          alt=""
          width={500}
          height={500}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          aria-hidden="true"
        />
      </Box>

      <Stack
        alignItems="center"
        spacing={3}
        sx={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 720 }}
      >
        {/* <Box sx={{ mb: 1 }}> */}
        {/*   <Image */}
        {/*     src="/images/logos/logo 1.png" */}
        {/*     alt="Barberry Barbers" */}
        {/*     width={320} */}
        {/*     height={90} */}
        {/*     priority */}
        {/*     style={{ height: "auto", width: "auto", maxWidth: "280px" }} */}
        {/*   /> */}
        {/* </Box> */}

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
                color: "var(--barberry-dark)",
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

        {/* <Stack */}
        {/*   direction="row" */}
        {/*   spacing={3} */}
        {/*   sx={{ mt: 2, opacity: 0.5 }} */}
        {/* > */}
        {/*   {[1, 2, 3, 4, 5, 6].map((i) => ( */}
        {/*     <Box key={i} sx={{ width: { xs: 32, sm: 40 }, height: { xs: 32, sm: 40 } }}> */}
        {/*       <Image */}
        {/*         src={`/images/icons/icon ${i}.png`} */}
        {/*         alt="" */}
        {/*         width={40} */}
        {/*         height={40} */}
        {/*         style={{ width: "100%", height: "100%" }} */}
        {/*         aria-hidden="true" */}
        {/*       /> */}
        {/*     </Box> */}
        {/*   ))} */}
        {/* </Stack> */}
      </Stack>
    </Box>
  );
}
