import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Counter from "./components/Counter";

function App() {
  const navigate = useNavigate();

  function handleCounter() {
    navigate("/counter");
  }

  return (
    <>
      <Routes>
        <Route path="/counter" element={<Counter initialValue={0} />} />
      </Routes>
      <button onClick={handleCounter}>Counter App</button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
