import { useRef, useState } from "react";

export function ToDoList() {
  //STATE
  const [todos, setTodos] = useState([]);

  /* ! Refs */
  const inputValue = useRef(null);

  function addTodo(e) {
    e.preventDefault();
    if (inputValue.current.value !== "") {
      const value = inputValue.current.value;
      setTodos([...todos, value]);
      inputValue.current.value = "";
    }
  }

  function removeTodo(index) {
    const neWdelete = [...todos];
    neWdelete.splice(index, 1);
    setTodos(neWdelete);
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input ref={inputValue} type="text" placeholder="Add to-do" />
        <button type="submit">Aggiungi</button>
      </form>
      <ul key={todos}>
        {todos.map((todo, index) => (
          <>
            <li key={index}>{todo}</li>
            <button onClick={() => removeTodo(index)}>Rimuovi</button>
          </>
        ))}
      </ul>
    </>
  );
}
