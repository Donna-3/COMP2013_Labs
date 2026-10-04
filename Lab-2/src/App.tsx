import "./App.css";
import ResortList from "./components/ResortList";
import listings from "./data/data";

function App() {
  return (
    <div className="App">
      <header>
      <h1>Resorts Lite</h1>
      </header>
      <ResortList data={listings} />
    </div>
  );
}

export default App;
