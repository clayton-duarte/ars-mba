import React from "react";
import { Provider } from "next-auth/client";
import { AppProps } from "next/app";
import Head from "next/head";

import Providers from "../providers";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Provider session={pageProps.session}>
        <Head>
          <title>Survival - Alpha</title>
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </Providers>
  );
};

export default MyApp;
