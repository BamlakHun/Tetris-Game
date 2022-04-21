import { useEffect, useRef } from "react";

// Custom hook by Dan Abramov to set interval -> https://usehooks-ts.com/react-hook/use-interval
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback if it changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
};
