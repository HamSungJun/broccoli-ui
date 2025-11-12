import { useCallback, useEffect } from "react";

export interface UseKeyDownProps {
  eventKey: string;
  handler?: (event: globalThis.KeyboardEvent) => void;
  enabled?: boolean;
}

export default function useKeyDown({
  eventKey,
  handler,
  enabled = true,
}: UseKeyDownProps) {
  const onKeyDown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === eventKey) {
        handler?.(event);
      }
    },
    [eventKey, handler],
  );

  useEffect(() => {
    if (!enabled) return;
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [enabled, onKeyDown]);
}
