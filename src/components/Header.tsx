import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const logo = require("../img/logo.png");

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderLogo src={logo.default} alt="Kill Team" />
      </Link>
      <HeaderNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/army">Army sheet</StyledNavLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  padding: ${({ theme }) => theme.sizes.md};
  background: ${({ theme }) => theme.colors.bg};
  text-align: center;
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
  text-transform: uppercase;
  white-space: nowrap;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
