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
          sx={(theme) => ({
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: 2,
            minHeight: 56,
            [theme.breakpoints.up("sm")]: { px: 3, minHeight: 64 },
            justifyContent: "space-between",
            alignItems: "center",
          })}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
          >
            <Image
              src="/images/logos/logo-light.webp"
              alt="Barberry Barbers — чоловічий барбершоп у Львові"
              width={180}
              height={50}
              style={{
                height: "auto",
                width: "auto",
                maxHeight: 32,
                maxWidth: 110,
                display: "block",
              }}
              priority
              sizes="(max-width: 600px) 110px, 150px"
            />
          </Link>

          {/* Desktop nav — hidden below md (900px) */}
          <Box
            component="nav"
            aria-label="Навігація по головній сторінці"
            sx={(theme) => ({
              display: "none",
              [theme.breakpoints.up("md")]: { display: "flex" },
              alignItems: "center",
              gap: 3,
            })}
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

            <Box sx={{ width: "1px", height: 24, bgcolor: "rgba(225,161,64,0.2)", mx: 0.5 }} />

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

          {/* Mobile: burger only — hidden from md (900px) up */}
          <Box
            component="button"
            aria-label="Відкрити меню"
            onClick={() => setMobileOpen(true)}
            sx={(theme) => ({
              display: "flex",
              [theme.breakpoints.up("md")]: { display: "none" },
              background: "none",
              border: "none",
              cursor: "pointer",
              p: 1,
              m: 0,
              width: 44,
              height: 44,
              alignItems: "center",
              justifyContent: "center",
              color: "var(--barberry-sage)",
              flexShrink: 0,
              borderRadius: 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
            })}
          >
            <MenuIcon sx={{ fontSize: 26 }} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: (theme) => ({
            width: "100%",
            maxWidth: "100%",
            [theme.breakpoints.up("sm")]: { maxWidth: 360 },
            bgcolor: "var(--barberry-green)",
            color: "var(--barberry-white)",
            display: "flex",
            flexDirection: "column",
          }),
        }}
      >
        {/* Drawer header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2.5,
            py: 1.5,
            borderBottom: "1px solid rgba(225,161,64,0.15)",
            flexShrink: 0,
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/images/logos/logo-light.webp"
              alt="Barberry Barbers"
              width={140}
              height={40}
              style={{ height: "auto", width: "auto", maxHeight: 30, maxWidth: 110, display: "block" }}
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
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--barberry-sage)",
              borderRadius: 1,
              flexShrink: 0,
              "&:hover": { bgcolor: "rgba(255,255,255,0.08)" },
            }}
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </Box>
        </Box>

        {/* Scrollable nav content */}
        <Box sx={{ flex: 1, overflowY: "auto", px: 2, py: 2 }}>
          {/* Quick actions */}
          <Stack direction="row" spacing={1.5} sx={{ mb: 2.5 }}>
            <a
              href={PHONE_HREF}
              style={{ flex: 1, textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  bgcolor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(225,161,64,0.2)",
                  borderRadius: 2,
                  py: 1.25,
                  color: "var(--barberry-sand)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  minHeight: 44,
                }}
              >
                <PhoneIcon sx={{ fontSize: 18 }} />
                {PHONE}
              </Box>
            </a>
          </Stack>

          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ display: "block", marginBottom: 20 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "var(--barberry-gold)",
                color: "var(--barberry-green)",
                fontWeight: 700,
                borderRadius: 2,
                py: 1.25,
                textTransform: "none",
                fontSize: "1rem",
                minHeight: 48,
                "&:hover": { bgcolor: "#EABB6A" },
              }}
            >
              Записатися онлайн
            </Button>
          </a>

          <Divider sx={{ borderColor: "rgba(225,161,64,0.15)", mb: 2 }} />

          <Typography
            sx={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--barberry-gold)",
              mb: 1,
              px: 0.5,
            }}
          >
            Головна сторінка
          </Typography>
          <Stack spacing={0} sx={{ mb: 2 }}>
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
                    fontSize: "1rem",
                    fontWeight: active ? 600 : 400,
                    padding: "11px 10px",
                    display: "block",
                    color: active ? "#E1A140" : "var(--barberry-sage)",
                    textDecoration: "none",
                    borderRadius: 8,
                    transition: "all 0.15s",
                    backgroundColor: active ? "rgba(225,161,64,0.1)" : "transparent",
                    minHeight: 44,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(225,161,64,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = active ? "rgba(225,161,64,0.1)" : "transparent";
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </Stack>

          <Divider sx={{ borderColor: "rgba(225,161,64,0.12)", mb: 2 }} />

          <Typography
            sx={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--barberry-gold)",
              mb: 1,
              px: 0.5,
            }}
          >
            Сторінки
          </Typography>
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
                    fontSize: "1rem",
                    fontWeight: active ? 600 : 400,
                    padding: "11px 10px",
                    display: "block",
                    color: active ? "#E1A140" : "var(--barberry-sage)",
                    textDecoration: "none",
                    borderRadius: 8,
                    transition: "all 0.15s",
                    backgroundColor: active ? "rgba(225,161,64,0.1)" : "transparent",
                    minHeight: 44,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(225,161,64,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = active ? "rgba(225,161,64,0.1)" : "transparent";
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
