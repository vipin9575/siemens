import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./MainSection.module.scss";
import { Add, Remove } from "@mui/icons-material";

const accordionData = [
  {
    title: "Cross-domain process alignment",
    description:
      "Experience a common understanding among all stakeholders, where everybody is on the same page. Our consultants will help you:",
    points: [
      "Identify stakeholders",
      "Identify project goals",
      "Work with your situation, as-is—find what works, what doesn't",
      "Derive common language across stakeholders",
      "Define maturity benchmarks",
      "Detail a to-be state—what should change, and how, what shouldn't change",
    ],
  },
  {
    title: "Integrated process definition",
    description:
      "Get a complete set of end-to-end processes, represented by epic tasks and user stories. Our consultants work with you to:",
    points: [
      "Define detailed end-to-end process flows representing to-be end state",
      "escribe and validate user stories",
      "Obtain approvals by all stakeholders",
      "Create requirements blueprint for realization",
      "Adapt blueprint to evolving needs",
    ],
  },
  {
    title: "Integrated process realization",
    description:
      "Experience an integrated solutions landscape, ready to be used. Work with our experts to:",
    points: [
      "Derive optimal technical solutions from validated user stories",
      "Align integration solutions with other application domains",
      "Plan iterative realization milestones",
      "Configure, test and deliver a complete solution for production deployment",
    ],
  },
  {
    title: "Integration architecture",
    description:
      "Align your definition of integration with your existing and future IT architecture. Get ongoing support with your:",
    points: [
      "Architecture landscape—on-premise, cloud-based and/or hybrid",
      "Integration architecture definition",
      "ITAR implications for integration",
      "Expected transaction load and system availability needs",
      "Solution deployment and operation aligned with your security requirements",
    ],
  },
];

const MainSection = () => {
  const [expanded, setExpanded] = useState(
    accordionData.map((_, index) => index)
  );

  const handleChange = (index) => (_, isExpanded) => {
    setExpanded((prev) =>
      isExpanded ? [...prev, index] : prev.filter((i) => i !== index)
    );
  };
  return (
    <Box className={styles.mainSectionContainer}>
      <Box className={styles.descriptionContainer}>
        <Typography variant="h2" component="h2">
          Why Integration Services Practice?
        </Typography>
        <Typography className={styles.description} component="p">
          Our Integration Services Practice (ISP) consultants listen to our
          customers needs, propose standard solutions, and adapt our integration
          to your individual systems. As your integration task force, we provide
          business consulting, process consulting and implementation.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h2" component="h2">
          Benefit from personalized consulting services
        </Typography>
        <Box className={styles.accordionWrapper}>
          {accordionData.map((item, index) => (
            <Accordion
              elevation={0}
              key={index}
              expanded={expanded.includes(index)}
              onChange={handleChange(index)}
              TransitionProps={{ timeout: 0 }}
              className={styles.accordion}
            >
              <AccordionSummary
                expandIcon={
                  <>
                    {expanded.includes(index) ? (
                      <Remove fontSize="large" />
                    ) : (
                      <Add fontSize="large" />
                    )}
                  </>
                }
                className={styles.accordionSummary}
              >
                <Typography variant="h6" className={styles.accordionTitle}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetails}>
                <Typography className={styles.accordionDescription}>
                  {item.description}
                </Typography>
                <ul className={styles.accordionList}>
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MainSection;
