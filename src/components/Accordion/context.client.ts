"use client";

import { createContext } from "react";

import { BROCCOLI_UI_DEFAULT_TRANSITION_DURATION } from "../../constant";
import { type AccordionProps } from "./index.client";

export interface AccordionContextProps extends AccordionProps {
  toggle: () => void;
  duration: number;
}

export const AccordionContext = createContext<AccordionContextProps>({
  isOpen: false,
  disabled: false,
  duration: BROCCOLI_UI_DEFAULT_TRANSITION_DURATION,
  toggle: () => {},
  onEnter: () => {},
  onEntered: () => {},
  onExit: () => {},
  onExited: () => {},
});
