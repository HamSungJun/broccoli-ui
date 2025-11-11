"use client";

import type { PropsWithChildren } from "react";

import { BROCCOLI_UI_DEFAULT_TRANSITION_DURATION } from "../../constant";
import BottomSheetLayer from "./BottomSheetLayer.client";
import BottomSheetPanel from "./BottomSheetPanel.client";
import { BottomSheetContext } from "./context.client";

export interface BottomSheetProps extends PropsWithChildren {
  classes?: {
    layer?: string;
    container?: string;
    panel?: string;
  };
  isOpen: boolean;
  duration?: number;
  closeOnLayerClick?: boolean;
  closeOnEscapeKeyDown?: boolean;
  onClose: () => void;
}

function BottomSheet({
  duration = BROCCOLI_UI_DEFAULT_TRANSITION_DURATION,
  children,
  ...props
}: BottomSheetProps) {
  return (
    <BottomSheetContext
      value={{
        duration,
        ...props,
      }}
    >
      {children}
    </BottomSheetContext>
  );
}

export default Object.assign(BottomSheet, {
  Layer: BottomSheetLayer,
  Panel: BottomSheetPanel,
});
