"use client";

import {
  type MouseEventHandler,
  type PropsWithChildren,
  useContext,
  useRef,
} from "react";

import { Transition } from "react-transition-group";

import clsx from "clsx";

import { LAYER_SELECTOR } from "../GlobalUIObserver/index.client";
import { BottomSheetContext } from "./context.client";

interface BottomSheetLayerProps extends PropsWithChildren {}

export default function BottomSheetLayer({ children }: BottomSheetLayerProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const { classes, isOpen, duration, closeOnLayerClick, onClose } =
    useContext(BottomSheetContext);

  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!closeOnLayerClick) return;
    if (nodeRef.current !== event.target) return;
    onClose();
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={duration}
      mountOnEnter
      unmountOnExit
    >
      {() => (
        <div
          ref={nodeRef}
          className={clsx(
            LAYER_SELECTOR,
            BOTTOM_SHEET_LAYER_SELECTOR,
            classes?.layer,
          )}
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

const BOTTOM_SHEET_LAYER_SELECTOR = "broccoli-ui-bottom-sheet-layer";
