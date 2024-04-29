import React, { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter((count) => count + 1);
  }

  function remove() {
    setCounter((count) => count - 1);
  }

  function reset() {
    setCounter((count) => (count = 0));
  }

  return [counter, add, remove, reset];
};
