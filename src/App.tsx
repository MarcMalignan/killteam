import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Roster } from "./pages/Roster";
import { GlobalStyle, theme } from "./styled";

const bg = require("./img/bg.jpg");

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainContainer>
          <Header />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roster" element={<Roster />} />
            </Routes>
          </Content>
        </MainContainer>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.main`
  flex-grow: 1;
  background: red;
  overflow: hidden;
  background: url(${bg.default});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
