import React, { FunctionComponent } from "react";

import ToasterProvider from "./toaster";
import SessionProvider from "./session";
import ThemeProvider from "./theme";
import CharProvider from "./char";

const Providers: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider>
      <ToasterProvider>
        <SessionProvider>
          <CharProvider>{children}</CharProvider>
        </SessionProvider>
      </ToasterProvider>
    </ThemeProvider>
  );
};

export default Providers;
