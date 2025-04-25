import { useEffect, useState } from "react";
import SubNav from "./components/Navbar/SubNav/SubNav";
import HeroSection from "./pages/Hero/HeroSection";
import { Container, useMediaQuery } from "@mui/material";
import TopNav from "./components/Navbar/TopNav/TopNav";

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
          zIndex: 999,
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
          background: "white",
        }}
      >
        <SubNav scrolledHeight={getScrolledHeight()} />
      </Container>
      <HeroSection />
    </>
  );
}

export default App;
