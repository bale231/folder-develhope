import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import GithubUserList from "./components/GithubUserList";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/users" element={<GithubUserList />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
      <Link to="/users">Go to User</Link>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
