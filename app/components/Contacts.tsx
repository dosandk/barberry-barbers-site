import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Divider,
  IconButton,
  Chip,
} from "@eleks-ui/components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TelegramIcon from "@mui/icons-material/Telegram";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {
  PHONE,
  PHONE_HREF,
  TELEGRAM_BOT_URL,
  SHOP_URL,
  SOCIAL_LINKS,
  WORKING_HOURS,
  WORKING_HOURS_NOTE,
  locations,
} from "../data/contacts";

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          bgcolor: "var(--barberry-sage)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "var(--barberry-green)",
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "rgba(83,34,0,0.5)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            mb: 0.3,
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.95rem", sm: "1rem" },
            fontWeight: 500,
            color: "var(--barberry-dark)",
            lineHeight: 1.5,
            whiteSpace: "pre-line",
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        style={{ textDecoration: "none", display: "block" }}
      >
        {inner}
      </a>
    );
  }

  return inner;
}

export function Contacts() {
  return (
    <Box
      component="section"
      id="contacts"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3 },
        bgcolor: "var(--barberry-cream)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem" },
              fontWeight: 800,
              color: "var(--barberry-green)",
              mb: 1.5,
            }}
          >
            Контакти
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              color: "rgba(83, 34, 0, 0.6)",
              maxWidth: 560,
              mx: "auto",
            }}
          >
            Два зручних салони у Львові — оберіть найближчий
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 2.5, md: 3 },
            mb: { xs: 4, md: 5 },
          }}
        >
          {locations.map((location) => (
            <Card
              key={location.id}
              sx={{
                bgcolor: "var(--barberry-white)",
                border: "1px solid rgba(22, 65, 40, 0.08)",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              {location.mapEmbed && (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 200, sm: 220 },
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    src={location.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Карта — ${location.name}`}
                  />
                  {location.comingSoon && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        bgcolor: "var(--barberry-gold)",
                        color: "var(--barberry-green)",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        letterSpacing: "0.03em",
                        px: 2,
                        py: 0.75,
                        borderRadius: 5,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.75,
                      }}
                    >
                      <NewReleasesIcon sx={{ fontSize: 16 }} />
                      Скоро відкриття
                    </Box>
                  )}
                </Box>
              )}

              <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <LocationOnIcon sx={{ color: "var(--barberry-green)", fontSize: 28 }} />
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: "1.05rem", sm: "1.15rem" },
                      fontWeight: 700,
                      color: "var(--barberry-green)",
                    }}
                  >
                    {location.name}
                  </Typography>
                  {location.comingSoon && (
                    <Chip
                      label="Скоро відкриття"
                      size="small"
                      sx={{
                        bgcolor: "rgba(225,161,64,0.15)",
                        color: "var(--barberry-burnt-orange)",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        height: 26,
                        borderRadius: 1.5,
                      }}
                    />
                  )}
                </Box>

                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    color: "rgba(83,34,0,0.7)",
                    lineHeight: 1.6,
                    mb: 2.5,
                    pl: 0.5,
                  }}
                >
                  {location.address}
                </Typography>

                {location.mapUrl && (
                  <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<LocationOnIcon />}
                      sx={{
                        borderColor: "var(--barberry-green)",
                        color: "var(--barberry-green)",
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 2,
                        py: 1,
                        "&:hover": {
                          bgcolor: "rgba(22, 65, 40, 0.04)",
                          borderColor: "var(--barberry-green)",
                        },
                      }}
                    >
                      Відкрити на карті
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>

        <Card
          sx={{
            bgcolor: "var(--barberry-white)",
            border: "1px solid rgba(22, 65, 40, 0.08)",
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
                gap: { xs: 3, sm: 3, md: 4 },
              }}
            >
              <ContactInfoItem
                icon={<PhoneIcon />}
                label="Телефон"
                value={PHONE}
                href={PHONE_HREF}
              />
              <ContactInfoItem
                icon={<AccessTimeIcon />}
                label="Графік роботи"
                value={`${WORKING_HOURS}\n${WORKING_HOURS_NOTE}`}
              />
              <ContactInfoItem
                icon={<TelegramIcon />}
                label="Telegram Бот"
                value="Запис через Telegram"
                href={TELEGRAM_BOT_URL}
              />
              <ContactInfoItem
                icon={<StorefrontIcon />}
                label="Магазин косметики"
                value="barberry-barbers.store"
                href={SHOP_URL}
              />
            </Box>

            <Divider sx={{ my: 3 }} />

            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  color: "rgba(83,34,0,0.5)",
                  fontWeight: 500,
                }}
              >
                Ми в соцмережах:
              </Typography>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Barberry Barbers"
              >
                <IconButton
                  aria-label="Instagram"
                  sx={{
                    color: "var(--barberry-green)",
                    "&:hover": { bgcolor: "rgba(22, 65, 40, 0.08)" },
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </IconButton>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Barberry Barbers"
              >
                <IconButton
                  aria-label="Facebook"
                  sx={{
                    color: "var(--barberry-green)",
                    "&:hover": { bgcolor: "rgba(22, 65, 40, 0.08)" },
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </IconButton>
              </a>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
