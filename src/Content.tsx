import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { Roster } from "./pages/Roster";

export const Content = () => {
  const { background } = useContext(AppContext);

  return (
    <MainContainer>
      {/* <Header /> */}
      <ContentContainer background={background}>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Roster />} />
        </Routes>
      </ContentContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media print {
    height: 100%;
  }
`;

const ContentContainer = styled.main<{ background: string }>`
  flex-grow: 1;
  background: url(${({ background }) => background}) #000;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  @media print {
    background: none;
    overflow: visible;
  }
`;
