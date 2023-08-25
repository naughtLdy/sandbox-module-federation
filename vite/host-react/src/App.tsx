import { useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// remote react
import Button from "remote_react/Button";
import useCount from "remote_react/store";

// remote vue
import { mount } from "remote_vue/Button";

function App() {
  const [count, setCount] = useCount();
  const buttonRef = useRef(null);

  useEffect(() => {
    mount(buttonRef.current);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <Button />

          <span ref={buttonRef} />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
