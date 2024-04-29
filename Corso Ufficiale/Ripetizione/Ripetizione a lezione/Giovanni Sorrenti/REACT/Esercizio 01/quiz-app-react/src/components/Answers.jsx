export function Answers({labelValue, inputValue, element, name}) {
  return (
    <>
      <label htmlFor={labelValue}>
        <input type="radio" name={name} value={inputValue} />
        <span>{element}</span>
      </label>
    </>
  );
}
