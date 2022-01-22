import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "./AppContext";
import { Content } from "./Content";
import { GlobalStyle, theme } from "./styled";

export const App = () => {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </AppContextProvider>
  );
};
