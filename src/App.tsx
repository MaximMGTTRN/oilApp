import React from "react";

import MainLayout from "./pages/MainLayout/MainLayout";
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Cactus Classical Serif', serif",
  },
});
const App: React.FC = () => {
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    <MainLayout />
    // </ThemeProvider>
  );
};

export default App;
