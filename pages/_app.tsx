import { ThemeProvider, createGlobalStyle } from "styled-components";

import Providers from "../providers";

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

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
