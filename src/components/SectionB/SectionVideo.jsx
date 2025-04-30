import React from "react";
import { Grid } from "@mui/material";
import styles from "./SectionVideo.module.scss";

const SectionVideo = () => {
  return (
    <>
      <Grid container className={styles.heroBackground}>
        <Grid container spacing={2} className={styles.heroContainer}>
          <Grid item size={6} className={styles.textContent}>
            <h2 className={styles.heroTitle}>
              Siemens Digital Industries Software
            </h2>
            <p className={styles.heroParagraph}>
              Accelerate digital transformation as a sustainable Digital
              Enterprise with us! We give companies like yours the agility,
              flexibility and adaptability to turn ideas into innovation with
              greater efficiency and speed. See how we help transform the
              everyday for everyone.
            </p>
          </Grid>
          <Grid item size={6} className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionVideo;
