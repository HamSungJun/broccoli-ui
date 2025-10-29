import { useState } from "react";

export interface UseSwitchProps {
  initialValue?: boolean;
}

export default function useSwitch({
  initialValue = false,
}: UseSwitchProps = {}) {
  const [isOn, setIsOn] = useState(initialValue);

  const setOn = () => {
    setIsOn(true);
  };

  const setOff = () => {
    setIsOn(false);
  };

  const toggle = () => {
    setIsOn((prev) => !prev);
  };

  return { isOn, setOn, setOff, toggle };
}
