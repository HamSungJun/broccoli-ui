"use client";

import { type PropsWithChildren, useEffect } from "react";

import useSwitch from "../../hooks/useSwitch/index.client";

import clsx from "clsx";

import { BROCCOLI_UI_DEFAULT_TRANSITION_DURATION } from "../../constant";
import type { CollapseProps } from "../Collapse/index.client";
import AccordionBody from "./AccordionBody.client";
import AccordionHead from "./AccordionHead.client";
import { AccordionContext } from "./context.client";

export interface AccordionProps
  extends PropsWithChildren<
    Omit<CollapseProps, "className" | "isOpen" | "children" | "appear">
  > {
  className?: string;
  isOpen?: boolean;
  disabled?: boolean;
  duration: number;
}

function Accordion({
  className,
  isOpen = false,
  disabled = false,
  duration = BROCCOLI_UI_DEFAULT_TRANSITION_DURATION,
  children,
  onEnter,
  onEntered,
  onExit,
  onExited,
}: AccordionProps) {
  const { isOn, setOn, setOff, toggle } = useSwitch({ initialValue: isOpen });

  useEffect(() => {
    if (isOpen) {
      setOn();
    } else {
      setOff();
    }
  }, [isOpen, setOn, setOff]);

  return (
    <AccordionContext
      value={{
        isOpen: isOn,
        disabled,
        duration,
        toggle,
        onEnter,
        onEntered,
        onExit,
        onExited,
      }}
    >
      <div className={clsx("broccoli-ui-accordion", className)}>{children}</div>
    </AccordionContext>
  );
}

export default Object.assign(Accordion, {
  Head: AccordionHead,
  Body: AccordionBody,
});
