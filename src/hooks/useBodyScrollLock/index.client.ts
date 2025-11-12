import { useCallback, useRef } from "react";

import { isIOS } from "react-device-detect";

export default function useBodyScrollLock() {
  const scrollMemoryRef = useRef({
    scrollY: 0,
  });

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";

    if (isIOS) {
      scrollMemoryRef.current.scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.left = "0px";
      document.body.style.right = "0px";
      document.body.style.top = `-${scrollMemoryRef.current.scrollY}px`;
    }
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "visible";

    if (isIOS) {
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("left");
      document.body.style.removeProperty("right");
      document.body.style.removeProperty("top");
      window.scrollTo(0, scrollMemoryRef.current.scrollY);
      scrollMemoryRef.current.scrollY = 0;
    }
  }, []);

  return { lockScroll, unlockScroll };
}
