import { useRef, useEffect } from "react";

export function Input() {
  const mountedRef = useRef(false);
  const inputRef = useRef(null);
  const ref = inputRef;

  useEffect(() => {
    setTimeout(() => {
      if (!mountedRef.current) {
        mountedRef.current = true;
        console.log("Il componenente si è montato");
      } else {
        ref.current?.focus();
        console.log("il componente si sta smontando");
      }
    }, 1000);
  }, []);

  return (
    <form>
      <input ref={ref} type="email" name="email" id="email" />
    </form>
  );
}
