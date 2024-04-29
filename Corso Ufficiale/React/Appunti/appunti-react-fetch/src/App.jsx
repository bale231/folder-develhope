import { FetchGitHub } from "./components/FetchGitHub";

function App() {
  return (
    <>
      <FetchGitHub username={"bale231"} />
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
