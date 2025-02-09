import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import theme from "./theme";
import { AppProvider } from "./context/AppContext";
import { MediaProvider } from "./context/MediaContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <MediaProvider>
          <App />
        </MediaProvider>
      </AppProvider>
    </ThemeProvider>
  </StrictMode>
);