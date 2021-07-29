import { Header } from "../components/Header";
import NextNprogress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="page">
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{ showSpinner: false }}
      />
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
