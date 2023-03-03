import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/component/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
