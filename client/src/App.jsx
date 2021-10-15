import Header from "./Components/Header/Header";
import Compare from "./Components/Compare/Compare";
import Recommendation from "./Components/Recommendation/Recommendation";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Header />
      <Compare />
      <Recommendation />
    </div>
  );
}

export default App;
