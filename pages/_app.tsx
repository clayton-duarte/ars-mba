import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import Providers from "../providers";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Head>
        <title>Survival - Alpha</title>
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
};

export default MyApp;
