import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { RowContainer } from "./commons";

const logo = require("../img/logo.png");

export const Header = () => {
  return (
    <HeaderContainer>
      <RowContainer>
        <div></div>
        <Link to="/">
          <HeaderLogo src={logo.default} alt="Kill Team" />
        </Link>
        <HeaderNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/roster">Roster</StyledNavLink>
        </HeaderNav>
      </RowContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  padding: ${({ theme }) => `${theme.sizes.sm} ${theme.sizes.md}`};
  background: ${({ theme }) => theme.colors.bg3};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
`;

const HeaderLogo = styled.img`
  height: 60px;
`;

const HeaderNav = styled.nav`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
`;

const StyledNavLink = styled(NavLink)`
  padding: ${({ theme }) => theme.sizes.sm};
  margin: 0 ${({ theme }) => theme.sizes.md};
  border-bottom: 1px solid transparent;
  font-family: ${({ theme }) => theme.fonts.header};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text2};
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.text2};
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
