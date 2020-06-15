import React from "react";

import Providers from "../providers";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};

export default MyApp;