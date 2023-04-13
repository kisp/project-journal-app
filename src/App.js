import "./App.scss";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Hello, this is some text.</p>
      <input type="text" style={{ border: "1px solid black" }} />
      <div style={{ display: "flex", gap: ".5rem" }}>
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default App;
