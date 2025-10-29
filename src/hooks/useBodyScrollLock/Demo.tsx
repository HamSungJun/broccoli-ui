import useBodyScrollLock from "./index.client";

export default function Demo() {
  const { lockScroll, unlockScroll } = useBodyScrollLock();

  return (
    <div>
      <p>inspect the body style to see the changes</p>
      <button onClick={lockScroll}>Lock Scroll</button>
      <button onClick={unlockScroll}>Unlock Scroll</button>
    </div>
  );
}
