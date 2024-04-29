import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:name" element={<Welcome />} />
      </Routes>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
