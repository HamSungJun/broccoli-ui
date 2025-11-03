"use client";

import { type PropsWithChildren, useRef, useState } from "react";

import { Transition } from "react-transition-group";

import clsx from "clsx";

import { BROCCOLI_UI_DEFAULT_TRANSITION_DURATION } from "../../constant";

export interface CollapseProps extends PropsWithChildren {
  className?: string;
  isOpen?: boolean;
  duration?: number;
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
}

export default function Collapse({
  className,
  isOpen,
  duration = BROCCOLI_UI_DEFAULT_TRANSITION_DURATION,
  children,
  onEnter: onEnterProp,
  onEntered: onEnteredProp,
  onExit: onExitProp,
  onExited: onExitedProp,
}: CollapseProps) {
  const [height, setHeight] = useState(isOpen ? "auto" : "0px");
  const nodeRef = useRef<HTMLDivElement>(null);

  const getHeight = () => {
    return nodeRef.current ? `${nodeRef.current.scrollHeight}px` : "0px";
  };

  const onEnter = () => {
    onEnterProp?.();
    setHeight("0px");
  };

  const onEntering = () => {
    setHeight(getHeight());
  };

  const onEntered = () => {
    onEnteredProp?.();
    setHeight("auto");
  };

  const onExit = () => {
    onExitProp?.();
    setHeight(getHeight());
  };

  const onExiting = () => {
    setHeight("0px");
  };

  const onExited = () => {
    onExitedProp?.();
  };

  return (
    <Transition
      nodeRef={nodeRef}
      timeout={duration}
      in={isOpen}
      onEnter={onEnter}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
    >
      <div
        style={{ height, transitionDuration: `${duration}ms` }}
        className={clsx("broccoli-ui-collapse", className)}
        ref={nodeRef}
      >
        {children}
      </div>
    </Transition>
  );
}
