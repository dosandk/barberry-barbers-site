"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { Box, Typography, Modal } from "@eleks-ui/components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import { portfolioImages } from "../data/portfolio";

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

export function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImage = lightboxIndex !== null ? portfolioImages[lightboxIndex] : null;

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
    const itemWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 280;
    const gap = 16;
    const distance = (itemWidth + gap) * 2;
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  };

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : i === 0 ? portfolioImages.length - 1 : i - 1
    );
  }, []);
  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : i === portfolioImages.length - 1 ? 0 : i + 1
    );
  }, []);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    if (lightboxIndex !== null) {
      document.addEventListener("keydown", handleKeydown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <Box
      component="section"
      id="portfolio"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        bgcolor: "var(--barberry-cream)",
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
              Наші роботи
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                color: "rgba(83, 34, 0, 0.6)",
              }}
            >
              Приклади стрижок та образів від Barberry Barbers
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
          pb: 1,
        }}
      >
        {portfolioImages.map((src, index) => (
          <Box
            key={`${src}-${index}`}
            component="button"
            onClick={() => setLightboxIndex(index)}
            aria-label={`Відкрити приклад роботи ${index + 1} у великому форматі`}
            sx={{
              scrollSnapAlign: "start",
              minWidth: { xs: 280, sm: 320, md: 373 },
              width: { xs: 280, sm: 320, md: 373 },
              flexShrink: 0,
              position: "relative",
              aspectRatio: "3 / 4",
              borderRadius: 3,
              overflow: "hidden",
              bgcolor: "var(--barberry-sage)",
              border: "1px solid rgba(22, 65, 40, 0.08)",
              p: 0,
              cursor: "pointer",
              display: "block",
              textAlign: "left",
              "&:hover": { borderColor: "var(--barberry-green)" },
            }}
          >
            <Image
              src={src}
              alt={`Приклад роботи Barberry Barbers — ${index + 1}`}
              fill
              sizes="(max-width: 600px) 280px, (max-width: 960px) 320px, 373px"
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>

      <Modal
        open={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 1, sm: 2 },
          "& .MuiBackdrop-root": { bgcolor: "rgba(0,0,0,0.85)" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "min(90vw, 1000px)",
            height: "min(90vh, 700px)",
            outline: "none",
          }}
        >
          <Box
            component="button"
            aria-label="Закрити"
            onClick={() => setLightboxIndex(null)}
            sx={{
              position: "absolute",
              top: { xs: 8, sm: -48 },
              right: { xs: 8, sm: 0 },
              color: "white",
              zIndex: 2,
              minWidth: 44,
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              borderRadius: "50%",
              cursor: "pointer",
              bgcolor: { xs: "rgba(0,0,0,0.5)", sm: "transparent" },
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
            }}
          >
            <CloseIcon />
          </Box>

          <Box
            component="button"
            aria-label="Попереднє фото"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              goPrev();
            }}
            sx={{
              position: "absolute",
              left: { xs: 8, sm: -56 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              zIndex: 2,
              minWidth: 44,
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "50%",
              cursor: "pointer",
              bgcolor: "rgba(0,0,0,0.4)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
            }}
          >
            <ChevronLeftIcon />
          </Box>
          <Box
            component="button"
            aria-label="Наступне фото"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              goNext();
            }}
            sx={{
              position: "absolute",
              right: { xs: 8, sm: -56 },
              top: "50%",
              transform: "translateY(-50%)",
              color: "white",
              zIndex: 2,
              minWidth: 44,
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "50%",
              cursor: "pointer",
              bgcolor: "rgba(0,0,0,0.4)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
            }}
          >
            <ChevronRightIcon />
          </Box>

          {lightboxImage && (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image
                src={lightboxImage}
                alt="Приклад роботи Barberry Barbers — великий формат"
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
              />
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
