import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Divider,
  Stack,
} from "@mui/material";
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
import styles from "./TopNav.module.scss";
import { useEffect, useRef, useState } from "react";
import { menuItems, topNavItem } from "../../../data";
import DesktopDrawer from "../../../pages/Drawers/DesktopDrawer";

const TopNav = () => {
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const firstItemRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [subDrawerOpen, setSubDrawerOpen] = useState(false);
  const [nestedDrawerOpen, setNestedDrawerOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeNestedSubMenu, setActiveNestedSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const isMobile = useMediaQuery("(max-width:450px)");
  const isDesktop = useMediaQuery("(min-width:991px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
    setSubDrawerOpen(false);
    setNestedDrawerOpen(false);
  };

  const handleSubDrawerOpen = (menuItem) => {
    setActiveSubMenu(menuItem);
    setSubDrawerOpen(true);
  };
  const handleSubDrawerClose = () => {
    setActiveSubMenu(null);
    setSubDrawerOpen(false);
  };

  const handleNestedDrawerOpen = (menuItem) => {
    if (menuItem.hasUpArrow) {
      return window.open(menuItem.url, "_blank");
    }
    setActiveNestedSubMenu(menuItem);
    setNestedDrawerOpen(true);
  };

  const handleNestedDrawerClose = () => {
    setActiveNestedSubMenu(null);
    setNestedDrawerOpen(false);
  };

  const handleDesktopDrawerOpen = (menu) => {
    setSubMenu(menu);
    setOpenDesktopMenu(true);
  };

  const handleDesktopDraweClose = () => {
    setOpenDesktopMenu(false);
  };

  useEffect(() => {
    if (!isScrolled) return;
    const menu = menuRef.current;
    const firstItem = firstItemRef.current;
    if (!menu || !firstItem) return;

    const firstItemWidth = firstItem.offsetWidth + 16;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const distance = firstItemWidth * progress;

      setTranslateX(-distance);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isScrolled]);

  return (
    <>
      <Box
        className={`${styles.container} ${
          isScrolled && isDesktop ? styles.hidden : ""
        }`}
        ref={containerRef}
      >
        <Box
          className={styles.topNav}
          style={{
            paddingInline: drawerOpen
              ? "0.25rem"
              : isMobile
              ? "0.25rem"
              : "2rem",
          }}
        >
          <Box
            display="flex"
            gap={1}
            justifyContent="center"
            alignItems="center"
          >
            <Box className={styles.hamburger}>
              <IconButton onClick={handleDrawerOpen}>
                {drawerOpen ? (
                  <CloseIcon htmlColor="white" />
                ) : (
                  <MenuIcon htmlColor="white" />
                )}
              </IconButton>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                backgroundColor: "var(--color-coral-interactive)",
                width: "1px",
                height: "24px",
                alignSelf: "center",
                marginRight: "5px",
              }}
              className={styles.hamburger}
            />
            <Box className={styles.logo}></Box>
          </Box>
          <Box className={styles.icons}>
            <IconButton>
              <Search htmlColor="var( --color-primary-light)" />
            </IconButton>
            <Typography className={styles.lang}>EN</Typography>
            <IconButton>
              <ShoppingCart
                variant="outlined"
                htmlColor="var( --color-primary-light)"
              />
            </IconButton>
            <IconButton>
              <PersonOutline htmlColor="var( --color-primary-light)" />
              <Typography className={styles.login} color="white">
                Log in
              </Typography>
            </IconButton>
          </Box>
        </Box>
        <Box className={styles.menu}>
          {topNavItem.map((item, index) => (
            <Typography
              key={index}
              component="span"
              className={`${item.isActive ? styles.active : ""}`}
              onClick={() => handleDesktopDrawerOpen(item)}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box
        className={`${styles.scrollNav} ${!isScrolled ? styles.hidden : ""}`}
      >
        <Box className={styles.menuWrapper}>
          <Box
            className={styles.menu}
            ref={menuRef}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {topNavItem.map((item, index) => (
              <Typography
                key={index}
                component="span"
                ref={index === 0 ? firstItemRef : null}
                className={index === 0 ? styles.active : ""}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box className={styles.icons}>
          <IconButton>
            <Search htmlColor="var(--color-primary-light)" />
          </IconButton>
          <Typography className={styles.lang}>EN</Typography>
          <IconButton>
            <ShoppingCart htmlColor="var(--color-primary-light)" />
          </IconButton>
          <IconButton>
            <PersonOutline htmlColor="var(--color-primary-light)" />
            <Typography className={styles.login} color="white">
              Log in
            </Typography>
          </IconButton>
        </Box>
      </Box>

      {/* main drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerOpen}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "var(--color-interactive-coral-8-db)",
            color: "var(--color-primary-light)",
            marginTop: "74px",
          },
        }}
      >
        <List sx={{ paddingBottom: "6rem" }}>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={
                item.hasSubMenu ? () => handleSubDrawerOpen(item) : undefined
              }
            >
              <ListItemText
                primary={item.title}
                className={item.className ? item.className : ""}
                sx={`${
                  item.hasBorder
                    ? "border-bottom: 1px solid var(--color-interactive-coral-50-db); padding-bottom: 1.5rem;"
                    : ""
                }`}
              />
              {item.hasSubMenu && (
                <IconButton edge="end" size="small">
                  <ChevronRight htmlColor="var(--color-primary-light)" />
                </IconButton>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Sub Drawer */}
      <Drawer
        anchor="right"
        open={subDrawerOpen}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "var(--color-interactive-coral-8-db)",
            color: "var(--color-primary-light)",
            marginTop: "74px",
          },
        }}
      >
        <Box sx={{ px: 1.5, pt: 3, pb: 1 }}>
          <Stack direction="row" alignItems="center" gap={2} pb={2}>
            <TurnLeft htmlColor="white" onClick={handleSubDrawerClose} />
            <Typography variant="h6">{activeSubMenu?.title}</Typography>
          </Stack>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ backgroundColor: "var(--color-interactive-coral-50-db)" }}
          />
        </Box>
        <List sx={{ paddingBottom: "6rem", pt: 0 }}>
          {activeSubMenu?.subMenu.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={
                item.hasSubMenu || item.hasUpArrow
                  ? () => handleNestedDrawerOpen(item)
                  : undefined
              }
            >
              <ListItemText
                primary={item.title}
                sx={`${
                  item.hasBorder
                    ? "border-bottom: 1px solid var(--color-interactive-coral-50-db); padding-bottom: 1.5rem;"
                    : ""
                }`}
              />
              {item.hasSubMenu && (
                <IconButton edge="end" size="small">
                  <ChevronRight htmlColor="var(--color-primary-light)" />
                </IconButton>
              )}
              {item.hasUpArrow && (
                <IconButton edge="start" size="small">
                  <NorthEast htmlColor="var(--color-primary-light)" />
                </IconButton>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Nested Sub Drawer */}
      {activeNestedSubMenu?.subMenu && (
        <Drawer
          anchor="left"
          open={nestedDrawerOpen}
          PaperProps={{
            sx: {
              width: "100%",
              height: "100%",
              backgroundColor: "var(--color-interactive-coral-8-db)",
              color: "var(--color-primary-light)",
              marginTop: "74px",
            },
          }}
        >
          <Box sx={{ px: 1.5, pt: 3, pb: 1 }}>
            <Stack direction="row" alignItems="center" gap={2} pb={2}>
              <TurnLeft htmlColor="white" onClick={handleNestedDrawerClose} />
              <Typography variant="h6">{activeNestedSubMenu?.title}</Typography>
            </Stack>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ backgroundColor: "var(--color-interactive-coral-50-db)" }}
            />
          </Box>
          <List sx={{ paddingBottom: "6rem", pt: 0 }}>
            {activeNestedSubMenu?.subMenu.map((item, index) => (
              <ListItem
                button
                key={index}
                onClick={
                  item.hasSubMenu
                    ? () => handleNestedDrawerOpen(item)
                    : undefined
                }
              >
                <ListItemText
                  primary={item.title}
                  className={item.className ? item.className : ""}
                  sx={`${
                    item.hasBorder
                      ? "border-bottom: 1px solid var(--color-interactive-coral-50-db); padding-bottom: 1.5rem;"
                      : ""
                  }`}
                />
                {item.hasSubMenu && (
                  <IconButton edge="end" size="small">
                    <ChevronRight htmlColor="var(--color-primary-light)" />
                  </IconButton>
                )}
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}

      {/* Desktop Drawer */}
      {subMenu && (
        <DesktopDrawer
          open={openDesktopMenu}
          subMenu={subMenu}
          close={handleDesktopDraweClose}
        />
      )}
    </>
  );
};

export default TopNav;
