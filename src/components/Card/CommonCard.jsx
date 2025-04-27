import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import styles from "./CommonCard.module.scss";

const CommonCard = ({ image, title, description }) => {
  return (
    <Card className={styles.integrationCard} elevation={0}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className={styles.cardImage}
      />
      <CardContent>
        <Typography component="h5">{title}</Typography>
        <Typography component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CommonCard;
