"use client";

import type { PropsWithChildren } from "react";

import SwitchContainer from "./SwitchContainer.client";
import SwitchThumb from "./SwitchThumb.client";
import SwitchTrack from "./SwitchTrack.client";
import { SwitchContext, type SwitchContextValue } from "./context.client";

export type { SwitchStateClasses } from "./context.client";

export interface SwitchProps extends SwitchContextValue, PropsWithChildren {}

function Switch({ classes, on, disabled = false, onChange, children }: SwitchProps) {
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
