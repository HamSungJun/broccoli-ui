"use client";

import { createContext } from "react";

import type { SwitchProps } from "./index.client";

export const SwitchContext = createContext<SwitchProps>({
  classes: undefined,
  on: false,
  disabled: false,
  onChange: () => {},
});
