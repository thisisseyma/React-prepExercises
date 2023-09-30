import { useMemo, useDebugValue } from "react";
import useWindowSize from "./useWindowSize";

function useWithinWindowWidth(minWidth, maxWidth) {
  const windowSize = useWindowSize();

  useDebugValue("useWithinWindowWidth");

  return useMemo(() => {
    return windowSize.width >= minWidth && windowSize.width <= maxWidth;
  }, [windowSize.width, minWidth, maxWidth]);
}

export default useWithinWindowWidth;
