import type { CSSProperties } from "react";

import type { TransitionStatus } from "react-transition-group";

export const fadeTransition: Record<TransitionStatus, CSSProperties> = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};
