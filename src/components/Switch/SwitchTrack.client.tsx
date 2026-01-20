"use client";

import type { PropsWithChildren } from "react";

import { useSwitchContext, getSwitchStateClasses } from "./context.client";

export default function SwitchTrack({ children }: PropsWithChildren) {
  const { classes, on, disabled } = useSwitchContext();

  return (
    <div
      className={getSwitchStateClasses(
        "broccoli-ui-switch-track",
        classes?.track,
        on,
        disabled,
        true, // include --on/--off modifiers
      )}
    >
      {children}
    </div>
  );
}
