import { Box, Drawer, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
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

const DesktopDrawer = ({ open, close, subMenu }) => {
  console.log(subMenu);
  return (
    <Drawer
      anchor="left"
    //   slotProps={{ backdrop: { style: { opacity: 0 } } }}
      PaperProps={{
        sx: {
          width: "100%",
          height: "100%",
          backgroundColor: "var(--color-interactive-coral-8-db)",
          color: "var(--color-primary-light)",
          top: "145px",
        //   zIndex: 9999,
        },
      }}
      open={open}
      onClose={close}
    >
      <Box
        // p={2}
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
        <Grid container mt={3} justifyContent="space-between">
          <Grid size={3} borderRight={1}>
            <Typography variant="h6">{subMenu.label}</Typography>
          </Grid>
          <Grid size={2.5}>Item1</Grid>
          <Grid size={2.5}>Item1</Grid>
          <Grid size={3}>Item1</Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};

export default DesktopDrawer;
