import { useState } from "react";
import { useDidMount } from "@better-typed/react-lifecycle-hooks";

type Output = {
  width: number;
  height: number;
};

export const useWindowSize = (onResize?: VoidFunction): Output => {
  const isClient = typeof window === "object";

  const getSize = () => ({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  const handleResize = () => {
    setWindowSize(getSize());
    onResize?.();
  };

  useDidMount(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowSize;
};
