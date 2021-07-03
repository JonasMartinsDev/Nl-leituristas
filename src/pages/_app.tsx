import "@styles/globals.css";
import { ThemeProvider } from "@material-ui/core";

import theme from "ui/themes";
import Head from "next/head";

import Header from "ui/components/surfaces/Header";
import Footer from "ui/components/surfaces/Footer";
import { AppContainer } from "@styles/pages/container";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NL-Leituritas</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="application-name" content="Notas de Leiturista" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Notas de Leiturista" />
        <meta name="description" content="Ajudar os leituristas na execução das suas tarefas." />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/img/cemig.png"
        />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link
          rel="apple-touch-icon"
          href="/img/cemig.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/img/cemig.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/cemig.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/img/cemig.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/cemig.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/cemig.png"
        />
        <link rel="manifest" href="/static/manifest.json" />
        <link
          rel="mask-icon"
          href="/img/cemig.png"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/img/cemig.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />

        
       
       
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
