import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux';
import { store } from '@/reduxFile/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function App({ Component, pageProps }: AppProps) {



  return (
    <>

      <Head>

      

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossOrigin="anonymous"></link>
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossOrigin="anonymous"></Script>


      
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

GTM-WLVZD4K5

*/