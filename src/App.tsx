import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Army } from "./pages/Army";
import { Home } from "./pages/Home";
import { GlobalStyle, theme } from "./styled";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/army" element={<Army />} />
          </Routes>
        </main>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
