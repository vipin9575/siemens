import { Box, Typography, IconButton } from "@mui/material";
import { Search, ShoppingCart, PersonOutline } from "@mui/icons-material";
import styles from "./Header.module.scss";
import { useRef, useEffect, useState } from "react";

const ScrollNav = () => {
  const menuRef = useRef(null);
  const firstItemRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const menu = menuRef.current;
    const firstItem = firstItemRef.current;
    if (!menu || !firstItem) return;

    const firstItemWidth = firstItem.offsetWidth + 16;
    const duration = 1000; // 1 second
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const distance = firstItemWidth * progress;

      setTranslateX(-distance);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <Box className={styles.scrollNav}>
      <Box className={styles.menuWrapper}>
        <Box
          className={styles.menu}
          ref={menuRef}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          <span ref={firstItemRef} className={styles.active}>
            Digital Industries Software
          </span>
          <span>Software & products</span>
          <span>Solutions & services</span>
          <span>Industries</span>
          <span>Training & support</span>
        </Box>
      </Box>
      <Box className={styles.icons}>
        <IconButton>
          <Search htmlColor="var(--color-primary-light)" />
        </IconButton>
        <Typography className={styles.lang}>EN</Typography>
        <IconButton>
          <ShoppingCart htmlColor="var(--color-primary-light)" />
        </IconButton>
        <IconButton>
          <PersonOutline htmlColor="var(--color-primary-light)" />
          <Typography className={styles.login} color="white">
            Log in
          </Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default ScrollNav;
