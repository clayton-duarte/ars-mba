import React, { FunctionComponent } from "react";
import baseStyled, {
  createGlobalStyle,
  ThemeProvider,
  ThemedStyledInterface,
} from "styled-components";

enum Palette {
  PRIMARY = "#11999e",
  SECONDARY = "#30e3ca",
  TEXT = "#40514e",
  BG = "#f3f6f6",
}

const theme = {
  palette: Palette,
};

type Theme = typeof theme;

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body, html {
    background: ${(props) => props.theme.palette.BG};
    color: ${(props) => props.theme.palette.TEXT};
    font-family: monospace;
    font-size: 16px;
    margin: 0;
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
