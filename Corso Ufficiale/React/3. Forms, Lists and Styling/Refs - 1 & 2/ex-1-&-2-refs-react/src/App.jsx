import { useEffect, useState, useRef, StrictMode } from "react";
import "./App.css";
import { FocusableInput } from "./FocusableInput";

function App() {
  const [component, setComponent] = useState(false);
  const state = useRef(false);

  useEffect(() => {
    state.current = true;
    setComponent(true);
  }, []);

  return (
    <>
      <StrictMode>
        {component && state.current && (
          <p>Il componente è stato montato per la prima volta!</p>
        )}
      </StrictMode>

      <FocusableInput />
    </>
  );
}

export default App;
