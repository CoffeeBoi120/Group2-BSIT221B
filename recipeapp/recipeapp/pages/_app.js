import Footer from '@/Components/footer';
import Header from '/Components/header';

import "@/styles/globals.css";
import "@/styles/layout.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    < Component {...pageProps} />
    <Footer />
    </>

  )
}
