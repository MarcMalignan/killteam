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
`;

const ContentContainer = styled.main<{ background: string }>`
  flex-grow: 1;
  background: red;
  overflow: hidden;
  background: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
