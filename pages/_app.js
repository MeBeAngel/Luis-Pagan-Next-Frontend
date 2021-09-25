import Head from "next/head";
import Layout from "../layouts/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <title>Luis Pagan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Fonts */}
        <link rel="preload" href="https://fonts.googleapis.com" as="font" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" as="font" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Halant:wght@400;500;600;700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
