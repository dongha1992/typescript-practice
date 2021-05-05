import React, { useEffect } from 'react';
import { globalStyle } from '@public/styles/S.Globals';
import { Wrapper } from '../components/Layout/Wrapper';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
};

export default MyApp;
