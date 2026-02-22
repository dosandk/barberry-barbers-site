"use client";

import { Box, Button } from "@eleks-ui/components";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { BOOKING_URL } from "../data/contacts";

export function MobileBookingBar() {
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "none" },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        bgcolor: "var(--barberry-green)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        p: 1.5,
        pb: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<EventAvailableIcon />}
          sx={{
            bgcolor: "var(--barberry-gold)",
            color: "var(--barberry-dark)",
            fontWeight: 700,
            borderRadius: 2,
            py: 1.5,
            textTransform: "none",
            fontSize: "1rem",
            minHeight: 48,
            "&:hover": { bgcolor: "#EABB6A" },
          }}
        >
          Записатися онлайн
        </Button>
      </a>
    </Box>
  );
}
