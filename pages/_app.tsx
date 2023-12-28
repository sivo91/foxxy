import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { store } from '@/reduxFile/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const GA_TRACKING_ID = 'GTM-WLVZD4K5'; // Replace with your GA tracking ID

function handleRouteChange(url: string) {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
}



export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);


  return (
    <>

      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous"></link>
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></Script>



      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>



      
      <Provider store={store}>
       <Layout >
            <Component {...pageProps} />
        </Layout>
      </Provider>  

       <ToastContainer position='top-center' limit={1} /> 


      
    
    </>
  )
}




/* 

 <Script async src="https://www.googletagmanager.com/ns.html?id=GTM-WLVZD4K5"/>
        <Script id="gtag">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-WLVZD4K5');`}
        </Script>



*/