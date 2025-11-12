"use client";

import { type PropsWithChildren, useContext, useRef, useState } from "react";

import { CSSTransition } from "react-transition-group";

import useKeyDown from "../../hooks/useKeyDown/index.client";

import clsx from "clsx";

import { getClientHeight } from "../../util/dom";
import { BottomSheetContext } from "./context.client";

export interface BottomSheetPanelProps extends PropsWithChildren {
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
}

export default function BottomSheetPanel({
  children,
  onEnter: onEnterProp,
  onEntered: onEnteredProp,
  onExit: onExitProp,
  onExited: onExitedProp,
}: BottomSheetPanelProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const { classes, isOpen, duration, closeOnEscapeKeyDown, onClose } =
    useContext(BottomSheetContext);

  const [bottom, setBottom] = useState<number | undefined>();

  const onEnter = () => {
    onEnterProp?.();
    setBottom(getClientHeight(nodeRef.current) * -1);
  };

  const onEntering = () => {
    setBottom(0);
  };

  const onEntered = () => {
    onEnteredProp?.();
  };

  const onExit = () => {
    onExitProp?.();
  };

  const onExiting = () => {
    setBottom(getClientHeight(nodeRef.current) * -1);
  };

  const onExited = () => {
    onExitedProp?.();
  };

  useKeyDown({
    key: "Escape",
    handler: onClose,
    enabled: isOpen && closeOnEscapeKeyDown,
  });

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      appear
      timeout={duration}
      mountOnEnter
      unmountOnExit
      onEnter={onEnter}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      <div
        style={{ bottom, transitionDuration: `${duration}ms` }}
        className={clsx("broccoli-ui-bottom-sheet-panel", classes?.panel)}
        ref={nodeRef}
      >
        {children}
      </div>
    </CSSTransition>
  );
}
