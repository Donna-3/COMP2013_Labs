import "./App.css";
import ResortList from "./components/ResortList";
import listings from "./data/data";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <ResortList data={listings} />
    </>
  );
}

export default App;
