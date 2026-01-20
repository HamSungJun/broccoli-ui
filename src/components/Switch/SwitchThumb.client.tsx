"use client";

import { useSwitchContext, getSwitchStateClasses } from "./context.client";

export default function SwitchThumb() {
  const { classes, on, disabled } = useSwitchContext();

  return (
    <span
      className={getSwitchStateClasses(
        "broccoli-ui-switch-thumb",
        classes?.thumb,
        on,
        disabled,
        true, // include --on/--off modifiers
      )}
    />
  );
}
