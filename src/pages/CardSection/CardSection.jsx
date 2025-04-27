import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CommonCard from "../../components/Card/CommonCard";
import styles from "./CardSection.module.scss";

const cardsData = [
  {
    id: 1,
    image:
      "https://images.sw.cdn.siemens.com/siemens-disw-assets/public/5BH0akKQ7Qh5LTKawLyS6T/en-US/active-integration-is1152229760-feature-640x360.jpg?auto=format%2Ccompress&w=640&h=360&q=60&fit=crop",
    title: "Active Integration",
    description:
      "Get a streamlined solution for integrating external enterprise systems with Teamcenter with predefined connectors. Create re-usable connector steps based in API endpoint definition of external enterprise applications.",
  },
  {
    id: 2,
    image:
      "https://images.sw.cdn.siemens.com/siemens-disw-assets/public/2ejLIESLTbsD8G83FFXcUl/en-US/enterprise-application-gateway-is1797950205-feature-640x360.jpg?auto=format%2Ccompress&w=640&h=360&q=60&fit=crop",
    title: "Teamcenter Gateway for Enterprise Applications",
    description:
      "Seamlessly integrate almost any enterprise application (EA) with Teamcenter software, including MES, ERP and customer relationship management (CRM) systems.",
  },
  {
    id: 3,
    image:
      "https://images.sw.cdn.siemens.com/siemens-disw-assets/public/4wAyiVkxL2yU0WMZUwomU5/en-US/gateway-to-oracle-t4O-is1316936299-feature-640x360.jpg?auto=format%2Ccompress&w=640&h=360&q=60&fit=crop",
    title: "Teamcenter Gateway for Oracle E-Business Suite",
    description:
      "Get flexible, bidirectional data and process integration across the enterprise of Teamcenter software with Oracle E-Business Suite.",
  },
  {
    id: 4,
    image:
      "https://images.sw.cdn.siemens.com/siemens-disw-assets/public/76yuPX7WvplxUyURJxx6sA/en-US/teamcenter-gateway-sap-is664035894-feature-640x360.jpg?auto=format%2Ccompress&w=640&h=360&q=60&fit=crop",
    title: "Teamcenter Gateway for SAP Business Suite",
    description:
      "Easily connect your SAP ERP with your Siemens product lifecycle management system (PLM).",
  },
  {
    id: 5,
    image:
      "https://images.sw.cdn.siemens.com/siemens-disw-assets/public/7CamNTPrgBnqxY6wx4Zf6o/en-US/product-cost-management-gateway-is1267134380-feature-640x360.jpg?auto=format%2Ccompress&w=640&h=360&q=60&fit=crop",
    title: "Teamcenter Product Cost Management Gateways",
    description:
      "Synchronize your cost calculation processes with data from ERP systems.",
  },
];

const CardSection = () => {
  return (
    <Box className={styles.cardSection}>
      <Typography component="h3">Explore Active Integration</Typography>
      <Grid container spacing={4}>
        {cardsData.map((card) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={card.id}>
            <CommonCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardSection;
