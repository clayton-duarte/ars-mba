import React, { FunctionComponent } from "react";
import baseStyled, {
  createGlobalStyle,
  ThemeProvider,
  ThemedStyledInterface,
} from "styled-components";

enum Palette {
  PRIMARY = "#015668",
  SECONDARY = "#de7119",
  TEXT = "#263f44",
  BG = "#eeeeee",
}

enum Shape {
  BORDER = "0.125rem solid transparent",
  PADDING = "0.5rem 1rem",
  RADIUS = ".25rem",
  GAP = "1rem",
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
  body, html,#__next {
    font-family: ${(props) => props.theme.font.FAMILY};
    background: ${(props) => props.theme.palette.BG};
    color: ${(props) => props.theme.palette.TEXT};
    font-size: 16px;
    height: 100%;
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
