"use client";

import { type PropsWithChildren, useContext } from "react";

import clsx from "clsx";

import { SwitchContext } from "./context.client";

export default function SwitchTrack({ children }: PropsWithChildren) {
  const { classes, on, disabled } = useContext(SwitchContext);

  return (
    <div
      className={clsx(
        "broccoli-ui-switch-track",
        {
          "broccoli-ui-switch-track--on": on,
          "broccoli-ui-switch-track--off": !on,
        },
        {
          [classes?.track?.on ?? ""]: on,
          [classes?.track?.off ?? ""]: !on,
          [classes?.track?.disabled ?? ""]: disabled,
        },
      )}
    >
      {children}
    </div>
  );
}
