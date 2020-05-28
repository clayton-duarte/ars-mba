import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "tomato",
    secondary: "dimgray",
  },
};

const GlobalStyle = createGlobalStyle`
body, html {
  font-family: monospace;
  font-size: 16px;
  margin: 0;
}
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}
