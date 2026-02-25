"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  Stack,
  Divider,
  Typography,
} from "@eleks-ui/components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { PHONE, PHONE_HREF, BOOKING_URL } from "../data/contacts";

// Секції головної сторінки
const SECTION_NAV_ITEMS = [
  { label: "Послуги та ціни", href: "#services" },
  { label: "Наша команда", href: "#team" },
  { label: "Telegram бот", href: "#telegram-bot" },
  { label: "Контакти", href: "#contacts" },
];

// Сторінки (як у футері) — для мобільного меню
const PAGE_NAV_ITEMS = [
  { label: "Головна", href: "/", isHome: true },
  { label: "Telegram-бот", href: "/telegram-bot" },
  { label: "Сертифікати", href: "/certificates" },
  { label: "Корпоративним клієнтам", href: "/corporate" },
  { label: "Кафе", href: "/cafe" },
  { label: "Контакти", href: "/contacts" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    setHash(typeof window !== "undefined" ? window.location.hash : "");
    const handler = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const isSectionActive = (item: (typeof SECTION_NAV_ITEMS)[number]) => {
    return isHome && hash === item.href;
  };

  const isPageActive = (item: (typeof PAGE_NAV_ITEMS)[number]) => {
    if (item.isHome) return isHome && !hash;
    return pathname === item.href;
  };

  const handleSectionClick = (item: (typeof SECTION_NAV_ITEMS)[number]) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.querySelector(item.href);
      el?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", "/" + item.href);
      setHash(item.href);
    } else {
      router.push("/" + item.href);
    }
  };

  const handlePageClick = (item: (typeof PAGE_NAV_ITEMS)[number]) => {
    setMobileOpen(false);
    if (item.isHome) {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/");
        setHash("");
      } else {
        router.push("/");
      }
    } else {
      router.push(item.href);
    }
  };

  const navLinkStyles = (active: boolean): React.CSSProperties => ({
    color: active ? "#E1A140" : "var(--barberry-sage)",
    fontSize: "0.9rem",
    fontWeight: active ? 600 : 500,
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 0.2s",
  });

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "var(--barberry-green)",
          borderBottom: "1px solid rgba(225,161,64,0.15)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: { xs: 2, sm: 3 },
            minHeight: { xs: 56, sm: 64 },
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            <Image
              src="/images/logos/logo-light.webp"
              alt="Barberry Barbers — чоловічий барбершоп у Львові"
              width={180}
              height={50}
              style={{ height: "auto", width: "auto", maxHeight: 36, maxWidth: 150 }}
              priority
            />
          </Link>

          <Box
            component="nav"
            aria-label="Навігація по головній сторінці"
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}
          >
            {SECTION_NAV_ITEMS.map((item) => {
              const active = isSectionActive(item);
              return (
                <a
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(item);
                  }}
                  title="Перейти до розділу"
                  aria-label={`Перейти до розділу: ${item.label}`}
                  style={navLinkStyles(active)}
                  onMouseEnter={(e) =>
                    !active && (e.currentTarget.style.setProperty("color", "#E1A140"))
                  }
                  onMouseLeave={(e) =>
                    !active && (e.currentTarget.style.setProperty("color", "var(--barberry-sage)"))
                  }
                >
                  {item.label}
                </a>
              );
            })}

            <Box
              sx={{
                width: "1px",
                height: 24,
                bgcolor: "rgba(225,161,64,0.2)",
                mx: 0.5,
              }}
            />

            <a
              href={PHONE_HREF}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "var(--barberry-sand)",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1A140")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <PhoneIcon sx={{ fontSize: 18 }} />
              {PHONE}
            </a>

            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "var(--barberry-gold)",
                  color: "var(--barberry-green)",
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 3,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  "&:hover": { bgcolor: "#EABB6A" },
                }}
              >
                Записатися
              </Button>
            </a>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 0.5 }}>
            <a href={PHONE_HREF} aria-label="Зателефонувати">
              <IconButton aria-label="Зателефонувати" sx={{ color: "var(--barberry-sand)" }}>
                <PhoneIcon />
              </IconButton>
            </a>
            <Box
              component="button"
              aria-label="Відкрити меню"
              onClick={() => setMobileOpen(true)}
              sx={{
                background: "none",
                border: "none",
                cursor: "pointer",
                p: 1,
                display: "flex",
                alignItems: "center",
                color: "var(--barberry-sage)",
              }}
            >
              <MenuIcon />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 360,
            bgcolor: "var(--barberry-green)",
            color: "var(--barberry-white)",
          },
        }}
      >
        <Box sx={{ p: 2.5 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Link href="/" style={{ display: "flex", textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logos/logo-light.webp"
                alt="Barberry Barbers"
                width={140}
                height={40}
                style={{ height: "auto", width: "auto", maxHeight: 36 }}
              />
            </Link>
            <Box
              component="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Закрити меню"
              sx={{
                background: "none",
                border: "none",
                cursor: "pointer",
                p: 1,
                display: "flex",
                alignItems: "center",
                color: "var(--barberry-sage)",
              }}
            >
              <CloseIcon />
            </Box>
          </Box>

          <Divider sx={{ borderColor: "rgba(225,161,64,0.15)", mb: 2 }} />

          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--barberry-gold)",
              mb: 1.5,
              px: 1.5,
            }}
          >
            На головній сторінці
          </Typography>
          <Divider sx={{ borderColor: "rgba(225,161,64,0.2)", mb: 1.5 }} />
          <Stack spacing={0} sx={{ mb: 3 }}>
            {SECTION_NAV_ITEMS.map((item) => {
              const active = isSectionActive(item);
              return (
                <a
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(item);
                  }}
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: active ? 600 : 500,
                    cursor: "pointer",
                    padding: "12px 14px",
                    display: "block",
                    color: active ? "#E1A140" : "var(--barberry-sage)",
                    textDecoration: "none",
                    borderRadius: 8,
                    transition: "all 0.2s",
                    backgroundColor: active ? "rgba(225,161,64,0.12)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#E1A140";
                    e.currentTarget.style.backgroundColor = "rgba(225,161,64,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = active ? "#E1A140" : "";
                    e.currentTarget.style.backgroundColor = active
                      ? "rgba(225,161,64,0.12)"
                      : "transparent";
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </Stack>

          <Divider sx={{ borderColor: "rgba(225,161,64,0.2)", my: 2 }} />

          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--barberry-gold)",
              mb: 1.5,
              px: 1.5,
            }}
          >
            Сторінки
          </Typography>
          <Divider sx={{ borderColor: "rgba(225,161,64,0.2)", mb: 1.5 }} />
          <Stack spacing={0}>
            {PAGE_NAV_ITEMS.map((item) => {
              const active = isPageActive(item);
              const href = item.isHome ? "/" : item.href;
              return (
                <a
                  key={item.href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageClick(item);
                  }}
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: active ? 600 : 500,
                    cursor: "pointer",
                    padding: "12px 14px",
                    display: "block",
                    color: active ? "#E1A140" : "var(--barberry-sage)",
                    textDecoration: "none",
                    borderRadius: 8,
                    transition: "all 0.2s",
                    backgroundColor: active ? "rgba(225,161,64,0.12)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#E1A140";
                    e.currentTarget.style.backgroundColor = "rgba(225,161,64,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = active ? "#E1A140" : "";
                    e.currentTarget.style.backgroundColor = active
                      ? "rgba(225,161,64,0.12)"
                      : "transparent";
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </Stack>

          <Divider sx={{ borderColor: "rgba(225,161,64,0.15)", my: 3 }} />

          <a
            href={PHONE_HREF}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "var(--barberry-sand)",
              fontSize: "1.1rem",
              fontWeight: 600,
              marginBottom: 24,
              textDecoration: "none",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(225,161,64,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--barberry-gold)",
                flexShrink: 0,
              }}
            >
              <PhoneIcon sx={{ fontSize: 20 }} />
            </Box>
            {PHONE}
          </a>

          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "var(--barberry-gold)",
                color: "var(--barberry-green)",
                fontWeight: 700,
                borderRadius: 2,
                py: 1.5,
                textTransform: "none",
                fontSize: "1.1rem",
                "&:hover": { bgcolor: "#EABB6A" },
              }}
            >
              Записатися онлайн
            </Button>
          </a>
        </Box>
      </Drawer>
    </>
  );
}
