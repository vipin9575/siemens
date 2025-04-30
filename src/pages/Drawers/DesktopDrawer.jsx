import {
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Search,
  ShoppingCart,
  PersonOutline,
  ChevronRight,
  TurnLeft,
  NorthEast,
} from "@mui/icons-material";

const menuData = [
  {
    section: "HOW TO BUY",
    links: [
      { label: "Buying with Siemens", href: "#" },
      { label: "Buy online", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Academics", href: "#" },
      { label: "Renewals", href: "#" },
      { label: "Refund policy", href: "#" },
    ],
  },
  {
    section: "QUICK LINKS",
    links: [
      { label: "Blogs", href: "#", external: true },
      { label: "Case studies", href: "#" },
      { label: "Technology glossary", href: "#" },
    ],
  },
];

const DesktopDrawer = ({ open, close, subMenu }) => {
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);

  useEffect(() => {
    if (subMenu?.subMenu?.length > 0) {
      setHoveredSubMenu(subMenu.subMenu[0]);
    }
  }, [subMenu]);

  return (
    <Drawer
      anchor="left"
      PaperProps={{
        sx: {
          width: "100%",
          height: "100%",
          backgroundColor: "var(--color-interactive-coral-8-db)",
          color: "var(--color-primary-light)",
          top: "145px",
        },
      }}
      open={open}
      onClose={close}
    >
      <Box
        sx={{
          position: "relative",
          width: "1280px",
          margin: "0 auto",
          padding: "1.5rem 2rem",
        }}
      >
        <IconButton
          onClick={close}
          sx={{ position: "absolute", top: "10px", right: "10px" }}
        >
          <CloseIcon htmlColor="var(--color-primary-light)" />
        </IconButton>
        <Grid container mt={3} alignItems="stretch">
          <Grid
            size={4}
            borderRight={1}
            borderColor={"#0ff"}
            px={2}
            height={"100%"}
            alignSelf="stretch"
          >
            <Typography
              gutterBottom
              variant="h6"
              sx={{ color: "var(--color-green-light)" }}
            >
              {subMenu.label}
            </Typography>
            <Box sx={{ mt: 2, pl: 2 }}>
              {subMenu.subMenu.map((item, index) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  key={index}
                  mb={2}
                  onMouseEnter={() => setHoveredSubMenu(item)}
                  sx={{
                    cursor: "pointer",
                    pl: "10px",
                    py: "5px",
                    "&:hover": {
                      color: "var(--color-green-light)",
                      backgroundColor: "var(--color-link-hover)",
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "inherit", "&:hover": { fontWeight: "bold" } }}
                  >
                    {item.title}
                  </Typography>
                  <ChevronRight
                    fontSize="small"
                    sx={{ color: "inherit", mr: 2 }}
                  />
                </Stack>
              ))}
            </Box>
          </Grid>
          <Grid size={5} sx={{ minHeight: "200px", px: 3 }}>
            <Grid container spacing={2}>
              {hoveredSubMenu ? (
                hoveredSubMenu.subMenu?.map((subItem, idx) => (
                  <Grid size={6} key={idx}>
                    <Typography variant="subtitle1" mb={1}>
                      {subItem.title}
                    </Typography>
                  </Grid>
                ))
              ) : (
                <Typography variant="body2">
                  Hover over a menu item to see details
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid size={3} px={3}>
            {menuData.map((section, i) => (
              <Box key={i} mb={4}>
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "var(--color-primary-light)" }}
                >
                  {section.section}
                </Typography>
                <Box
                  sx={{
                    borderBottom: "1px solid #0ff", // adjust color as needed
                    width: "100%",
                    mb: 2,
                  }}
                />
                {section.links.map((link, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      mb: 1.5,
                      cursor: "pointer",
                      color: "var(--color-primary-light)",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {link.label}
                    {link.external && <NorthEast sx={{ fontSize: 14 }} />}
                  </Typography>
                ))}
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default DesktopDrawer;
