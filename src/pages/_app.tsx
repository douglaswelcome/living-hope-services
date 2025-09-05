import "@/styles/base.css";
import "@/styles/foundations.scss";
import "@/lib/fontawesome";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
