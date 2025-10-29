import type { PropsWithChildren } from "react";

import clsx from "clsx";

export interface ModalPanelProps extends PropsWithChildren {
  className?: string;
}

export default function ModalPanel({ className, children }: ModalPanelProps) {
  return (
    <div className={clsx("broccoli-ui-modal-panel", className)}>{children}</div>
  );
}
