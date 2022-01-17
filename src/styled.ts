// import "styled-components";
import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    accent: "#e9662d",
    bg: "#111",
    bg2: "#222",
    text: "#fafafa",
  },
  sizes: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
};

type ThemeType = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${({ theme }) =>
      `linear-gradient(${theme.colors.bg2}, ${theme.colors.bg})`};
    font-family: Arial;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
