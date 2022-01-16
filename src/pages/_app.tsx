import Head from "next/head";
import type { AppProps } from "next/app";

// components
import Layout from "@/components/layout/layout";
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
