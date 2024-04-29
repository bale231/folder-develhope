import React, { useState } from "react";

function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  function addCount() {
    setCounter((count) => count + 1);
  }

  function decrementCount() {
    setCounter((count) => count - 1);
  }

  function resetCount() {
    setCounter((count) => (count = initialValue));
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;
