import "../styles/globals.css";
import type { AppProps } from "next/app";
import SiteLayout from "../components/SiteLayout";
import NextProgress from "next-progress";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress />
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  );
}
