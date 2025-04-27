import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./Footer.module.scss";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled, useTheme } from "@mui/material/styles";

const CommonAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "var(--color-primary-light)",
  boxShadow: "none",
  "&:before": {
    display: "none",
  },
}));

const CommonAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderBottom: "1px solid var(--color-grey)",
  paddingInline: 0,
  minHeight: 48,
  "& .MuiAccordionSummary-content": {
    marginY: theme.spacing(1),
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // sm = 600px

  return (
    <Box className={styles.footerContainer}>
      <Box className={styles.innerContainer}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4, lg: 3.5 }}>
            <Typography variant="h6" fontWeight="bold">
              SIEMENS
            </Typography>
            <Typography
              fontWeight="bold"
              sx={{ color: "var(--color-coral-interactive)", mt: 1, mb: 3 }}
            >
              Siemens Digital Industries Software
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton
                component="a"
                href="https://www.facebook.com/SiemensDISoftware/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/siemenssoftware"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <XIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/siemenssoftware/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/siemenssoftware/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com/SiemensSoftware"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 8, lg: 8.5 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                {isMobile ? (
                  <CommonAccordion>
                    <CommonAccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        Portfolio
                      </Typography>
                    </CommonAccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: 0, pt: 2 }}>
                      <Box display="flex" flexDirection="column" gap={1}>
                        <Link href="#" className={styles.link}>
                          Cloud
                        </Link>
                        <Link href="#" className={styles.link}>
                          Design, manufacturing & PLM software
                        </Link>
                        <Link href="#" className={styles.link}>
                          Electronic Design Automation
                        </Link>
                        <Link href="#" className={styles.link}>
                          Insights Hub
                        </Link>
                        <Link href="#" className={styles.link}>
                          Mendix
                        </Link>
                      </Box>
                    </AccordionDetails>
                  </CommonAccordion>
                ) : (
                  <>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Portfolio
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Link href="#" className={styles.link}>
                        Cloud
                      </Link>
                      <Link href="#" className={styles.link}>
                        Design, manufacturing & PLM software
                      </Link>
                      <Link href="#" className={styles.link}>
                        Electronic Design Automation
                      </Link>
                      <Link href="#" className={styles.link}>
                        Insights Hub
                      </Link>
                      <Link href="#" className={styles.link}>
                        Mendix
                      </Link>
                    </Box>
                  </>
                )}
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                {isMobile ? (
                  <CommonAccordion>
                    <CommonAccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        How to buy
                      </Typography>
                    </CommonAccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: 0, pt: 2 }}>
                      <Box display="flex" flexDirection="column" gap={1}>
                        <Link href="#" className={styles.link}>
                          Buying with Siemens
                        </Link>
                        <Link href="#" className={styles.link}>
                          Buy online
                        </Link>
                        <Link href="#" className={styles.link}>
                          Partners
                        </Link>
                        <Link href="#" className={styles.link}>
                          Academics
                        </Link>
                        <Link href="#" className={styles.link}>
                          Renewals
                        </Link>
                        <Link href="#" className={styles.link}>
                          Refund policy
                        </Link>
                      </Box>
                    </AccordionDetails>
                  </CommonAccordion>
                ) : (
                  <>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      How to buy
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Link href="#" className={styles.link}>
                        Buying with Siemens
                      </Link>
                      <Link href="#" className={styles.link}>
                        Buy online
                      </Link>
                      <Link href="#" className={styles.link}>
                        Partners
                      </Link>
                      <Link href="#" className={styles.link}>
                        Academics
                      </Link>
                      <Link href="#" className={styles.link}>
                        Renewals
                      </Link>
                      <Link href="#" className={styles.link}>
                        Refund policy
                      </Link>
                    </Box>
                  </>
                )}
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                {isMobile ? (
                  <CommonAccordion>
                    <CommonAccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        Siemens
                      </Typography>
                    </CommonAccordionSummary>
                    <AccordionDetails sx={{ px: 0, pb: 0, pt: 2 }}>
                      <Box display="flex" flexDirection="column" gap={1}>
                        <Link href="#" className={styles.link}>
                          About us
                        </Link>
                        <Link href="#" className={styles.link}>
                          Careers
                        </Link>
                        <Link href="#" className={styles.link}>
                          Community
                        </Link>
                        <Link href="#" className={styles.link}>
                          Events
                        </Link>
                        <Link href="#" className={styles.link}>
                          Leadership
                        </Link>
                        <Link href="#" className={styles.link}>
                          News & press
                        </Link>
                        <Link href="#" className={styles.link}>
                          Trust Center
                        </Link>
                      </Box>
                    </AccordionDetails>
                  </CommonAccordion>
                ) : (
                  <>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      Siemens
                    </Typography>
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Link href="#" className={styles.link}>
                        About us
                      </Link>
                      <Link href="#" className={styles.link}>
                        Careers
                      </Link>
                      <Link href="#" className={styles.link}>
                        Community
                      </Link>
                      <Link href="#" className={styles.link}>
                        Events
                      </Link>
                      <Link href="#" className={styles.link}>
                        Leadership
                      </Link>
                      <Link href="#" className={styles.link}>
                        News & press
                      </Link>
                      <Link href="#" className={styles.link}>
                        Trust Center
                      </Link>
                    </Box>
                  </>
                )}
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Contact
                </Typography>
                <Box display="flex" flexDirection="column" gap={1}>
                  <Link href="#" className={styles.link}>
                    PLM - Contact us
                  </Link>
                  <Link href="#" className={styles.link}>
                    EDA - Contact us
                  </Link>
                  <Link href="#" className={styles.link}>
                    Worldwide offices
                  </Link>
                  <Link href="#" className={styles.link}>
                    Support Center
                  </Link>
                  <Link href="#" className={styles.link}>
                    Provide feedback
                  </Link>
                  <Link href="#" className={styles.link}>
                    Report piracy
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box mt={4} borderTop="1px solid #282c34" />

        <Box
          mt={2}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          // alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="body1">© Siemens 2025</Typography>
          <Box display="flex" flexWrap="wrap" gap={2}>
            <Link href="#" underline="none" color="inherit">
              Terms of use
            </Link>
            <Link href="#" underline="none" color="inherit">
              Privacy notice
            </Link>
            <Link href="#" underline="none" color="inherit">
              Cookie statement
            </Link>
            <Link href="#" underline="none" color="inherit">
              DMCA
            </Link>
            <Link href="#" underline="none" color="inherit">
              Whistleblowing
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
