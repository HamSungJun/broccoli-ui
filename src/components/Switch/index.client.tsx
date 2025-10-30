"use client";

import type { PropsWithChildren } from "react";

import SwitchContainer from "./SwitchContainer.client";
import SwitchThumb from "./SwitchThumb.client";
import SwitchTrack from "./SwitchTrack.client";
import { SwitchContext } from "./context.client";

export interface SwitchProps extends PropsWithChildren {
  classes?: {
    container?: SwitchClassTypes;
    track?: SwitchClassTypes;
    thumb?: SwitchClassTypes;
  };
  on: boolean;
  disabled?: boolean;
  onChange?: (on: boolean) => void;
}

interface SwitchClassTypes {
  on?: string;
  off?: string;
  disabled?: string;
}

function Switch({
  classes,
  on,
  disabled = false,
  children,
  onChange,
}: SwitchProps) {
  return (
    <SwitchContext value={{ classes, on, disabled, onChange }}>
      <SwitchContainer>{children}</SwitchContainer>
    </SwitchContext>
  );
}

export default Object.assign(Switch, {
  Track: SwitchTrack,
  Thumb: SwitchThumb,
});
