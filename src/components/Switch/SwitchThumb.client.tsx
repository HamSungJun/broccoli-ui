"use client";

import { useContext } from "react";

import clsx from "clsx";

import { SwitchContext } from "./context.client";

export default function SwitchThumb() {
  const { classes, on, disabled } = useContext(SwitchContext);

  return (
    <span
      className={clsx(
        "broccoli-ui-switch-thumb",
        {
          "broccoli-ui-switch-thumb--on": on,
          "broccoli-ui-switch-thumb--off": !on,
        },
        {
          [classes?.thumb?.on ?? ""]: on,
          [classes?.thumb?.off ?? ""]: !on,
          [classes?.thumb?.disabled ?? ""]: disabled,
        },
      )}
    ></span>
  );
}
