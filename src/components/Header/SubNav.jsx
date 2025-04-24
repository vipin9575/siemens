import { Box, Button } from "@mui/material";
import styles from "./Header.module.scss";

const SubNav = ({ scrolledHeight }) => {
  return (
    <Box className={styles.subNav} style={{ top: scrolledHeight }}>
      <span className={styles.section}>Active Integration</span>
      <Box className={styles.actions}>
        <Button className={styles.productsBtn}>Products</Button>
        <Button className={styles.productsBtn}>Consulting</Button>
        <Button
          className={styles.contactBtn}
          variant="contained"
          disableElevation
        >
          Contact us
        </Button>
      </Box>
    </Box>
  );
};

export default SubNav;
