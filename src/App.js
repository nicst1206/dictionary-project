import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1 className="text-center">Dictionary</h1>
        <Dictionary />
        <footer>
          <small>Coded by Nicole Stoewer-Rust</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
