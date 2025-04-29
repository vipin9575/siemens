import React from "react";
import { Box, Grid } from "@mui/material";
import styles from "./SectionAcard.module.scss";

const SectionAcard = ({ data }) => {
  return (
    <Box className={styles.cardContainer}>
      <Grid container spacing={3} className={styles.cardsContainerRow}>
        {data.map((card, index) => (
          <Grid item xs={12} sm={6} key={index} className={styles.siemensCards}>
            <div
              id={`G_${card.title}`}
              className={`${styles.card} blogWrapNoLink rounded-0`}
            >
              <div className={`${styles.cardBody} d-flex flex-column p-3`}>
                <h3 className="pb-4 mb-0">{card.title}</h3>
                <div className="text-black card-text pb-3 mb-0">
                  <div>
                    <p>{card.content}</p>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-end h-100"></div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SectionAcard;
