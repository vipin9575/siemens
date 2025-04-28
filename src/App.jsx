import { useEffect, useState } from "react";
import SubNav from "./components/Navbar/SubNav/SubNav";
import HeroSection from "./pages/Hero/HeroSection";
import { Container, useMediaQuery } from "@mui/material";
import TopNav from "./components/Navbar/TopNav/TopNav";
import styles from "./styles/variable.module.scss";
import Footer from "./pages/Footer/Footer";
import CardSection from "./pages/CardSection/CardSection";
import DeepenKnowledge from "./pages/DeepenKnowledge/DeepenKnowledge";
import MainSection from "./pages/MainSection/MainSection";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobileView = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getScrolledHeight = () => {
    if (isMobileView) {
      return "75px";
    }
    return isScrolled ? "78px" : "150px";
  };

  return (
    <>
      <Container
        maxWidth
        disableGutters
        style={{
          backgroundColor: "var(--color-primary)",
          position: "sticky",
          top: 0,
          zIndex: 9999,
          width: "100vw",
        }}
      >
        <TopNav isMenuVisible={isMobileView} />
      </Container>
      <Container
        maxWidth
        disableGutters
        sx={{
          position: "sticky",
          top: `${getScrolledHeight()}`,
          zIndex: 999,
          background: "var(--color-secondary-light)",
        }}
      >
        <SubNav scrolledHeight={getScrolledHeight()} />
      </Container>
      <Container maxWidth disableGutters className={styles.heroSection}>
        <HeroSection />
      </Container>
      <Container maxWidth disableGutters>
        <MainSection />
      </Container>
      <Container maxWidth disableGutters>
        <CardSection />
      </Container>
      <Container maxWidth disableGutters>
        <DeepenKnowledge />
      </Container>
      <Container maxWidth disableGutters>
        <Footer />
      </Container>
    </>
  );
}

export default App;
