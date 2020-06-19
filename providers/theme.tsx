import React, { FunctionComponent } from "react";
import baseStyled, {
  createGlobalStyle,
  ThemeProvider,
  ThemedStyledInterface,
} from "styled-components";

enum Palette {
  PRIMARY = "#048998",
  SECONDARY = "#3bb4c1",
  TEXT = "#222831",
  BG = "#f6f5f5",
}

enum Shape {
  BORDER = "0.125rem solid transparent",
  PADDING = "0.5rem 1rem",
  RADIUS = ".25rem",
  MARGIN = "1rem 0",
  SHADOW = "",
}

enum Font {
  FAMILY = "'Play', sans-serif",
  SIZE = "1rem",
}

const theme = {
  palette: Palette,
  shape: Shape,
  font: Font,
};

export type Theme = typeof theme;

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body, html {
    font-family: ${(props) => props.theme.font.FAMILY};
    background: ${(props) => props.theme.palette.BG};
    color: ${(props) => props.theme.palette.TEXT};
    font-size: 16px;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  svg[role="button"] {
    cursor: pointer;
  }
  `;

const Provider: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default Provider;
