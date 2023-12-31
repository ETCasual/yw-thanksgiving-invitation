import { type AppType } from "next/dist/shared/lib/utils";
import { FirebaseAppProvider } from "reactfire";
import { FirebaseProps } from "@/lib/FirebaseProps";
import { firebaseConfig } from "@/lib/firebaseConfig";

import NoSSR from "react-no-ssr";
import "@/styles/globals.css";
import "swiper/css";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Invitation | FGACYCYW Thanksgiving</title>
        <meta
          name="description"
          content="Join us as we gather to give thanks and celebrate the blessings of the past year. Our special Thanksgiving service will be a time of reflection, gratitude, and community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <FirebaseProps>
          <NoSSR>
            <Component {...pageProps} />
          </NoSSR>
        </FirebaseProps>
      </FirebaseAppProvider>
    </>
  );
};

export default MyApp;
