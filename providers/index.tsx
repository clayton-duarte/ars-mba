import React, { FunctionComponent } from "react";

import SessionProvider from "./session";
import ThemeProvider from "./theme";
import CharProvider from "./char";

const Providers: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider>
      <SessionProvider>
        <CharProvider>{children}</CharProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
