import "./App.css";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Sei alla Home Page!!</h1>} />
        <Route path="/counter" element={<Counter initialValue={0} />} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404</h1>
              <p>Page not found.</p>
              <Link to="/">Back to Home</Link>
            </div>
          }
        />
      </Routes>
      <div className="bg-body-tertiary c-flex">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/:name">Welcome</Link>
        <Link to="users/:username">GitHub User</Link>
      </div>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
