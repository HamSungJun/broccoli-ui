import useSwitch, { type UseSwitchProps } from "./index.client";

export default function Demo({ initialValue }: UseSwitchProps) {
  const { isOn, setOn, setOff, toggle } = useSwitch({ initialValue });

  return (
    <div>
      <p>isOn: {isOn ? "true" : "false"}</p>
      <button onClick={setOn}>Set On</button>
      <button onClick={setOff}>Set Off</button>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
