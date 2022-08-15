import { useState } from "react";

import "./styles.css";

function App() {
  const [seconds, setSeconds] = useState(0);

  function onStart() {
    setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
  }

  return (
    <div className="App">
      <h1>Lap Timer</h1>
      <div className="App-timer">
        <h2>{seconds}</h2>
      </div>
      <div className="App-action-btns">
        <button id="reset">Reset</button>
        <button onClick={onStart} id="start">
          Start
        </button>
        <button id="stop">Stop</button>
      </div>
    </div>
  );
}

export default App;
