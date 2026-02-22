"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Box, Typography, Card, CardContent, Avatar, IconButton } from "@eleks-ui/components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { barbers } from "../data/team";
import { BOOKING_URL } from "../data/contacts";

function BarberCard({ barber }: { barber: (typeof barbers)[number] }) {
  const initials = barber.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block", height: "100%" }}
    >
      <Card
        sx={{
          bgcolor: "var(--barberry-white)",
          border: "1px solid rgba(22, 65, 40, 0.08)",
          borderRadius: 3,
          overflow: "hidden",
          transition: "all 0.25s ease",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            boxShadow: "0 6px 24px rgba(22, 65, 40, 0.1)",
            borderColor: "var(--barberry-green)",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 5",
            bgcolor: "var(--barberry-sage)",
            overflow: "hidden",
          }}
        >
          {barber.photo ? (
            <Image
              src={barber.photo}
              alt={`Барбер ${barber.name} — Barberry Barbers Львів`}
              fill
              sizes="(max-width: 600px) 220px, (max-width: 960px) 260px, 280px"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                sx={{
                  width: 72,
                  height: 72,
                  bgcolor: "var(--barberry-green)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                }}
              >
                {initials}
              </Avatar>
            </Box>
          )}
        </Box>

        <CardContent sx={{ p: 2, flex: 1 }}>
          <Typography
            component="h3"
            sx={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--barberry-green)",
              mb: 0.75,
              lineHeight: 1.3,
            }}
          >
            {barber.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "rgba(83, 34, 0, 0.6)",
              lineHeight: 1.6,
            }}
          >
            {barber.information}
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
}

function CarouselButton({
  direction,
  enabled,
  onClick,
}: {
  direction: "left" | "right";
  enabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      aria-label={direction === "left" ? "Попередній" : "Наступний"}
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: `1px solid ${enabled ? "var(--barberry-green)" : "rgba(83,34,0,0.15)"}`,
        background: "transparent",
        color: enabled ? "var(--barberry-green)" : "rgba(83,34,0,0.25)",
        cursor: enabled ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s",
        padding: 0,
      }}
    >
      {direction === "left" ? (
        <ChevronLeftIcon fontSize="small" />
      ) : (
        <ChevronRightIcon fontSize="small" />
      )}
    </button>
  );
}

export function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 300;
    const gap = 16;
    const distance = (cardWidth + gap) * 2;
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  };

  return (
    <Box
      component="section"
      id="team"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        bgcolor: "var(--barberry-white)",
        overflow: "hidden",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, sm: 3 } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            mb: { xs: 3, sm: 4 },
          }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
                fontWeight: 800,
                color: "var(--barberry-green)",
                mb: 1,
              }}
            >
              Наша команда
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                color: "rgba(83, 34, 0, 0.6)",
              }}
            >
              Професійні барбери, які створюють стильні чоловічі образи
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 1,
              flexShrink: 0,
              ml: 3,
            }}
          >
            <CarouselButton
              direction="left"
              enabled={canScrollLeft}
              onClick={() => scroll("left")}
            />
            <CarouselButton
              direction="right"
              enabled={canScrollRight}
              onClick={() => scroll("right")}
            />
          </Box>
        </Box>
      </Box>

      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
          px: { xs: 2, sm: 3 },
          mx: "auto",
        }}
      >
        {barbers.map((barber) => (
          <Box
            key={barber.id}
            sx={{
              scrollSnapAlign: "start",
              minWidth: { xs: 220, sm: 260, md: 280 },
              maxWidth: 300,
              flexShrink: 0,
            }}
          >
            <BarberCard barber={barber} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
