import React, { FunctionComponent } from "react";

import ThemeProvider from "./theme";
import UserProvider from "./user";

const Providers: FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};

export default Providers;
