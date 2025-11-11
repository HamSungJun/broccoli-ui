"use client";

import { createContext } from "react";

import { BROCCOLI_UI_DEFAULT_TRANSITION_DURATION } from "../../constant";
import { type BottomSheetProps } from "./index.client";

export const BottomSheetContext = createContext<
  BottomSheetProps & { duration: number }
>({
  isOpen: false,
  duration: BROCCOLI_UI_DEFAULT_TRANSITION_DURATION,
  closeOnLayerClick: true,
  closeOnEscapeKeyDown: true,
  onClose: () => {},
});
