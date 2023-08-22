import { type AppType } from "next/dist/shared/lib/utils";
import { FirebaseAppProvider } from "reactfire";
import { FirebaseProps } from "@/lib/FirebaseProps";
import { firebaseConfig } from "@/lib/firebaseConfig";

import NoSSR from "react-no-ssr";
import "@/styles/globals.css";
import "swiper/css";
import Head from "next/head";
import { useRouter } from "next/router";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{router.query.name} | Thanksgiving</title>
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
