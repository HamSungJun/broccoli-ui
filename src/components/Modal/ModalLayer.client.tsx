"use client";

import {
  type MouseEventHandler,
  type PropsWithChildren,
  useEffect,
  useRef,
} from "react";

import { Transition } from "react-transition-group";

import clsx from "clsx";

import { BROCCOLI_UI_DEFAULT_TRANSITION_TIMING_FUNCTION } from "../../constant";
import { fadeTransition } from "../../util/transition";
import { LAYER_SELECTOR } from "../GlobalUIObserver/index.client";

export interface ModalLayerProps extends PropsWithChildren {
  className?: string;
  isOpen: boolean;
  duration: number;
  closeOnLayerClick: boolean;
  closeOnEscapeKeyDown: boolean;
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
  onClose: () => void;
}

export default function ModalLayer({
  className,
  isOpen,
  duration,
  closeOnLayerClick,
  closeOnEscapeKeyDown,
  onEnter,
  onEntered,
  onExit,
  onExited,
  onClose,
  children,
}: ModalLayerProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const onClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!closeOnLayerClick) return;
    if (nodeRef.current !== event.target) return;
    onClose();
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!closeOnEscapeKeyDown) return;
      if (event.key !== "Escape") return;
      if (!checkIsLastModalOnDocument(nodeRef.current)) return;
      onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closeOnEscapeKeyDown, onClose]);

  return (
    <Transition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={duration}
      unmountOnExit
      mountOnEnter
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExited={onExited}
    >
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...fadeTransition[state],
            transition: `opacity ${duration}ms ${BROCCOLI_UI_DEFAULT_TRANSITION_TIMING_FUNCTION}`,
          }}
          className={clsx(LAYER_SELECTOR, MODAL_LAYER_SELECTOR, className)}
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

const MODAL_LAYER_SELECTOR = "broccoli-ui-modal-layer";

const getModals = () => {
  return document.querySelectorAll(`.${MODAL_LAYER_SELECTOR}`);
};

const checkIsLastModalOnDocument = (element: HTMLDivElement | null) => {
  const modals = getModals();
  return element === modals[modals.length - 1];
};
