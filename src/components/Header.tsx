import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const logo = require("../img/logo.png");

export const Header = () => {
  return (
    <HeaderContainer>
      <div></div>
      <Link to="/">
        <HeaderLogo src={logo.default} alt="Kill Team" />
      </Link>
      <HeaderNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/roster">Roster</StyledNavLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.sizes.sm} ${theme.sizes.md}`};
  background: ${({ theme }) => theme.colors.bg3};
  color: ${({ theme }) => theme.colors.text2};
  text-align: center;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);

  & > * {
    flex-grow: 1;
    flex-basis: 0;
  }
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
