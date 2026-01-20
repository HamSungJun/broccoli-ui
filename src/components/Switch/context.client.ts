"use client";

import { createContext, use } from "react";
import clsx from "clsx";

/** Class names for switch states (on/off/disabled) */
export interface SwitchStateClasses {
  on?: string;
  off?: string;
  disabled?: string;
}

export interface SwitchContextValue {
  classes?: {
    container?: SwitchStateClasses;
    track?: SwitchStateClasses;
    thumb?: SwitchStateClasses;
  };
  on: boolean;
  disabled?: boolean;
  onChange?: (on: boolean) => void;
}

export const SwitchContext = createContext<SwitchContextValue>({
  on: false,
  disabled: false,
});

/** Custom hook to consume Switch context */
export const useSwitchContext = () => use(SwitchContext);

/**
 * Utility to generate class names based on switch state.
 * Reduces repetitive clsx patterns across sub-components.
 */
export const getSwitchStateClasses = (
  baseClass: string,
  stateClasses: SwitchStateClasses | undefined,
  on: boolean,
  disabled?: boolean,
  includeModifiers = false,
) =>
  clsx(
    baseClass,
    includeModifiers && {
      [`${baseClass}--on`]: on,
      [`${baseClass}--off`]: !on,
    },
    stateClasses?.on && { [stateClasses.on]: on },
    stateClasses?.off && { [stateClasses.off]: !on },
    stateClasses?.disabled && { [stateClasses.disabled]: disabled },
  );
