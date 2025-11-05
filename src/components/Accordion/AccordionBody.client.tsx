"use client";

import { type PropsWithChildren, useContext } from "react";

import clsx from "clsx";

import Collapse from "../Collapse/index.client";
import { AccordionContext } from "./context.client";

export interface AccordionBodyProps extends PropsWithChildren {
  className?: string;
}

export default function AccordionBody({
  className,
  children,
}: AccordionBodyProps) {
  const { isOpen, duration, onEnter, onEntered, onExit, onExited } =
    useContext(AccordionContext);

  return (
    <Collapse
      className={clsx("broccoli-ui-accordion-body", className)}
      isOpen={isOpen}
      duration={duration}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExited={onExited}
    >
      {children}
    </Collapse>
  );
}
