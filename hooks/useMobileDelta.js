import { useCallback, useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { mobileDeltaAtom } from "../states/mobildeDelta";

export default function useMobileDelta(fullHeightRef) {
  console.log(fullHeightRef);
  // const [mobileDelta, setMobileDelta] = useState(0);
  const [mobileDelta, setMobileDelta] = useAtom(mobileDeltaAtom);

  const timeoutStamp = useRef();

  const getMobileDelta = useCallback(() => {
    if (fullHeightRef.current) {
      const delta = fullHeightRef.current.offsetHeight - window.innerHeight;
      if (delta !== mobileDelta) {
        document.documentElement.style.setProperty(
          "--mobile-delta",
          `${delta}px`
        );

        setMobileDelta(delta);
      }
    }
  }, [mobileDelta, fullHeightRef]);

  const delayedMobileDeltaCompute = useCallback(() => {
    if (timeoutStamp.current) {
      clearTimeout(timeoutStamp.current);
    }
    // Since 2017 Mobile Safari resize event is posted before page layout
    // https://openradar.appspot.com/radar?id=5040881597939712
    // Apple themselves use this value in their code
    timeoutStamp.current = setTimeout(getMobileDelta, 500);
  }, [getMobileDelta]);

  useEffect(() => {
    console.log("HELLO", fullHeightRef);
    getMobileDelta();

    window.addEventListener("resize", delayedMobileDeltaCompute);
    return () =>
      window.removeEventListener("resize", delayedMobileDeltaCompute);
  }, [fullHeightRef, mobileDelta, delayedMobileDeltaCompute, getMobileDelta]);

  return mobileDelta;
}
