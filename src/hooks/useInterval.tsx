import { useEffect, useRef, useCallback } from 'react';

export const useInterval = (callback: () => void, delay: number) => {
  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     callback();
  //   }, delay);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const callbackRef = useRef(callback);
  console.log(new Date(), 'dd');
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      let timerId = setInterval(() => {
        callbackRef.current();
      }, delay);
      return () => clearInterval(timerId);
    }
  }, [delay]);
};
