import "./App.css";
import Contador from "./components/Contador";

function App() {
  return (
    <div>
      <h1>React - Memorización</h1>
      <hr />
      <h2>Teoría</h2>
      <h3>
        <a
          href="https://es.react.dev/reference/react/memo"
          target="_blank"
          rel="noreferrer"
        >
          Memo
        </a>
      </h3>
      <hr />
      <Contador />
    </div>
  );
}

export default App;
