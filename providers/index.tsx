import React, { FunctionComponent } from "react";

import UserProvider from "./user";

const Providers: FunctionComponent = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
