import { Box, Grid } from "@mui/material";
import React from "react";
import SectionAcard from "./SectionAcard";
import cardData from "../../data/cardData";
import heroStyles from "./SectionAhead.module.scss";

const SectionAhead = () => {
  return (
    <>
      <Box className={heroStyles.heroBackground}>
        <Box className={heroStyles.heroContainer}>
          <Grid item xs={12} sm={6} className={heroStyles.siemensCards}>
            <h2 className={heroStyles.heroTitle}>
              What can compliance management software do for you?
            </h2>
            <p className={heroStyles.heroParagraph}>
              Compliance and sustainability management software enables better
              accuracy, productivity and timeliness of environmental compliance
              to help you achieve your sustainability goals.
            </p>
            <p className={heroStyles.heroParagraph}>
              Create innovative and environmentally compliant products with
              sustainability built in throughout the product lifecycle.
            </p>
          </Grid>
          <SectionAcard data={cardData} />
        </Box>
      </Box>
    </>
  );
};

export default SectionAhead;
