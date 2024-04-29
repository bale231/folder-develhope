import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import GithubUsers from "./components/GithubUsers";

function App() {
  return (
    <>
      <button>
        <Link to="/users">Go to Users github</Link>
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
