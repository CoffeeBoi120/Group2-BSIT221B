import Footer from '@/Components/footer';
import Header from '@/Components/header';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Loading from '/Components/loading';
import '@/styles/globals.css';
import '@/styles/Home.module.css';
import 'semantic-ui-css/semantic.min.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleStart = (url) => {
      // Check if navigating back to any of these pages
      if (['/about', '/explorepage', '/home'].includes(url)) {
        setIsLoading(true); // Set loading state to true only for specified page navigations
      }
    };
  
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2600);
  
    router.events.on('routeChangeStart', handleStart);
  
    return () => {
      clearTimeout(timeout);
      router.events.off('routeChangeStart', handleStart);
    };
  }, [router.events]);

  // Destructure props in the function signature for better readability
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <div>
          {<Header />}
          <Component {...pageProps} />
          {<Footer />}
        </div>
      </>
    );
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {!isIndexPage && <Header />}
          <Component {...pageProps} />
          {!isIndexPage && <Footer />}
        </div>
      )}
    </>
  );
}
