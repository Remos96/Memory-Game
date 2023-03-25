import "./App.css";
import CardGrid from "./Components/CardGrid";

function newGame() {
  window.location.reload(false);
}

function App() {
  return (
    <div className="App">
      <h1>he</h1>
      <button onClick={newGame}> New Game </button>
      <CardGrid />
    </div>
  );
}

export default App;
