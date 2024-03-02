import Footer from '@/Components/footer';
import Header from '/Components/header';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Loading from '/Components/loading';
import "@/styles/globals.css";
import "@/styles/Home.module.css";



export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isIndexPage = router.pathname === '/';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const handleStart = (url) => {
      // Check if navigating back to the index page
      if (router.pathname === '/about' || router.pathname === '/services' || router.pathname === '/home') {
        setIsLoading(true); // Set loading state to true only for index page navigation
      }
    };
    
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2600); 

    
    return () => clearTimeout(timeout);
  }, []);

  //checks to see if it has component.getlayout condition if true do not load the loading screen
  if(Component.getLayout){
    return(Component.getLayout( 
    <>
    <div>
      {<Header />}
      <Component {...pageProps} />
      {<Footer />}
      </div>
    </>
    ))
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : <div>
      {!isIndexPage && <Header />}
      <Component {...pageProps} />
      {!isIndexPage && <Footer />}
      </div>
      
      }
    </>
  )
}