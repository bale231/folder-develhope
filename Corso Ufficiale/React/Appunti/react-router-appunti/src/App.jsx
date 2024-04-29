import "./App.css";
import { Welcome } from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/subscribe" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
