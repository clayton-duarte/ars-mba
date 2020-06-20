import React, { FunctionComponent } from "react";

import ThemeProvider from "./theme";
import UserProvider from "./user";
import CharProvider from "./char";

const Providers: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider>
      <UserProvider>
        <CharProvider>{children}</CharProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default Providers;
