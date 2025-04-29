import { Box, Button, Grid } from "@mui/material";
import React from "react";
import styles from "./ConnectSection.module.scss";

const ConnectSection = () => {
  return (
    <>
      <Box className={styles.heroBackground}>
        <Box className={styles.heroContainer}>
          <Grid item xs={12} sm={6} className={styles.siemensCards}>
            <h2 className={styles.heroTitle}>Let's talk!</h2>
            <p className={styles.heroParagraph}>
              Reach out with questions or comments. We are here to help!
            </p>
            <Button
              className={styles.contactBtn}
              variant="contained"
              disableElevation
            >
              Contact us
            </Button>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ConnectSection;
