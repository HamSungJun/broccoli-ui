"use client";

import { type PropsWithChildren, useEffect } from "react";

import useBodyScrollLock from "../../hooks/useBodyScrollLock/index.client";

export interface GlobalUIObserverProps extends PropsWithChildren {
  target?: HTMLElement;
}

export default function GlobalUIObserver({
  target = document.body,
  children,
}: GlobalUIObserverProps) {
  const { lockScroll, unlockScroll } = useBodyScrollLock();

  useEffect(() => {
    const callback = () => {
      const hasLayerOnTarget = [LAYER_SELECTOR].some(
        (selector) => target.querySelector(`.${selector}`) !== null,
      );

      if (hasLayerOnTarget) {
        lockScroll();
      } else {
        unlockScroll();
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(target, config);

    callback();
    return () => {
      observer.disconnect();
    };
  }, [target, lockScroll, unlockScroll]);

  return children;
}

const config: MutationObserverInit = {
  attributes: false,
  childList: true,
  subtree: false,
};

export const LAYER_SELECTOR = "broccoli-ui-layer";
