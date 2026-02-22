"use client";

import { useState } from "react";
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
  Typography,
  Divider,
} from "@eleks-ui/components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import { PHONE, PHONE_HREF, BOOKING_URL } from "../data/contacts";

const NAV_ITEMS = [
  { label: "Послуги", href: "#services" },
  { label: "Команда", href: "#team" },
  { label: "Telegram-бот", href: "#telegram-bot" },
  { label: "Контакти", href: "#contacts" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/" + href);
    }
  };

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

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
            minHeight: { xs: 64, sm: 72 },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
            onClick={handleLogoClick}
          >
            <Image
              src="/images/logos/logo 1.png"
              alt="Barberry Barbers — чоловічий барбершоп у Львові"
              width={180}
              height={50}
              style={{ height: "auto", width: "auto", maxHeight: 40, maxWidth: 160 }}
              priority
            />
          </Box>

          <Box
            component="nav"
            aria-label="Головна навігація"
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                style={{
                  color: "var(--barberry-sage)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1A140")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {item.label}
              </a>
            ))}

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
            <Image
              src="/images/logos/logo 1.png"
              alt="Barberry Barbers"
              width={140}
              height={40}
              style={{ height: "auto", maxHeight: 36 }}
            />
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

          <Divider sx={{ borderColor: "rgba(225,161,64,0.15)", mb: 3 }} />

          <Stack spacing={0}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={`/${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  padding: "14px 12px",
                  display: "block",
                  color: "var(--barberry-sage)",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#E1A140";
                  e.currentTarget.style.backgroundColor = "rgba(225,161,64,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {item.label}
              </a>
            ))}
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
