"use client";

import {
  type CSSProperties,
  type MouseEventHandler,
  type PropsWithChildren,
  useEffect,
  useRef,
} from "react";

import { Transition, type TransitionStatus } from "react-transition-group";

import useBodyScrollLock from "../../hooks/useBodyScrollLock/index.client";

import clsx from "clsx";

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
  onEnter: onEnterProp,
  onEntered,
  onExit: onExitProp,
  onExited,
  onClose,
  children,
}: ModalLayerProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const { lockScroll, unlockScroll } = useBodyScrollLock();

  const onEnter = () => {
    lockScroll();
    onEnterProp?.();
  };

  const onExit = () => {
    unlockScroll();
    onExitProp?.();
  };

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
            ...transitionStyles[state],
            transition: `all ${duration}ms ease-in-out`,
          }}
          className={clsx(MODAL_LAYER_SELECTOR, className)}
          onClick={onClick}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}

const transitionStyles: Record<TransitionStatus, CSSProperties> = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const MODAL_LAYER_SELECTOR = "broccoli-ui-modal-layer";

const getModals = () => {
  return document.querySelectorAll(`.${MODAL_LAYER_SELECTOR}`);
};

const checkIsLastModalOnDocument = (element: HTMLDivElement | null) => {
  const modals = getModals();
  return element === modals[modals.length - 1];
};
