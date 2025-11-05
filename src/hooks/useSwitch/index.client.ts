import { useCallback, useState } from "react";

export interface UseSwitchProps {
  initialValue?: boolean;
}

export default function useSwitch({
  initialValue = false,
}: UseSwitchProps = {}) {
  const [isOn, setIsOn] = useState(initialValue);

  const setOn = useCallback(() => {
    setIsOn(true);
  }, []);

  const setOff = useCallback(() => {
    setIsOn(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOn((prev) => !prev);
  }, []);

  return { isOn, setOn, setOff, toggle };
}
