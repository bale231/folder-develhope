import "./App.css";
import LoginComponent from "./components/LoginComponent";
import { useCounter } from "./components/useCounter";

function App() {
  const [counter, add, remove, reset] = useCounter();

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={add}>Aggiungi</button>
      <button onClick={remove}>Diminuisci</button>
      <button onClick={reset}>Resetta</button>
      <LoginComponent />
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
