import React from "react";
import styled from "styled-components";

const logo = require("../img/logo.png");

export const Logo = () => <LogoImg src={logo.default} alt="Kill Team" />;

const LogoImg = styled.img`
  height: 50px;
`;

export const RowContainer = styled.div`
  display: flex;

  & > * {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;

    &:first-child {
      flex-basis: 0;
      justify-content: flex-start;
    }
    &:last-child {
      flex-basis: 0;
      justify-content: flex-end;
    }
  }
`;

export const NoWrap = styled.span`
  white-space: nowrap;
`;
