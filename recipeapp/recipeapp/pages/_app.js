import Navbar from '/Components/navbar';

import "@/styles/globals.css";
import "@/styles/layout.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    < Component {...pageProps} />;
    </>

  )
}
