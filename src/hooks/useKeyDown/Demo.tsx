import useKeyDown, { type UseKeyDownProps } from "./index.client";

export default function Demo({ eventKey, handler, enabled }: UseKeyDownProps) {
  useKeyDown({ eventKey, handler, enabled });

  return <div>KeyDown the {eventKey} key</div>;
}
