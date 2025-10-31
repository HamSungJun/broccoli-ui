"use client";

import { type PropsWithChildren, useContext } from "react";

import clsx from "clsx";

import { SwitchContext } from "./context.client";

export default function SwitchContainer({ children }: PropsWithChildren) {
  const { classes, on, disabled, onChange } = useContext(SwitchContext);

  const onClick = () => {
    onChange?.(!on);
  };

  return (
    <button
      className={clsx("broccoli-ui-switch-container", {
        [classes?.container?.on ?? ""]: on,
        [classes?.container?.off ?? ""]: !on,
        [classes?.container?.disabled ?? ""]: disabled,
      })}
      disabled={disabled}
      role="switch"
      aria-checked={on}
      aria-disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
