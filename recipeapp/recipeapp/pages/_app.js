import Header from '@/Components/header';
import Footer from '@/Components/footer';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import "@/styles/globals.css";
import "@/styles/Home.module.css";
import LoadingScreen from '@/Components/loading';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  

  return (
    <>
      {loading && <LoadingScreen />}
      {!isIndexPage && <Header />}
      <Component {...pageProps} />
      {!isIndexPage && <Footer />}
    </>
  )
}