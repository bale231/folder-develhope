import React from "react";

function Answer({ label, name, inputValue, animal }) {
  return (
    <label htmlFor={label}>
      <input type="radio" name={name} value={inputValue} />
      <span>{animal}</span>
    </label>
  );
}

export default Answer;
