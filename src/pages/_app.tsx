import "@styles/globals.css";
import { ThemeProvider } from "@material-ui/core";

import theme from "ui/themes";
import Head from "next/head";

import Footer from "ui/components/surfaces/Footer";
import { AppContainer } from "@styles/pages/container";




function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NL-Leituritas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap" rel="stylesheet" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="manifest" href="manifest.json" />

      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
