import { useEffect, useRef, useState } from "react";

export function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  const ref = useRef(initialValue);

  function incrementCount() {
    setCount((increment) => increment + 1);
  }

  function decrementCount() {
    setCount((decrement) => decrement - 1);
  }

  useEffect(() => {
    ref.current = count;

    if (ref.current > 0) {
      console.log("Positive");
    } else {
      console.log("Negative");
    }
  }, [count]);

  return (
    <>
      <h1 ref={ref}>Counter: {count}</h1>
      <button onClick={incrementCount}>Increment Counter</button>
      <button onClick={decrementCount}>Decrement Counter</button>
    </>
  );
}
