"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Tabs,
  Tab,
} from "@eleks-ui/components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { serviceCategories, type ServiceCategory } from "../data/services";
import { BOOKING_URL } from "../data/contacts";

const SERVICE_ICONS = [
  "/images/icons/icon 1.png",
  "/images/icons/icon 3.png",
  "/images/icons/icon 4.png",
  "/images/icons/icon 2.png",
  "/images/icons/icon 5.png",
  "/images/icons/icon 6.png",
];

function ServiceCard({
  service,
  index,
}: {
  service: ServiceCategory["services"][number];
  index: number;
}) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "flex" }}
    >
      <Card
        sx={{
          bgcolor: "var(--barberry-white)",
          border: "1px solid rgba(22, 65, 40, 0.08)",
          borderRadius: 3,
          transition: "all 0.25s ease",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          "&:hover": {
            transform: { sm: "translateY(-4px)" },
            boxShadow: "0 8px 32px rgba(22, 65, 40, 0.12)",
            borderColor: "var(--barberry-green)",
          },
        }}
      >
        <CardContent sx={{ p: { xs: 2.5, sm: 3 }, flex: 1, display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              <Image
                src={SERVICE_ICONS[index % SERVICE_ICONS.length]}
                alt=""
                width={48}
                height={48}
                style={{ width: 48, height: 48 }}
                aria-hidden="true"
              />
            </Box>

            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.05rem" },
                  fontWeight: 700,
                  color: "var(--barberry-green)",
                  lineHeight: 1.3,
                  mb: 0.5,
                }}
              >
                {service.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--barberry-dark)",
                }}
              >
                {service.price}
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "rgba(83, 34, 0, 0.7)",
              lineHeight: 1.6,
              flex: 1,
              mb: 2,
            }}
          >
            {service.description}
          </Typography>

          <Chip
            icon={<AccessTimeIcon sx={{ fontSize: 16 }} />}
            label={service.duration}
            size="small"
            sx={{
              alignSelf: "flex-start",
              bgcolor: "var(--barberry-sage)",
              color: "var(--barberry-green)",
              fontWeight: 600,
              fontSize: "0.8rem",
              "& .MuiChip-icon": { color: "var(--barberry-green)" },
            }}
          />
        </CardContent>
      </Card>
    </a>
  );
}

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = serviceCategories[activeTab];

  return (
    <Box
      component="section"
      id="services"
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
            Послуги та ціни
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              color: "rgba(83, 34, 0, 0.6)",
              maxWidth: 560,
              mx: "auto",
            }}
          >
            Оберіть категорію майстра та послугу, яка вам підходить
          </Typography>
        </Box>

        <Box
          sx={{
            mb: { xs: 3, sm: 4 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={(_, newValue: number) => setActiveTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="Категорії майстрів"
            sx={{
              "& .MuiTabs-indicator": {
                bgcolor: "var(--barberry-green)",
                height: 3,
                borderRadius: 2,
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                color: "rgba(83, 34, 0, 0.5)",
                minHeight: 48,
                px: { xs: 2, sm: 3 },
                "&.Mui-selected": {
                  color: "var(--barberry-green)",
                },
              },
            }}
          >
            {serviceCategories.map((cat) => (
              <Tab key={cat.id} label={cat.name} />
            ))}
          </Tabs>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, sm: 2.5, md: 3 },
          }}
        >
          {activeCategory.services.map((service, index) => (
            <ServiceCard
              key={`${activeCategory.id}-${service.name}`}
              service={service}
              index={index}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
