import React from "react";
import '@/styles/globals.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { Toaster } from "react-hot-toast";
import { Provider } from 'react-redux'
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = React.useRef(new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}
