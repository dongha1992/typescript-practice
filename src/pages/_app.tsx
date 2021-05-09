import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import { globalStyle } from '@public/styles/S.Globals';
import { Wrapper } from '@components/Layout/Wrapper';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Typescript + Next.js</title>
        <style>{globalStyle}</style>
      </Head>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
};

export default MyApp;
