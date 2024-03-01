import Header from '@/Components/header';
import Footer from '@/Components/footer';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import "@/styles/globals.css";
import "@/styles/Home.module.css";



export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';

  

  return (
    <>
      
      {!isIndexPage && <Header />}
      <Component {...pageProps} />
      {!isIndexPage && <Footer />}
    </>
  )
}