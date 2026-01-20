"use client";

import type { PropsWithChildren } from "react";

import { useSwitchContext, getSwitchStateClasses } from "./context.client";

export default function SwitchContainer({ children }: PropsWithChildren) {
  const { classes, on, disabled, onChange } = useSwitchContext();

  return (
    <button
      className={getSwitchStateClasses(
        "broccoli-ui-switch-container",
        classes?.container,
        on,
        disabled,
      )}
      disabled={disabled}
      role="switch"
      aria-checked={on}
      aria-disabled={disabled}
      onClick={() => onChange?.(!on)}
    >
      {children}
    </button>
  );
}
