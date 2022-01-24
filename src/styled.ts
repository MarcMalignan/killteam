// import "styled-components";
import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    accent: "#e9662d",
    accent2: "#66756a",
    bg: "#eaeaea",
    bg2: "#ccc",
    bg3: "#222",
    text: "#111",
    text2: "#fafafa",
  },
  fonts: {
    text: "'Open Sans', sans-serif",
    header: "'Oswald', sans-serif",
  },
  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "18px",
    xl: "32px",
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
    background: ${({ theme }) => theme.colors.bg};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.text};

    @media print {
      background: none;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .print-only {
    display: none;
  }

  @media print {
    .print-only {
      display: initial;
    }
    .no-print {
      display: none;
    }
  }
`;
