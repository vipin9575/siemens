import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { theme } from "./theme/index.js";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
// import "./styles/variable.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
