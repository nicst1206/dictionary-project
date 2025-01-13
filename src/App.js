import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1 className="text-center">Dictionary</h1>
        <Dictionary defaultKeyword="book" />
        <footer>
          <small>
            This webiste was coded by Nicole Stoewer-Rust and is{" "}
            <a
              href="https://github.com/nicst1206/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://nicolesreactweatherproject.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
