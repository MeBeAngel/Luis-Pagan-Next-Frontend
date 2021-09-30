import { useState, useEffect } from 'react';
import Head from "next/head";
import Layout from "../layouts/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {


    /////////////////////////// Write comment here later /////////////////////

    const [wasLoaded, setWasLoaded] = useState();

    useEffect(() => {
      if (!sessionStorage.getItem("wasLoaded")) {
        const body = document.body;
        const loader = document.getElementById("pre-loader");
  
        loader.style.display = "block";
        body.style.overflow = "hidden";
  
        setTimeout(function () {
          loader.style.display = "none";
          body.style.overflow = "visible";
        }, 3000);
  
        setWasLoaded(true);
  
        sessionStorage.setItem("wasLoaded", wasLoaded);
      }
      if (sessionStorage.wasLoaded) {
        setWasLoaded(sessionStorage.wasLoaded);
      }
    }, []);
  
    //////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Head>
        <title>Luis Pagan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="pre-loader"></div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
