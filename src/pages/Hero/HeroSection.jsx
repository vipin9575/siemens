import {
  Box,
  Breadcrumbs,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import styles from "./HeroSection.module.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";

const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Box className={styles.heroBackground}>
        <Box className={styles.heroContainer} display={isMobile ? "none" : ""}>
          <Grid container>
            <Grid size={7}>
              <Box className={styles.heroCrumbs}>
                <Breadcrumbs
                  aria-label="breadcrumb"
                  separator={
                    <NavigateNextIcon
                      style={{ color: "var(--color-primary-light)" }}
                    />
                  }
                >
                  <Link underline="hover" href="#">
                    <HomeIcon style={{ color: "var(--color-primary-light)" }} />
                  </Link>
                  <Link underline="hover" href="#">
                    PLM Software
                  </Link>
                  <Link underline="hover" href="#">
                    Active Integration
                  </Link>
                  <Typography component="p">
                    Integration services practice
                  </Typography>
                </Breadcrumbs>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  color="var(--color-primary-light)"
                  pb={2}
                >
                  Integration Services Practice Consulting
                </Typography>
                <Typography
                  variant="h6"
                  fontSize="1rem"
                  color="var(--color-primary-light)"
                  pr={7.25}
                >
                  Design processes across product lifecycle management (PLM),
                  manufacturing operations management (MOM) and other enterprise
                  systems that produce tangible value. Ensure that those
                  processes are ready to run, robust, flexible and easy to use.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        className={styles.heroContainer}
        display={isMobile ? "" : "none"}
        bgcolor={isMobile ? "var(--color-primary)" : ""}
      >
        <Grid container>
          <Grid size={12}>
            <Box>
              <Typography
                variant="h4"
                color="var(--color-primary-light)"
                pb={2}
              >
                Integration Services Practice Consulting
              </Typography>
              <Typography
                variant="h6"
                fontSize="1rem"
                color="var(--color-primary-light)"
              >
                Design processes across product lifecycle management (PLM),
                manufacturing operations management (MOM) and other enterprise
                systems that produce tangible value. Ensure that those processes
                are ready to run, robust, flexible and easy to use.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
