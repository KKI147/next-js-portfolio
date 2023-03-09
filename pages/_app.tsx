import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/component/Layout";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
