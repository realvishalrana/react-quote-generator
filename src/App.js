import Quotes from "./Components/Quotes";
import "./App.css";
import { useState } from "react";
function App() {
  const [color, setColor] = useState();

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <Quotes
        changeColor={(e) => {
          setColor(e);
        }}
      />
    </div>
  );
}

export default App;
