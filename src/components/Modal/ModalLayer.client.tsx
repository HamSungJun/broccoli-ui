"use client";

import { type MouseEventHandler, type PropsWithChildren, useRef } from "react";

import { Transition } from "react-transition-group";

import useKeyDown from "../../hooks/useKeyDown/index.client";

import clsx from "clsx";

import {
  BROCCOLI_UI_DEFAULT_TRANSITION_TIMING_FUNCTION,
  BROCCOLI_UI_LAYER_CLASS,
  BROCCOLI_UI_MODAL_LAYER_CLASS,
} from "../../constant";
import { fadeTransition } from "../../util/transition";

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

  useKeyDown({
    eventKey: "Escape",
    handler: () => {
      if (!checkIsLastModalOnDocument(nodeRef.current)) return;
      onClose();
    },
    enabled: isOpen && closeOnEscapeKeyDown,
  });

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
          className={clsx(
            BROCCOLI_UI_LAYER_CLASS,
            BROCCOLI_UI_MODAL_LAYER_CLASS,
            className,
          )}
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

const getModals = () => {
  return document.querySelectorAll(`.${BROCCOLI_UI_MODAL_LAYER_CLASS}`);
};

const checkIsLastModalOnDocument = (element: HTMLDivElement | null) => {
  const modals = getModals();
  return element === modals[modals.length - 1];
};
