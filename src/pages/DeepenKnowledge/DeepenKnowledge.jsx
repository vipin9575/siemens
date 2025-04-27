import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import styles from "./DeepenKnowledge.module.scss";
import SchoolIcon from "@mui/icons-material/School";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import RateReviewIcon from "@mui/icons-material/RateReview";

const DeepenKnowledge = () => {
  const deepenKnowledgeData = [
    {
      id: 1,
      icon: (
        <QuestionAnswerIcon
          sx={{ fontSize: 50, color: "var(--color-interactive-coral-50-db)" }}
        />
      ),
      title: "Contact customer support",
      description:
        "Siemens offers world-class customer support for all Active Integration products.",
      linkText: "Contact us",
      linkUrl: "https://plm.sw.siemens.com/en-US/contact-plm/",
    },
    {
      id: 2,
      icon: (
        <SchoolIcon
          sx={{ fontSize: 50, color: "var(--color-interactive-coral-50-db)" }}
        />
      ),
      title: "Get training",
      description:
        "Siemens Xcelerator Academy offers on-demand or instructor-lead training options for Active Integration solutions.",
      linkText: "Visit Siemens Xcelerator Academy",
      linkUrl: "https://training.plm.automation.siemens.com/index.cfm",
    },
    {
      id: 3,
      icon: (
        <RateReviewIcon
          sx={{ fontSize: 50, color: "var(--color-interactive-coral-50-db)" }}
        />
      ),
      title: "Read the blog",
      description:
        "Gain new perspectives on Teamcenter and the PLM market in general.",
      linkText: "Visit Teamcenter blog",
      linkUrl: "https://blogs.sw.siemens.com/teamcenter/",
    },
  ];

  return (
    <Box className={styles.deepenKnowledgeSection}>
      <Typography variant="h2" component="h2">
        Deepen your knowledge of Active Integration
      </Typography>
      <Grid container spacing={3} mt={3}>
        {deepenKnowledgeData.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
            <Box className={styles.iconWrapper}>{item.icon}</Box>
            <Typography className={styles.title} component="h3">
              {item.title}
            </Typography>
            <Typography className={styles.description} component="p">
              {item.description}
            </Typography>
            <Link href={item.linkUrl} className={styles.link}>
              {item.linkText}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DeepenKnowledge;
