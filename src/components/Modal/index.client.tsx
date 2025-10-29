import type { PropsWithChildren } from "react";

import { createPortal } from "react-dom";

import ModalLayer from "./ModalLayer.client";
import ModalPanel from "./ModalPanel.client";

export interface ModalProps extends PropsWithChildren {
  classes?: {
    layer?: string;
    panel?: string;
  };
  isOpen: boolean;
  duration?: number;
  closeOnLayerClick?: boolean;
  closeOnEscapeKeyDown?: boolean;
  onEnter?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExited?: () => void;
  onClose: () => void;
}

export default function Modal({
  classes,
  children,
  isOpen,
  duration = 250,
  closeOnLayerClick = true,
  closeOnEscapeKeyDown = true,
  onEnter,
  onExit,
  onEntered,
  onExited,
  onClose,
}: ModalProps) {
  return createPortal(
    <ModalLayer
      className={classes?.layer}
      isOpen={isOpen}
      duration={duration}
      closeOnLayerClick={closeOnLayerClick}
      closeOnEscapeKeyDown={closeOnEscapeKeyDown}
      onEnter={onEnter}
      onEntered={onEntered}
      onExit={onExit}
      onExited={onExited}
      onClose={onClose}
    >
      <ModalPanel className={classes?.panel}>{children}</ModalPanel>
    </ModalLayer>,
    document.body,
  );
}
