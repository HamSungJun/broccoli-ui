import { useCallback, useEffect } from "react";

export interface UseKeyDownProps {
  key: string;
  handler?: () => void;
  enabled?: boolean;
}

export default function useKeyDown({
  key,
  handler,
  enabled = true,
}: UseKeyDownProps) {
  const onKeyDown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === key) {
        handler?.();
      }
    },
    [key, handler],
  );

  useEffect(() => {
    if (!enabled) return;
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [enabled, onKeyDown]);
}
