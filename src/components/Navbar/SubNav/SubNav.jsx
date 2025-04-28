import {
  Box,
  Button,
  IconButton,
  Collapse,
  useMediaQuery,
  Popper,
  Paper,
  Typography,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useState } from "react";
import styles from "./SubNav.module.scss";

const SubNav = () => {
  const isMobile = useMediaQuery("(max-width:786px)");
  const [openAccordion, setOpenAccordion] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const toggleAccordion = () => {
    setOpenAccordion((prev) => !prev);
  };

  return (
    <>
      <Box className={styles.subNav}>
        <span className={styles.section}>Active Integration</span>
        <Box className={styles.actions}>
          {!isMobile ? (
            <>
              <Button
                className={styles.productsBtn}
                endIcon={<ExpandMore htmlColor="var(--color-dark)" />}
                onClick={handleClick}
              >
                Products
              </Button>
              <Popper
                open={open}
                anchorEl={anchorEl}
                placement="bottom-start"
                className={styles.popperWrapper}
                zIndex={1}
              >
                <Box className={styles.arrow}></Box>
                <Paper
                  sx={{
                    borderRadius: "0",
                  }}
                >
                  <Typography variant="body2" className={styles.popperTitle}>
                    Teamcenter Gateway for Enterprise Applications
                  </Typography>
                  <Typography variant="body2" className={styles.popperTitle}>
                    Teamcenter Gateway for Oracle E-business Suite
                  </Typography>
                  <Typography variant="body2" className={styles.popperTitle}>
                    Teamcenter Gateway for SAP Business Suite
                  </Typography>
                  <Typography variant="body2" className={styles.popperTitle}>
                    Teamcenter Product Cost Management Gateways
                  </Typography>
                </Paper>
              </Popper>
              <Button
                className={styles.productsBtn}
                style={{ backgroundColor: "var(--color-grey)" }}
                component="a"
                href="#"
              >
                Consulting
              </Button>
              <Button
                className={styles.contactBtn}
                variant="contained"
                disableElevation
                component="a"
                href="#"
              >
                Contact us
              </Button>
            </>
          ) : (
            <IconButton onClick={toggleAccordion}>
              {openAccordion ? (
                <ExpandLess htmlColor="var(--color-dark)" />
              ) : (
                <ExpandMore htmlColor="var(--color-dark)" />
              )}
            </IconButton>
          )}
        </Box>
      </Box>

      {isMobile && (
        <Collapse in={openAccordion}>
          <Box className={styles.mobileAccordion}>
            <Button
              fullWidth
              endIcon={<ExpandMore />}
              className={`${styles.btn} ${styles.borderBottom}`}
            >
              Products
            </Button>
            <Button
              fullWidth
              className={`${styles.btn} ${styles.consultingBtn}`}
            >
              Consulting
            </Button>
            <Button
              disableElevation
              className={`${styles.btn} ${styles.contactUsBtn}`}
            >
              Contact us
            </Button>
          </Box>
        </Collapse>
      )}
    </>
  );
};

export default SubNav;
